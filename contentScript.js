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