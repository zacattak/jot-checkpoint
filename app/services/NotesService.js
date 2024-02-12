import { AppState } from "../AppState.js";
import { UniqueNote } from "../models/Notes.js"
import { loadState, saveState } from "../utils/Store.js"

function _saveUniqueNotes() {
  saveState('uniqueNotes', AppState.uniqueNotes)
}

function _loadUniqueNotes() {
  const uniqueNotesFromLocalStorage = loadState('uniqueNotes', [UniqueNote])
  AppState.uniqueNotes = uniqueNotesFromLocalStorage
}

class NotesService {
  constructor() {
    _loadUniqueNotes()
  }

  setActiveUniqueNote(uniqueNoteId) {
    const foundNote = AppState.uniqueNotes.find(uniqueNote => uniqueNote.id == uniqueNoteId)

    AppState.activeUniqueNote = foundNote
  }

  updateUniqueNote(updatedUniqueNoteBody) {
    const activeUniqueNote = AppState.activeUniqueNote
    activeUniqueNote.body = updatedUniqueNoteBody
    activeUniqueNote.lastAccessed = new Date()
    _saveUniqueNotes()
    AppState.emit('activeUniqueNote')
  }

  createUniqueNote(uniqueNoteFormData) {
    const newUniqueNote = new UniqueNote(uniqueNoteFormData)
    AppState.uniqueNotes.push(newUniqueNote)
    _saveUniqueNotes()
  }

  removeNote(uniqueNoteId) {
    const uniqueNotesIndex = AppState.uniqueNotes.findIndex(uniqueNote => uniqueNote.id == uniqueNoteId)
    console.log('found index', uniqueNotesIndex);


    if (uniqueNotesIndex == -1) {
      throw new Error('index was -1, you messed something up bud, check your conditional for findIndex')
    }


    AppState.uniqueNotes.splice(uniqueNotesIndex, 1)


    _saveUniqueNotes()
  }
}

export const notesService = new NotesService()