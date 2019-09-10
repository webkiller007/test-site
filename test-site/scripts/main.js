let myImage = document.querySelector('img');
myImage.onclick = function(){
    let myImgSrc = myImage.getAttribute('src');

    if(myImgSrc === 'images/tech-wallpaper.jpg'){
        myImage.setAttribute('src', 'images/another-image.jpg');
    } else{
        myImage.setAttribute('src', 'images/tech-wallpaper.jpg');
    }
}

let myButtton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please Enter Your Name');
    
    if(!myName || myName === null){
        setUserName();
    } else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Web is Cool, ' + myName;        
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Web is Cool, ' + storedName;
}

myButtton.onclick = function() {
    setUserName();
}