import { insertDB, saveDB, getDB } from "./db";

export const newNote = (note, tags) = async ()=>{
    const newNote = {
        tags,
        id: Date.now(),
        content:note
    }

    await insertDB(newNote)
    return newNote
}

export const getAllNotes = async () => {
    const {notes} = await getDB()
    return  notes
}