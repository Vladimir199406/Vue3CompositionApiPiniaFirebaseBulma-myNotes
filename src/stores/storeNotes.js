import { defineStore, acceptHMRUpdate } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisreprehenderit, sequi sed ut velit praesentium accusamus quam autem illo odithic? Dolores, iure. Eligendi minus ratione facilis error iste. ",
        },
        {
          id: "id2",
          content: "gdhfghfghfgh.  iste.",
        },
      ],
    }
  },
  actions: {
    addNote(newNoteContent) {
      const currentDate = new Date().getTime().toString();
      const note = {
        id: currentDate,
        content: newNoteContent,
      };
      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    }
  }
})

import.meta.hot && import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot));
