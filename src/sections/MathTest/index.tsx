'use client'

import { useState, useEffect } from "react"
import { GetServerSideProps } from "next"
import { useSetAtom } from "jotai"
import { resultsAtom } from "@/atoms/results"

import { Button, type ButtonProps, Card, CardContent, Container, Stack, Typography } from "@mui/material"
import { Equation } from "@/components/Equation"

import type { Equation as EquationType } from "@/types/Equation"

import { getEquations } from "@/utils/EquationsGenerator"

const generateEquationsList = () => {
    return getEquations().map((equation, index) => (
        {
            id: index + 1,
            equation: equation,
            isCorrect: false,
        }
    ))
}

type MathTestProps = {
    generatedEquations?: EquationType[]
}

export default function MathTest({ generatedEquations }: MathTestProps) {
    const [equations, setEquations] = useState(generatedEquations ?? [])
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

export async function getServerSideProps() {
    const generatedEquations = getEquations().map((equation, index) => (
        {
            id: index + 1,
            equation: equation,
            isCorrect: false,
        }
    ))

    return { props: {equations: generatedEquations} }
}