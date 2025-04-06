import type { Metadata } from "next"
import ThematicCoherenceClientPage from "./ThematicCoherenceClientPage"

export const metadata: Metadata = {
  title: "Thematic Coherence in the Quran | Quran Research",
  description: "Exploring the interconnectedness of themes and ideas throughout the Quran.",
}

export default function ThematicCoherencePage() {
  return <ThematicCoherenceClientPage />
}

