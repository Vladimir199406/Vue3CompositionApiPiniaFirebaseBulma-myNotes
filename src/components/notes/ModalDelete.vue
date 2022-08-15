<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete a Note?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        Please, Pay attention: these changes are permanent, You will NOT able to cancel
        them.
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-danger" @click="storeNotes.deleteNote(noteId)">
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
/*
 imports
*/
import { onMounted, onUnmounted, ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { onClickOutside } from "@vueuse/core";

/*
 data
*/
const modalCardRef = ref(null);

/*
 props
*/
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: String,
    required: true,
  },
});

/*
 emits
*/
const emit = defineEmits(["update:modelValue"]);

/*
 store
*/
const storeNotes = useStoreNotes();

/*
 methods
*/
const closeModal = () => {
  emit("update:modelValue", false);
};

const handleKeyboardExitModal = (e) => {
  e.key === "Escape" && closeModal();
};

/*
 hooks
*/
onMounted(() => {
  document.addEventListener("keyup", handleKeyboardExitModal);
});

onUnmounted(() => {
  document.removeEventListener("keyup", handleKeyboardExitModal);
});

/*
 other logic
*/
//composable
onClickOutside(modalCardRef, closeModal);
</script>
