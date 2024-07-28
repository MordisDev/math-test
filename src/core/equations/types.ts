export type GeneralEquationConfig = {
    //equationVariant: 'result' | 'parameter'
    isParametersAmountStrict?: boolean
    maxResult: number
    minResult?: number
    numberOfParameters?: 2 | 3 | 4 | 5
}

export type SubtractionEquationConfig = GeneralEquationConfig & {
    isNegativeResultPossible?: boolean
}