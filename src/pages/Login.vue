<template>

      <main class="container structure  d-flex justify-content-center align-items-center">
        <section class="col-xl-6 col-lg-8 col-md-8 structure-img">
            <img class="col-xl-12 col-lg-12 col-md-12 " src="..//assets/Frame.png" alt="">
        </section>
        <section class="col-xl-6 col-lg-5 col-md-5 structure-entrar d-flex justify-content-center ">
            <div class="entrar">
                <img class="imagem" src="../assets/logo_remaza.png" alt="">
                <div class="introduce-left">
                    <p>Seja bem-vindo!</p>
                    <p>Para acessar a <span>intranet</span>, clique no botão abaixo:</p>
                </div>
                <q-form class="button-login" @submit="login()">
                <q-btn label="Entrar" class="button"  type="submit"/>
                </q-form>
                <div class="structure-entrar-Copyright">
                    <p>© Copyright 1998-2022 Empresas Remaza</p>
                </div>
            </div>
        </section>
    </main>
        <!-- // <q-form class="row justify-center" @submit="login()">
        //   <p class="col-12 text-h5 text-center">Login</p>
        //   <div class="col-md-4 col-ms-6 col-xs-10 q-gutter-y-sm">
        //     <div class="full-width q-pt-md">
        //       <q-btn label="Login" color="primary" class="full-width" outline rounded type="submit"/>
        //     </div>
        //   </div>
        // </q-form> -->
    </template>

<script>
import { defineComponent } from 'vue'
import msalInstance from '../auth'

export default defineComponent({
  name: 'LoginVue',
  data () {
    return {}
  },
  methods: {
    login () {
      // msalInstance.browserStorage.clear()
      const loginRequest = {
        scopes: ['user.read'] // Add any additional scopes as needed
      }

      msalInstance.loginPopup(loginRequest).then(res => {
        const userName = res.account.name
        const token = res.accessToken
        localStorage.setItem('access_token', token)
        localStorage.setItem('username', userName)
        this.$store.commit('example/someMutation', true)
        // console.log(res)
        this.$router.push('/home')
      })
        .catch(erro => console.log(erro))
    }
  }
})

</script>

<style>
*{
  overflow: hidden;
  padding: 0;
  margin: 0;
}
body {
  background: var(--remaza-color-linear, linear-gradient(180deg, #CBDAFC 15.90%, #D1E7F3 85.77%));
}

.structure{
  margin-top: 10%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.structure-img{
  display: flex;
  justify-content: center;
  align-items: center;
}

.entrar{
border-radius: 8px;
background-color: white;
justify-content: center;
align-items: center;
}

.imagem{
  min-width: 100%;
  width: 50px;
  padding: 20px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.introduce-left{
  padding: 20px;
}

.introduce-left span{
  color: var(--remaza-color-hover, #3F76DF);
}

.button-login{
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
  padding-top: 40px;
  padding-left: 40px;
}

@media (max-width: 793px)
{
  .structure-img{
    display: none;
  }
  .structure-entrar{
    margin-top: 10%;
  }
}

@media (max-width: 991px)
{
  .structure-img{
    margin-right:30px;
    width: 376px;
  }
  .structure{
    flex-wrap: wrap;
  }
}
</style>
