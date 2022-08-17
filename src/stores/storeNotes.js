import { defineStore, acceptHMRUpdate } from 'pinia'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '@/js/firebase';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [

      ],
    }
  },
  actions: {
    async getNotes() {
      onSnapshot(collection(db, 'notes'), (querySnapshot) => {
        let storeNotes = [];
        querySnapshot.forEach((doc) => {
          const note = {
            id: doc.id,
            content: doc.data().content
          }
          storeNotes.push(note)
          this.notes = storeNotes;
        }); 
      });
    },
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
