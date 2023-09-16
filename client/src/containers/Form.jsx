import React, { useState } from "react";
import "./Form.css";
import { FaPlus } from "react-icons/fa6";

const Form = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name,value);
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = async (evt) => {
    evt.preventDefault();
    if (note.title.length >= 15 && note.content.length >= 50) {
      await fetch("http://localhost:8080/notes/submit", {
        method: "POST",
        body: JSON.stringify(note),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setNote({
        title: "",
        content: "",
      });
    } else {
      setNote({
        title: "",
        content: "",
      });
    }
  };
  const getNotes = async () => {
    const response = await fetch("http://localhost:8080/notes/", {
      method: "GET",
    });
    const notes = await response.json();
    // console.log(note);
    props.onAdd(notes);
  };
  getNotes();

  return (
    <form className="create-note" onSubmit={submitNote}>
      <input
        type="text"
        placeholder="Enter Title..."
        name="title"
        onChange={handleChange}
        value={note.title}
      />
      <textarea
        rows="3"
        placeholder="Enter Content..."
        name="content"
        onChange={handleChange}
        value={note.content}
      />
      <button>
        <FaPlus className="plus-btn" />
      </button>
    </form>
  );
};
export default Form;
