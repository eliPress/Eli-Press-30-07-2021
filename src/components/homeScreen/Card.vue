<template>
  <div class="card" style="background:none;" @click="redirectToHome()" >
    <div class="wrapper-card-header">
    <a href="https://www.accuweather.com" target="_blank" v-if="cardsComponent" class="card-title">{{setDate(card.Date)}}</a>
    <h3>{{card.name}}</h3>
    <h5>{{card.country}}</h5>
    <p class="card-text-icon-phrase"><small class="text-muted">{{card.iconPhrase}}</small></p>
    <img v-if="cardsComponent" :src="require(`../../assets/icons/${card.Day.Icon}-s.png`)" alt class="icon" />
    <img v-if="!cardsComponent" :src="require(`../../assets/icons/${card.icon}-s.png`)" alt class="icon" />
    <hr class="hr-line"/>
    </div>
    <div class="card-body">
      <div class="day-temp">
      <h3 class="temp">{{maxTemperature}}</h3>
      <h3>{{celsius ? 'C' : 'F'}}</h3>
      </div>
      <div v-if="cardsComponent" class="night-temp">
          <h3 class="hyphen">-</h3>
          <small class="temp temp-min">{{minTemperature}}</small>
          <small class="temp-unit">{{celsius ? 'C' : 'F'}}</small>
      </div>
    </div>
  </div>
</template>

<script>

import moment from "moment";
import {mapState} from "vuex";


export default {
  name: "Card",

  props:{
    cityKey:{
      type:String
    },
    cardsComponent:{
      type: Boolean
    },
    card:{
      typeof: Object
    }
  },

  computed: {
    ...mapState( ["celsius"])
  },

  data(){
    return{
      maxTemperature:"",
      minTemperature:"",
      currentDay:"",
    }
  },

  mounted() {
  this.setMaxAndMinTemperature();
  
    },

  watch:{
    celsius: function (){
      this.setMaxAndMinTemperature();
    }
  },

  methods:{

    redirectToHome(){
      if(!this.cardsComponent){
        this.$store.commit('setKeyNameCityAndCountry' , {
          selectedCity:this.card.name, cityKey:this.card.cityKey, country:this.card.country
        });
        this.$router.push({ name: 'Home' });
      }
    },

    setMaxAndMinTemperature(){
      if(this.cardsComponent) {
        this.maxTemperature = this.card.Temperature.Maximum.Unit === 'F' && this.celsius ? ((this.card.Temperature.Maximum.Value - 32) * (5/9)).toFixed(1) : this.card.Temperature.Maximum.Value;
        this.minTemperature = this.card.Temperature.Minimum.Unit === 'F'  && this.celsius ?  ((this.card.Temperature.Minimum.Value - 32) * (5/9)).toFixed(1) : this.card.Temperature.Minimum.Value;
      }else{
        this.maxTemperature = this.celsius ? this.card.temperature.Metric.Value.toFixed(1) : this.card.temperature.Imperial.Value;
      }
      },

 

    setDate(date){
      return moment(date).format("dddd");
    }

  }
}

</script>

<style scoped>

.card{
  background-color: none !important;
  display: flex;
  align-items: center;
  padding: 3% 3% 2% 3% ;
  width: 20%;
  margin: 1.5rem .5rem;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  transition: all 0.3s ease-in;
  cursor: pointer;
  margin-bottom: 3%;
  }

.card:hover{
  transform: scale(1.01);
  background-color: rgba(238, 238, 238, 0.151);
}

.wrapper-card-header{
  padding: 0 2rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-title{
  font-size: 1.25rem;
  color: white;
  text-decoration: auto;
}

.card-img-top{
  display: flex;
  width: 100px;
  height: 50px;
  margin: auto;
}

.hr-line{
  width: 100%;
}

.card-body{
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 1rem;
}

.day-temp{
  display: flex;
  margin-bottom: 15%;
  color: white;
}

.temp:after{
  content:"° ";
  margin-right: 5px;
}

.night-temp{
  display: flex;
  justify-content: center;
  color: white;
}

.hyphen{
  display: none;
}


@media (max-width: 1000px) {
  .card-title{
    font-size: 1rem;
  }
}
@media (max-width: 770px) {
  .card{
    flex-direction: row;
    width: 100%;
    margin: .2rem 0;
    padding: 0 .2rem;
    height: 5rem;
    font-size: .7rem;
  }
  .card-img-top{
    display: none;
  }
  .hr-line{
    display: none;
  }
  .wrapper-card-header{
    flex-direction: row;
    width: 55%;
    justify-content: space-evenly;
    padding: 0;
  }
  .card-text-icon-phrase{
    margin-bottom: .5rem;
    font-size: 1rem;
  }

  .card-body{
    flex-direction: row;
    padding-bottom: 0;
  }
  .day-temp{
    margin-bottom: 0;
  }
  .hyphen{
    margin: 0 3px;
    display: flex;
  }

  .temp-min{
    font-size: calc(1.3rem + .6vw);
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
  }
  .temp-unit{
    font-size: calc(1.3rem + .6vw);
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
  }

}

@media (max-width: 600px) {

  .temp-min{
    font-size: 1rem;

  }
  .temp-unit{
    font-size: 1rem;
  }
  h3{
    font-size: 1rem;
  }
}

@media (max-width: 350px){
  .wrapper-card-header{
    flex-direction: column;
  }
  .card-text-icon-phrase{
    margin-bottom: 0;
  }
}

</style>