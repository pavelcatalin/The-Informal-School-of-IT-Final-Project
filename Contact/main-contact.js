var submitBtn = document.querySelector("#submit")
var a = document.getElementById('home');
var b = document.getElementById('about');
var c = document.getElementById('resume');



window.onload = function (){
  setInterval(function(){submitBtn.style.borderRadius = "60% 30%"},2000);
  setInterval(function(){submitBtn.style.borderRadius = "30% 60%"},4000);
    
};



window.addEventListener('load',startCover())
 function startCover (){
    
    setTimeout(function(){

       document.querySelector(".cover").style.display = "flex";
       
      },)
     
  };

 
 
 a.onclick = function(){
event.preventDefault();
setTimeout(function(){
  
  document.querySelector(".cover2").style.display = "flex";
  document.querySelector(".cover").style.display = "none";
  },100)
  setTimeout(function(){
    location.replace("../index.html");
  },1000)


};

b.onclick = function(){
  event.preventDefault();
  setTimeout(function(){
    
    document.querySelector(".cover2").style.display = "flex";
    document.querySelector(".cover").style.display = "none";
    },100)
    setTimeout(function(){
      location.replace("../About/about.html");
    },1000)
  
  
  };

  c.onclick = function(){
    event.preventDefault();
    setTimeout(function(){
      
      document.querySelector(".cover2").style.display = "flex";
      document.querySelector(".cover").style.display = "none";
      },100)
      setTimeout(function(){
        location.replace("../Resume/resume.html");
      },1000)
    
    
    };
  

   