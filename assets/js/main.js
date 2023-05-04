import {getAllCategories } from "./httprequests.js";
// test()

// console.log(getAllCategories("London")
// .then(res =>console.log(res))
// )
let

getAllCategories().then((data)=>{
     data.forEach(item => {
          customer.innerHTML+=
          `
          <img class="image" src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="image">
          <p class="d-flex justify-content-center mt-2">Overcast Clouds</p>
          <p style="font-weight: bold; font-size: 40px;" class="d-flex justify-content-center mt-2">8 c
          </p>
          <p style="font-weight: bold; font-size: 40px;" class="d-flex justify-content-center mt-2">1 c
          </p>
          <ul class="d-flex">
               <li>fgfd</li>
               <li>fdfd</li>
               <li>fd</li>
               <li>fdb</li>
          </ul>
          `
     });
});