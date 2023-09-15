import React from "react";
import './Note.css'
import { FaTrash } from "react-icons/fa6";

let Note = (props) => {
    const noteTitle = props.title;
    const noteContent = props.content;
    return (
        <div className="note">
            <h1>
                {noteTitle}
            </h1>
            <p>
                {noteContent}
            </p>
            <button 
                onClick={() => {
                    props.onDelete(props.id)
                }}>
                <FaTrash />
            </button>
        </div>
    );
}
export default Note;