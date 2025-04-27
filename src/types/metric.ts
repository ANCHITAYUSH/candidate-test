export interface MetricData {
  donutValue: number
  impactData: { label: string; value: string }[]
  recommendations: {
    title: string
    assets: string
    increase: string
    revenue: string
    savings: string
  }[]
  identifiedIssues: string
}

export interface Metric {
  id: string
  icon: string
  label: string
}
