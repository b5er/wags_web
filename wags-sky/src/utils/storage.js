export const getStorageItem = key => {
  if(!key)
    return null

  try {
    const value = localStorage.getItem(key)
    if(value)
      return JSON.parse(value)
    return null
  } catch(e) {
    return null
  }
}

export const setStorageItem = (key, value) => {
  if(!key)
    console.error('Error: Key required')

  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch(e) {
    console.log(e)
  }
}

export const rmStorageItem = key => {
  if(!key)
    return null

  try {
    localStorage.removeItem(key)
  } catch(e) {
    return null
  }
}
