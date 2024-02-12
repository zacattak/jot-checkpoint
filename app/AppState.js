import { UniqueNote } from './models/Notes.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  uniqueNotes = [
    new UniqueNote({
      title: '',
      body: ''

    })
  ]

}

export const AppState = createObservableProxy(new ObservableAppState())