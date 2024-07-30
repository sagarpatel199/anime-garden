import { baseAnimeURL } from "@/config/apiConfig"
import axios from "axios"
import { cache } from "react"
import { VideoSource } from "../types/videoInterface"

const getVideoData = cache(async (episodeId: string) => {
	try {
		const res = await axios.get(`${baseAnimeURL}/gogoanime/watch/${episodeId}`, {
			headers: {
				Referer:
					"https://s3taku.com/embedplus?id=MjI3NzA2&token=yhgtNsvpRhNNjFskuZ68jg&expires=1722233145",
			},
		})
		const videoSources: VideoSource[] = res.data.sources;
		console.log(videoSources)
		return videoSources;
	} catch (error) {
        console.log(error)
        return [];
    }
})

export default getVideoData
