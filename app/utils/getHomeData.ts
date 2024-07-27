import axios from "axios";
import { AnimeHomePage } from "../types/animeHomePage";
import { cache } from 'react'


const getHomeData = cache(async (): Promise<AnimeHomePage[]> => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home`
    , {
    headers: {
      //'Cache-Control': 'no-store',
        cache: 'force-cache' 
    },
  }
  );

  if (res.status !== 200) {
    throw new Error('Failed to fetch data');
  }

  return res.data;
});

export default getHomeData;
