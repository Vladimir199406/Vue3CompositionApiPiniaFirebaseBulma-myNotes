<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item" @click.prevent="storeNotes.deleteNote(note.id)"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
/*
  imports
*/
import { computed } from "@vue/runtime-core";
import { useStoreNotes } from "@/stores/storeNotes";
/*
 store
*/
const storeNotes = useStoreNotes();

/*
 props
*/
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

/*
 computed
*/
const characterLength = computed(() => {
  const description = props.note.content.length > 1 ? "characters" : "character";
  return `${props.note.content.length} ${description}`;
});
</script>
