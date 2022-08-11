<template>
  <div class="edit-note">
    <AddEditNote
      ref="addEditNoteRef"
      v-model="noteContent"
      bgColor="link"
      placeholder="Edit Note`s content"
      label="Edit a Note"
    >
      <template #buttons>
        <button @click.prevent="$router.back()" class="mx-2 button is-link is-light">
          Cancel
        </button>
        <button
          @click="handleSaveClicked"
          class="button is-link has-background-success"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/*
 imports
*/
import { ref } from "vue";
import { useRoute } from "vue-router";
import AddEditNote from "@/components/notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";
/*
 router
*/
const route = useRoute();

/*
 store
*/
const storeNotes = useStoreNotes();

/*
 data
*/
const noteContent = ref("");
/*
 methods
*/
const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
};
/*
 other logic
*/
noteContent.value = storeNotes.getNoteContent(route.params.id);
</script>
