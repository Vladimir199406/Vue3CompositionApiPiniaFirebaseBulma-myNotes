<template>
  <div class="card p-4 mb-5" :class="`has-background-${props.bgColor}-dark`">
    <div class="field">
      <label v-if="props.label" class="label has-text-white">{{ props.label }}</label>
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          class="textarea"
          :placeholder="props.placeholder"
          ref="textAreaRef"
          v-autofocus
          maxlength="100"
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
import { vAutofocus } from "@/directives/vAutofocus";

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
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Start Typing...",
  },
  label: {
    type: String,
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
