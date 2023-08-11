<template>
    <q-page>
        <p>login sucesso {{ userName }} </p>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomePage',
  computed: {
    userName () {
      return localStorage.getItem('username')
    }
  }

})
</script>
