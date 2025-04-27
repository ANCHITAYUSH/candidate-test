export const buildContactTypesArray = (selectedMap: Record<string, boolean>): string[] => {
  return Object.entries(selectedMap)
    .filter(([_, isSelected]) => isSelected)
    .map(([value]) => value)
}

export const buildContactTypesMap = (contactTypes: string[]): Record<string, boolean> => {
  return contactTypes.reduce(
    (acc, type) => ({
      ...acc,
      [type]: true,
    }),
    {}
  )
}
