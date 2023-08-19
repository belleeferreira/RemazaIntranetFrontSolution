<template>
  <main class="container structure  d-flex justify-content-center align-items-center">
    <section class=" structure-img">
      <img class="col-xl-12 col-lg-12 col-md-12 " src="../assets/Frame.png" alt="">
    </section>
    <section class="col-xl-6 col-lg-5 col-md-5 structure-entrar d-flex justify-content-center ">
      <div class="entrar">
        <img class="imagem" src="../assets/logo_remaza.png" alt="">
        <div class="introduce-left">
          <p>Seja bem-vindo!</p>
          <p>Para acessar a <span>intranet</span>, clique no botão abaixo:</p>
        </div>
        <q-form class="button-login" @submit="login()">
          <q-btn label="Entrar" class="button" type="submit" />
        </q-form>
        <div class="structure-entrar-Copyright">
          <p>© Copyright 1998-2022 Empresas Remaza</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import msalInstance from '../auth'
import axios from 'axios'

export default defineComponent({
  name: 'LoginVue',
  data () {
    return {
      userPhotoUrl: null
    }
  },
  methods: {
    login () {
      // msalInstance.browserStorage.clear()
      const loginRequest = {
        scopes: ['user.read', 'User.ReadWrite.All', 'User.Read.All'] // Add any additional scopes as needed
      }

      msalInstance.loginPopup(loginRequest).then(res => {
        const userName = res.account.name
        const token = res.accessToken
        localStorage.setItem('access_token', token)
        localStorage.setItem('username', userName)
        this.$store.commit('example/someMutation', true)
        // console.log(res)
        this.getUserPhoto(token)
        this.$router.push('/restaurante')
      })
        .catch(erro => console.log(erro))
    },
    async getUserPhoto (accessToken) {
      const graphApiUrl = 'https://graph.microsoft.com/v1.0/me/photo/$value'

      try {
        const response = await axios.get(graphApiUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}` // Use this.accessToken
          },
          responseType: 'blob'
        })
        const userPhotoUrl = URL.createObjectURL(response.data)
        this.$store.commit('example/AlterarValorFoto', userPhotoUrl)
      } catch (error) {
        console.error('Erro ao obter a foto do perfil:', error)
      }
    }
  }
})

</script>

<style>
/* *{
  overflow: hidden;
  padding: 0;
  margin: 0;
} */

.bgBody{
background: linear-gradient(#CBDAFC, #D1E7F3);
background-repeat: no-repeat;
min-height: 100vh;
}
/* body {
  background: var(--remaza-color-linear);
} */

.structure {
  margin-top: 10%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.structure-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.entrar {
  border-radius: 8px;
  background-color: white;
  justify-content: center;
  align-items: center;
}

.imagem {
  min-width: 100%;
  width: 50px;
  padding: 20px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.introduce-left {
  padding: 20px;
}

.introduce-left span {
  color: var(--remaza-color-hover, #3F76DF);
}

.button-login {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  background-color: rgba(244, 129, 32, 1);
  max-width: 100%;
  width: 136px;
  height: 40px;
  border: 4px;
  color: white;
  font-weight: 400;
  font-size: 16px;
}

.structure-entrar-Copyright p {
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 40px; */
}

@media (max-width: 793px) {
  .structure-img {
    display: none;
  }

  .structure-entrar {
    margin-top: 10%;
  }
}

@media (max-width: 991px) {
  .structure-img {
    margin-right: 30px;
    width: 376px;
  }

  .structure {
    flex-wrap: wrap;
  }
}

:root {
  --color-red: #D55A67;
  --color-primary: #00AEEF;
  --color-secondary: #102155;
  --color-highlight: #F48120;
  --color-white: #fff;
  --color-black: #0B0B0B;
  --color-light-gray: #C0BEBF;
  --color-gray: #928F91;
  --color-bg: #E3F5FF;
  --color-tag: #DFEAFF;
  --color-br-gray: #F0F0F0;
  --color-yellow: #FFF3D4;
  --color-hover: #3F76DF;
  --color-green: #B2DE27;
  --color-cor1: #CBDAFC;
  --color-cor2: #D1E7F3;
  --color-linear: linear-gradient(#CBDAFC, #D1E7F3);
  --color-bg-gray: #F0F0F0;
}
</style>
