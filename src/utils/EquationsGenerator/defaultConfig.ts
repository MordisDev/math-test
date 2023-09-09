import { GeneratorConfigProps } from "./schema"

const defaultConfig: GeneratorConfigProps = {
    equationsAmount: 12,
    maxParameterValue: 24,
    parametersAmount: 3,
    isParametersAmountStrict: false,
    equationsType: ['+','-'],
    isPossibleNegativeResult: false,
    equationVariant: 'result',
}

export default defaultConfig;