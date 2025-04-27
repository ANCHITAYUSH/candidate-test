export type StaticImageType = typeof import('./images').staticImages

export interface AssetProps {
  image?: keyof StaticImageType
  size?: number
}
