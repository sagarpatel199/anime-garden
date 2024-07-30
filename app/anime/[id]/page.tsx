// src/app/anime/[id]/page.tsx

// "use client";
// import React, { useEffect } from "react";
// import { useState } from "react";
// import getVideoData from "../../utils/getVideoData";
// import { AnimeDetails } from "@/app/types/animeDetails";
// import getAnimeDetailsData from "@/app/utils/getAnimeDetailsData";
// import Image from "next/image";
// import { CircularProgress } from "@mui/material";

// import { VideoSource } from "@/app/types/videoInterface";
// const Anime = ({ params }: { params: { id: string } }) => {
//   const [animeDetails, setAnimeDetails] = useState<AnimeDetails | null>(null);
//   const [videoSources, setVideoSources] = useState<VideoSource[] | null>([]);
//   const id = params.id;
//   console.log(id);



//   useEffect(() => {
//     if (id) {
//       const fetchAnimeDetails = async () => {
//         try {
//           const details = await getAnimeDetailsData(id as unknown as string);
//           setAnimeDetails(details);


//           const sources = await getVideoData(details.episodes[0].id);
//           setVideoSources(sources);
//         } catch (error) {
//           console.error("Failed to fetch anime details", error);
//         }
//       };
//       fetchAnimeDetails();
//     }
//   }, []);

//   if (!animeDetails || !videoSources) {
//     return (
//       <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-100 border">
//         <CircularProgress color="success" />
//       </div>
//     );
//   }
//   // console.log(animeDetails);
//   console.log(videoSources);
//   return (
//     <div className="p-2 grid  items-center">
//        {/* {videoSources.length > 0 && (
//         <div>
//           <VideoComponent videoSources={videoSources} />
//         </div>
//       )} */}
//       <div className="outline inset-1">
//         <Image
//           src={animeDetails?.image || "@app/public/vercel.svg"}
//           height={500}
//           width={300}
//           alt={animeDetails?.title || "Image"}
//         />
//       </div>

//       <h3>{animeDetails?.releaseDate}</h3>
//       <h3>{animeDetails?.totalEpisodes}</h3>
//       <h3>{animeDetails?.type}</h3>
//       <h3>{animeDetails?.url}</h3>

//       {animeDetails &&
//         animeDetails.episodes.map((episode: any, index: number) => <div>{episode.id}</div>)}
//     </div>
//   );
// };
// export default Anime;


// _________________________________________________________________________________________________________

// SWR library

"use client"
import useSWR from "swr"
import axios from "axios"
import Image from "next/image"
import { AnimeDetails } from "@/app/types/animeDetails"
import { CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import EpisodeList from "@/app/components/EpisodeList"
import { AnimeInfo } from "@/app/components/AnimeInfo"

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const Anime = ({ params }: { params: { id: string } }) => {
	const { id } = params
	const { data: animeDetails, error } = useSWR<AnimeDetails>(`/api/anime/${id}`, fetcher)
  const [episodeId, setEpisodeId]= useState<string | null>();

  useEffect(() => {
    if (animeDetails && animeDetails.episodes.length > 0) {
      setEpisodeId(animeDetails.episodes[0].id);
    }
  }, [animeDetails]);

  
	if (error) return <div>Failed to load</div>
	if (!animeDetails)
		return (
			<div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-100 border">
				<CircularProgress color="success" />
			</div>
		)
    // console.log(episodeId)
	return (
		<div className="grid justify-items-center items-center">
      <AnimeInfo animeDetails={animeDetails}/>
			<EpisodeList selectedEpisodeid={episodeId} episodes={animeDetails.episodes} setSelectedEpisodeId={setEpisodeId}/>
		</div>
	)
}

export default Anime
