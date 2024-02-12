import { UniqueNote } from './models/Notes.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  //   /**
  //   * @type {UniqueNote[]}
  // */

  uniqueNotes = [
    // new UniqueNote({
    //   title: 'Horse',
    //   body: 'Horses in the sunlight'

    // }),
    // new UniqueNote({
    //   title: 'Horses',
    //   body: 'Horses in the moonlight'

    // }),
  ]

  //   /**
  //   #@type {UniqueNote | null}
  // */

  activeUniqueNote = null

}

export const AppState = createObservableProxy(new ObservableAppState())