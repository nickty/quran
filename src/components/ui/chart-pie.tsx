// Define proper types for chart data
interface ChartData {
  name: string
  value: number
  [key: string]: string | number
}

// Fix unused props in ChartPieProps interface and function parameters
interface ChartPieProps {
  data: ChartData[]
  // Remove unused props or use them
  height: number
  innerRadius?: string | number
  // Optional props that we'll keep but mark with underscore to indicate they're not used
  _dataKey?: string
  _nameKey?: string
  _paddingAngle?: number
}

export const ChartPie = ({ data, height, innerRadius = 0 }: ChartPieProps) => {
  // Calculate total for percentages
  const total = data.reduce((sum, item) => sum + item.value, 0)

  // Generate colors for segments - more colors for more segments
  const colors = [
    "bg-primary",
    "bg-secondary",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-red-500",
    "bg-orange-500",
    "bg-amber-500",
    "bg-lime-500",
    "bg-emerald-500",
    "bg-teal-500",
    "bg-cyan-500",
    "bg-sky-500",
    "bg-violet-500",
    "bg-fuchsia-500",
    "bg-rose-500",
    "bg-slate-500",
  ]

  // Sort data by value for better visualization
  const sortedData = [...data].sort((a, b) => b.value - a.value)

  // For many segments, we need to handle the legend differently
  const showInLegend = sortedData.length <= 30 // Only show individual items in legend if 30 or fewer

  // Check if innerRadius should be displayed (fix for type error)
  const showInnerRadius =
    typeof innerRadius === "number"
      ? innerRadius > 0
      : typeof innerRadius === "string"
        ? innerRadius.trim() !== ""
        : false

  return (
    <div style={{ height: `${height}px` }} className="w-full flex flex-col md:flex-row items-center justify-center">
      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 rounded-full overflow-hidden flex flex-wrap">
          {sortedData.map((item, index) => {
            const percentage = (item.value / total) * 100
            return (
              <div
                key={index}
                className={`${colors[index % colors.length]} h-full`}
                style={{
                  width: `${percentage}%`,
                  minWidth: percentage < 0.5 ? "0.5%" : "auto", // Ensure tiny segments are still visible
                }}
                title={`${item.name}: ${item.value} (${percentage.toFixed(1)}%)`}
              ></div>
            )
          })}
        </div>
        {showInnerRadius && (
          <div
            className="bg-background rounded-full z-10 flex items-center justify-center"
            style={{
              width: typeof innerRadius === "string" ? innerRadius : `${innerRadius}px`,
              height: typeof innerRadius === "string" ? innerRadius : `${innerRadius}px`,
            }}
          >
            <div className="text-center">
              <div className="text-sm font-medium">Total Words</div>
              <div className="text-xl font-bold">{total.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground mt-1">Across 114 Surahs</div>
            </div>
          </div>
        )}
      </div>

      <div className="ml-0 md:ml-4 mt-4 md:mt-0 max-h-[500px] overflow-y-auto w-full md:w-auto">
        <div className="space-y-1">
          {showInLegend ? (
            // Show individual items if not too many
            sortedData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-3 h-3 ${colors[index % colors.length]} rounded-sm mr-2`}></div>
                <span className="text-sm truncate max-w-[250px]" title={item.name}>
                  {item.name} ({((item.value / total) * 100).toFixed(1)}%)
                </span>
              </div>
            ))
          ) : (
            // Group by size for many items
            <>
              <div className="font-medium mb-2">Top Surahs by Word Count</div>
              {sortedData.slice(0, 20).map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-3 h-3 ${colors[index % colors.length]} rounded-sm mr-2`}></div>
                  <span className="text-sm truncate max-w-[250px]" title={item.name}>
                    {item.name} ({((item.value / total) * 100).toFixed(1)}%)
                  </span>
                </div>
              ))}
              <div className="mt-4 pt-2 border-t">
                <div className="text-sm text-muted-foreground">
                  + {sortedData.length - 20} more surahs (hover over pie segments to see details)
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

