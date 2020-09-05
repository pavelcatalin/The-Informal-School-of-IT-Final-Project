var button = document.querySelector(".btn");
        
button.addEventListener("load", change()) 

function change(){
    setInterval(function(){button.style.borderRadius = "60% 30%"},2000);
    setInterval(function(){button.style.borderRadius = "30% 60%"},4000);
         
};
      
document.getElementById('about').onclick = function (){
    event.preventDefault();
    setTimeout(function(){
      document.querySelector(".cover2").style.display = "flex";
      document.querySelector(".cover").style.display = "none";
      },100)
      setTimeout(function(){
        location.replace("About/about.html");
      },1500)
  };

  document.getElementById('resume').onclick = function (){
    event.preventDefault();
    setTimeout(function(){
      document.querySelector(".cover2").style.display = "flex";
      document.querySelector(".cover").style.display = "none";
      },100)
      setTimeout(function(){
        location.replace("Resume/resume.html");
      },1500)
  };

  document.getElementById('contact').onclick = function (){
    event.preventDefault();
    setTimeout(function(){
      document.querySelector(".cover2").style.display = "flex";
      document.querySelector(".cover").style.display = "none";
      },100)
      setTimeout(function(){
        location.replace("Contact/contact.html");
      },1500)
  };

  document.querySelector('.btn').onclick = function (){
    event.preventDefault();
    setTimeout(function(){
      document.querySelector(".cover2").style.display = "flex";
      document.querySelector(".cover").style.display = "none";
      },100)
      setTimeout(function(){
        location.replace("Contact/contact.html");
      },1500)
  };

  document.querySelector('h1').onclick = function (){
    event.preventDefault();
    setTimeout(function(){
      document.querySelector(".cover2").style.display = "flex";
      document.querySelector(".cover").style.display = "none";
      },100)
      setTimeout(function(){
        location.replace("About/about.html");
      },1500)
  };
  
  document.querySelectorAll('h1')[1].onclick = function (){
    event.preventDefault();
    setTimeout(function(){
      document.querySelector(".cover2").style.display = "flex";
      document.querySelector(".cover").style.display = "none";
      },100)
      setTimeout(function(){
        location.replace("About/about.html");
      },1500)
  };

  