<template>
  <q-layout view="hHh Lpr lFf">
    <q-header reveal bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <button v-if="showLogout" outline rounded @click="logout()">Logout</button>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <!-- <button v-if="showLogout" outline rounded @click="logout()">Logout</button> -->
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const leftDrawerOpen = ref(false)
    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      showLogout () {
        return this.$store.state.example.isLoggedIn
      },
      logout () {
        localStorage.removeItem('access_token')
        localStorage.removeItem('username')
        localStorage.setItem('isLoggedIn', '')
        this.$store.commit('example/someMutation', false)
        this.$router.push('/') // redirecionar para a página de login
      }
    }
  }
})
</script>
