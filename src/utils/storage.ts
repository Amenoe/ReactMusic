export const setLocalStorage = (key: string, value: any) => {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    localStorage.removeItem(key)
  }
}

export const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key)
  try {
    return JSON.parse(value as string)
  } catch (error) {
    return value
  }
}

export const removeLocalStorage = (key?: string) => {
  if (key) {
    localStorage.removeItem(key)
  } else {
    localStorage.clear()
  }
}
