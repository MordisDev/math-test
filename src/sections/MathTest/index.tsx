'use client'

import { useState, useEffect } from "react"
import { useSetAtom } from "jotai"
import { resultsAtom } from "@/atoms/results"

import { Button, type ButtonProps, Card, CardContent, Container, Stack, Typography } from "@mui/material"
import { Equation } from "@/components/Equation"

import type { Equation as EquationType } from "@/types/Equation"

import { getRandomNumber } from "@/utils/randomNumber"

const equationSettings = {
    ilosc: 24,
    maksWartosc: 49,
    liczbaParametrow: 2,
    dopuszczalnaMniejszaIloscParametrow: true,
    dzialania: ['+','-','*','/'],
    wariant: 'wynik' || 'brakujacy parametr',
    mozliweUjemne: false,
    mozliweUlamki: false,
    miejscaPoPrzecinku: 0,
}

const generateEquation = (length: number, operator: string): string => {
    const parameters = Array.from(Array(equationSettings.dopuszczalnaMniejszaIloscParametrow ? getRandomNumber(length, 2) : length), () => getRandomNumber(equationSettings.maksWartosc))

    return parameters.join(` ${operator} `)
}

const generateEquationsList = (): EquationType[] => {
    return Array.from({ length: equationSettings.ilosc }, (_, index) => (
        {
            id: index + 1,
            equation: generateEquation(equationSettings.liczbaParametrow, '+'),
            isCorrect: false,
        }
    ))
}

export default function MathTest() {
    const [equations, setEquations] = useState<EquationType[]>([])
    const [showResults, setShowResults] = useState(false)
    const setGlobalResults = useSetAtom(resultsAtom)

    const buttonFormating: Partial<ButtonProps> = {
        size: "large",
        variant: "contained",
    }

    useEffect(() => {
        setEquations(generateEquationsList);
        setShowResults(false);
    }, []);

    const setCorrectAnswer = (id: number, value: boolean) => {
        const newEquations = equations?.map(equation => equation.id === id ? {...equation, isCorrect: value} : {...equation});
        setEquations(newEquations);
    }

    const reset = () => {
        setEquations(generateEquationsList);
        setShowResults(false);
    }

    const calculateResults = (): string => {
        const result = `${((equations?.filter(equation => equation.isCorrect).length * 100)/equations?.length).toFixed()} %`;
        setGlobalResults(prev => [...prev, result])
        return result
    }

    return (
        <Container fixed sx={{my: 4}}>
            <Card variant="outlined">
                <CardContent>
                    <Typography width="100%" variant="h4" align="center">Wyniki: {showResults ? calculateResults() : '...'}</Typography>
                    <Stack spacing={2} useFlexGap direction="row" flexWrap="wrap" marginBottom="2em">
                        {equations?.map(props => <Equation key={props.id} {...props} showResults={showResults} setCorrectAnswer={setCorrectAnswer}/>)}
                    </Stack>
                    {showResults ? (
                        <Button {...buttonFormating} onClick={() => reset()}>Reset</Button>
                    ) : (
                        <Button {...buttonFormating} onClick={() => setShowResults(true)}>Sprawdz wynik</Button>
                    )}
                </CardContent>
            </Card>
        </Container>
    )
}