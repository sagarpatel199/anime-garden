"use client"

import { Episode } from "../types/animeDetailsInterface"

// Add `selected` to the props
const EpisodeButton: React.FC<{ episode: Episode; selected: boolean }> = ({
	episode,
	selected,
}) => {
	return (
		<div
			className={`flex justify-center items-center button ${
				selected
					? "bg-blue-500 text-white font-bold py-1 px-1 rounded-sm shadow-lg transform transition duration-300 hover:scale-110 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95"
					: "bg-slate-400 font-bold py-1 px-1 rounded-sm shadow-lg transform transition duration-300 hover:scale-110 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95"
			}`}>
			{episode.number}
		</div>
	)
}

export default EpisodeButton
