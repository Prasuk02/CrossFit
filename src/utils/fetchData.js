// Here we make connection with Rapid API
// Options authorizes us to make request as it contains our API key
export const excerciseOptions = {
    method: 'GET',
	headers: {
        // Storing key in environment variable
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
}

export const YTexcerciseOptions = {
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
}

export const fetchData = async(url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}

