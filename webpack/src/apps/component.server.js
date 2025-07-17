export class ComponentService {
  constructor() {
    this.inputA = document.getElementById('numA');
    this.inputB = document.getElementById('numB');
    this.button = document.getElementById('addBtn');
    this.resultBox = document.getElementById('result');
  }

  getInputs() {
    return [this.inputA.value, this.inputB.value];
  }

  setResult(value) {
    this.resultBox.innerText = value;
  }

  onClick(cb) {
    this.button.addEventListener('click', cb);
  }
}
