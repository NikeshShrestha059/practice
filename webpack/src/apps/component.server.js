export class ComponentService {
  constructor({ inputAId = 'numA', inputBId = 'numB', buttonId = 'addBtn', resultBoxId = 'result' } = {}) {
    this.inputA = document.getElementById(inputAId);
    this.inputB = document.getElementById(inputBId);
    this.button = document.getElementById(buttonId);
    this.resultBox = document.getElementById(resultBoxId);

    this._warnIfMissing(this.inputA, inputAId);
    this._warnIfMissing(this.inputB, inputBId);
    this._warnIfMissing(this.button, buttonId);
    this._warnIfMissing(this.resultBox, resultBoxId);
  }

  _warnIfMissing(element, id) {
    if (!element) {
      console.warn(`Element with ID '${id}' not found.`);
    }
  }

  getInputs() {
    const a = this.inputA?.value?.trim() ?? '';
    const b = this.inputB?.value?.trim() ?? '';
    return [a, b];
  }

  setResult(value) {
    if (this.resultBox) {
      this.resultBox.textContent = value;
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
