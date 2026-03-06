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

export interface ILyricItem {
  time: number
  text: string
}

//  歌词解析
export function parseLyric(str: string) {
  const lyric: ILyricItem[] = []
  const lines = str.split('\n')
  const timeReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

  lines.forEach((line) => {
    const result = timeReg.exec(line)

    if (result) {
      // 分转毫秒
      const time1 = Number(result[1]) * 60 * 1000
      // 秒转毫秒
      const time2 = Number(result[2]) * 1000
      // 毫秒处理：如果是两位数（如 .56），则是 560ms；如果是三位数（如 .560），则是 560ms
      const time3 =
        result[3].length === 3 ? Number(result[3]) : Number(result[3]) * 10
      const time = time1 + time2 + time3
      const text = line.replace(timeReg, '')
      lyric.push({ time, text })
    }
  })

  return lyric
}
