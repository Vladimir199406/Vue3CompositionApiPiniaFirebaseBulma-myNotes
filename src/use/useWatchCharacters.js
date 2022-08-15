import { watch } from "vue";

export function useWatchCharacters(valueToWatch, maxChar = 100) {
  watch(valueToWatch, (newValue) => {
    newValue.length === maxChar && alert(`${maxChar} is max length of characters`);
  });
}