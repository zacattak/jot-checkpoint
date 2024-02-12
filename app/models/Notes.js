import { generateId } from "../utils/GenerateId.js"


export class UniqueNote {
    constructor(data) {
        this.id = generateId()
        console.log('length of id', this.id.length);
        this.title = data.title
        this.body = data.body
        this.lastAccessed = new Date()

    }

    get ListHTMLTemplate() {
        return `
     <p onclick="app.NotesController.setActiveNote('${this.id}')" class="fs-2 selectable px-5 d-flex justify-content-between" role="button" data-bs-dismiss="offcanvas">
    
      <b>${this.title}</b>
    
    <span>${this.LastAccessedDate}</span>
     </p>
        `
    }
}