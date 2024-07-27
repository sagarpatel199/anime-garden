import axios from "axios"

const getAnimeDetailsData = async (id: string) => {
	try {
		const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/anime/${id}`)
		return res.data
	} catch (error) {
		console.error("Failed to fetch anime details", error)
	}
}

export default getAnimeDetailsData;

// import axios from "axios"
// import { AnimeDetails } from "../types/animeDetails"

// const getAnimeDetailsData = async (id: string): Promise<AnimeDetails> => {
// 	console.log("THIS IS THE ID: " + id)
// 	const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/anime/${id}`, {
// 		headers: {
// 			//'Cache-Control': 'no-store',
// 			cache: "force-cache",
// 		},
// 	})
// 	console.log("details in UTIL:", res.data)
// 	if (res.status !== 200) {
// 		throw new Error("Failed to fetch data")
// 	}
// 	return res.data
// }

// export default getAnimeDetailsData