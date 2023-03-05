frappedesarmer = document.getElementsByClassName("frappedesarmer");
idleguerrier = document.getElementsByClassName("idleguerrier");
boutonfrappedesarmer = document.getElementById("boutonfrappedesarmer");
frame = 0;
frameattaque = 0;

boutonfrappedesarmer.addEventListener("click",animationattaquedesarmer,"false");

for(let x=0;x<3;x++){
  idleguerrier[x].style.display="none";
}

for(let x=0;x<9;x++){
   frappedesarmer[x].style.display="none";
}

//permet de faire l'animation de base sans attaquer
function animationidleguerrier(){
    idleguerrier[frame].style.display="block";
    if(frame==0){
    idleguerrier[2].style.display="none";
    }else{
    idleguerrier[frame-1].style.display="none";
    }
    if(frame<2){
    frame++;
    }else{
      frame=0;
    }
}
setInterval(animationidleguerrier,200);

function animationattaquedesarmer(){
  setInterval(function(){
  frappedesarmer[frameattaque].style.display="block";
  if(frameattaque==0){
  frappedesarmer[8].style.display="none";
  }else{
  frappedesarmer[frameattaque-1].style.display="none";
  }
  if(frameattaque<8){
  frameattaque++;
  }else{
    frameattaque=0;
  }
},100);
}


// let start = Date.now(); // mémoriser l'heure de début

// let timer = setInterval(function() {
//    // combien de temps s'est écoulé depuis le début ?
//    let timePassed = Date.now() - start;

//    if (timePassed >= 2000) {
//      clearInterval(timer); // terminer l'animation après 2 secondes
//      return;
//    }

//    // dessiner l'animation à l'instant timePassed
//   draw(timePassed);

//  }, 20);

//  // à mesure que timePassed passe de 0 à 2000
//  // left obtient des valeurs de 0px à 400px
//  function draw(timePassed) {
//    frappedesarmertest.style.left = timePassed / 5 + 'px';
//  }