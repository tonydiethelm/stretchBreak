//It started
console.log("Stretch Break! - Content Script is Running");

//set up defaults
let stretchLengthInMilliseconds = 15000;
let timeBetweenStretchesInMinutes = 30;

/*
We want to enforce stretch breaks. 
We are going to change all the text to "go stretch!" and change the images to a funny stretching gif.
*/

const arrayOfGifs = [
    'https://i.imgur.com/5ocRuPi.gif',
    'https://i.imgur.com/qd7JaDf.gif',
    'https://i.imgur.com/nU1VYc4.gif',
    'https://i.imgur.com/5jOl57g.gif',
    'https://i.imgur.com/dPRK2LU.gif',
    'https://i.imgur.com/H0iSodz.gif',
    'https://i.imgur.com/7tiR1kz.gif',
  ]



function stretchBreak (){
    console.log("Stretch Break!")
    //change all the images
    let images = document.getElementsByTagName('img');
    for(const eachImage of images){
    eachImage.src = arrayOfGifs[Math.floor(Math.random() * arrayOfGifs.length)];
  }
    //change all the text.
    const texts = document.querySelectorAll('h1, h2, h3, h4, h5, h6, h7, h8, p, button, figcaption, li, td, pation, span, a');
  for(const eachOne of texts){
    eachOne.innerHTML = 'Go Stretch or touch some grass NOW!!';
  }
};


//get the minutes desired. then call the set timeouts.
const getAndGo = async function(){
    //Get the desired time
    let results = await chrome.storage.local.get(['minutesDesired']);
    timeBetweenStretchesInMinutes = results.minutesDesired;
    
    console.log('time Between Stretches In Minutes: ', timeBetweenStretchesInMinutes);
    
    //change minutes into milliseconds for the timeouts. 
    let timeBetweenStretchesInMilliseconds = timeBetweenStretchesInMinutes * 60000;

    //stretch in...
    setTimeout(stretchBreak, timeBetweenStretchesInMilliseconds)
    //refresh in.... a little longer
    setTimeout(function(){window.location.reload();}, timeBetweenStretchesInMilliseconds + stretchLengthInMilliseconds)
}

getAndGo();