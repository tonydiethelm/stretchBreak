console.log("Stretch Break! - Content Script is Running");

/*
We want to add a giant DIV to the screen on all pages.
    We'll need to style that div to be black and rounded edges and have some text say "Go stretch!"
We need to know where to put it. document? window? 
    Window.document, but iframes are their own documents inside the window. We want to cover everything. 
    Let's go to document for now. 
*/

// make a div with styling.
    //document.createElement('div
    //document.getElementById('stretchBreak').innerHTML = 'Stretch Break!';
// append it to the document. 

// let screenBlock = document.createElement('div');
// screenBlock.innerHTML = 'Stretch Break!';
// screenBlock.id = 'StretchBreak';
// //append to document
// document.body.appendChild(screenBlock);         //this appends the div, but it's on the END of the document. Not working. 



// We might be able to just change the body background color? Nope. 
//document.body.style.backgroundColor = black;    //nope
//document.body.style.cssText = 'background-color: black';    //that works, but only changes background, and you can still see stuff. 






// change the styling on document.body to be black background, black text, etc. 
// and change it back when we're done. 










let images = document.getElementsByTagName('img');
for(let eachImage of images){
      eachImage.src = 'https://i.imgur.com/5ocRuPi.gif';
    }




//New Idea! Make all the text "go stretch!"

let texts = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, pation, span, a');
for(let eachOne of texts){
    eachOne.innerHTML = "Go Stretch!";
}