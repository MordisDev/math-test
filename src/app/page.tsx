import MathTest from "@/sections/MathTest";
import ResultsHistory from "@/sections/ResultsHistory";
import { ConfigurationForm } from "@/components/ConfigurationForm";
import { HydrationWrapper } from "@/utils/HydrationWrapper/HydrationWrapper";
//import ThemeRegistry from '@/theme/ThemeRegistry'

export default function Home() {
  return (
    <HydrationWrapper>
      <main>
        {/*<ThemeRegistry options={{ key: 'mui' }}>*/}
        <MathTest />
        <ResultsHistory />
        {/*</ThemeRegistry>*/}
        <ConfigurationForm />
      </main>
    </HydrationWrapper>
  );
}
