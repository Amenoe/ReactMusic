export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

export function getImageUrl(url: string, width: number, height?: number) {
  if (!height) {
    height = width
  }
  return url + `?param=${width}x${height}`
}
