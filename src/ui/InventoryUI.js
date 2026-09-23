import { HARDWARE_ITEMS, HARDWARE_CATEGORIES } from '../data/hardware.js';
import { sounds } from '../audio/SoundEffects.js';

export class InventoryUI {
  constructor(previewScene, onEquipItem, onInstallItem, onDropItem, onRequestLock) {
    this.previewScene = previewScene;
    this.onEquipItem = onEquipItem;
    this.onInstallItem = onInstallItem;
    this.onDropItem = onDropItem;
    this.onRequestLock = onRequestLock;

    this.isOpen = false;
    this.items = [...HARDWARE_ITEMS];
    this.selectedItem = this.items[0];
    this.activeFilter = HARDWARE_CATEGORIES.ALL;
    this.itemStates = new Map();

    // Initial state: first 4 in inventory, others on shelf
    this.items.forEach((item, idx) => {
      if (idx < 4) {
        this.itemStates.set(item.id, 'inventory');
      } else {
        this.itemStates.set(item.id, 'shelf');
      }
    });

    this.modalEl = document.getElementById('inventory-modal');
    this.setupDOM();
  }

  setupDOM() {
    const closeBtn = document.getElementById('btn-close-inventory');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        sounds.playClick();
        this.close();
      });
    }

    const tabsContainer = document.getElementById('inventory-tabs');
    if (tabsContainer) {
      tabsContainer.innerHTML = '';
      Object.values(HARDWARE_CATEGORIES).forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `inv-tab ${cat === this.activeFilter ? 'active' : ''}`;
        btn.textContent = cat;
        btn.addEventListener('click', () => {
          sounds.playClick();
          this.activeFilter = cat;
          document.querySelectorAll('.inv-tab').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.renderGrid();
        });
        tabsContainer.appendChild(btn);
      });
    }

    const btnEquip = document.getElementById('btn-inv-equip');
    const btnInstall = document.getElementById('btn-inv-install');
    const btnShelf = document.getElementById('btn-inv-shelf');

    if (btnEquip) {
      btnEquip.addEventListener('click', () => {
        if (!this.selectedItem) return;
        sounds.playClick();
        this.setItemState(this.selectedItem.id, 'held');
        if (this.onEquipItem) this.onEquipItem(this.selectedItem);
        this.close();
      });
    }

    if (btnInstall) {
      btnInstall.addEventListener('click', () => {
        if (!this.selectedItem) return;
        sounds.playClick();
        if (this.onInstallItem) this.onInstallItem(this.selectedItem);
        this.updateSpecsPanel();
        this.renderGrid();
      });
    }

    if (btnShelf) {
      btnShelf.addEventListener('click', () => {
        if (!this.selectedItem) return;
        sounds.playClick();
        const curr = this.itemStates.get(this.selectedItem.id);
        if (curr === 'shelf') {
          this.setItemState(this.selectedItem.id, 'inventory');
        } else {
          this.setItemState(this.selectedItem.id, 'shelf');
          if (this.onDropItem) this.onDropItem(this.selectedItem);
        }
        this.updateSpecsPanel();
        this.renderGrid();
      });
    }
  }

  open(heldItem = null) {
    this.isOpen = true;
    sounds.playClick();
    this.modalEl.classList.add('active');

    if (heldItem) {
      this.selectedItem = heldItem;
    } else if (!this.selectedItem) {
      this.selectedItem = this.items[0];
    }

    this.updateSpecsPanel();
    this.renderGrid();

    if (this.selectedItem && this.previewScene) {
      this.previewScene.loadItemModel(this.selectedItem.modelPath, this.selectedItem.baseRotation);
    }
  }

  close() {
    this.isOpen = false;
    this.modalEl.classList.remove('active');
    if (this.onRequestLock) {
      this.onRequestLock();
    }
  }

  toggle(heldItem = null) {
    if (this.isOpen) {
      this.close();
    } else {
      this.open(heldItem);
    }
  }

  selectItem(item) {
    sounds.playClick();
    this.selectedItem = item;
    this.updateSpecsPanel();
    this.renderGrid();

    if (this.previewScene) {
      this.previewScene.loadItemModel(item.modelPath, item.baseRotation);
    }
  }

  updateSpecsPanel() {
    if (!this.selectedItem) return;
    const item = this.selectedItem;
    const state = this.itemStates.get(item.id) || 'inventory';

    const tagEl = document.getElementById('inv-item-tag');
    if (tagEl) {
      tagEl.textContent = `Tag: ${item.tag}`;
      tagEl.className = `inv-tag tag-${item.categoryKey}`;
    }

    const nameEl = document.getElementById('inv-item-name');
    if (nameEl) nameEl.textContent = item.name;

    const brandEl = document.getElementById('inv-item-brand');
    if (brandEl) brandEl.textContent = `${item.brand} • ${item.price}`;

    const statusEl = document.getElementById('inv-item-status');
    if (statusEl) {
      let statusText = 'Trong túi đồ (Inventory)';
      let statusClass = 'status-bag';
      if (state === 'held') {
        statusText = '⚡ Đang cầm trên tay';
        statusClass = 'status-held';
      } else if (state === 'installed') {
        statusText = '✅ Đã lắp vào thùng máy';
        statusClass = 'status-installed';
      } else if (state === 'shelf') {
        statusText = '📦 Đang ở trên Kệ sắt';
        statusClass = 'status-shelf';
      }
      statusEl.textContent = statusText;
      statusEl.className = `inv-status-badge ${statusClass}`;
    }

    const specsListEl = document.getElementById('inv-specs-list');
    if (specsListEl) {
      specsListEl.innerHTML = '';
      item.specs.forEach(s => {
        const row = document.createElement('div');
        row.className = 'spec-row';
        row.innerHTML = `
          <span class="spec-label">${s.label}:</span>
          <span class="spec-value">${s.value}</span>
        `;
        specsListEl.appendChild(row);
      });
    }

    const tipEl = document.getElementById('inv-item-tip');
    if (tipEl) tipEl.textContent = item.beginnerTip;

    const btnEquip = document.getElementById('btn-inv-equip');
    const btnInstall = document.getElementById('btn-inv-install');
    const btnShelf = document.getElementById('btn-inv-shelf');

    if (btnEquip) {
      btnEquip.disabled = (state === 'installed');
      btnEquip.textContent = state === 'held' ? 'Đang cầm' : 'Cầm trên tay (Equip)';
    }
    if (btnInstall) {
      btnInstall.disabled = (state === 'installed');
      btnInstall.textContent = state === 'installed' ? 'Đã lắp ráp' : 'Lắp trực tiếp vào case';
    }
    if (btnShelf) {
      btnShelf.disabled = (state === 'installed');
      btnShelf.textContent = state === 'shelf' ? 'Lấy vào túi đồ' : 'Cất lên kệ sắt';
    }
  }

  renderGrid() {
    const gridEl = document.getElementById('inventory-grid');
    if (!gridEl) return;
    gridEl.innerHTML = '';

    const filtered = this.items.filter(it => {
      if (this.activeFilter === HARDWARE_CATEGORIES.ALL) return true;
      return it.category === this.activeFilter;
    });

    filtered.forEach(item => {
      const state = this.itemStates.get(item.id) || 'inventory';
      const isSelected = this.selectedItem && this.selectedItem.id === item.id;

      const slot = document.createElement('div');
      slot.className = `inv-slot ${isSelected ? 'selected' : ''} ${state}`;

      let iconType = '📦';
      if (item.categoryKey === 'motherboard') iconType = '🖲️';
      else if (item.categoryKey === 'cpu') iconType = '⚡';
      else if (item.categoryKey === 'cooler') iconType = '❄️';
      else if (item.categoryKey === 'ram') iconType = '💾';
      else if (item.categoryKey === 'gpu') iconType = '🎮';
      else if (item.categoryKey === 'storage') iconType = '🗄️';
      else if (item.categoryKey === 'psu') iconType = '🔌';

      slot.innerHTML = `
        <div class="slot-icon">${iconType}</div>
        <div class="slot-info">
          <div class="slot-name">${item.name}</div>
          <div class="slot-tag">${item.tag}</div>
        </div>
        <div class="slot-badge">${state === 'installed' ? 'Đã lắp' : (state === 'held' ? 'Cầm' : (state === 'shelf' ? 'Kệ' : 'Túi'))}</div>
      `;

      slot.addEventListener('click', () => {
        this.selectItem(item);
      });

      gridEl.appendChild(slot);
    });
  }

  setItemState(itemId, state) {
    this.itemStates.set(itemId, state);
    if (this.isOpen) {
      this.updateSpecsPanel();
      this.renderGrid();
    }
  }

  getItemState(itemId) {
    return this.itemStates.get(itemId) || 'inventory';
  }
}
