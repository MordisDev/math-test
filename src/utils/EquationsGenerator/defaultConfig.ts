import { GeneratorConfigProps } from "./schema"

const defaultConfig: GeneratorConfigProps = {
    equationsAmount: 12,
    maxParameterValue: 24,
    parametersAmount: 3,
    isParametersAmountStrict: false,
    equationsType: [{type: '+', ratio: 100},{type: '-', ratio: 0}],
    isPossibleNegativeResult: false,
    equationVariant: 'result',
}

export default defaultConfig;