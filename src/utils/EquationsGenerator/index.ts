import { getRandomNumber } from "../randomNumber";
import type { GeneratorConfigProps } from "./schema";

const equationsGenerator = ({
  equationsAmount,
  maxParameterValue,
  parametersAmount,
  isParametersAmountStrict,
  equationsType,
}: GeneratorConfigProps): string[] => {
  function generateEquation(): string {
    const operatorsArray = equationsType
      .map((operator) => Array(operator.ratio).fill(operator.type))
      .flat();

    const parametersArray = Array.from(
      Array(
        isParametersAmountStrict
          ? parametersAmount
          : getRandomNumber(parametersAmount, 2),
      ),
      () => getRandomNumber(maxParameterValue),
    );

    return parametersArray
      .map((parameter, index) =>
        index
          ? [
              operatorsArray[getRandomNumber(operatorsArray.length) - 1],
              parameter,
            ]
          : parameter,
      )
      .flat()
      .join(" ");
  }

  return Array.from({ length: equationsAmount }, () => generateEquation());
};

export const getEquations = (config: GeneratorConfigProps): string[] => {
  return equationsGenerator(config);
};
