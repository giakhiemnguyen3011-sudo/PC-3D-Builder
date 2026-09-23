import { ASSEMBLY_STEPS } from '../data/hardware.js';
import confetti from 'canvas-confetti';

export class AssemblyGuideUI {
  constructor() {
    this.steps = ASSEMBLY_STEPS;
    this.currentStepIndex = 0; // 0-indexed (Step 1 is index 0)
    this.completedSteps = new Set();
    this.isExpanded = false;

    this.hudContainer = document.getElementById('assembly-hud');
    this.setupDOM();
    this.render();
  }

  setupDOM() {
    const toggleBtn = document.getElementById('btn-toggle-steps');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.isExpanded = !this.isExpanded;
        const listEl = document.getElementById('steps-list');
        if (listEl) {
          listEl.style.display = this.isExpanded ? 'block' : 'none';
        }
        toggleBtn.textContent = this.isExpanded ? '▲ Thu gọn' : '▼ Xem 12 bước chuẩn';
      });
    }
  }

  render() {
    const step = this.steps[this.currentStepIndex] || this.steps[this.steps.length - 1];

    // Current step badge
    const badgeEl = document.getElementById('current-step-badge');
    if (badgeEl) {
      badgeEl.textContent = `BƯỚC ${step.step} / ${this.steps.length}`;
    }

    // Title
    const titleEl = document.getElementById('current-step-title');
    if (titleEl) {
      titleEl.textContent = step.title;
    }

    // Instruction
    const descEl = document.getElementById('current-step-desc');
    if (descEl) {
      descEl.textContent = step.instruction;
    }

    // Pro tip
    const tipEl = document.getElementById('current-step-tip');
    if (tipEl) {
      tipEl.innerHTML = `<strong>💡 Mẹo thực tế:</strong> ${step.tip}`;
    }

    // Progress bar
    const progressEl = document.getElementById('assembly-progress-fill');
    if (progressEl) {
      const pct = (this.completedSteps.size / this.steps.length) * 100;
      progressEl.style.width = `${pct}%`;
    }

    // Steps checklist
    const listEl = document.getElementById('steps-list');
    if (listEl) {
      listEl.innerHTML = '';
      this.steps.forEach((s, idx) => {
        const item = document.createElement('div');
        const isDone = this.completedSteps.has(s.step);
        const isCurrent = idx === this.currentStepIndex;

        item.className = `step-item ${isDone ? 'done' : ''} ${isCurrent ? 'current' : ''}`;
        item.innerHTML = `
          <div class="step-num">${isDone ? '✓' : s.step}</div>
          <div class="step-text">
            <div class="step-name">${s.shortName}</div>
          </div>
        `;
        listEl.appendChild(item);
      });
    }
  }

  completeStep(stepNumber) {
    this.completedSteps.add(stepNumber);

    // Show toast
    this.showToast(`Hoàn thành Bước ${stepNumber}: ${this.steps[stepNumber - 1]?.shortName || ''}!`);

    // Advance to next uncompleted step
    if (stepNumber >= this.currentStepIndex + 1) {
      this.currentStepIndex = Math.min(stepNumber, this.steps.length - 1);
    }

    this.render();

    // If final step completed: celebration!
    if (stepNumber === 12) {
      this.celebrate();
    }
  }

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'hud-toast';
    toast.innerHTML = `
      <div class="toast-icon">✨</div>
      <div class="toast-msg">${message}</div>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }

  celebrate() {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 400);
  }
}
