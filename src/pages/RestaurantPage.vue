<!-- conteudo principal -->
<template id="conteudo">
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12">
      <div class="row ">
        <div class="bemvindo col-sm-12 col-md-12 col-lg-12">
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
      <!--
                    paginação para o dias da semana que mostra o cardapio-->
      <div class="row">
        <div class="col-sm-12 col-lg-12">
          <div class="p-3">
            <ul class="navigationWeeks">
              <li class="navigationWeeksTrue">
                <div>
                  <p>seg</p>
                  <p class="whiteCircle">05</p>
                </div>
              </li>
              <li>
                <div>
                  <p>ter</p>
                  <p class="whiteCircle">06</p>
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
      <div class="col-sm-12 col-lg-12">
        <div class="restaurant-menu p-1">
          <table class="dishes">
            <tr>
              <th class="title">PRATO PRINCIPAL</th>
              <td class="description">Peito de frango empanado</td>
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
      <footer>
        <div>
            <p>© Copyright 1998-{{ currentYear }} Empresas Remaza</p>
          </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
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
    return {
      count,
      increment,
      currentYear: new Date().getFullYear()
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
* {
  margin: 0;
}
body {
  background: var(--padro-color-white, #f9f9f9) !important;
}
.iconText {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  margin-top: 3px;
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
  padding: 8px 12px;
  border: none;
  position: relative;
  margin-right: 30px;
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
  width: 100%;
  /* margin-right: 340px; */
  /* margin: 0px; */
  font-weight: 700;
  /* margin-right: 55px; */
  transform: translate(0px, -15px);
  /* margin-top: -25px; */
}

.navigationWeeks li {
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
  align-items: center;
  /* margin: 20px; */
  margin-right: 40px;
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
  display: flex;
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

button .iconActivateNotification {
  color: red;
  fill: red;
}

/* Desenvolvedora: Veronica  */
.restaurant-menu{
  width: 100%;
  transform: translate(-20px, -25px);
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

/* .modal .modal-dialog .modal-content .icon-alert {
    left: 20px;
    right: 10px;
    top: 7%;
} */

/* .modal .modal-dialog .modal-content .modal-header {
    margin: 10px;
} */

/* .modal .modal-dialog .modal-content .modal-title {
    padding-inline: 10px;
    padding: 10px;
    color: #3F76DF;
} */

/* .modal .modal-dialog .modal-content .form-check-modal {
    margin: 20px;
    padding: 1px;
    margin-inline: 25px;
} */

/* .modal .modal-dialog .modal-content .form-switch {
    margin: 10px;
    font-size: large;
    margin-left: 25px;
} */

/* .modal .modal-dialog .modal-content .form-select-modal :is(.form-hours, .form-select) {
    width: 67%;
    margin-left: 15px;
    border: solid 1px #C0BEBF;
} */

/* .modal .modal-dialog .modal-content .form-select-modal .form-select {
    width: 67%;
} */

/* .modal .modal-dialog .modal-content .form-select-modal .form-hours{
    border-radius: 4px;
    height: 30px;
} */

/* .modal .modal-dialog .modal-content .form-select-modal input.form-hours{
    padding: 8px;
    font-size: medium;
} */

/* .modal .modal-dialog .modal-content .form-select-modal div {
    display: flex;
    justify-content: flex-end;
    margin: 10px 10px;
} */

/* .modal .modal-dialog .modal-content .form-check-modal .form-check-label .alignment{
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 5px;
} */

@media (min-width: 1007px) {

}
</style>
