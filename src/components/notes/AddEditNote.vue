<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          class="textarea"
          placeholder="Add a new Note"
          ref="textAreaRef"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control"><slot name="buttons"></slot></div>
    </div>
  </div>
</template>

<script setup>
/*
 import
*/
import { ref } from "vue";

/*
 data
*/
const textAreaRef = ref(null);

/*
 props
*/
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

/*
 methods
*/
const focusTextarea = () => {
  textAreaRef.value.focus();
};

defineExpose({
  focusTextarea,
});
</script>
