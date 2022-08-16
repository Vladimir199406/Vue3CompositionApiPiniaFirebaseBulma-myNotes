import { defineStore, acceptHMRUpdate } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "First test note. Good Work!",
        },
        {
          id: "id2",
          content: "Hello, Visitor!",
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
    },
    updateNote(id, content) {
      const index = this.notes.findIndex(note => note.id === id);
      this.notes[index].content = content;
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => note.id === id)[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count;
    }
  },
})

import.meta.hot && import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot));
