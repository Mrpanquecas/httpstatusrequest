<template>
  <div class="div">  
    <div>
      <a-alert
        class="margin"
        message="What is this?"
        description="Additional description and informations about copywriting."
        type="info"
        showIcon
      />
      <a-button @click="getRandomHTTPResponse" :loading="loading" type="danger">Danger</a-button>
    </div>
  </div>
</template>

<script>
import Vue  from 'vue';
import { Button } from 'ant-design-vue';
import { magicFunction } from '../utils/magicFunctions'

Vue.use(Button);

export default {
  name: 'MainWrapper',
  data () {
    return {
      loading: false,
    }
  },
  methods: {
    getRandomHTTPResponse () {
      this.loading = true
      magicFunction()
        .then(() => {
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style scoped>
  .div {
    display: flex;
    justify-content: center;
  }

  .margin { 
    margin: 8px;
  }
</style>
