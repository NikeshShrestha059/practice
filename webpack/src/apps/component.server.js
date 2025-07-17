export class ComponentService {
  constructor() {
    this.inputA = document.getElementById('numA');
    this.inputB = document.getElementById('numB');
    this.button = document.getElementById('addBtn');
    this.resultBox = document.getElementById('result');

    // Warn if any elements are missing
    if (!this.inputA) console.warn("Element with ID 'numA' not found.");
    if (!this.inputB) console.warn("Element with ID 'numB' not found.");
    if (!this.button) console.warn("Element with ID 'addBtn' not found.");
    if (!this.resultBox) console.warn("Element with ID 'result' not found.");
  }

  getInputs() {
    const a = this.inputA?.value ?? '';
    const b = this.inputB?.value ?? '';
    return [a, b];
  }

  setResult(value) {
    if (this.resultBox) {
      this.resultBox.innerText = value;
    } else {
      console.warn("Cannot set result: resultBox is missing.");
    }
  }

  onClick(cb) {
    if (this.button) {
      this.button.addEventListener('click', cb);
    } else {
      console.warn("Cannot attach click listener: button is missing.");
    }
  }
}

