import AnimeHomeCard from "./components/AnimeHomeCard"
import HomeCarousel from "./components/ScrollList"
import { AnimeHomePage } from "./types/animeHomePage"
import getHomeData from "./utils/getHomeData"
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined"
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined"
// Styles
const homeListStyle = "flex flex-nowrap gap-2 p-2 w-full overflow-x-auto border-2"
const homeListStyleOuter = "flex flex-row w-full overflow-x-auto scroll-smooth justify-center items-center "
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
		<main className="flex min-h-screen flex-col items-start justify-between p-12 gap-10 border-2 m-4 ">
			<HomeCarousel list={homeAnimePopular}/>
			<HomeCarousel list={homeAnimeRecentlyUpdated}/>
			<HomeCarousel list={homeAnimeTopAiring}/>
		</main>
	)
}

export default Home
