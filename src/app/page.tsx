import MathTest from "@/sections/MathTest"
import ResultsHistory from "@/sections/ResultsHistory"
//import ThemeRegistry from '@/theme/ThemeRegistry'

export default function Home() {
  return (
    <main>
      {/*<ThemeRegistry options={{ key: 'mui' }}>*/}
        <MathTest />
        <ResultsHistory />
      {/*</ThemeRegistry>*/}
    </main>
  )
}