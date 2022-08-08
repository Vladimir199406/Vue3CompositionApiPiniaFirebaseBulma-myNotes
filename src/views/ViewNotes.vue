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
    <div class="card mb-4" v-for="note in notes" :key="note.id">
      <div class="card-content">
        <div class="content"></div>
        {{ note.content }}
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
/*
 imports
*/
import { ref } from "vue";
/*
 notes
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
</script>
