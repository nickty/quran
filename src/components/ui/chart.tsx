import type React from "react"

// Define proper types for chart data
interface ChartData {
  name: string
  value: number
  [key: string]: string | number
}

// Fix unused props in Chart component
interface ChartProps {
  // Keep the props in the interface for documentation
  data: ChartData[]
  xAxis: string[]
  series: string[]
  height: number
}

export const Chart = ({ height }: ChartProps) => {
  return (
    <div style={{ height: `${height}px` }}>
      {/* Placeholder for Chart component */}
      <div className="flex h-full items-center justify-center bg-muted/20 rounded-md">
        <p className="text-muted-foreground">Chart visualization would appear here</p>
      </div>
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
    <div className="space-y-2">
      <h3 className="text-base font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      {children}
    </div>
  )
}

// Fix unused props in ChartBar component
interface ChartBarProps {
  data: ChartData[]
  xAxis: string[]
  series: string[]
  height: number
}

// Update the ChartBar component to display data in multiple rows
export const ChartBar = ({ data, height }: ChartBarProps) => {
  // Create a multi-row visual representation of the bar chart
  const maxValue = Math.max(...data.map((item) => item.value))
  const itemsPerRow = 15 // Display 15 items per row

  // Calculate how many rows we need
  const rows = Math.ceil(data.length / itemsPerRow)
  // Calculate the height for each row
  const rowHeight = height / rows

  return (
    <div style={{ height: `${height}px` }} className="w-full overflow-y-auto">
      <div className="h-full flex flex-col gap-8">
        {Array.from({ length: rows }).map((_, rowIndex) => {
          const startIdx = rowIndex * itemsPerRow
          const endIdx = Math.min(startIdx + itemsPerRow, data.length)
          const rowData = data.slice(startIdx, endIdx)

          return (
            <div key={rowIndex} className="flex-1 relative" style={{ height: `${rowHeight - 20}px` }}>
              <div className="absolute inset-0 flex items-end">
                {rowData.map((item, index) => {
                  const barHeight = (item.value / maxValue) * 100
                  return (
                    <div key={index} className="flex-1 px-1 flex flex-col items-center">
                      <div
                        className="w-full bg-primary/80 rounded-t-md flex items-end justify-center"
                        style={{ height: `${barHeight}%` }}
                      >
                        <span className="text-xs text-white font-medium p-1">{item.value}</span>
                      </div>
                      <div className="text-xs mt-1 truncate max-w-full text-center" title={item.name}>
                        {item.name.length > 8 ? `${item.name.substring(0, 8)}...` : item.name}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="absolute bottom-8 left-0 right-0 h-[1px] bg-border"></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Fix unused props in ChartPie component
interface ChartPieProps {
  data: ChartData[]
  dataKey: string // Keep these in the interface
  nameKey: string // for documentation purposes
  innerRadius?: string | number
  paddingAngle?: number
  height: number
}

export const ChartPie = ({
  data,
  height,
  innerRadius = 0,
  // We're not using these parameters in the implementation
  // but we keep them in the interface for API consistency
}: ChartPieProps) => {
  // Calculate total for percentages
  const total = data.reduce((sum, item) => sum + item.value, 0)

  // Generate colors for segments
  const colors = [
    "bg-primary",
    "bg-secondary",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
  ]

  return (
    <div style={{ height: `${height}px` }} className="w-full flex items-center justify-center">
      <div className="relative w-[200px] h-[200px] flex items-center justify-center">
        <div className="absolute inset-0 rounded-full overflow-hidden flex">
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100
            return (
              <div
                key={index}
                className={`${colors[index % colors.length]} h-full`}
                style={{ width: `${percentage}%` }}
                title={`${item.name}: ${item.value} (${percentage.toFixed(1)}%)`}
              ></div>
            )
          })}
        </div>
        {(typeof innerRadius === "number" ? innerRadius > 0 : innerRadius !== "") && (
          <div
            className="bg-background rounded-full z-10 flex items-center justify-center"
            style={{
              width: typeof innerRadius === "string" ? innerRadius : `${innerRadius}px`,
              height: typeof innerRadius === "string" ? innerRadius : `${innerRadius}px`,
            }}
          >
            <span className="text-sm font-medium">Total: {total}</span>
          </div>
        )}
      </div>
      <div className="ml-4">
        <div className="space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-3 h-3 ${colors[index % colors.length]} rounded-sm mr-2`}></div>
              <span className="text-sm">
                {item.name} ({((item.value / total) * 100).toFixed(1)}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const ChartTooltip = () => {
  return (
    <div className="bg-background border rounded-md shadow-md p-2 text-xs">
      <p>ChartTooltip component</p>
    </div>
  )
}

export const ChartLegend = ({ items }: { items: { name: string; color: string }[] }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className="w-3 h-3 rounded-sm mr-2" style={{ backgroundColor: item.color }}></div>
          <span className="text-sm">{item.name}</span>
        </div>
      ))}
    </div>
  )
}

