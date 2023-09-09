import { getRandomNumber } from "../randomNumber"
import type { GeneratorConfigProps } from "./schema"

import defaultConfig from "./defaultConfig"

const equationsGenerator = ({
    equationsAmount,
    maxParameterValue,
    parametersAmount,
    isParametersAmountStrict,
}: GeneratorConfigProps): string[] => {
    function generateEquation(): string {
        return Array.from(
            Array(isParametersAmountStrict ? parametersAmount : getRandomNumber(parametersAmount, 2)), () => getRandomNumber(maxParameterValue)
        ).join(' + ')
    }


    return Array.from({length: equationsAmount}, () => generateEquation())
}

export const getEquations = (): string[] => {
    //TODO: once config handler is done check for current config in local storage, use default as fallback
    const currentConfig = defaultConfig;
    return equationsGenerator(currentConfig)
}