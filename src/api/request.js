import axios from "axios";

export default function apiRequest(path, key){

    return axios.get(process.env.VUE_APP_ACCU_WEATHER_ENDPOINT + path, {
            params: {
                apikey: process.env.VUE_APP_API_KEY,
                ...(key ? { q: key } : {})
            }
        });
}