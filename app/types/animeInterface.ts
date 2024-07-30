// src/app/types/anime.ts

export interface Anime {
	id: string
	title: string
	image: string
	url: string
	genres: string[]
	releaseDate: string
}
export interface AnimeList {
	currentPage: number
	hasNextPage: boolean
	results: Anime[]
}
