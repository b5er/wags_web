export const book = async (name, email, date, time) => {

  try {

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const standarizedDate = `${month < 10 ? `0${month}`:month}/${day < 10 ? `0${day}`:day}/${year}`

    const booking = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/appointments`, {
                                  method: 'POST',
                                  headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                  },
                                  body: JSON.stringify({
                                    name,
                                    email,
                                    date: standarizedDate,
                                    time
                                  })
                                })

    if (!booking.ok) {
      const { message } = await booking.json()
      return { error: message }
    }

  } catch(e) {
    console.log(e)
  }

}
