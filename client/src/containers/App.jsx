import React, { useState } from "react";
import './App.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "./Form";
import Note from "../components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (allNote) => {
    setNotes(allNote);
  };
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/notes/delete/${id}`, {
        method: "DELETE",
      });
      console.log(response);
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.log("error occure on deleting the note", error);
    }
    setNotes((prevNotes) => {
      // console.log(notes);
      return prevNotes.filter((noteItem) => {
        return noteItem._id !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <Form onAdd={addNote} />
      <div className="note-container">
        {notes.map((noteItem) => {
          return (
            <Note
              key={noteItem._id}
              id={noteItem._id}
              title={noteItem.noteTitle}
              content={noteItem.noteContent}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export default App;
