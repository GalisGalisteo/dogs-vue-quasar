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
        width="300px"
      />
    </div>
  </q-page>

  <div></div>
</template>

<script setup lang="ts">
import { DogInfo } from 'components/models';
import DogCard from 'components/DogCard.vue';

defineProps<{ dogs: DogInfo[] }>();
</script>
