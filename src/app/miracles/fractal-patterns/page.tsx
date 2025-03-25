import type { Metadata } from "next"
import FractalPatternsClientPage from "./FractalPatternsClientPage"

export const metadata: Metadata = {
  title: "Fractal Patterns in Quranic Structure | Quran Research",
  description: "Exploring self-similar mathematical patterns across different scales in the Quranic text structure",
}

export default function FractalPatternsPage() {
  return <FractalPatternsClientPage />
}

