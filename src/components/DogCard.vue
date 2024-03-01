<template>
  <div class="q-pa-sm">
    <div class="shadow-5 rounded-borders">
      <q-card flat>
        <div class="q-pa-sm">
          <q-img :src="image" class="rounded-borders" ratio="1" width="300px" />
        </div>
        <q-card-section>
          <div class="text-capitalize text-h6">{{ breed }}</div>
          <div class="text-capitalize text-caption">{{ color }}</div>
          <div class="text-capitalize text-caption">{{ size }}</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DogInfo } from './models';

defineProps<DogInfo>();
</script>

<style scoped></style>
