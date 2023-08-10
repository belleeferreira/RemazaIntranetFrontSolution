<template>
  <q-layout view="hHh Lpr lFf">
    <q-header reveal bordered class="bg-primary text-white structure-header">
      <q-toolbar class="structure-toolbar">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <button v-if="showLogout" outline rounded @click="logout()">Logout</button>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered class="structure-layout">
      <!-- drawer content -->
      <p>hduh</p>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <!-- <button v-if="showLogout" outline rounded @click="logout()">Logout</button> -->
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router' // Importando o useRouter

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const leftDrawerOpen = ref(false)
    const store = useStore()
    const router = useRouter()
    const count = computed(() => store.state.count)
    const increment = () => {
      store.commit('increment')
    }

    const showLogout = computed(() => store.state.example.isLoggedIn)

    const logout = () => {
      localStorage.removeItem('access_token')
      localStorage.removeItem('username')
      store.commit('example/someMutation', false)
      router.push('/login') // redirecionar para a página de login
    }
    return {
      count,
      increment,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      showLogout,
      logout
    }
  }
})
</script>
<style scoped>
.q-page{
  background: var(--padro-color-white, #F9F9F9) !important;
}
.structure-toolbar, .structure-header{
  background: var(--padro-color-white, #F9F9F9) !important;
  border: none;
}
</style>
