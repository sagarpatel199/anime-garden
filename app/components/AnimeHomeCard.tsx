"use client";
import { AnimeTop } from "../types/animeHomePage";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AnimeHomeCard = ({ anime }: { anime: AnimeTop }) => {
  const router = useRouter();

  // Provide a fallback title if it's missing
  const title = anime.title || anime.id;

  return (
    <div
      onClick={() => router.push(`/anime/${anime.id}`)}
      className="cursor-pointer h-auto w-fit rounded-lg overflow-hidden"
    >
      <Image
        style={{ width: "270px", height: "352px" }}
        height={352}
        width={270}
        src={anime.image}
        alt={title}
        draggable="false"
      />
      <div>
        <h2 className="text-sm text-wrap line-clamp-2 overflow-hidden">
          {title}
        </h2>
        <p className="text-xs">
          {anime.releaseDate
            ? `Release Date: ${anime.releaseDate}`
            : `Episode: ${anime.episodeNumber}`}
        </p>
      </div>
    </div>
  );
};

export default AnimeHomeCard;
