'use client'

import { useState, useEffect } from "react";
import { getRandomNumber } from "@/utils/randomNumber";

interface Values {
    a: number;
    b: number;
}

export function TestItem() {
    const [ values, setValues ] = useState<Values>();
    const [ operator, setOperator ] = useState<'+' | '-'>()

    useEffect(() => {
        setOperator(Math.random() > .7 ? '-' : '+');
        setValues({ a: getRandomNumber(20), b: getRandomNumber(20) });
    }, []);

    useEffect(() => {
        if (operator === '-') {
            const a = getRandomNumber(20);
            const b = getRandomNumber(a);
            setValues({ a, b });
        } else {
            setValues({ a: getRandomNumber(20), b: getRandomNumber(20) });
        }
    }, [operator])

    return (
        <div style={{ width: '160px' }}>
            { values?.a } {operator} { values?.b } = .....
        </div>
    )
}