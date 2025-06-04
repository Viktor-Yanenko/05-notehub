import axios from "axios";
import { type Note } from "../types/notes";

const API_KEY = import.meta.env.VITE_NOTEHUB_TOKEN;
const API_URL = 'https://notehub-public.goit.study/api/notes'

interface NotesHttpResponse{
    page: number;
    notes: Note[];
    totalPages: number;
}

export default async function fetchNotes(page: number): Promise<NotesHttpResponse> {
    const response = await axios.get<NotesHttpResponse>(API_URL, {
        params: {
            page
        },
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer: ${API_KEY}`,
        }
    })
    console.log(response.data)
    return response.data;
}