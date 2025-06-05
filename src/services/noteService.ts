import axios from "axios";
import { type NewNoteData, type Note } from "../types/notes";

const API_KEY = import.meta.env.VITE_NOTEHUB_TOKEN;
const API_URL = 'https://notehub-public.goit.study/api/notes'

interface NotesHttpResponse{
    page: number;
    notes: Note[];
    totalPages: number;
}

export async function fetchNotes(page: number): Promise<NotesHttpResponse> {
    const response = await axios.get<NotesHttpResponse>(API_URL, {
        params: {
            page
        },
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer: ${API_KEY}`,
        }
    })
    return response.data;
}

export async function deleteNote(noteId: number) {
    const response = await axios.delete(`${API_URL}/${noteId}`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer: ${API_KEY}`,
        }
    })
    return response.data;
}

export async function createNote(noteData: NewNoteData) {
    const response = await axios.post<Note>(API_URL, noteData, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer: ${API_KEY}`,
        }
    })
    return response.data;
}