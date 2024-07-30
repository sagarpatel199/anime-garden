import React, { memo } from "react"
import { AnimeDetails } from "../types/animeDetailsInterface"

export const AnimeInfo = memo(function AnimeInfo({ animeDetails }: { animeDetails: AnimeDetails }) {
	const time = new Date().toLocaleTimeString()
	console.log("Greeting was rendered at", new Date().toLocaleTimeString())
	return (
		<>
			<h3>{animeDetails.title}</h3>
			<p>{time}</p>
		</>
	)
})
