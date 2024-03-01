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
        @click="console.log('details')"
      />
    </div>
  </q-page>

  <div></div>
</template>

<script setup lang="ts">
import { DogInfo } from './models';
import { ref } from 'vue';
import DogCard from './DogCard.vue';

const dogCards: DogInfo[] = [
  {
    id: 1,
    breed: 'keeshond',
    size: 'small',
    color: 'brown',
    image: 'https://images.dog.ceo/breeds/keeshond/n02112350_9112.jpg',
    dateCreated: new Date('2024-02-24T12:00:00'),
  },
  {
    id: 2,
    breed: 'weimaraner',
    size: 'medium',
    color: 'gray',
    image: 'https://images.dog.ceo/breeds/weimaraner/n02092339_439.jpg',
    dateCreated: new Date('2024-02-23T14:30:00'),
  },
  {
    id: 3,
    breed: 'husky',
    size: 'large',
    color: 'white',
    image: 'https://images.dog.ceo/breeds/husky/n02110185_12380.jpg',
    dateCreated: new Date('2024-02-22T10:15:00'),
  },
  {
    id: 4,
    breed: 'african',
    size: 'extra large',
    color: 'black',
    image: 'https://images.dog.ceo/breeds/african/n02116738_10081.jpg',
    dateCreated: new Date('2024-02-21T18:45:00'),
  },
  {
    id: 5,
    breed: 'terrier-tibetan',
    size: 'small',
    color: 'tan',
    image: 'https://images.dog.ceo/breeds/terrier-tibetan/n02097474_2554.jpg',
    dateCreated: new Date('2024-02-20T08:30:00'),
  },
  {
    id: 6,
    breed: 'leonberg',
    size: 'medium',
    color: 'golden',
    image: 'https://images.dog.ceo/breeds/leonberg/n02111129_2153.jpg',
    dateCreated: new Date('2024-02-19T20:20:00'),
  },
  {
    id: 7,
    breed: 'spitz-japanese',
    size: 'large',
    color: 'cream',
    image: 'https://images.dog.ceo/breeds/spitz-japanese/tofu.jpg',
    dateCreated: new Date('2024-02-18T16:10:00'),
  },
  {
    id: 8,
    breed: 'poodle-toy',
    size: 'extra large',
    color: 'white',
    image: 'https://images.dog.ceo/breeds/poodle-toy/n02113624_3344.jpg',
    dateCreated: new Date('2024-02-17T22:45:00'),
  },
  {
    id: 9,
    breed: 'schipperke',
    size: 'small',
    color: 'black',
    image: 'https://images.dog.ceo/breeds/schipperke/n02104365_7065.jpg',
    dateCreated: new Date('2024-02-16T11:30:00'),
  },
  {
    id: 10,
    breed: 'papillon',
    size: 'medium',
    color: 'brown',
    image: 'https://images.dog.ceo/breeds/papillon/n02086910_1971.jpg',
    dateCreated: new Date('2024-02-15T14:15:00'),
  },
];

const dogs = ref<DogInfo[]>(dogCards);
</script>
