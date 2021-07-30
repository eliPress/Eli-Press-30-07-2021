import Vuex from "vuex";
import Vue from "vue";
import * as actions from "./actions";
import * as mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    keyCitySelect: "215854", // tel aviv
    cityName: "Tel Aviv",
    country: "Israel",
    fiveDaysForecasts: [],
    currentCondition: [],
    favorites: [],
    favoriteItems: [],
    errorMessage: "",
    isFavorite: false,
    loading: false,
    celsius: true,
    themeLight: true,
  },
  actions,
  mutations,
});
