<template>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
  
          <q-toolbar-title class="text-weight-bolder, text-h4">
            Knjiznica (admin)
          </q-toolbar-title>
  
          <div>Quasar v{{ $q.version }}</div>
        </q-toolbar>
      </q-header>
  
      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
      >
        <q-list>
          <q-item-label
            header
          >
            Essential Links
          </q-item-label>
  
          <EssentialLink
            v-for="link in linksList"
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
  
  <script setup>
  import { computed, ref } from 'vue'
  import EssentialLink from 'components/EssentialLink.vue'
  
  defineOptions({
    name: 'AdminLayout'
  });

  let title = computed(() => {
    return "Knjiznica (admin)"
  });
  
  const linksList = [
    {
      title: 'Admin',
      caption: 'Početna stranica',
      icon: 'home',
      link: '#/admin'
    },
    {
      title: 'Popis korisnika',
      caption: 'Popis korisnika',
      icon: 'book',
      link: '#/admin/Popis_korisnika'
    },
    {
      title: 'Pretrazivanje',
      caption: '',
      icon: 'search',
      link: '#/admin/Pretrazivanje'
    },
    {
      title: 'Unos knjiga',
      caption: 'Saznajte nešto o nama',
      icon: 'record_voice_over',
      link: '#/admin/Unos_knjiga'
    },
    {
      title: 'Logout',
      caption: 'Odjava',
      icon: 'logout',
      link: '#/admin/Logout'
    },
    {
      title: 'Popis knjiga baza',
      caption: 'Popis knjiga baza',
      icon: 'book',
      link: '#/admin/PopisKnjigaBaza'
    }
  ]
  
  const leftDrawerOpen = ref(false)
  
  function toggleLeftDrawer () {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }
  </script>
  