console.log("Pikachu Everywhere - Content Script is Running");


let images = document.getElementsByTagName('img');
console.log('these are all the imags on our page: ', images);
for(let i = 0; i < images.length; i++){
      images[index].src = './pikachu.png';
    }