import React from "react"
import { Episode } from "../types/animeDetailsInterface"
import EpisodeButton from "./EpisodeButton"

const EpisodeList: React.FC<{episodes: Episode[],selectedEpisodeid:string | null | undefined, setSelectedEpisodeId: (id: string) => void}> = ({ episodes, selectedEpisodeid, setSelectedEpisodeId }) => {
	
	console.log("IN EPISODE LIST: ",selectedEpisodeid)
	return (
		<div>
			<h2>Episodes</h2>
			<div className="grid grid-cols-4 gap-2">
				{episodes.map((episode: Episode) => (
					<div key={episode.id} onClick={() => setSelectedEpisodeId(episode.id)}>
						<EpisodeButton episode={episode} selected={ episode.id === selectedEpisodeid ? false : true} />
						
					</div>
				))}
			</div>
		</div>
	)
}

export default EpisodeList
