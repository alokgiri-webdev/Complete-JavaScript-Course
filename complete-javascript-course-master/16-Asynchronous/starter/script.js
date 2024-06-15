'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// Counrty API: https://countries-api-836d.onrender.com/countries/

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.altSpellings[1]}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>Capital:</span>${data.capital}</p>
      <p class="country__row"><span>area:</span>${(+data.area / 1000).toFixed(
        1
      )} sqKm</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// OUR FIRST AJAX CALL : XMLHTTPREQUEST
// const getCountryAndNeighbour = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`); // This is the syntax to get the data and the url from where we want to get it.
//   request.send(); // This is to sending the request
//   request.addEventListener('load', function () {
//     // console.log(this.responseText); // responseText is to show up the data requested
//     // The data that came in above is in JSON which is a string of texts but we need to convert it into JavaScript Object
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // Render country 1
//     renderCountry(data);
//     // Get Neighbour country
//     const neighbour = data.borders?.[0];
//     if(!neighbour){
//       return;
//     }
//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function(){
//     const [data2] = JSON.parse(this.responseText);
//     renderCountry(data2, 'neighbour');
//     });
//   });
// };
// // getCountryAndNeighbour('usa');
// getCountryAndNeighbour('pakistan');
// // getCountryData('india');

// PROMISES
// const request = fetch('https://restcountries.com/v3.1/name/portugal'); // This is how a promise is created using 'fetch'
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (
//       // to consume that fulfilled promise we create .then inside that we create a function and inside that function, the first argument is response(which shows the fulfilled data) and the second argument is of the rejected promise
//       response
//     ) {
//       // console.log(response);
//       return response.json(); // inorder to read the data from the body of the response, 'json()' method is available to all the response object called by the fetch function
//       // Also 'response.json()' this returns another promise and therefore another .then will be needed to consume that promise
//     })
//     .then(function (data) {
//       // console.log(data);
//       renderCountry(data[0]);
//     });
// };
// getCountryData('portugal');

// Using arrow function

const getJSON = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMessage} ${response.status}`);
    }
    return response.json();
  });
};
/*
const getCountryData = function (country) {
  // Country 1
  // fetch(`https://restcountries.com/v3.1/name/${country}`)
  //   .then(response =>{
  //     if (!response.ok) {
  //       throw new Error(`Country not found ${response.status}`);
  //     }
  //     return response.json();
  //   })
      getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
     .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) {
        throw new Error('No neighbour found');
      }
      // Country 2
    //   return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    //   //  .then(response2 => response2.json())                     Donot chain '.then' immediately post fetch but after the closing of the previous '.then'
    //   //  .then(data2 => renderCountry(data2[0], 'neighbour'));
    // })
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error(`Country not found ${response.status}`);
    //   }
    //   return response.json();
    // })
    return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Neighbour not found')})
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      // We mention '.catch' method to handle err at last of the promise chain
      console.error(`${err}`);
      renderError(`Something went wrong ${err.message}`);
    })
    .finally(() => {
      // finally will be executed no matter if the promise is rejected or fulfilled
      // Note: catch also results in promise thats why we can do '.finally' to it
      countriesContainer.style.opacity = 1;
    });
};

// HANDLING ERRORS
btn.addEventListener('click', function () {
  getCountryData('portugal');
});
*/

// THROWING ERRORS MANUALLY
// getCountryData('asdfghj');

// CODING CHALLENEGE-1
/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
/*
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Something went wrong`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

    return fetch(`https://restcountries.com/v3.1/name/${data.country}`)})
    .then(response => {
      if (!response.ok) {
        throw new Error(`Country not found`);
      }
      return response.json()
    })
    .then(data =>{
      renderCountry(data[0]);
    })
    .catch(err => console.log(`Something went wrong ${err.message}`))
    .finally(()=> countriesContainer.style.opacity =1);
};

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

// THE EVENT LOOP IN PRACTICE

// BUILDING A SIMPLE PROMISE
// new Promise --> This is a Promise constructor function
// And in new Promise '(function(){})' --> this is called the executor function
// And in (function(resolve, reject){}) there are two arguments -> the 1st argument takes the resolve & the 2nd takes the reject

// Creating a Promise
/*
const lotteryPromise = new Promise(function(resolve, reject){
console.log('Lottery is happening!');
setTimeout(function(){
  if(Math.random()>=0.5){
    resolve('You win'); //Fulfilled Promise
  }else{
    reject(new Error ('You loose')); //Rejected Promise
  }
},3000);

});
//Consuming a Promise
lotteryPromise.then(res=> console.log(res)).catch(err=> console.error(err));

//Promisifying SetTimeout
const wait = function(secs){
  return new Promise(function(resolve){
    setTimeout(resolve,secs*1000)
  })
}
wait(2).then(()=>{
  console.log('I waited for 2 secs')
  return wait(1)}) // Note: return the next promise within the 1st's consumption in order to chain promises
  .then(()=> console.log('I waited for 1 sec'));
*/

// PROMISIFYING THE GEOLOACTION API
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position), // This represents fulfilled value
    //   err => reject(err) // This the rejected/error
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition()
//   .then(pos => console.log(pos))
//   .catch(err => console.log(err));

//From Coding challenege-1
/*
  const whereAmI = function () {
  getPosition().then(pos=>{
    const {latitude:lat, longitude:lng} = pos.coords
    return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
  })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Something went wrong`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);
  
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`)})
      .then(response => {
        if (!response.ok) {
          throw new Error(`Country not found`);
        }
        return response.json()
      })
      .then(data =>{
        renderCountry(data[0]);
      })
      .catch(err => console.log(`Something went wrong ${err.message}`))
      .finally(()=> countriesContainer.style.opacity =1);
  };
  
btn.addEventListener('click',whereAmI);
*/

// CODING CHALLENEGE-2
/* 
Build the image loading functionality that I just showed you on the screen.
Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.
If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/


const wait = function(secs){
  return new Promise(function(resolve){
    setTimeout(resolve,secs*1000);
  })
}

const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Img not found'));
    });
  });
};
/*
let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image loaded');
    return wait(2)
  }).then(()=>{
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg')
  }).then(img=>{
    currentImg = img;
    console.log('Image loaded');
    return wait(2)
  }).then(()=>{
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));

*/

// CONSUMING PROMISES WITH ASYNC AWAIT
/*
const whereAmI = async function () {
  // The moment we write async before the function, it makes the entire function asynchronous i.e. make it run behind
  try {
    // GeoLocation
    const pos = await getPosition(); // await executes to get the resonse and that response can be saved in a variable
    const { latitude: lat, longitude: lng } = pos.coords;
    // Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) {
      throw new Error(`Country not found`);
    }
    const dataGeo = await resGeo.json();
    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) {
      throw new Error(`Country not found`);
    }
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.log(err.message);
  }
};

(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.error('Something went wrong');
  }
  console.log('Finished getting location');
})();
*/

// RUNNING PROMISES IN PARALLEL
/*
const get3countries = async function (c1, c2, c3) {
  // This is an inefficient way as none of the await data depends on the previous await so
  // why one should wait for the earlier one. therefore, should run parallely n for that there's another method
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    // Running Promises Parallely
    const data = await Promise.all([
      // Note: if one promise rejects then all the promises rejects
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.log('Something went wrong');
  }
};
get3countries('portugal', 'spain', 'germany');
*/

// OTHER PROMISE COMBINATORS: RACE, ALLSETTLED, ANY

//Note: All promise combinators takes array of promises

/*
// Promise.race
(async function () {
  const res = await Promise.race([
    //Note: it returns the first fulfilled/rejected value
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/germany`),
  ]);
  console.log(res[0]);
})();

const timeOut = function (secs) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, secs * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/germany`),
  timeOut(0.1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log('Something went wrong'));

// Promise.allSettled
Promise.allSettled([
  //Note: it returns all the promise irrespective to fulfilled/rejected
  Promise.resolve('Success'),
  Promise.reject('failed'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

// Promise.any
Promise.any([
  //Note: it returns the first fulfilled promise ignoring all the rejects
  Promise.resolve('Success'),
  Promise.reject('failed'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));
*/

// CODING CHALLENGE-3
/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

// Copied from previous coding challenge to transform to async await
/*
let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image loaded');
    return wait(2)
  }).then(()=>{
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg')
  }).then(img=>{
    currentImg = img;
    console.log('Image loaded');
    return wait(2)
  }).then(()=>{
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
  */
/*
const loadNPause = async function(){
  try{
  let img = await createImage('img/img-1.jpg');
  await wait(2);
  img.style.display = 'none';
  img = await createImage('img/img-2.jpg');
  await wait(2);
  img.style.display = 'none';
  } catch(err){
    console.error(err);
  }
};
loadNPause();

const loadAll = async function(imgArr){
  try{
   const imgs = imgArr.map( async img => await createImage(img) )
   const imgEl = await Promise.all(imgs);
   console.log(imgEl);
   imgEl.forEach(img=> img.classList.add('parallel'));
  }catch(err){
    console.log(err);
  }
};
loadAll(['img/img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
*/