import { getRandomNumber } from "@/utils/randomNumber";

import type { GeneralEquationConfig } from "./types";

export const generateAddition = (config: GeneralEquationConfig) => {
  const numberOfParameters = config.numberOfParameters ?? 2;
  const minResult =
    config.minResult && config.minResult > numberOfParameters
      ? config.minResult
      : numberOfParameters + 1;
  const result = getRandomNumber(config.maxResult, minResult);

  let parameterArray = [
    getRandomNumber(Math.floor(result * ((10 - numberOfParameters) * 0.1))),
  ];

  while (parameterArray.length < numberOfParameters - 1) {
    parameterArray = [
      ...parameterArray,
      getRandomNumber(result - arraySum(parameterArray) - numberOfParameters),
    ];
  }

  parameterArray = [...parameterArray, result - arraySum(parameterArray)];

  return {
    result: result,
    parameters: parameterArray,
  };
};

const arraySum = (array: number[]) =>
  array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
