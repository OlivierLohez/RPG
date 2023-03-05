idleguerrierfemme = document.getElementsByClassName("idleguerrierfemme");
framefemme=0;

for(let x=0;x<3;x++){
    idleguerrierfemme[x].style.display="none";
}

// Permet l'animation de base sans attaquer
function animationidleguerrierfemme(){
    idleguerrierfemme[framefemme].style.display="block";
    if(framefemme==0){
    idleguerrierfemme[2].style.display="none";
    }else{
    idleguerrierfemme[framefemme-1].style.display="none";
    }
    if(framefemme<2){
    framefemme++;
    }else{
      framefemme=0;
    }
}

setInterval(animationidleguerrierfemme,200)