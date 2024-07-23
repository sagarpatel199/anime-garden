import AnimeHomeCard from "./components/AnimeHomeCard"
import { AnimeHomePage } from "./types/animeHomePage"
import getHomeData from "./utils/getHomeData"

// Styles
const homeListStyle = "flex gap-2 p-2 w-full overflow-hidden";
const homeListStyleVertical =  "flex flex-col gap-2 p-2 w-full";
const homeCardStyle = "flex"


const Home = async () => {
	let homeAnime: AnimeHomePage[] = []
	let homeAnimePopular: AnimeHomePage | undefined
	let homeAnimeTopAiring: AnimeHomePage | undefined
	let homeAnimeRecentlyUpdated: AnimeHomePage | undefined

	try {
		homeAnime = await getHomeData()
		homeAnimePopular = homeAnime[0]
		homeAnimeTopAiring = homeAnime[1]
		homeAnimeRecentlyUpdated = homeAnime[2]
	} catch (error) {
		return <div>Error: {error.message}</div>
	}

	return (
		<main className="flex min-h-screen flex-row items-start justify-between p-12 overflow-hidden">
			<div className="flex flex-col w-5/6 gap-4">
				<div className={homeListStyle}>
					{homeAnimePopular &&
						homeAnimePopular.results.map((anime, index) => (
							<div className="flex" key={index}>
								<AnimeHomeCard anime={anime} />
							</div>
						))}
				</div>
				<div className={homeListStyle}>
					{homeAnimeRecentlyUpdated &&
						homeAnimeRecentlyUpdated.results.map((anime, index) => (
							<div className="flex" key={index}>
								<AnimeHomeCard anime={anime} />
							</div>
						))}
				</div>
			</div>
			<div className="flex-1 w-1/6">
				<div className={homeListStyleVertical}>
					{homeAnimeTopAiring &&
						homeAnimeTopAiring.results.map((anime, index) => (
							<div className="flex" key={index}>
								<AnimeHomeCard anime={anime} />
							</div>
						))}
				</div>
			</div>
		</main>
	)
}

export default Home
