<template>
<footer>
  <div>
  <Toggle :temperature="false" />
  </div>
  <div>
  <Toggle :temperature="true" />
  </div>
</footer>
</template>

<script>

import Toggle from "./Toggle";

export default {
  name: "Footer",

  components:{Toggle}
}
</script>

<style scoped>

footer{
  display: flex;
  justify-content: space-around

}




</style>