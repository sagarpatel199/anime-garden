import { baseAnimeURL } from "@/config/apiConfig"
import axios from "axios"
import {cache} from "react"



const getVideoData = cache (async (episodeId: string) => {
    const link = `${baseAnimeURL}/gogoanime/watch/${episodeId}`
    try {
        const res = await axios.get(`${baseAnimeURL}/gogoanime/watch/${episodeId}`)
        console.log(res.data);
        
        return res.data;
    } catch (error) {
        
    }
    
})

export default getVideoData