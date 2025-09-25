import React, { useState } from "react";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const maxChar = 50;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    addNote(newNote);
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <p>Sisa karakter: {maxChar - title.length}</p>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          if (e.target.value.length <= maxChar) setTitle(e.target.value);
        }}
        placeholder="Judul"
        required
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Isi catatan"
        required
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default NoteForm;
