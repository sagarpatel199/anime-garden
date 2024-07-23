import { animeTop } from "../types/animeHomePage";
import Image from "next/image";

const AnimeHomeCard = (anime: animeTop) => {
  return (
    <div>
      <Image height={500} width={300} src={anime.image} alt={anime.title} />
      <h1>{anime.title}</h1>
      <h2>{anime.genres}</h2>
      <p>{anime.releaseDate}</p>
    </div>
  );
};

export default AnimeHomeCard;
