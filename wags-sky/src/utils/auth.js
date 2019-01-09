import decode from 'jwt-decode'

export const checkAuth = () => {
	const token = localStorage.getItem('_x')
	// const refreshToken = localStorage.getItem('refreshToken') [SOON TODO]
	if(!token /*|| !refreshToken*/)
		return false
	try {
		const { exp /*, waitlisted*/ } = decode(token)

		// if(waitlisted)
		// 	return false

		if(exp < (new Date().getTime() / 1000))
			return false
	} catch(e) {
		return false
	}
	return true
}

export const getId = () => {
	if(!localStorage.getItem('_x'))
		return null
	const { userId } = decode(localStorage.getItem('_x'))
	return userId
}
