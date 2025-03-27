import type { Metadata } from "next"
import ChronologicalOrderClientPage from "./ChronologicalOrderClientPage"

export const metadata: Metadata = {
  title: "Chronological Order of Revelation | Quran Research",
  description:
    "Explore how the Quran's message and themes evolved throughout the 23-year revelation period, from Meccan to Medinan surahs.",
}

export default function ChronologicalOrderPage() {
  return <ChronologicalOrderClientPage />
}

