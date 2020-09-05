
var home = document.getElementById('home');
var resume = document.getElementById('resume');
var contact = document.getElementById('contact');
         
         
         
home.onclick = function(){
        event.preventDefault();
        setTimeout(function(){
          
          document.querySelector(".cover2").style.display = "flex";
          document.querySelector(".cover").style.display = "none";
          },100)
          setTimeout(function(){
            location.replace("../index.html");
          },1000)


      };

resume.onclick = function (){
        event.preventDefault();
        setTimeout(function(){
          
          document.querySelector(".cover2").style.display = "flex";
          document.querySelector(".cover").style.display = "none";
          },100)
          setTimeout(function(){
            location.replace("../Resume/resume.html");
          },1000)


      };

contact.onclick = function(){
        event.preventDefault();
        setTimeout(function(){
          
          document.querySelector(".cover2").style.display = "flex";
          document.querySelector(".cover").style.display = "none";
          },100)
          setTimeout(function(){
            location.replace("../Contact/contact.html");
          },1000)


      };