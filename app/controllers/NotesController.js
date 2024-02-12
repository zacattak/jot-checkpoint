import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawUniqueNotes() {
    console.log('drawing');
    const uniqueNotes = AppState.uniqueNotes
    let htmlString = ''
    uniqueNotes.forEach(uniqueNote => htmlString += uniqueNote.ListHTMLTemplate)
    setHTML('uniqueNotesList', htmlString)

}

function _drawActiveUniqueNote() {
    const uniqueNote = AppState.activeUniqueNote
    setHTML('uniqueNoteDetails', uniqueNote.ActiveDetailsHTMLTemplate)
}


export class NotesController {
    constructor() {
        // console.log('locked and loaded');
        _drawUniqueNotes()

        AppState.on('uniqueNotes', _drawUniqueNotes)
        AppState.on('activeUniqueNote', _drawActiveUniqueNote)
    }

    setActiveUniqueNote(uniqueNoteId) {
        // console.log('setting');
        notesService.setActiveUniqueNote(uniqueNoteId)
    }
    updateUniqueNote() {
        const textAreaElement = document.getElementById('uniqueNoteTextArea')

        // console.log('text content', textAreaElement.value)

        const updatedUniqueNoteBody = textAreaElement.value
        notesService.updateUniqueNote(updatedUniqueNoteBody)
    }
    createNote() {
        try {
            event.preventDefault()
            const form = event.target
            const uniqueNoteFormData = getFormData(form)
            notesService.createUniqueNote(uniqueNoteFormData)




        }
        catch (error) {
            Pop.error(error)

        }
    }

    async removeNote(uniqueNoteId) {
        const wantsToRemove = await Pop.confirm('are you sure?')
        if (!wantsToRemove) {
            return
        }
        console.log('removing', uniqueNoteId)
        notesService.removeNote(uniqueNoteId)
    }
}