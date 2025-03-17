"use client"

import { useEffect, useRef } from "react"

// Sample data for word frequency analysis
const wordFrequencyData = [
  { word: "Allah", arabic: "الله", count: 2699 },
  { word: "Rahman", arabic: "الرحمن", count: 57 },
  { word: "Raheem", arabic: "الرحيم", count: 114 },
  { word: "Day", arabic: "يوم", count: 365 },
  { word: "World", arabic: "دنيا", count: 115 },
  { word: "Hereafter", arabic: "آخرة", count: 115 },
  { word: "Angels", arabic: "ملائكة", count: 88 },
  { word: "Devils", arabic: "شياطين", count: 88 },
  { word: "Life", arabic: "حياة", count: 145 },
  { word: "Death", arabic: "موت", count: 145 },
]

export default function FrequencyAnalysisChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Get the max count for scaling
    const maxCount = Math.max(...wordFrequencyData.map((item) => item.count))

    // Clear any existing content
    chartRef.current.innerHTML = ""

    // Create chart container
    const chartContainer = document.createElement("div")
    chartContainer.className = "flex h-full gap-1 px-2"

    // Create bars for each data point
    wordFrequencyData.forEach((item) => {
      const barHeight = (item.count / maxCount) * 100

      // Create column container
      const column = document.createElement("div")
      column.className = "flex flex-col items-center flex-1"

      // Create label
      const label = document.createElement("div")
      label.className = "text-xs mb-1 text-center font-medium"
      label.textContent = item.word

      // Create bar
      const bar = document.createElement("div")
      bar.className = "w-full bg-primary rounded-t-md relative group"
      bar.style.height = `${barHeight}%`

      // Create value label
      const value = document.createElement("div")
      value.className = "absolute -top-6 left-0 right-0 text-center text-xs font-bold"
      value.textContent = item.count.toString()

      // Create tooltip
      const tooltip = document.createElement("div")
      tooltip.className =
        "absolute hidden group-hover:block bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-background border rounded-md shadow-md p-2 text-xs z-10 w-max"
      tooltip.innerHTML = `<p class="font-bold">${item.word} (${item.arabic})</p><p>Frequency: ${item.count}</p>`

      // Assemble components
      bar.appendChild(value)
      bar.appendChild(tooltip)
      column.appendChild(label)
      column.appendChild(bar)
      chartContainer.appendChild(column)
    })

    // Add chart to the DOM
    chartRef.current.appendChild(chartContainer)
  }, [])

  return (
    <div className="h-full w-full">
      <div ref={chartRef} className="h-full w-full pt-8 pb-4"></div>
    </div>
  )
}

