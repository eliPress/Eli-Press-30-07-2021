export const setKeyNameCityAndCountry = (state, payload) => {
    state.country = payload.country;
    state.keyCitySelect = payload.cityKey;
    state.cityName = payload.selectedCity;
};
export const setFiveDaysForecasts = (state, payload) => {
    state.fiveDaysForecasts = payload;
};
export const setCurrentCondition = (state, payload) => {
    state.currentCondition = payload;
};
export const setFavorites = (state, payload) => {
    state.favorites = payload;
};
export const setFavoriteItems = (state, payload) => {
    state.favoriteItems = payload;
};
export const setErrorMessage = (state, payload) => {
    state.errorMessage = payload;
};
export const setIsFavorite = (state, payload) => {
    state.isFavorite = payload;
};
export const setLoading = (state, payload) => {
    state.loading = payload;
};
export const setCelsius  = (state, payload) => {
    state.celsius = payload;
}
;export const setThemeLight  = (state, payload) => {
    state.themeLight = payload;
};