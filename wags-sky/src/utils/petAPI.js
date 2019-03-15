export const fetchPets = async stop => {

  let previewPets = []

  try {
    const petList = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/pets`)

    if(!petList.ok) {
      console.log('Unable to fetch pet images.')
      return previewPets
    }

    const { pets } = await petList.json()

    if (!stop)
      stop = pets.length

    for (let i = 0; (i < stop) && (i < pets.length); i++)
      previewPets.push(pets[i])

  } catch(e) {
    console.log(e)
  }

  return previewPets

}

export const fetchOnePet = async petID => {

  try {

    const petObj = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/pets/${petID}`)

    if (!petObj.ok) {
      console.log('Unable to fetch pet.')
      return {}
    }

    const { pet } = await petObj.json()

    return pet

  } catch(e) {
    console.log(e)
  }

  return {}

}
