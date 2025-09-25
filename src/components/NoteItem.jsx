import React from "react";
import { showFormattedDate } from "../utils";

function NoteItem({ note, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <small>{showFormattedDate(note.createdAt)}</small>
      <div className="note-actions">
        <button onClick={() => onDelete(note.id)}>Hapus</button>
        <button onClick={() => onArchive(note.id)}>
          {note.archived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
