import { GeneratorConfigProps } from "./schema";

export const defaultConfig: GeneratorConfigProps = {
  equationsAmount: 12,
  maxParameterValue: 50,
  parametersAmount: 3,
  isParametersAmountStrict: false,
  equationsType: [
    { type: "+", ratio: 100 },
    { type: "-", ratio: 0 },
  ],
  isPossibleNegativeResult: false,
  equationVariant: "result",
};
