import { GeneratorConfigProps } from "./schema"

const defaultConfig: GeneratorConfigProps = {
    equationsAmount: 8,
    maxParameterValue: 10,
    parametersAmount: 2,
    isParametersAmountStrict: false,
    equationsType: [{type: '+', ratio: 100},{type: '-', ratio: 0}],
    isPossibleNegativeResult: false,
    equationVariant: 'result',
}

export default defaultConfig;