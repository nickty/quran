"use client"

import { useEffect, useRef } from "react"

// Sample data for word pairs with identical frequencies
const wordPairData = [
  {
    pair: "World/Hereafter",
    arabic1: "دنيا",
    arabic2: "آخرة",
    count: 115,
    concept1: "World",
    concept2: "Hereafter",
  },
  {
    pair: "Angels/Devils",
    arabic1: "ملائكة",
    arabic2: "شياطين",
    count: 88,
    concept1: "Angels",
    concept2: "Devils",
  },
  {
    pair: "Life/Death",
    arabic1: "حياة",
    arabic2: "موت",
    count: 145,
    concept1: "Life",
    concept2: "Death",
  },
  {
    pair: "Benefit/Corruption",
    arabic1: "نفع",
    arabic2: "فساد",
    count: 50,
    concept1: "Benefit",
    concept2: "Corruption",
  },
  {
    pair: "Hot/Cold",
    arabic1: "حر",
    arabic2: "برد",
    count: 4,
    concept1: "Hot",
    concept2: "Cold",
  },
  {
    pair: "Ease/Hardship",
    arabic1: "يسر",
    arabic2: "عسر",
    count: 12,
    concept1: "Ease",
    concept2: "Hardship",
  },
  {
    pair: "Public/Hidden",
    arabic1: "جهر",
    arabic2: "علن",
    count: 16,
    concept1: "Public",
    concept2: "Hidden",
  },
]

export default function WordPairChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Get the max count for scaling
    const maxCount = Math.max(...wordPairData.map((item) => item.count))

    // Clear any existing content
    chartRef.current.innerHTML = ""

    // Create chart container
    const chartContainer = document.createElement("div")
    chartContainer.className = "flex h-full gap-1 px-2"

    // Create bars for each data point
    wordPairData.forEach((item) => {
      const barHeight = (item.count / maxCount) * 100

      // Create column container
      const column = document.createElement("div")
      column.className = "flex flex-col items-center flex-1"

      // Create label
      const label = document.createElement("div")
      label.className = "text-xs mb-1 text-center font-medium"
      label.textContent = item.pair

      // Create bar
      const bar = document.createElement("div")
      bar.className = "w-full bg-secondary rounded-t-md relative group"
      bar.style.height = `${barHeight}%`

      // Create value label
      const value = document.createElement("div")
      value.className = "absolute -top-6 left-0 right-0 text-center text-xs font-bold"
      value.textContent = item.count.toString()

      // Create tooltip
      const tooltip = document.createElement("div")
      tooltip.className =
        "absolute hidden group-hover:block bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-background border rounded-md shadow-md p-2 text-xs z-10 w-max"
      tooltip.innerHTML = `
        <p class="font-bold mb-1">${item.pair}</p>
        <p>${item.concept1} (${item.arabic1}): ${item.count} occurrences</p>
        <p>${item.concept2} (${item.arabic2}): ${item.count} occurrences</p>
        <p class="mt-1 text-muted-foreground">Perfect balance: 100%</p>
      `

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

