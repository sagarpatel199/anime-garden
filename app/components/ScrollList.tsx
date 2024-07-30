// "use client"
// import React from "react"
// import { AnimeHomePage } from "../types/animeHomePage"
// import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined"
// import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined"
// import AnimeHomeCard from "./AnimeHomeCard"
// const HomeCarousel = ({ list }: { list: AnimeHomePage }) => {
// 	const homeListStyleOuter ="flex flex-row w-full scroll-smooth justify-center items-center"
// 	const homeListStyle = "flex flex-nowrap gap-2 p-4 w-full overflow-y-hidden overflow-x-auto no-scrollbar border-2"
// 	return (
// 		<div className={homeListStyleOuter}>
// 			<ArrowCircleLeftOutlinedIcon />
// 			<div className={homeListStyle}>
// 				{list &&
// 					list.results.map((anime, index) => (
// 						<div className="flex" key={index}>
// 							<AnimeHomeCard anime={anime} />
// 						</div>
// 					))}
// 			</div>
// 			<ArrowCircleRightOutlinedIcon />
// 		</div>
// 	)
// }

// export default HomeCarousel;

"use client"
import React, { useRef, useState } from "react"
import { AnimeHomePage } from "../types/animeHomePageInterface"

import ArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import AnimeHomeCard from "./AnimeHomeCard"

const HomeCarousel = ({ list }: { list: AnimeHomePage }) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const [isDragging, setIsDragging] = useState(false)
	const [startX, setStartX] = useState(0)
	const [scrollLeft, setScrollLeft] = useState(0)

	const handleMouseDown = (e: React.MouseEvent) => {
		setIsDragging(true)
		setStartX(e.pageX - (containerRef.current?.offsetLeft ?? 0))
		setScrollLeft(containerRef.current?.scrollLeft ?? 0)
	}

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging) return
		const x = e.pageX - (containerRef.current?.offsetLeft ?? 0)
		const walk = (x - startX) * 2 // Adjust scroll speed
		if (containerRef.current) {
			containerRef.current.scrollLeft = scrollLeft - walk
		}
	}

	const handleMouseUp = () => {
		setIsDragging(false)
	}

	// const handleTouchStart = (e: React.TouchEvent) => {
	// 	setIsDragging(true)
	// 	setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft ?? 0))
	// 	setScrollLeft(containerRef.current?.scrollLeft ?? 0)
	// }

	// const handleTouchMove = (e: React.TouchEvent) => {
	// 	if (!isDragging) return
	// 	const x = e.touches[0].pageX - (containerRef.current?.offsetLeft ?? 0)
	// 	const walk = (x - startX) * 2 // Adjust scroll speed
	// 	if (containerRef.current) {
	// 		containerRef.current.scrollLeft = scrollLeft - walk
	// 	}
	// }

	// const handleTouchEnd = () => {
	// 	setIsDragging(false)
	// }

	const scrollTo = (direction: "left" | "right") => {
		const container = containerRef.current
		if (container) {
			const scrollAmount = 918 // Adjust this value as needed
			if (direction === "right") {
				container.scrollBy({ left: scrollAmount, behavior: "smooth" })
				//loop back to the start
				if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
					setTimeout(() => {
						container.scrollLeft = 0
					}, 300) // Match the timeout with the scroll amount time
				}
			} else {
				container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
				if (container.scrollLeft === 0) {
					setTimeout(() => {
						container.scrollLeft = container.scrollWidth
					}, 300)
				}
			}
		}
	}

	return (
		<div className="relative w-full flex items-center ">
			<ArrowBackIosTwoToneIcon
				onClick={() => scrollTo("left")}
				className="absolute text-4xl left-0 cursor-pointer z-10 transition-transform duration-300 ease-in-out transform bg-opacity-30 bg-black text-white hover:scale-110 hover:bg-opacity-70 hover:bg-black hover:text-white hover:border-50 rounded-full p-2"
			/>
			<div
				ref={containerRef}
				className="flex flex-nowrap gap-2 p-2 w-full overflow-y-hidden overflow-x-auto no-scrollbar border-2 snap-x snap-mandatory"
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp} // Handle case where mouse leaves area
				// onTouchStart={handleTouchStart}
				// onTouchMove={handleTouchMove}
				// onTouchEnd={handleTouchEnd}
				>
				{list.results.map((anime, index) => (
					<div className="flex carousel-container" key={index}>
						<AnimeHomeCard anime={anime} />
					</div>
				))}
			</div>
			<ArrowForwardIosTwoToneIcon
				onClick={() => scrollTo("right")}
				className="absolute text-4xl right-0 cursor-pointer z-10 transition-transform duration-300 ease-in-out transform bg-opacity-30 bg-black text-white hover:scale-110 hover:bg-opacity-70 hover:bg-black hover:text-white hover:border-50 rounded-full p-2"
				
			/>
		</div>
	)
}

export default HomeCarousel;