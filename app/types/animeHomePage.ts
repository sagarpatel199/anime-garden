export interface animeTop {
    id: string,
    title: string,
    image: string,
    url: string,
    genres?: string[],
    episodeId?: string,
    episodeNumber?: number,
    releaseDate?:string

}

export interface animeHomePage{
    currentPage: number,
    hasNextPage: boolean,
    results: animeTop[]
}
