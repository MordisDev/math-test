'use client'

import { useAtomValue } from "jotai"
import { resultsAtom } from "@/atoms/results"

import { Card, CardContent, Container, Paper, Stack, Typography } from "@mui/material"

export default function ResultsHistory() {
    const resultArray = useAtomValue(resultsAtom)

    return (
        <Container fixed sx={{my: 4}}>
            <Card variant="outlined">
                <CardContent>
                    <Stack direction="row" useFlexGap spacing={2} flexWrap="wrap">
                        {resultArray.length ? (
                            resultArray.map((result, index) => (
                                <Paper elevation={2} sx={{padding: 2, width: '160px'}}>
                                    <Typography fontWeight="bold">Wynik {index + 1}: {result}</Typography>
                                </Paper>
                            ))
                        ) : 'Brak wynikow'}
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    )
}