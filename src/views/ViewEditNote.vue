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
        <button class="button is-link has-background-success" :disabled="!noteContent">
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
import AddEditNote from "@/components/notes/AddEditNote.vue";
import { computed } from "@vue/runtime-core";

/*
 data
*/
const noteContent = ref("");
</script>
