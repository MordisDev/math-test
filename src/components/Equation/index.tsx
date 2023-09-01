'use client'

import { useState, useEffect } from "react"

import { Input, Paper, Typography, Stack, Box } from "@mui/material"
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

import type { Equation as EquationGlobalType } from "@/types/Equation"

type EquationProps = EquationGlobalType & {
    setCorrectAnswer(id: number, value: boolean): void,
    showResults: boolean,
}

export function Equation({ id, equation, isCorrect, showResults, setCorrectAnswer }: EquationProps) {
    const [result, setResult] = useState('')
    
    useEffect(() => {
        setResult('');
    }, [equation]);

    useEffect(() => {
        if(!isCorrect) {
            if(eval(equation) === Number(result)) {setCorrectAnswer(id, true)}
        } else {
            if(eval(equation) !== Number(result)) {setCorrectAnswer(id, false)}
        }
    }, [result]);

    return (
        <Paper elevation={2} sx={{padding: 2, width: '360px'}}>
            <Stack direction="row" alignItems="center" gap="1em">
                <Stack direction="row" alignItems="center" gap="1em" width="90%">
                    <Typography fontWeight="bold" align="right">
                        {equation} = 
                    </Typography>
                    <Input sx={{ width: '3em', fontWeight: 'bold' }} value={result} onChange={event => setResult(event.target.value)} disabled={showResults}/>
                </Stack>
                <Box width="10%">{showResults && (eval(equation) === Number(result) ? <CheckCircleOutlineRoundedIcon color="success"/> : <HighlightOffRoundedIcon color="error"/>)}</Box>
            </Stack>
        </Paper>
    )
}