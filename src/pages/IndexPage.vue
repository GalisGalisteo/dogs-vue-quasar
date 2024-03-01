<template>
  <q-page class="row items-center justify-evenly">
    <!-- <dog-list /> -->
    <dog-card-form />
  </q-page>
</template>

<script setup lang="ts">
import DogCardForm from 'src/components/DogCardForm.vue';
import DogList from 'src/components/DogList.vue';
</script>
