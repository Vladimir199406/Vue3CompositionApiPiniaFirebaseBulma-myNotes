<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="columns is-mobile has-text-grey-light mt-2">
          <small class="column">{{ dateFormatted }}</small>
          <small class="column has-text-right">{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink href="#" class="card-footer-item" :to="`/edit-note/${note.id}`"
        >Edit</RouterLink
      >
      <a href="#" class="card-footer-item" @click.prevent="modal.deleteNote = true"
        >Delete</a
      >
    </footer>
    <ModalDelete v-if="modal.deleteNote" v-model="modal.deleteNote" :noteId="note.id" />
  </div>
</template>

<script setup>
/*
  imports
*/
import { computed, reactive, ref } from "@vue/runtime-core";
import { useStoreNotes } from "@/stores/storeNotes";
import { useDateFormat } from "@vueuse/core";
import ModalDelete from "./ModalDelete.vue";
/*
 store
*/
const storeNotes = useStoreNotes();

/*
 data
*/
const modal = reactive({
  deleteNote: false,
});

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

const dateFormatted = computed(() => {
  const date = new Date(parseInt(props.note.date));
  const formattedDate = useDateFormat(date, "MM-DD-YYYY HH:mm");
  return formattedDate.value;
});
</script>
