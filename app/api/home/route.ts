import axios from "axios";

import { AnimeHomePage } from "@/app/types/animeHomePage"; 
import { baseAnimeURL } from "@/config/apiConfig";
import { NextResponse } from "next/server";

export async function GET() {
    const res = NextResponse;
    try {
        const resultPopular  = await axios.get(`${baseAnimeURL}/gogoanime/popular`)
        const resultTopAiring  = await axios.get(`${baseAnimeURL}/gogoanime/top-airing`)
        const resultRecentlyUpdated  = await axios.get(`${baseAnimeURL}/gogoanime/recent-episodes`)
        const homeAnime: AnimeHomePage[] = [resultPopular.data, resultTopAiring.data, resultRecentlyUpdated.data]
       
        return res.json(homeAnime)
    } catch (error) {
        return res.json({ error: 'Internal server error' });
        
    }

    
}

