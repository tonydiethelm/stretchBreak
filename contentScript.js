//It started
console.log("Stretch Break! - Content Script is Running");

//set up defaults
let stretchLengthInMilliseconds = 10000;
let timeBetweenStretchesInMinutes = 30;

/*
We want to enforce stretch breaks. 
We are going to change all the text to "go stretch!" and change the images to a funny stretching gif.
*/



function stretchBreak (){
    console.log("Stretch Break!")
    //change all the images
    let images = document.getElementsByTagName('img');
    for(let eachImage of images){
        eachImage.src = 'https://i.imgur.com/5ocRuPi.gif';
    }
    //change all the text.
    let texts = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, pation, span, a');
    for(let eachOne of texts){
        eachOne.innerHTML = "Go Stretch!";
    }
};


chrome.storage.local.get(['minutesDesired'])
    .then((data) => {console.log('Do we have data? ', data)})
    .catch((error) => {console.log('No data, we got an error: ', error)})

console.log('checked that we can access local storage. Now need to do our timeouts.')

//get the minutes desired, or set to 30. then call the set timeouts.
chrome.storage.local.get(['minutesDesired'])
    .then((data) => {timeBetweenStretchesInMinutes = data})  //30 minutes or input from options page.
    .then(setTimeout(stretchBreak, timeBetweenStretchesInMinutes * 60000))
    .then(setTimeout(function(){window.location.reload();}, stretchLengthInMilliseconds))
    .catch((error) => {console.log('')})