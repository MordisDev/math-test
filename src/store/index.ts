import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import type { GeneratorConfigProps } from "@/utils/EquationsGenerator/schema";
import { defaultConfig } from "@/utils/EquationsGenerator/defaultConfig";

// Define types for state & actions
interface MathStore {
  config: GeneratorConfigProps;
  setConfig: (config: GeneratorConfigProps) => void;
}

// Create store using the curried form of `create`
export const useMathStore = create<MathStore>()(
  persist(
    immer((set) => ({
      config: defaultConfig,
      setConfig: (config) =>
        set((state) => {
          state.config = config;
        }),
    })),
    { name: "math-config", storage: createJSONStorage(() => localStorage) },
  ),
);
