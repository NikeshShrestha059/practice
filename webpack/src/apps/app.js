import { inputsAreValid } from "./utils/input-are-valid.js";
import { parseInputs } from "./utils/parse_input.js";

export const run = (alertServiceInstance, componentServiceInstance) => {
  alertServiceInstance.hideErrors();

  componentServiceInstance.onClick(() => {
    alertServiceInstance.hideErrors();

    const inputs = componentServiceInstance.getInputs();
    const parsedInputs = parseInputs(...inputs);

    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      componentServiceInstance.setResult(numA + numB);
    } else {
      componentServiceInstance.setResult("");
      alertServiceInstance.handleAdditionError(inputs, parsedInputs);
    }
  });
};
