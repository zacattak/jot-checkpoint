import { generateId } from "../utils/GenerateId.js"


export class UniqueNote {
    constructor(data) {
        this.id = generateId()
        console.log('length of id', this.id.length);
        this.title = data.title
        this.color = data.color
        this.body = data.body || ''
        this.lastAccessed = data.lastAccessed ? new Date(data.lastAccessed) : new Date()
        // FIXME add the createdAt property 

    }

    get ListHTMLTemplate() {
        return `
        <p onclick="app.NotesController.setActiveUniqueNote('${this.id}')" class="fs-2 selectable px-5 d-flex justify-content-between" role="button" data-bs-dismiss="offcanvas">
        
        <b style="color: ${this.color}">${this.title}</b>
        
        
        <span>${this.LastAccessedDate} ${this.LastAccessedTime}</span>
        </p>
        `
    }

    get ActiveDetailsHTMLTemplate() {
        // FIXME add the color to this template like above
        return `
        <div class="col-12">

        <div class="p-3">
            
            <p style="color:${this.color}">${this.title} <span>${this.LastAccessedDate} ${this.LastAccessedTime}</span></p>

            <textarea id="uniqueNoteTextArea">${this.body}</textarea>

            
    
        </div>
        <div>
            <button onclick="app.NotesController.updateUniqueNote('${this.id}')" class="btn btn-primary">Save Changes</button>
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
