"use client";

import { generateAddition } from "./generateAddition";
import { sumArray } from "@/utils/sumArray";

export default function TestingComponent() {
  const { result, parameters } = generateAddition({
    maxResult: 1000,
    numberOfParameters: 4,
  });
  return (
    <div
      style={{
        padding: ".4rem",
        border: "1px solid grey",
        borderRadius: "4px",
      }}
    >
      <p>Parameters: {parameters.map((param) => `${param} `)}</p>
      <p>Result: {result}</p>

      <p>
        {result === sumArray(parameters) ? (
          <span style={{ color: "green" }}>Si, Corretto!</span>
        ) : (
          <span style={{ color: "red" }}>Error</span>
        )}
      </p>
    </div>
  );
}
