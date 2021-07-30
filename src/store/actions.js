
export function getIsFavorite({ commit }) {

       if(localStorage.getItem("favorites").length){
           if((JSON.parse(localStorage.getItem("favorites")).some(favoriteItem => favoriteItem.key === this.state.keyCitySelect))){
               commit("setIsFavorite" , true)
           }else{
               commit("setIsFavorite" , false)
           }
       }
 }
export function addOrRemoveFavorites({ commit, state }, add ) {
    let tempFavorites = state.favorites;
    if(add){
        if(!(tempFavorites.some(favoriteItem => favoriteItem.key === this.state.keyCitySelect)) && tempFavorites.push({
            key:this.state.keyCitySelect,
            name:this.state.cityName,
            country:this.state.country
        }));
    }else {
        tempFavorites = tempFavorites.filter(favoriteItem => favoriteItem.key !== this.state.keyCitySelect);
        localStorage.removeItem('favorites');
    }
    localStorage.setItem("favorites" , JSON.stringify(tempFavorites));
    commit("setFavorites", tempFavorites);
}
export function getTemperature ({ commit } , celsius) {
    commit("setCelsius", celsius);
}
export function changeTheme ({ commit } , light) {
    commit("setThemeLight", light);
}


