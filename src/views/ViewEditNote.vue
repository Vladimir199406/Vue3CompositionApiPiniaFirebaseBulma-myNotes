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
        <button @click.prevent="goPrevRoute" class="mx-2 button is-link is-light">
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
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "@/components/notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";
/*
 router
*/
const route = useRoute();
const router = useRouter();

/*
 store
*/
const storeNotes = useStoreNotes();

/*
 data
*/
const noteContent = ref("");

/*
 computed
*/
const goPrevRoute = computed(() => {
  return router.back();
});

/*
 methods
*/
const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
/*
 other logic
*/
noteContent.value = storeNotes.getNoteContent(route.params.id);
</script>
