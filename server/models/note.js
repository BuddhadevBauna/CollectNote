import mongoose from "mongoose";

const userNote  = new mongoose.Schema({
    noteTitle: String,
    noteContent: String
})
const Note = mongoose.model('Note', userNote);

export default Note;