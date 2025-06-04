import { useState } from "react";
import fetchNotes from "../../services/noteService";
import NoteList from "../NoteList/NoteList";
import Pagination from "../Pagination/Pagination";
import SearchBox from "../SearchBox/SearchBox";
import css from './App.module.css'
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import NoteModal from "../NoteModal/NoteModal";


export default function App() {
    const [currentPage, setCurrentPage] = useState(1);
    // const [modal, setModal] = useState()

    const { data } = useQuery({
        queryKey: ['notes', currentPage],
        queryFn: () => fetchNotes(currentPage),
        placeholderData: keepPreviousData,
    })

    const totalPages = data?.totalPages ?? 0;

    return (
        <div className={css.app}>
            <header className={css.toolbar}>
                <SearchBox />
                {totalPages > 1 && <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />}
                <button className={css.button}>Create note +</button>
            </header>
            <NoteList notes={data?.notes} />
            <NoteModal />
        </div>
    )
}