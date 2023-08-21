<template>
  <q-layout view="hHh Lpr lFf">
    <q-header reveal bordered class="structure-header">
      <q-toolbar class="structure-toolbar">
        <q-btn class="q-btn-menu" dense flat round @click="toggleLeftDrawer"> <img src="../assets/cardapio.png" alt=""> </q-btn>
        <header>
          <section class="header">
            <div class="d-flex justify-content-end
                align-items-center p-3">
              <div class="message">
                <div class="icon-message">
                  <a disabled href=""><img src="../assets/icon-message.png" alt=""></a>
                  <span class="notification"></span>
                </div>
              </div>
              <div class="notify">
                <div class="icon-notify">
                  <a disabled href=""><img src="../assets/notify.png" alt=""></a>
                  <span class="notification"></span>
                </div>
              </div>
              <div class="user">
                <a class="btn dropdown userPhoto" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <img class="user-photo" v-if="userPhoto" :src="userPhoto" alt="Foto do usuário">
                  <img class="dots-user" src="../assets/dots-menu.png" alt="">
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <div class="dropdown-company-menu"> <img src="../assets/Company.png" alt="">
                    <p>Alterar empresa</p>
                  </div>
                  <div class="select-dropdown"> <select class="form-select" aria-label="Default select example">
                      <option selected>Selecione</option>
                      <option value="1">Remaza</option>
                      <option value="2">Moto Remaza</option>
                      <option value="3">Daitan</option>
                      <option value="3">Primarca</option>
                      <option value="3">Websupply</option>
                    </select> <input class="btn disable" type="submit" value="OK"> </div>
                  <hr>
                  <!-- <div class="dropdown-settings"> <img src="../assets/Settings.png" alt="">
                    <p>Configurações</p>
                  </div> -->
                  <div v-if="showLogout" outline rounded @click="logout()" class="dropdown-exit">
                    <!-- <button v-if="showLogout" outline rounded @click="logout()"><img src="../assets/Logout.png" alt="">Sair</button> -->
                    <img src="../assets/Logout.png" alt="">
                    <p >Sair</p>
                  </div>
                </ul>
              </div>
            </div>
          </section>
        </header>
        <q-toolbar-title>
          <!-- <q-avatar class="img-menu">
            <img src="../assets/Mensagem.png" alt="">
            <img src="../assets/Mensagem.png" alt="">
          </q-avatar> -->
          <button v-if="showLogout" outline rounded @click="logout()">Logout</button>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
        <div class="logo">
          <img src="../assets/logo_remaza.png" alt="">
        </div>
        <div class="menu">
          <ul class="nav flex-column" id="nav_accordion">
            <li disabled  class="nav-item">
              <a class="nav-link" href="#">
                <img src="../assets/home.png" alt=""> Home
              </a>
            </li>
            <li disabled class="nav-item">
              <a class="nav-link" href="#">
                <img src="../assets/user.png" alt="">
                Colaboradores </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <img src="../assets/utensils-solid.png" alt="">
                Restaurante
              </a>
            </li>
            <li disabled class="nav-item">
              <a class="nav-link" href="#">
                <img src="../assets/bullhorn.png" alt=""> Comunicados e Avisos </a>
            </li>
            <li disabled class="nav-item">
              <a class="nav-link" href="#">
                <img src="../assets/award-solid.png" alt=""> Normas </a>
            </li>
          </ul>
        </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="footer">
        <q-toolbar-title class="footer">
          <div>
            <p>© Copyright 1998-{{ currentYear }} Empresas Remaza</p>
          </div>
        </q-toolbar-title>
    </q-footer>

  </q-layout>
  <!-- <button v-if="showLogout" outline rounded @click="logout()">Logout</button> -->
</template>

<script>
import { computed, onMounted, defineComponent, ref } from 'vue'
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
    const userPhoto = computed(() => store.state.example.userPhotoUrl)

    const logout = () => {
      localStorage.removeItem('access_token')
      localStorage.removeItem('username')
      store.commit('example/someMutation', false)
      router.push('/login') // redirecionar para a página de login
    }
    onMounted(() => {
      store.commit('example/someMutation', true)
    })
    return {
      count,
      increment,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      showLogout,
      logout,
      userPhoto,
      currentYear: new Date().getFullYear()
    }
  }
})
</script>
<style></style>
