'use client'

import { useState, useEffect } from "react"

import type { GeneratorConfigProps } from "@/utils/EquationsGenerator/schema"
import defaultConfig from "@/utils/EquationsGenerator/defaultConfig"

import { Container, Divider, TextField } from "@mui/material"
import { TypeToggle } from "@/components/Config/TypeToggle"

export default function EquarionsConfig() {
    const [config, setConfig] = useState<Partial<GeneratorConfigProps>>(defaultConfig)

    useEffect(() => {
        console.log(config)
    }, [config])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setConfig( prevConfig => ({
            ...prevConfig,
            [event.target.id]: Number(event.target.value)
        }));
    }

    return (
        <Container fixed sx={{my: 4}}>
            <TypeToggle />
            <Divider sx={{ m:2 }}/>

            <TextField
                id="equationsAmount"
                label="Amount of Equations"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                value={!!config.equationsAmount ? config.equationsAmount : ''}
                onChange={(e) => handleChange(e)}
                margin="dense"
            />

            <TextField
                id="maxParameterValue"
                label="Max Parameter Value"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                value={config.maxParameterValue}
                onChange={(e) => handleChange(e)}
                margin="dense"
            />

            <TextField
                id="parametersAmount"
                label="Number of Parameters"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                value={config.parametersAmount}
                onChange={(e) => handleChange(e)}
                margin="dense"
            />

        </Container>
    )
}

// const defaultConfig: GeneratorConfigProps = {
//     equationsAmount: 12,
//     maxParameterValue: 24,
//     parametersAmount: 3,
//     isParametersAmountStrict: false,
//     equationsType: [{type: '+', ratio: 100},{type: '-', ratio: 0}],
//     isPossibleNegativeResult: false,
//     equationVariant: 'result',
// }