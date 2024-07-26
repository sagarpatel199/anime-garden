"use client"
import { AnimeTop } from "../types/animeHomePage"
import Image from "next/image"
import { useRouter } from "next/navigation"
const AnimeHomeCard = ({ anime }: { anime: AnimeTop }) => {
  
	const router = useRouter()
	let title;
	// Provide a fallback title if it's missing
	if(!anime.title){
		title = anime.id.replaceAll("-", " ").toUpperCase()
	}else{
		title = anime.title
	}
  // const handleMouseOver = async () => {
  //   try {
      // const res: AnimeDetails = await getAnimeDetailsData(anime.id);  // Fetch anime details
      // setDetails(res)
  //   } catch (error) {
  //     console.error('Error fetching anime details:', error);
  //   }
  // };


  // const handleMouseOver = () => {
 
  // }

  
 
	return (
		<div
			onClick={() => router.push(`/anime/${anime.id}`)}
   
			className="cursor-pointer h-auto w-36  flex flex-col rounded-lg relative group transition-transform duration-100 hover:scale-110 border">
			<div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-xs text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
				{title}
			</div>
			<Image
				className="w-[135px] h-[210px] self-center"
				height={352}
				width={270}
				src={anime.image}
				alt={title}
        placeholder="blur"
        blurDataURL={anime.image}
        
				draggable="false"
			/>
			<div className="flex flex-grow flex-col justify-between ml-1">
				<div className="items-start">
					<h2 className="text-sm text-wrap line-clamp-2 overflow-hidden ">{title}</h2>
				</div>
				<div>
					<p className="text-xs self-end">
						{anime.releaseDate
							? `Release Date: ${anime.releaseDate}`
							: `Episode: ${anime.episodeNumber}`}
					</p>
				</div>
			</div>
		</div>
	)
}

export default AnimeHomeCard
