<template>
  <q-page padding class="items-center justify-evenly">
    <div class="row q-px-sm items-center justify-evenly">
      <dog-card
        v-for="dog in dogs"
        :key="dog.id"
        :breed="dog.breed"
        :size="dog.size"
        :color="dog.color"
        :image="dog.image"
      />
    </div>
  </q-page>

  <div></div>
</template>

<script setup lang="ts">
import { DogInfo } from './models';
import DogCard from './DogCard.vue';

defineProps<{ dogs: DogInfo[] }>();
</script>
