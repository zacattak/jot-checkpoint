import { generateId } from "../utils/GenerateId.js"


export class UniqueNote {
    constructor(data) {
        this.id = generateId()
        console.log('length of id', this.id.length);
        this.title = data.title
        this.body = data.body || ''
        this.lastAccessed = data.lastAccessed ? new Date(data.lastAccessed) : new Date()

    }

    get ListHTMLTemplate() {
        return `
        <p onclick="app.NotesController.setActiveUniqueNote('${this.id}')" class="fs-2 selectable px-5 d-flex justify-content-between" role="button" data-bs-dismiss="offcanvas">
        
        <b>${this.title}</b>
        <textarea name="body" id="body">${this.body}</textarea>
        
        <span>${this.LastAccessedDate} ${this.LastAccessedTime}</span>
        </p>
        `
    }

    get ActiveDetailsHTMLTemplate() {
        return `
        <div class="col-12">

        <div class="p-3">
    
            <textarea>${this.title}</textarea>
    
            <textarea>${this.body}</textarea>
    
            <span>${this.LastAccessedDate} ${this.LastAccessedTime}</span>
    
    
        </div>
        <div>
            <button onclick="app.NotesController.removeNote('${this.id}')" class="btn btn-danger">Delete</button>
        </div>
    </div>
        `
    }

    get LastAccessedDate() {
        return this.lastAccessed.toLocaleDateString()
    }
    get LastAccessedTime() {
        return this.lastAccessed.toLocaleTimeString()
    }
}
