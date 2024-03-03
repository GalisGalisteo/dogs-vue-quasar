<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-icon class="q-ml-lg" name="fa-solid fa-dog" size="sm" />
        <q-toolbar-title> Dogs_q </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Author Github',
    caption: 'github.com/galisgalisteo',
    icon: 'school',
    link: 'https://github.com/galisgalisteo',
  },
  {
    title: 'Repository Github',
    caption: 'github.com/GalisGalisteo/dogs-vue-quasar',
    icon: 'code',
    link: 'https://github.com/GalisGalisteo/dogs-vue-quasar',
  },
  {
    title: 'LinkedIn',
    caption: 'es.linkedin.com/in/jordi-galisteo-mendoza',
    icon: 'record_voice_over',
    link: 'https://es.linkedin.com/in/jordi-galisteo-mendoza',
  },
];

const rightDrawerOpen = ref(false);

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>
