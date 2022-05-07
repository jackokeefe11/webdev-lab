/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const makeDefault = () => {
   document.querySelector('body').className=""; 
}

const makeDesert = () => {
   document.querySelector('body').className = "desert";
}

const makeContrast = () => {
   document.querySelector('body').className = "high-contrast"; 
}

const makeOcean = () => {
   document.querySelector('body').className = "ocean";
}


document.querySelector('#default').addEventListener('click', makeDefault);
document.querySelector('#desert').addEventListener('click', makeDesert);
document.querySelector('#ocean').addEventListener('click', makeOcean);
document.querySelector('#high-contrast').addEventListener('click', makeContrast);