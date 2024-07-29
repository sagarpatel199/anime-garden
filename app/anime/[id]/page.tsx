// src/app/anime/[id]/page.tsx

"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import getVideoData from "../../utils/getVideoData";
import { AnimeDetails } from "@/app/types/animeDetails";
import getAnimeDetailsData from "@/app/utils/getAnimeDetailsData";
import Image from "next/image";
import { CircularProgress } from "@mui/material";
import VideoComponent from "@/app/components/VideoComponent";
const Anime = ({ params }: { params: { id: string } }) => {
  const [animeDetails, setAnimeDetails] = useState<AnimeDetails | null>(null);
  const id = params.id;
  console.log(id);

  let videoURL;
  if (animeDetails) {
    videoURL = getVideoData(animeDetails.episodes[0].id);
  }

  useEffect(() => {
    if (id) {
      const fetchAnimeDetails = async () => {
        try {
          const details = await getAnimeDetailsData(id as unknown as string);
          setAnimeDetails(details);
        } catch (error) {
          console.error("Failed to fetch anime details", error);
        }
      };
      fetchAnimeDetails();
    }
  }, []);

  if (!animeDetails) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-100 border">
        <CircularProgress color="success" />
      </div>
    );
  }
  console.log(animeDetails);
  return (
    <div className="p-2 grid  items-center">
      <div>
        <VideoComponent
          videoUrl={
            "https://www111.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1709225406.720.m3u8"
          }
        />
      </div>
      <div className="outline inset-1">
        <Image
          src={animeDetails?.image || "@app/public/vercel.svg"}
          height={500}
          width={300}
          alt={animeDetails?.title || "Image"}
        />
      </div>

      <h3>{animeDetails?.releaseDate}</h3>
      <h3>{animeDetails?.totalEpisodes}</h3>
      <h3>{animeDetails?.type}</h3>
      <h3>{animeDetails?.url}</h3>

      {animeDetails &&
        animeDetails.episodes.map((episode, index) => <div>{episode.id}</div>)}
    </div>
  );
};
export default Anime;

//____________________________________________________________________________
// Server side code

// import { AnimeDetails } from "@/app/types/animeDetails";
// import getAnimeDetailsData from "@/app/utils/getAnimeDetailsData";
// import Image from "next/image";
// import { baseAnimeURL } from "@/config/apiConfig";
// import axios from "axios";
// import { CircularProgress } from "@mui/material"

// // Define the Server Component
// const Anime = async ({ params }: { params: { id: string } }) => {
//   const { id } = params;

//   // Fetch anime details server-side
//   const res = await getAnimeDetailsData(id as string);
//   const animeDetails: AnimeDetails =res

//   return (
//     <div className="grid justify-items-center items-center">
//       <Image
//         src={animeDetails?.image || "/default-image.svg"}
//         height={500}
//         width={300}
//         alt={animeDetails.title || "Image"}
//       />
//       <h3>{animeDetails.releaseDate}</h3>
//       <h3>{animeDetails.totalEpisodes}</h3>
//       <h3>{animeDetails.type}</h3>
//       <h3>{animeDetails.url}</h3>

//       {animeDetails.episodes.map((episode) => (
//         <div key={episode.id}>
//           {episode.id}
//         </div>
//       ))}

//     </div>
//   );
// };

// export default Anime;

// _________________________________________________________________________________________________________

// SWR library

// "use client"
// import useSWR from "swr"
// import axios from "axios"
// import Image from "next/image"
// import { AnimeDetails } from "@/app/types/animeDetails"
// import { CircularProgress } from "@mui/material"

// const fetcher = (url: string) => axios.get(url).then((res) => res.data)

// const Anime = ({ params }: { params: { id: string } }) => {
// 	const { id } = params
// 	const { data: animeDetails, error } = useSWR<AnimeDetails>(`/api/anime/${id}`, fetcher)

// 	if (error) return <div>Failed to load</div>
// 	if (!animeDetails)
// 		return (
// 			<div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-100 border">
// 				<CircularProgress color="success" />
// 			</div>
// 		)

// 	return (
// 		<div className="grid justify-items-center items-center">
// 			<Image
// 				src={animeDetails.image || "/vercel.svg"}
// 				height={500}
// 				width={300}
// 				alt={animeDetails.title || "Image"}
// 			/>
// 			<h3>{animeDetails.releaseDate}</h3>
// 			<h3>{animeDetails.totalEpisodes}</h3>
// 			<h3>{animeDetails.type}</h3>
// 			<h3>{animeDetails.url}</h3>
// 			{animeDetails.episodes.map((episode) => (
// 				<div key={episode.id}>{episode.id}</div>
// 			))}
// 		</div>
// 	)
// }

// export default Anime
