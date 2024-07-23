"use client";

import axios from "axios";
import { useEffect, useState } from "react";


const AnimeList = () => {
  const [animeList, setAnimeList] = useState();


  useEffect(()=>{
    axios.get('/api/anime')
  },[])
  
  return <button>Anime Here!</button>;
};

export default AnimeList;
