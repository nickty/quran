import type React from "react"

// Define proper types instead of any
// interface ChartData {
//   name: string
//   value: number
//   [key: string]: string | number
// }

// interface ChartProps {
//   data: ChartData[]
//   xAxis: string[]
//   series: string[]
//   height: number
// }

export const Chart = () => {
  return (
    <div>
      {/* Placeholder for Chart component */}
      <p>Chart component</p>
    </div>
  )
}

interface ChartContainerProps {
  title: string
  description: string
  children: React.ReactNode
}

export const ChartContainer = ({ title, description, children }: ChartContainerProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  )
}

// interface ChartBarProps {
//   data: ChartData[]
//   xAxis: string[]
//   series: string[]
//   height: number
// }

export const ChartBar = () => {
  return (
    <div>
      {/* Placeholder for ChartBar component */}
      <p>ChartBar component</p>
    </div>
  )
}

// interface ChartPieProps {
//   data: ChartData[]
//   dataKey: string
//   nameKey: string
//   innerRadius: string | number
//   paddingAngle: number
//   height: number
// }

export const ChartPie = () => {
  return (
    <div>
      {/* Placeholder for ChartPie component */}
      <p>ChartPie component</p>
    </div>
  )
}

export const ChartTooltip = () => {
  return (
    <div>
      {/* Placeholder for ChartTooltip component */}
      <p>ChartTooltip component</p>
    </div>
  )
}

export const ChartLegend = () => {
  return (
    <div>
      {/* Placeholder for ChartLegend component */}
      <p>ChartLegend component</p>
    </div>
  )
}

