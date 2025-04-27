export * from './images'

// Theme-related constants
export const colors = {
  primary: '#00dc89',
  error: '#ed1c24',
  // ... other colors
} as const

// Other asset-related exports
export const sizes = {
  sidebar: {
    width: 240,
    iconSize: 16,
  },
  // ... other size constants
} as const
