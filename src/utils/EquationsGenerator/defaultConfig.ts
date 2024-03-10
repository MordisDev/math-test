import { GeneratorConfigProps } from "./schema"

const defaultConfig: GeneratorConfigProps = {
    equationsAmount: 16,
    maxParameterValue: 200,
    parametersAmount: 3,
    isParametersAmountStrict: false,
    equationsType: [{type: '+', ratio: 90},{type: '-', ratio: 10}],
    isPossibleNegativeResult: false,
    equationVariant: 'result',
}

export default defaultConfig;