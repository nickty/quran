import type { Metadata } from "next"
import IntertextualityClientPage from "./IntertextualityClientPage"

export const metadata: Metadata = {
  title: "Intertextuality in the Quran | Quran Research",
  description:
    "Exploring how the Quran references, reinterprets, and dialogues with earlier scriptures and traditions.",
}

export default function IntertextualityPage() {
  return <IntertextualityClientPage />
}

