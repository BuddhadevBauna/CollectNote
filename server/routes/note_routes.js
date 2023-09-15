import express from "express";
import {createNote, getNotes, deleteNote} from '../controllers/note_controller.js';

const router = express.Router();

router.post('/submit', createNote);
router.get('/', getNotes);
router.delete('/delete/:id', deleteNote);

export default router;