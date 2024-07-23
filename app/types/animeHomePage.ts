export interface AnimeTop {
    id: string,
    title: string,
    image: string,
    url: string,
    genres?: string[],
    episodeId?: string,
    episodeNumber?: number,
    releaseDate?:string

}

export interface AnimeHomePage{
    currentPage: number,
    hasNextPage: boolean,
    results: AnimeTop[]
}
