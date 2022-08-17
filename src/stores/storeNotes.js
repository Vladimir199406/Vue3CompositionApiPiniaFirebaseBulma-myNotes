import { defineStore, acceptHMRUpdate } from 'pinia'
import { collection, onSnapshot, doc, setDoc, deleteDoc, updateDoc  } from "firebase/firestore";
import { db } from '@/js/firebase';

const notesCollectionRef = collection(db, 'notes');

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [

      ],
    }
  },
  actions: {
    async getNotes() {
      onSnapshot(notesCollectionRef, (querySnapshot) => {
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
    async addNote(newNoteContent) {
      const currentDate = new Date().getTime().toString();
      await setDoc(doc(notesCollectionRef, currentDate), {
        content: newNoteContent,
      });
    },
    async deleteNote(idToDelete) {
      await deleteDoc(doc(notesCollectionRef, idToDelete));
    },
    async updateNote(id, content) {
      const docRef = doc(notesCollectionRef, id);
      await updateDoc(docRef, {
        content: content
      });
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
