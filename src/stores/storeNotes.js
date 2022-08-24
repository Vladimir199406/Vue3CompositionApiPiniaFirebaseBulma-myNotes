import { defineStore, acceptHMRUpdate } from 'pinia'
import { collection, onSnapshot, doc, deleteDoc, updateDoc, query, orderBy, addDoc  } from "firebase/firestore";
import { db } from '@/js/firebase';
import { useStoreAuth } from "@/stores/storeAuth";

let notesCollectionRef;
let notesCollectionQuery;

let getNotesSnapshot = null;

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [

      ],
      notesLoaded: false,
    }
  },
  actions: {
    init() {
      const storeAuth = useStoreAuth();

      notesCollectionRef = collection(db, 'users', storeAuth.user.id, 'notes');
      notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));
      this.getNotes();
    },
    async getNotes() {
      this.notesLoaded = false;

      getNotesSnapshot && getNotesSnapshot();

      getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let storeNotes = [];
        querySnapshot.forEach((doc) => {
          const note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date
          }
          storeNotes.push(note)
        });
        this.notes = storeNotes;
        this.notesLoaded = true;
      }, (error) => {
        console.log('Error message: ', error.message);
      });
    },
    async addNote(newNoteContent) {
      const currentDate = new Date().getTime().toString();
      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date: currentDate
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
    },
    clearNotes() {
      this.notes = [];
    },
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
