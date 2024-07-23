import { animeTop } from "../types/animeHomePage"
import Image from "next/image"

const AnimeHomeCard = ({ anime }: { anime: animeTop }) => {
  if(anime.title === '' || anime.title == null){
    anime.title= anime.id
  }
	return (
		<div className="cursor-pointer h-48 w-24">
			<Image
				style={{ width: "100", height: "150px" }}
				height={150}
				width={100}
				src={anime.image}
				alt={anime.title}
			/>
			<div>
				<h2 className="text-sm/[14px] text-nowrap overflow-hidden ">{anime.title}</h2>
				<p className="text-xs/[12px]">{anime.releaseDate == null ?  `Episode: ${anime.episodeNumber}` : `Release Date: ${anime.releaseDate}` }</p>
			</div>
		</div>
	)
}

export default AnimeHomeCard
