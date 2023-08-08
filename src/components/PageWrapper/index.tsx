'use client'

import { PropsWithChildren } from "react"

export function PageWrapper({ children }: PropsWithChildren) {
    return <main>{children}</main>
}