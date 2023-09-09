import { z } from 'zod'

const equationGeneratorConfigSchema = z.object({
    equationsAmount: z.number().gte(2).lte(50),
    maxParameterValue: z.number(),
    parametersAmount: z.number().gte(2).lte(5),
    isParametersAmountStrict: z.boolean(),
    equationsType: z.array(z.object({type: z.enum(["+","-"]), ratio: z.number().gte(0).lte(100)})),
    isPossibleNegativeResult: z.boolean(),
    equationVariant: z.enum(["result","missingParameter"]),
});

export type GeneratorConfigProps = z.infer<typeof equationGeneratorConfigSchema>