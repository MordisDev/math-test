import { TestItem } from "../components/TestItem"

import MathTest from "@/pages/MathTest"

import styles from './page.module.css'

const tempPrint = <main className={styles.equasions}>{[...Array(60)].map((_, index) => <TestItem key={index}/>)}</main>
const isTempPrintDisplayed = true

export default function Home() {
  if (isTempPrintDisplayed) return <body>{tempPrint}</body>
  return (
    <body>
      <MathTest />
    </body>
  )
}
