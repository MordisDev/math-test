'use client'

import { useState } from "react"

import { ToggleButtonGroup, ToggleButton } from "@mui/material"

export function TypeToggle() {
    const [selectedEquationType, setSelectedEquationType] = useState<'individual'|'mixed'>('individual')

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newEquationType: 'individual'|'mixed',
      ) => {
        event.preventDefault();
        setSelectedEquationType(newEquationType);
      };

    return (
        <ToggleButtonGroup
            value={selectedEquationType}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton value='individual' sx={{ width: '160px' }}>Individual</ToggleButton>
            <ToggleButton value='mixed' sx={{ width: '160px' }}>Mixed</ToggleButton>
        </ToggleButtonGroup>
    )
}