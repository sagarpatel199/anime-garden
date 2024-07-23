// src/app/api/anime/route.ts

import axios from "axios"
import { AnimeList } from "@/app/types/anime"
import { NextResponse } from "next/server"
import { baseAnimeURL } from "@/config/apiConfig";


export  async function GET() {
  const res = NextResponse;
    try {
      const response = await axios.get(`${baseAnimeURL}/gogoanime/anime-list`);
      const animeList: AnimeList = response.data;
      return res.json(animeList);
    } catch (error) {
      return res.json({ error: 'Internal server error' });
    }
  } 

// export default function handler(req: NextRequest) {
// 	if (req.method === "GET") {
// 		NextResponse.json({ text: "Hello" })
// 	}
// }

// import axios from "axios";

// const baseURL =
// "https://consumet-api-kappa-teal.vercel.app/";
