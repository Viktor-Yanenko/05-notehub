import css from './NoteList.module.css'
import type { Note } from '../../types/notes';

interface NoteListProps{
    // onSelect: (note: Note) => void;
    notes: Note[] | undefined;
}

export default function NoteList({notes}: NoteListProps){
    return (
        <ul className={css.list}>
            {notes?.map(note => {
                return (
                    <li key={note.id} className={css.listItem}>
                        <h2 className={css.title}>{note.title}</h2>
                        <p className={css.content}>{note.content}</p>
                        <div className={css.footer}>
                            <span className={css.tag}>{note.tag}</span>
                            <button className={css.button}>Delete</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}