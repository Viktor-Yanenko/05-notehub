import { useMutation, useQueryClient } from '@tanstack/react-query';
import css from './NoteList.module.css'
import type { Note } from '../../types/notes';
import { deleteNote } from '../../services/noteService';

interface NoteListProps{
    notes: Note[] | undefined;
}

export default function NoteList({ notes }: NoteListProps) {
    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationFn: (id: number) => deleteNote(id),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['notes']})
        },
        onError: () => {},
    })

    return (
        <ul className={css.list}>
            {notes?.map(note => {
                return (
                    <li key={note.id} className={css.listItem}>
                        <h2 className={css.title}>{note.title}</h2>
                        <p className={css.content}>{note.content}</p>
                        <div className={css.footer}>
                            <span className={css.tag}>{note.tag}</span>
                            <button className={css.button} onClick={()=>mutation.mutate(note.id)}>Delete</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}