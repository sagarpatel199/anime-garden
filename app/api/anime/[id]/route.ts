// src/app/api/anime/[id]/route.ts

import { NextResponse } from 'next/server';
import axios from 'axios';
import { AnimeDetails } from '@/app/types/animeDetails';
import { baseAnimeURL } from "@/config/apiConfig";

const res = NextResponse;

export async function GET(request: Request) {
	const url = new URL(request.url)
	const id = url.pathname.split('/').pop()
	if (!id || id === 'api' || id === '') {
		return res.json({ error: 'ID is required' }, { status: 400 });
	  }
	try {
		const response = await axios.get(`${baseAnimeURL}/gogoanime/info/${id}`)
		const animeDetails: AnimeDetails = response.data;
		return res.json(animeDetails)
	} catch (error) {
		return res.redirect('/')
	}
}