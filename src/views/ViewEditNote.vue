<template>
  <div class="edit-note">
    <AddEditNote ref="addEditNoteRef" v-model="noteContent">
      <template #buttons>
        <button class="button is-link has-background-success">Save Note</button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/*
 imports
*/
import { ref } from "vue";
import AddEditNote from "@/components/notes/AddEditNote.vue";

/*
 data
*/

const noteContent = ref("");
</script>
