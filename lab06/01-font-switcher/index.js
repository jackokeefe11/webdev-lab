const makeBigger = () => {
   //alert('make bigger!');

   size1 += 5; 
   size2 += 5; 

   document.querySelector('h1').style.fontSize = size2 + "px";
   document.querySelector('p').style.fontSize = size1 + "px";
};

const makeSmaller = () => {
   //alert('make smaller!');

   size1 -= 5;
   size2 -= 5; 
   document.querySelector('h1').style.fontSize = size2 + "px";
   document.querySelector('p').style.fontSize = size1 + "px";
};

let size1 = 14;
let size2 = 28; 

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);


/*
document.querySelector(???).addEventListener('click', makeBigger);
document.querySelector(???).addEventListener('click', makeSmaller);
*/
