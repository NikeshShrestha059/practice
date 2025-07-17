export class AlertService {
  constructor() {
    this.errorBox = document.getElementById('error');
  }

  hideErrors() {
    this.errorBox.innerText = '';
  }

  handleAdditionError(inputs, parsedInputs) {
    const message = `Invalid inputs: ${inputs.join(', ')}`;
    this.errorBox.innerText = message;
  }
}
