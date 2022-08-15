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
        <button class="button is-danger">Delete</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
/*
 imports
*/
import { ref } from "vue";
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
});

/*
 emits
*/
const emit = defineEmits(["update:modelValue"]);

/*
 methods
*/
const closeModal = () => {
  emit("update:modelValue", false);
};

/*
 other logic
*/
//composable
onClickOutside(modalCardRef, closeModal);
</script>
