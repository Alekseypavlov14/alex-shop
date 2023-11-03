export function getMaximumBy<T>(items: T[], callback: (item: T) => number): T {
  let maximumItem: T = items[0]

  items.forEach(item => {
    if (callback(item) > callback(maximumItem)) maximumItem = item
  })

  return maximumItem
}

