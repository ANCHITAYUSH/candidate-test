export interface Asset {
  id: string
  type: string
  vendor: string
  model: string
  architecture: string
  recommendations: number
  potentialIncrease: number
  potentialRevenue: string
  potentialSavings: string
  status: string
  impact: string
  lastRefresh: string
  healthScore: number
  annual_realised_cost_savings: number
  annual_realised_co2_savings: number
}
