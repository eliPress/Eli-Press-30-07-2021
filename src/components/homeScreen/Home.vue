<template>
  <div class="container">
    <div v-if="errorMessage < 1 && !loading" class="search-bar">
      <search-bar @citySelect="setStoreVars" />
    </div>
    <div
      class="main-container"
      v-if="errorMessage < 1 && !loading"
      :style="[themeLight ? '' : { 'background-color': ' #212529' }]"
    >
      <div class="main-current-condition-section">
        <main-current-condition />
        <AddToFavorites />
      </div>
      <div class="cards-container">
        <cards />
      </div>
    </div>
    <div v-if="errorMessage.length > 0">
      <ErrorMessage />
    </div>
    <div v-if="loading && errorMessage.length < 1" class="loader">
      <Loader />
    </div>
  </div>
</template>

<script>
import apiRequest from "@/api/request";
import SearchBar from "./SearchBar";
import Loader from "../loader/Loader";
import MainCurrentCondition from "./mainHeader/MainCurrentCondition";
import AddToFavorites from "./mainHeader/AddToFavorites";
import Cards from "./Cards.Container";
import { mapState } from "vuex";
import ErrorMessage from "../errorMessage/ErrorMessage";
export default {
  name: "HomeScreen",

  components: {
    SearchBar,
    MainCurrentCondition,
    AddToFavorites,
    Cards,
    ErrorMessage,
    Loader,
  },

  computed: {
    ...mapState([
      "country",
      "keyCitySelect",
      "fiveDaysForecasts",
      "currentCondition",
      "themeLight",
      "errorMessage",
      "loading",
    ]),
  },

  data() {
    return {};
  },

  mounted() {
    this.getForecastsFiveDays();
    this.getCurrentCondition();

    this.$store.dispatch("getIsFavorite");
  },

  methods: {
   async getCurrentCondition() {
      await apiRequest(`currentconditions/v1/${this.keyCitySelect}`)
         .then(res => {
             this.$store.commit("setCurrentCondition", res.data[0]);
         })
    },
   async getForecastsFiveDays() {
      await apiRequest(`forecasts/v1/daily/5day/${this.keyCitySelect}`)
         .then(res => {
           this.$store.commit("setFiveDaysForecasts", res.data.DailyForecasts);
         })
    },
    setStoreVars(CityNameKeyAndCountry) {
      this.$store.commit("setKeyNameCityAndCountry", CityNameKeyAndCountry);
      this.getForecastsFiveDays();
      this.getCurrentCondition();

      this.$store.dispatch("getIsFavorite");
    },
  },
};
</script>

<style scoped>
.main-container {
  height: fit-content;
  margin-top: 3%;
  box-shadow: 0 2px 6px 2px rgb(0 0 0 / 18%), 0 1px 1px 0 rgb(0 0 0 / 41%),
    0 1px 3px 0 rgb(0 0 0 / 48%);
  padding: 3% 3% 0 3%;
  border-radius: 6px;
  font-family: "Ubuntu", sans-serif;
}

.search-bar {
  width: 80%;
  margin: auto;
}

.main-current-condition-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10%;
}

@media (max-width: 700px) {
  .search-bar {
    width: 100%;
  }
}
</style>
