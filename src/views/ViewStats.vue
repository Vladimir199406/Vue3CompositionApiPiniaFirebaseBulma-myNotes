<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th class="pb-4">Field :</th>
          <th class="pb-4">Value :</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Characters number</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      type="text"
      class="input"
      placeholder="Your opinion"
      v-autofocus
      v-model="opinion"
      maxlength="100"
    />
  </div>
</template>

<script setup>
/*
 imports
*/
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { vAutofocus } from "@/directives/vAutoFocus";
import { useWatchCharacters } from "@/use/useWatchCharacters";

/*
 data
*/
const opinion = ref("");

/*
 store
*/
const storeNotes = useStoreNotes();

/*
 watchers
*/
useWatchCharacters(opinion, 50);
</script>
