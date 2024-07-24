"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimeDetails } from "@/app/types/animeDetails";
import getAnimeDetailsData from "@/app/utils/getAnimeDetailsData";
const Anime = ({ params }: { params: { id: string } }) => {
  const [animeDetails, setAnimeDetails] = useState<AnimeDetails | null>(null);
  const id = params.id;
  console.log(id);
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

  console.log(animeDetails);

  return <div>Anime</div>;
};
export default Anime;
