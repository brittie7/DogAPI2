'use strict';

//https://dog.ceo/api/breeds/image/random/3 
//seems like, when the user clicks submit, I need to concatenate the URL with the number of images input that the person submits (/4 or /5 depending on what they input) and then pass that revised URL to the fetch statement 

//when the user clicks submit, get the value they entered and put it into a variable

//https://dog.ceo/api/breed/hound/images/random 


const picArea = $('.newPic')

function startApp () {
  $('#dogForm').on('submit', function(event){
    const userInput = document.getElementById("dogsRequested").value.toLowerCase()
    console.log('form submitted');
    console.log(userInput);
    event.preventDefault(); 
    $('.newPic').empty();
    const newUrl = getUrl(userInput)
    getDogImage(newUrl)
  });
 //the dog number value. This is what we get out of the function at the
};

function getUrl(dogValue) {
     //anywhre I call this function, give me whatever I returned
    const urlEnding = "/images/random";
     return 'https://dog.ceo/api/breed/'.concat(dogValue,urlEnding);
};

function getDogImage(url) {
  console.log('url created');
  console.log(url)
  fetch(url)
    .then(response => {
      if (response.ok) {
          response.json();
          displayResults(responseJson)
      } else {
          console.log("not sccessful")
      }
    })
    .then(data => console.log(data))
    .catch(error => console.log('Error'))
  }

  /*fetch(url)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => console.log(error));
}*/

function displayResults(responseJson){
  console.log(responseJson);
   $(`<img src="${responseJson.message}" alt="a dog">`).appendTo(picArea);
    $('.results').removeClass('hidden');
};

$(function() {
  console.log('App loaded! Waiting for submit!');
  startApp();
  //getDogImage();
});