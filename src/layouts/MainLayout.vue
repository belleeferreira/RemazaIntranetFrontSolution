<template>
  <q-layout view="hHh Lpr lFf">
    <q-header reveal bordered class="structure-header">
      <q-toolbar class="structure-toolbar">
        <q-btn class="q-btn-menu" dense flat round @click="toggleLeftDrawer"> <img src="../assets/nav/cardapio.png" alt=""> </q-btn>
        <header>
          <section class="header">
            <div class="d-flex justify-content-end
                align-items-center p-3">
              <div class="message">
                <div class="icon-message">
                  <a disabled href=""><img src="../assets/nav/icon-message.png" alt=""></a>
                  <span class="notification"></span>
                </div>
              </div>
              <div class="notify">
                <div class="icon-notify">
                  <a disabled href=""><img src="../assets/nav/notify.png" alt=""></a>
                  <span class="notification"></span>
                </div>
              </div>
              <div class="user">
                <a class="btn dropdown userPhoto" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <img class="user-photo" v-if="(userPhoto || userPhotoLocal)" :src="userPhoto || userPhotoLocal" alt="Foto do usuário">
                  <img class="dots-user" src="../assets/nav/dots-menu.png" alt="">
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <div class="dropdown-company-menu"> <img src="../assets/nav/Company.png" alt="">
                    <p>Alterar empresa</p>
                  </div>
                  <div class="select-dropdown">
                    <select v-model="opcaoSelecionada" class="form-select" aria-label="Default select example" placeholder="Remaza">
                      <!-- <option selected>Selecione</option> -->
                      <option selected value="1">Remaza</option>
                      <option value="2">Moto Remaza</option>
                      <option value="3">Daitan</option>
                      <option value="4">Primarca</option>
                      <option value="5">Websupply</option>
                    </select> <input @click="gravarSelecao" class="btn disable" type="submit" value="OK"> </div>
                  <hr>
                  <!-- <div class="dropdown-settings"> <img src="../assets/Settings.png" alt="">
                    <p>Configurações</p>
                  </div> -->
                  <div v-if="showLogout" outline rounded @click="logout()" class="dropdown-exit">
                    <!-- <button v-if="showLogout" outline rounded @click="logout()"><img src="../assets/Logout.png" alt="">Sair</button> -->
                    <img src="../assets/nav/Logout.png" alt="">
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
    <q-drawer style="top: 30px;" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
        <div class="logo">
          <img src="../assets/login/logo_remaza.png" alt="">
        </div>
        <div class="menu">
          <ul class="nav flex-column" id="nav_accordion">
            <li class="nav-item">
              <router-link class="nav-link" to="/home">
                <img src="../assets/nav/home.png" alt=""> Home
              </router-link>
            </li>
            <li disabled class="nav-item">
              <a class="nav-link" href="#">
                <img src="../assets/nav/user.png" alt="">
                Colaboradores </a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link restaurante" to="/restaurante">
              <img src="../assets/nav/utensils-solid.png" alt="">
                Restaurante
            </router-link>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link restaurante"  href="/restaurante">
                <img src="../assets/nav/utensils-solid.png" alt="">
                Restaurante
              </a>
            </li> -->
            <li disabled class="nav-item">
              <a class="nav-link" href="#">
                <img src="../assets/nav/bullhorn.png" alt=""> Comunicados e Avisos </a>
            </li>
            <li disabled class="nav-item">
              <a class="nav-link" href="#">
                <img src="../assets/nav/award-solid.png" alt=""> Normas </a>
            </li>
          </ul>
        </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- <q-footer class="footer">
        <q-toolbar-title class="footer">
          <div>
            <p>© Copyright 1998-{{ currentYear }} Empresas Remaza</p>
          </div>
        </q-toolbar-title>
    </q-footer> -->

  </q-layout>
  <!-- <button v-if="showLogout" outline rounded @click="logout()">Logout</button> -->
</template>

<script>
import { computed, onMounted, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
// import { useRouter } from 'vue-router' // Importando o useRouter
import msalInstance from '../auth'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const leftDrawerOpen = ref(false)
    const opcaoSelecionada = ref('')
    // const opcaoGravada = ref('')
    const store = useStore()
    // const router = useRouter()
    const count = computed(() => store.state.count)
    const increment = () => {
      store.commit('increment')
    }
    const showLogout = computed(() => store.state.example.isLoggedIn)
    const userPhoto = computed(() => store.state.example.userPhotoUrl)
    const userPhotoLocal = localStorage.getItem('userphoto')

    // const showOpcaoSelecionada = computed(() => store.state.example.opcaoSelecionada)
    // const showOpcaoGravada = computed(() => store.state.example.opcaoGravada)

    const gravarSelecao = () => {
      console.log(store)
      // showOpcaoGravada.value = showOpcaoSelecionada.value
      store.commit('example/AlterarValorOpcaoSelecionada', opcaoSelecionada.value)
      // store.commit('example/AlterarValorOpcaoGravada', showOpcaoGravada.value)
      console.log(opcaoSelecionada)
      console.log(store)
    }

    // const userPhotoUrl = URL.createObjectURL(response.data)
    // localStorage.setItem('userphoto', userPhotoUrl)
    const logout = () => {
      localStorage.removeItem('access_token')
      localStorage.removeItem('username')
      localStorage.removeItem('userphoto')
      store.commit('example/someMutation', false)
      // router.push('/login') // redirecionar para a página de login
      msalInstance.logoutRedirect()
    }

    onMounted(() => {
      store.commit('example/someMutation', true)
      console.log(userPhoto, userPhotoLocal)
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
      userPhotoLocal,
      opcaoSelecionada,
      // showOpcaoGravada,
      gravarSelecao
      // currentYear: new Date().getFullYear()
    }
  }
})
</script>
<style></style>
