import React, { useState, useEffect } from "react";
import { getInitialData } from "./utils";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-body" : "";
  }, [darkMode]);

  const addNote = (note) => setNotes([...notes, note]);
  const deleteNote = (id) => setNotes(notes.filter((note) => note.id !== id));
  const toggleArchive = (id) =>
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <nav className="navbar">
        <h1>Catatan Pribadi</h1>
        <SearchBar keyword={search} setKeyword={setSearch} />
      </nav>

      <div className="theme-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <NoteForm addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteList
        notes={filteredNotes.filter((note) => !note.archived)}
        onDelete={deleteNote}
        onArchive={toggleArchive}
      />
      <h2 className="archived-heading">Catatan Diarsipkan</h2>
      <NoteList
        notes={filteredNotes.filter((note) => note.archived)}
        onDelete={deleteNote}
        onArchive={toggleArchive}
      />
    </div>
  );
}

export default App;
