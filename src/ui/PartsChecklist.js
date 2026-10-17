import { sounds } from '../audio/SoundEffects.js';
import { ASSEMBLY_STEPS } from '../data/assemblyPlan.js';
import { ALL_HARDWARE_ITEMS } from '../data/hardware.js';

/**
 * The parts list a builder has to lay out on the bench before they open Build
 * Mode.
 *
 * It is derived from the assembly plan rather than written out by hand, so it
 * can never drift from the steps: every step that consumes hardware contributes
 * one line, named after a real catalogue entry, with the count the step needs.
 * Steps that are pure actions (taking the glass off, refitting it) contribute
 * nothing - there is nothing to carry for them.
 */
export function buildChecklist(catalogue = ALL_HARDWARE_ITEMS) {
  const rows = [];

  for (const step of ASSEMBLY_STEPS) {
    if (!step.need) continue;

    for (const rule of step.accepts) {
      const tag = rule.startsWith('tag:') ? rule.slice(4).toLowerCase() : null;
      const matches = catalogue.filter(item =>
        tag ? (item.tag || '').toLowerCase() === tag : item.id === rule
      );
      if (!matches.length) continue;

      rows.push({
        step: step.step,
        stepName: step.shortName,
        tag: (tag || matches[0].tag || '').toLowerCase(),
        name: matches[0].name,
        variants: matches.length,
        count: step.need || 1
      });
    }
  }

  return rows;
}

/**
 * How much of the list the player is actually carrying.
 *
 * Two DIMMs need two matching sticks, so the backpack is counted per tag and
 * consumed line by line: the RAM line takes two sticks out of the pool, and the
 * next line that wants a stick sees what is left.
 *
 * @param {Array} rows   from `buildChecklist`
 * @param {Array} owned  what is in the backpack (InventoryUI.slots)
 */
export function checklistState(rows, owned = []) {
  const pool = new Map();
  owned.filter(Boolean).forEach(item => {
    const key = (item.tag || '').toLowerCase();
    pool.set(key, (pool.get(key) || 0) + 1);
  });

  let have = 0;
  const lines = rows.map(row => {
    const needed = row.count;
    const stocked = pool.get(row.tag) || 0;
    pool.set(row.tag, Math.max(0, stocked - needed));
    const haveCount = Math.min(stocked, needed);
    if (haveCount >= needed) have++;
    return { ...row, have: haveCount, ready: haveCount >= needed };
  });

  return { have, total: rows.length, lines };
}

/**
 * The clipboard on the bench.
 *
 * It is the pre-flight sheet for a build: every part the assembly plan will ask
 * for, ticked off against what is actually in the backpack. Open it before
 * walking into Build Mode and you know exactly what to go and fetch, instead of
 * discovering it one step at a time.
 *
 * It is drawn as a screen HUD popup in the same language as the hotkeys bar, not
 * as a modal dialog: the bench stays visible and playable behind it, and the
 * pointer is never taken away from the player.
 */
export class PartsChecklist {
  constructor({ inventoryUI }) {
    this.inventoryUI = inventoryUI;
    this.rows = buildChecklist();
    this.isOpen = false;

    this.dom = {
      modal: document.getElementById('todo-list-modal'),
      rows: document.getElementById('todo-list-rows'),
      summary: document.getElementById('todo-list-summary'),
      badge: document.getElementById('todo-list-badge'),
      fill: document.getElementById('todo-list-progress-fill'),
      close: document.querySelector('#todo-list-modal .todo-list-close')
    };

    this.closeBtn?.addEventListener('click', () => this.close());
    this.dom.modal?.addEventListener('click', (e) => {
      if (e.target === this.dom.modal) this.close();
    });
  }

  /** Re-reads the backpack and repaints. Cheap enough to call after any pickup. */
  refresh() {
    const state = checklistState(this.rows, this.inventoryUI?.slots || []);

    if (this.dom.badge) {
      this.dom.badge.textContent = `${state.have} / ${state.total} MÓN`;
      this.dom.badge.classList.toggle('todo-list-badge.ready', state.have === state.total);
    }

    if (this.dom.fill) {
      const pct = state.total ? (state.have / state.total) * 100 : 0;
      this.dom.fill.style.width = `${pct}%`;
    }

    if (this.dom.summary) {
      const missing = state.total - state.have;
      this.dom.summary.textContent = missing === 0
        ? 'Đủ linh kiện. Bấm vào thùng máy để bắt đầu lắp ráp.'
        : `Còn thiếu ${missing} món — đi lấy ở kệ phía sau rồi bấm lại danh sách.`;
      this.dom.summary.classList.toggle('todo-list-summary.warn', missing > 0);
    }

    if (this.dom.rows) {
      this.dom.rows.innerHTML = '';
      for (const line of state.lines) {
        this.dom.rows.appendChild(this._row(line));
      }
    }

    return state;
  }

  _row(line) {
    const li = document.createElement('li');
    li.className = `todo-list-row${line.ready ? ' ready' : ''}`;

    const tick = document.createElement('span');
    tick.className = 'todo-list-tick';
    tick.textContent = line.ready ? '✓' : '○';

    const body = document.createElement('div');
    body.className = 'todo-list-body';

    const name = document.createElement('span');
    name.className = 'todo-list-name';
    name.textContent = line.count > 1 ? `${line.name} × ${line.count}` : line.name;

    const step = document.createElement('span');
    step.className = 'todo-list-step';
    step.textContent = `Bước ${line.step} · ${line.stepName}`;

    body.appendChild(name);
    body.appendChild(step);

    if (line.variants > 1) {
      const alt = document.createElement('span');
      alt.className = 'todo-list-alt';
      alt.textContent = `hoặc ${line.variants - 1} món khác cùng nhóm`;
      body.appendChild(alt);
    }

    const have = document.createElement('span');
    have.className = 'todo-list-have';
    have.textContent = line.ready ? 'đã có' : `còn thiếu ${line.count - line.have}`;

    li.appendChild(tick);
    li.appendChild(body);
    li.appendChild(have);
    return li;
  }

  open() {
    if (!this.dom.modal || this.isOpen) return;
    this.refresh();
    this.dom.modal.classList.add('active');
    this.isOpen = true;
    sounds.playSnap();
  }

  close() {
    if (!this.dom.modal || !this.isOpen) return;
    this.dom.modal.classList.remove('active');
    this.isOpen = false;
  }

  toggle() {
    if (this.isOpen) this.close();
    else this.open();
  }
}