// src/app/anime/[id]/page.tsx

"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimeDetails } from "@/app/types/animeDetails";
import getAnimeDetailsData from "@/app/utils/getAnimeDetailsData";
import Image from "next/image";
import { baseAnimeURL } from "@/config/apiConfig";
import axios from "axios";
const Anime = ({ params }: { params: { id: string } }) => {
  const [animeDetails, setAnimeDetails] = useState<AnimeDetails | null>(null);
  const id = params.id;
  console.log(id);
  let ep;
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
    return <h1>Loading...</h1>;
  }
  console.log(animeDetails);
  return (
    <div className="grid justify-items-center items-center">
      <Image
        src={animeDetails?.image || "@app/public/vercel.svg"}
        height={500}
        width={300}
        alt={animeDetails?.title || "Image"}
      />
      <h3>{animeDetails?.releaseDate}</h3>
      <h3>{animeDetails?.totalEpisodes}</h3>
      <h3>{animeDetails?.type}</h3>
      <h3>{animeDetails?.url}</h3>

      {animeDetails && animeDetails.episodes.map((episode, index)=> (
        <div >{episode.id}</div>
      ))}
    </div>
  );
};
export default Anime;



// import { AnimeDetails } from "@/app/types/animeDetails";
// import getAnimeDetailsData from "@/app/utils/getAnimeDetailsData";
// import Image from "next/image";
// import { baseAnimeURL } from "@/config/apiConfig";
// import axios from "axios";

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