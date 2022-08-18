<template>
  <div class="notes">
    <AddEditNote v-model="newNote" ref="addEditNoteRef" placeholder="Start Typing...">
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button></template
      >
    </AddEditNote>

    <progress
      v-if="!storeNotes.notesLoaded"
      class="progress is-large is-info is-success"
      max="100"
    />

    <template v-else>
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    </template>
  </div>
</template>

<script setup>
/*
 imports
*/
import { ref } from "vue";
import Note from "@/components/notes/Note.vue";
import AddEditNote from "@/components/notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useWatchCharacters } from "@/use/useWatchCharacters";
/*
 data
*/
const newNote = ref("");
const addEditNoteRef = ref(null);
/*
 store
*/
const storeNotes = useStoreNotes();
/*
 methods
*/
const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};

const deleteNote = (idToDelete) => {
  notes.value = notes.value.filter((note) => note.id !== idToDelete);
};
/*
 emits
*/
const emit = defineEmits(["update:modelValue"]);

/*
 watchers
*/
useWatchCharacters(newNote);
</script>
