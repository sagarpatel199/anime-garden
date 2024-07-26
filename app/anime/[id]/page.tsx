// "use client";
// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { AnimeDetails } from "@/app/types/animeDetails";
// import getAnimeDetailsData from "@/app/utils/getAnimeDetailsData";
// import Image from "next/image";
// import { baseAnimeURL } from "@/config/apiConfig";
// import axios from "axios";
// const Anime = ({ params }: { params: { id: string } }) => {
//   const [animeDetails, setAnimeDetails] = useState<AnimeDetails | null>(null);
//   const id = params.id;
//   console.log(id);
//   let ep;
//   useEffect(() => {
//     if (id) {
//       const fetchAnimeDetails = async () => {
//         try {
//           const details = await getAnimeDetailsData(id as unknown as string);
//           setAnimeDetails(details);
//         } catch (error) {
//           console.error("Failed to fetch anime details", error);
//         }
//       };

//       fetchAnimeDetails();
//     }

//     if (id) {
//       const fetchEpisode = async () => {
//         try {
//           const res = await axios.get(
//             `${baseAnimeURL}/gogoanime/watch/spy-x-family-episode-1`,
//             { params: { server: "gogocdn" } }
//           );

//           return res;
//         } catch (error) {
//           console.log(error);
//         }
//       };
//       ep = fetchEpisode();
//       console.log(ep);
//     }
//   }, []);

//   if (!animeDetails) {
//     return <h1>Loading...</h1>;
//   }

//   console.log(animeDetails);

//   return (
//     <div className="grid justify-items-center items-center">
//       <Image
//         src={animeDetails?.image || "@app/public/vercel.svg"}
//         height={500}
//         width={300}
//         alt={animeDetails?.title || "Image"}
//       />
//       <h3>{animeDetails?.releaseDate}</h3>
//       <h3>{animeDetails?.totalEpisodes}</h3>
//       <h3>{animeDetails?.type}</h3>
//       <h3>{animeDetails?.url}</h3>
//       <div className="video-container">
//         <video width="600" controls>
//           <source
//             src={
//               "https://www111.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1709225406.480.m3u8"
//             }
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };
// export default Anime;

"use client";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimeDetails } from "@/app/types/animeDetails";
import getAnimeDetailsData from "@/app/utils/getAnimeDetailsData";
import Image from "next/image";
import { baseAnimeURL } from "@/config/apiConfig";
import axios from "axios";
import Hls from "hls.js";

const Anime = ({ params }: { params: { id: string } }) => {
  const [animeDetails, setAnimeDetails] = useState<AnimeDetails | null>(null);
  const id = params.id;
  const videoRef = useRef(null);

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

    if (id) {
      const fetchEpisode = async () => {
        try {
          const res = await axios.get(
            `${baseAnimeURL}/gogoanime/watch/spy-x-family-episode-1`,
            { params: { server: "gogocdn" } }
          );
          console.log(res.data);
          const episodeUrl = res.data.sources.find(
            (source) => source.isM3U8
          ).url;
          if (videoRef.current) {
            if (Hls.isSupported()) {
              const hls = new Hls();
              hls.loadSource(episodeUrl);
              hls.attachMedia(videoRef.current);
              hls.on(Hls.Events.MANIFEST_PARSED, () => {
                videoRef.current.play();
              });
            } else if (
              videoRef.current.canPlayType("application/vnd.apple.mpegurl")
            ) {
              videoRef.current.src = episodeUrl;
              videoRef.current.addEventListener("loadedmetadata", () => {
                videoRef.current.play();
              });
            }
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchEpisode();
    }
  }, [id]);

  if (!animeDetails) {
    return <h1>Loading...</h1>;
  }

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
      <div className="video-container">
        <video ref={videoRef} width="600" controls>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Anime;
