<template>
<div class="container-favorites">
  <div class="favorite-icon" @click="addCityToFavorites()">
    <i  :class="[ isFavorite ?  'bi bi-heart-fill' :'bi bi-heart']"
        :style="[!isFavorite && !themeLight ? {'color' : ' white'} : {} ]"
    >
    </i>
      <div v-if="showToast" class="toast"  >
        <div class="toast-body">
          {{ toastMsg }}
        </div>
      </div>
  </div>

</div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "AddToFavorites",

  computed: {
    ...mapState( ["cityName","keyCitySelect" , "isFavorite",'themeLight' ])
  },

  data() {
    return {
      addToFavorites: false,
      toastMsg:"",
      showToast:false,
    }
  },

  methods:{

    addCityToFavorites(){

      if(!this.isFavorite){
        this.$store.dispatch('addOrRemoveFavorites',true);
        this.$store.dispatch('getIsFavorite' );
        this.toastMsg = "added to favorites";
      }else{
        this.$store.dispatch('addOrRemoveFavorites',false);
        this.$store.dispatch('getIsFavorite' );
        this.toastMsg = "removed from favorites";
      }
      this.showToast = true;
      setTimeout(()=>{this.showToast = false},2000)
    },
  }
}
</script>

<style scoped>
i.bi.bi-heart {
    color: white;
    cursor: pointer;
}
.container-favorites{
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

}

.favorite-icon{
  font-size: 4rem;
  margin-right: 10% ;
  padding: 0 10%;
}

.toast:not(.showing):not(.show) {
  opacity: 1;
}

.toast{
  position: fixed;
  top:40px;
  left: 0;
  right: 0;
  margin: auto;
  font-size:12px;
  background-color: #673ab7;
  color: white;
  animation: fadeInAnimation ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  width: fit-content;

}
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  40%{
    opacity: 1;
  }
  60%{
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.bi-heart-fill{
  color: red;
}

@media (max-width: 770px) {
  .favorite-icon{
    font-size: 2rem;
    font-size: 2rem;
    width: 75%;
    direction: rtl;
  }
}

@media (max-width: 350px){
  .container-favorites{
    flex-direction: column;
  }

}


</style>