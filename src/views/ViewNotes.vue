<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new Note"
            ref="newNoteRef"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>
    <Note v-for="note in notes" :key="note.id" :note="note" @deleteClicked="deleteNote" />
  </div>
</template>

<script setup>
/*
 imports
*/
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
/*
 data
*/
const newNote = ref("");
const newNoteRef = ref(null);

const notes = ref([
  {
    id: "id1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisreprehenderit, sequi sed ut velit praesentium accusamus quam autem illo odithic? Dolores, iure. Eligendi minus ratione facilis error iste. ",
  },
  {
    id: "id2",
    content: "gdhfghfghfgh.  iste.",
  },
]);

/*
 methods
*/
const addNote = () => {
  const currentDate = new Date().getTime().toString();
  const note = {
    id: currentDate,
    content: newNote.value,
  };
  notes.value.push(note);

  newNote.value = "";
  newNoteRef.value.focus();
};

const deleteNote = (idToDelete) => {
  notes.value = notes.value.filter((note) => note.id !== idToDelete);
};
</script>
