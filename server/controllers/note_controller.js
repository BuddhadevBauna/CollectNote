import Note from "../models/note.js";

const createNote = async (req,res) => {
    // console.log(req.body);
    let note = new Note({
        noteTitle : req.body.title,
        noteContent : req.body.content
    });
    const doc = await note.save();
    // console.log(doc);
    res.json(doc)
}

const getNotes = async (req,res) => {
    const docs = await Note.find({});
    res.json(docs);
}

const deleteNote = async (req,res) => {
    const particularNoteId = req.params.id;
    await Note.findOneAndDelete({_id: particularNoteId})
    res.send("Note deleted successfully");
}

export {createNote, getNotes, deleteNote};