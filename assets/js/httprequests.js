import { API_BASE_URL } from "./baseURL.js";

export function test(){
     console.log(API_BASE_URL)
}

export async function getAllCategories(city) {
     let globalData;
     await fetch(`${API_BASE_URL}/v1/current.json?key=982a6ea615d24010a1e124211230405&q=${city}&aqi=no`)
     .then(response => response.json())
     .then(data => {
        globalData = data;
     })
     return globalData;
 }