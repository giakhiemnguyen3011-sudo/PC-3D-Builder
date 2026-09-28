import { HARDWARE_ITEMS } from '../data/hardware.js';

/**
 * Single source of truth for the long white wooden parts table.
 *
 * Geometry is consumed by Room (the table itself), ShelfHardware (item
 * placement) and PlayerControls (collision). The table automatically grows along
 * its length when more hardware needs room, so nobody has to hand-tune a second
 * set of numbers.
 *
 * Tier 0 is the table top (work height 0.82m), tier 1 the lower shelf (0.30m).
 * `length` in a footprint runs along the table, `depth` across it.
 */
const TABLE_BASE = {
  x: 3.3,
  z: 0,
  minWidth: 0.72,     // across the table
  minLength: 2.1,     // along the table
  height: 0.86,
  topHeight: 0.82,    // work surface the parts sit on
  topThickness: 0.045,
  legSize: 0.07,
  shelfHeight: 0.3,
  shelfThickness: 0.03,
  // surface height of each tier; the top tier is the thick table top, the
  // lower tier is the thin shelf board
  tierHeights: [0.82, 0.3],
  tierSurfaces: [0.82, 0.315],
  edgeMargin: 0.14,
  sideMargin: 0.12,
  maxGap: 0.14
};

function buildTiers() {
  const tiers = TABLE_BASE.tierHeights.map((height, index) => ({
    index,
    height,
    surface: TABLE_BASE.tierSurfaces[index],
    entries: []
  }));

  HARDWARE_ITEMS.filter(item => item.footprint).forEach(item => {
    const tierIndex = Math.min(Math.max(item.shelfTier || 0, 0), tiers.length - 1);
    tiers[tierIndex].entries.push({ item, footprint: item.footprint });
  });

  tiers.forEach(tier => {
    tier.entries.sort((a, b) => b.footprint.length - a.footprint.length);
    tier.totalLength = tier.entries.reduce((sum, e) => sum + e.footprint.length, 0);
  });

  return tiers;
}

function layoutTiers(tiers, usable) {
  tiers.forEach(tier => {
    const count = tier.entries.length;
    if (!count) return;
    const gap = Math.min(TABLE_BASE.maxGap, (usable - tier.totalLength) / (count + 1));
    const rowLength = tier.totalLength + gap * (count - 1);
    let cursor = -rowLength / 2;

    tier.entries.forEach(entry => {
      entry.position = {
        x: TABLE_BASE.x,
        y: tier.surface,
        z: TABLE_BASE.z + cursor + entry.footprint.length / 2
      };
      cursor += entry.footprint.length + gap;
    });
  });
}

function computeLayout() {
  const tiers = buildTiers();

  // pass 1: how long does the table need to be?
  layoutTiers(tiers, TABLE_BASE.minLength - TABLE_BASE.edgeMargin * 2);
  const longestRow = tiers.reduce(
    (max, tier) => Math.max(
      max,
      tier.totalLength + TABLE_BASE.maxGap * Math.max(tier.entries.length - 1, 0)
    ),
    0
  );
  const widestItem = tiers.reduce(
    (max, tier) => tier.entries.reduce((m, e) => Math.max(m, e.footprint.depth), max),
    0
  );

  const length = Math.max(TABLE_BASE.minLength, longestRow + TABLE_BASE.edgeMargin * 2);
  const width = Math.max(TABLE_BASE.minWidth, widestItem + TABLE_BASE.sideMargin * 2);

  // pass 2: final spacing on the real surface
  layoutTiers(tiers, length - TABLE_BASE.edgeMargin * 2);

  return {
    table: { ...TABLE_BASE, width, length },
    tiers
  };
}

let cached = null;

export function getShelfLayout() {
  if (!cached) cached = computeLayout();
  return cached;
}

/** Footprint the player cannot walk through. */
export function getTableObstacle() {
  const { table } = getShelfLayout();
  const margin = 0.15;
  return {
    minX: table.x - table.width / 2 - margin,
    maxX: table.x + table.width / 2 + margin,
    minZ: table.z - table.length / 2 - margin,
    maxZ: table.z + table.length / 2 + margin
  };
}
