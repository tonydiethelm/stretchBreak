console.log("Stretch Break! - Content Script is Running");

/*
We want to enforce stretch breaks. 
We are going to change all the text to "go stretch!" and change the images to a funny stretching gif.
*/



function stretchBreak (){
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

const timeInSeconds = 10
const timeInMilliSeconds = timeInSeconds * 1000;
setTimeout(stretchBreak, timeInMilliSeconds);
setTimeout(function(){window.location.reload();}, timeInMilliSeconds + 5000);