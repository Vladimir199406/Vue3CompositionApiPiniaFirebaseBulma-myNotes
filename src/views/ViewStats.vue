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
  </div>
</template>

<script setup>
/*
 imports
*/
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useWatchCharacters } from "@/use/useWatchCharacters";
/*
 store
*/
const storeNotes = useStoreNotes();
</script>
