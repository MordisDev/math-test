import { getRandomNumber } from "../randomNumber"
import type { GeneratorConfigProps } from "./schema"

import defaultConfig from "./defaultConfig"

const equationsGenerator = ({
    equationsAmount,
    maxParameterValue,
    parametersAmount,
    isParametersAmountStrict,
    equationsType,
}: GeneratorConfigProps): string[] => {
    function generateEquation(): string {
        const operatorsArray = equationsType.map(operator => Array(operator.ratio).fill(operator.type)).flat()

        const parametersArray = Array.from(
            Array(isParametersAmountStrict ? parametersAmount : getRandomNumber(parametersAmount, 2)), () => getRandomNumber(maxParameterValue)
        )

        return parametersArray.map((parameter, index) => index ? [operatorsArray[getRandomNumber(operatorsArray.length) - 1], parameter] : parameter).flat().join(' ')
    }


    return Array.from({length: equationsAmount}, () => generateEquation())
}

export const getEquations = (): string[] => {
    //TODO: once config handler is done check for current config in local storage, use default as fallback
    const currentConfig = defaultConfig;
    return equationsGenerator(currentConfig)
}