import axios from "axios";
import { animeHomePage } from "../types/animeHomePage";

const getHomeData = async (): Promise<animeHomePage[]> => {
  const res = await axios.get(`http://localhost:3000/api/home`, {
    headers: {
      'Cache-Control': 'no-store',
    },
  });

  if (res.status !== 200) {
    throw new Error('Failed to fetch data');
  }

  return res.data;
};

export default getHomeData;
