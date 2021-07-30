<template>
  <div class="error-message" :style="[ themeLight ?  {'background-color' : '#f8f9fa' } : {'background-color' : ' #212529' , 'color' : 'white'}]">
    <i class="fas fa-exclamation-circle error-icon"></i>
    {{errorMessage}}
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ErrorMessage",

  computed: {
    ...mapState( ['errorMessage' , 'themeLight'])
  },

}
</script>

<style scoped>
.error-message{
  font-size: 2rem;
  height: fit-content;
  box-shadow: 0 2px 6px 2px rgb(0 0 0 / 18%), 0 1px 1px 0 rgb(0 0 0 / 41%), 0 1px 3px 0 rgb(0 0 0 / 48%);
  padding: 3% ;
  border-radius: 6px;
  font-family: 'Ubuntu', sans-serif;
  background-color: rgb(248, 249, 250);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 40%;
  left: 0;
  right: 0;
  margin: 0 10%;
}
.error-icon{
  color: red;
}
</style>