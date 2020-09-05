var home = document.getElementById('home');
var about = document.getElementById('about');
var contact = document.getElementById('contact');
var screenDimension = window.innerHeight ;

window.addEventListener('load',startCover,firstAnimation());
window.addEventListener('scroll',startAnimation);
home.addEventListener('click', homeCover)
about.addEventListener('click', aboutCover)
contact.addEventListener('click', contactCover)


function startCover (){
      document.querySelector(".cover2").style.display = "flex";
      
};

function firstAnimation(){
  var titleCollection = document.querySelectorAll(".title");
  
  var elementPosition = titleCollection[1].getBoundingClientRect().top;

  if(screenDimension > elementPosition){
    titleCollection[0].style.animation = "animate 3s";
    titleCollection[1].style.animation = "animate 3s"
  }else{
    titleCollection[0].style.animation = "animate 3s";
  }
  
};

function startAnimation(){
  var titleCollection = document.querySelectorAll(".title");
  

  for (var i = 0; i < titleCollection.length ; i++){
    var elements = titleCollection[i];
    var elemPosition = elements.getBoundingClientRect().top;
  
    if( elemPosition < screenDimension ){
   elements.style.animation = "animate 3s"
  }
    
  }

 

};

function homeCover(){
event.preventDefault();
setTimeout(function(){ 
document.querySelector(".cover").style.display = "flex";
  },100)
  setTimeout(function(){
    location.replace("../index.html");
  },1500)
};


function aboutCover(){
  event.preventDefault();
  setTimeout(function(){
    document.querySelector(".cover").style.display = "flex";
    },100)
    setTimeout(function(){
      location.replace("../About/about.html");
    },1500)
};

function contactCover(){
    event.preventDefault();
    setTimeout(function(){
      document.querySelector(".cover").style.display = "flex";
      },100)
    setTimeout(function(){
        location.replace("../Contact/contact.html");
      },1500)
};
  

