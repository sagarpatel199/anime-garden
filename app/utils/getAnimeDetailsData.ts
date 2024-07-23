import axios from "axios"

const getAbuneDetailsData = async (id: string) => {
	try {
		const res = await axios.get(`/api/anime/${id}`)
		return res.data
	} catch (error) {
		console.error("Failed to fetch anime details", error)
	}
}

export default getAbuneDetailsData;