// src/app/types/animeDetails.ts

export interface Episode {
	id: string;
	number: number;
	url: string;
  }
  
  export interface AnimeDetails {
	id: string;
	title: string;
	url: string;
	image: string;
	releaseDate: string | null;
	description: string | null;
	genres: string[];
	subOrDub: 'sub' | 'dub';
	type: string | null;
	status: string;
	otherName: string | null;
	totalEpisodes: number;
	episodes: Episode[];
  }
  