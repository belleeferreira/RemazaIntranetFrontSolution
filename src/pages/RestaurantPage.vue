<!-- conteudo principal -->
<template id="conteudo">
  <div class="row">
    <div class="">
      <div class="row ">
        <div class="bemvindo ">
          <aside>
            <div class="container">
              <span class="iconText">
                <img src="../assets/utensils-orange.png" alt="" />
                <h1><strong>Restaurante</strong></h1>
              </span>
              <a class="link-home" href="#">Home</a><img src="../assets/chevron-right.png" alt=""><a class="second-link" href="#">Restaurante</a>
              <span class="iconText buttonNotification">
                <strong>
                  <h3>Cardápio da semana: 05/12/2022 - 09/12/2022</h3>
                </strong>
                <button
                  disabled
                  class="buttonActivateNotification"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img
                    class="iconActivateNotification"
                    src="../assets/notify-white.png"
                  />
                  Ativar notificações
                </button>
              </span>
            </div>
          </aside>
        </div>
      </div>
      <!--paginação para o dias da semana que mostra o cardapio-->
      <div class="row">
        <div class="">
          <div class="p-3">
            <ul class="navigationWeeks">
              <li class="navigationWeeksTrue">
                <div>
                  <p>seg</p>
                  <p class="whiteCircle">3</p>
                </div>
              </li>
              <li>
                <div>
                  <p>ter</p>
                  <p class="whiteCircle">3</p>
                </div>
              </li>
              <li>
                <div>
                  <p>qua</p>
                  <p class="whiteCircle">07</p>
                </div>
              </li>
              <li>
                <div>
                  <p>qui</p>
                  <p class="whiteCircle">08</p>
                </div>
              </li>
              <li>
                <div>
                  <p>sex</p>
                  <p class="whiteCircle">09</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Cardapio -->
      <div class="">
        <div class="restaurant-menu p-1">
          <table class="dishes">
            <tr>
              <th class="title">PRATO PRINCIPAL</th>
              <td class="description"></td>
            </tr>
            <tr>
              <th class="title">OPCÃO FIT</th>
              <td class="description">File de tilápia</td>
            </tr>
            <tr>
              <th class="title">GUARNIÇÃO</th>
              <td class="description">Creme de milho</td>
            </tr>
            <tr>
              <th class="title">SALADAS</th>
              <td class="description">Alface/Moyashi Mexicano</td>
            </tr>
            <tr>
              <th class="title">SOBREMESA</th>
              <td class="description">Melancia</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <footer class="footer">
        <div>
            <p>© Copyright 1998-{{ currentYear }} Empresas Remaza</p>
          </div>
      </footer>
    <!-- Modal de seleção de Notificação -->
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="border-radius: 10px">
                <div class="modal-header">
                    <img class="icon-alert" src="../assets/bellOrange.png">
                    <h5 class="modal-title" id="exampleModalLabel">Configurar notificações</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault">Habilitar Notificação (Inclusão e
                        Alterações)</label>
                </div>
                <div class="form-select-modal">
                    <div>
                        <p>Frequência de envio: </p>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <label for="flexSelectDefault" class="form-select-label">
                                <option selected>Selecione</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </label>
                        </select>
                    </div>
                    <div class="form-hours-time">
                        <p>Horário do envio: </p>
                        <input class="form-hours" type="time">
                    </div>
                </div>
                <div class="form-check-modal">
                    <div>
                        <div>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked1">
                            <label class="form-check-label" for="flexCheckChecked">
                                <img class="icon-email alignment" src="../assets/emailFilledBlue.png">
                                Notificar por e-mail: xxxxxxxxx@websupply.com.br
                            </label>
                        </div>
                        <div>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                            <label class="form-check-label" for="flexCheckChecked">

                                <img class="icon-teams alignment" src="../assets/teamsBlue.png">
                                Notificar por Microsoft: Teams
                            </label>
                        </div>
                        <div>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                            <label class="form-check-label" for="flexCheckChecked">

                                <img class="icon-whatsapp alignment" src="../assets/whatsapp.png">
                                Notificar por WhatsApp (11) 99999-0900
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { apiRemaza } from 'src/boot/axios'
// import { useRouter } from 'vue-router' // Importando o useRouter
export default defineComponent({
  name: 'RestaurantPage',
  setup () {
    const store = useStore()
    // const router = useRouter()
    const count = computed(() => store.state.count)
    const increment = () => {
      store.commit('increment')
    }
    const data = reactive({
      restaurantes: []
    })

    onMounted(async () => {
      const response = await apiRemaza.get('cardapio/Semanal/1')
      data.restaurantes = response.data
      console.log(response.data)
    })

    return {
      count,
      increment,
      currentYear: new Date().getFullYear()
      // ...toRef(data)
    }
  }
  // computed: {
  //   userName () {
  //     return localStorage.getItem('username')
  //   }
  // }
})
</script>
 <style>
/*  */
body {
  background: var(--padro-color-white, #f9f9f9) !important;
}

.container{
  max-width: 100%;
  /* height: 15vh; */
}
.iconText {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  /* margin-top: 8px; */
  width: 100%;
}

.iconText h1 {
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #3f76df;
}

.link-home{
color: var(--remaza-color-highlight, #F48120);
font-family: Lato;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.32px;
text-decoration-line: underline;
}

.second-link{
color: var(--padro-color-black, #0B0B0B);
font-family: Lato;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.32px;
text-decoration-line: none;
}

strong h3{
  color: var(--remaza-color-secondary, #102155);
  font-family: Lato;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.buttonActivateNotification {
  background: #f48120;
  border-radius: 4px;
  color: #fff;
  font-size: 13px;
  padding: 5px 8px;
  border: none;
  position: relative;
  margin-right: 18px;
}

.buttonNotification {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buttonNotification img {
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  padding-bottom: 2px;
}

.navigationWeeks {
  display: flex;
  flex-direction: row;
  justify-content: center;;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
  height: 6vh;
  /* margin-right: 340px; */
  /* margin: 0px; */
  font-weight: 700;
  /* margin-right: 55px; */
  /* transform: translate(0px, -15px); */
  top: 0px;
}

.navigationWeeks li {
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
  align-items: center;
  /* margin: 20px; */
  margin-right: 40px;
  /* transform: translate(0px, -20px); */
  width: 49px;
  height: 75px;
}
.row .p-3 .navigationWeeks .navigationWeeksTrue {
  background-color: #3f76df;
  color: #fff;
  border-radius: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.navigationWeeks p {
  margin: 0;
  text-align: center;
}

.whiteCircle {
  background-color: #fff;
  color: #000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* .navigationWeeksFalse {
  background-color: #fff;
  color: #000;
} */

/* button .iconActivateNotification {
  color: red;
  fill: red;
} */

/* Desenvolvedora: Veronica  */
.restaurant-menu{
  width: 100%;
  /* margin-right: 22px; */
  /* transform: translate(-20px, -10px); */
}

.restaurant-menu .dishes .title {
    color: #102155;
    height: 45px;
    padding-right: 20px;
    text-align: right;
    width: 20%;
    font-weight: 700;
    font-size: 16px;
}

.description {
    border-radius: 13px;
    text-align: left;
    font-size: 15px;
    font-weight: 700;
    line-height: 16px;
    background-color: #DFEAFF;
    padding-inline: 20px;
}
.dishes {
    width: 100%;
    padding: 0px;
    display: static;
    border-collapse: separate;
    border-spacing: 8px;
    /* margin-top: -60px; */
}

/* footer{
  margin-top: 20px;
} */

/* .modal .modal-dialog .modal-content .icon-alert {
    left: 20px;
    right: 10px;
    top: 7%;
} */

/* .footer{
  bottom: 2px;
  height: 12vh;
} */

.modal{
  margin-top: 100px;
}

.modal .modal-dialog .modal-content .modal-header {
    margin: 10px;
}

.modal .modal-dialog .modal-content .modal-title {
    padding-inline: 10px;
    padding: 10px;
    color: #3F76DF;
}

.modal .modal-dialog .modal-content .form-check-modal {
    margin: 20px;
    padding: 1px;
    margin-inline: 25px;
}

.modal .modal-dialog .modal-content .form-switch {
    margin: 10px;
    font-size: large;
    margin-left: 25px;
}

.modal .modal-dialog .modal-content .form-select-modal :is(.form-hours, .form-select) {
    width: 67%;
    margin-left: 15px;
    border: solid 1px #C0BEBF;
}

.modal .modal-dialog .modal-content .form-select-modal .form-select {
    width: 67%;
}

.modal .modal-dialog .modal-content .form-select-modal .form-hours{
    border-radius: 4px;
    height: 30px;
}

.modal .modal-dialog .modal-content .form-select-modal input.form-hours{
    padding: 8px;
    font-size: medium;
}

.modal .modal-dialog .modal-content .form-select-modal div {
    display: flex;
    justify-content: flex-end;
    margin: 10px 10px;
}

.modal .modal-dialog .modal-content .form-check-modal .form-check-label .alignment{
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 5px;
}

@media (max-width: 2501px) {
/* .container{
  max-width: 100%;
} */
/* .buttonNotification{
 margin-top: 1px;
 justify-content: space-between;
} */
}
</style>
