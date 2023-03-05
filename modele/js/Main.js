//On crée les différents éléments du joueur
lifejoueur = document.getElementById("viejoueur");
leveljoueur = document.getElementById("niveaustatjoueur");
experiencejoueur = document.getElementById("expstatjoueur");
attaquestatsjoueur = document.getElementById("attaquestatjoueur");
defensestatsjoueur = document.getElementById("defensestatjoueur");
vitesseattaquestatsjoueur = document.getElementById("vitesseattaquestatjoueur");

//On crée les différents éléments du joueur
namemonster = document.getElementById("nomdumonstre");
lifemonster = document.getElementById("viemonstre");
levelmonster = document.getElementById("niveaustatennemi");
attaquemonster = document.getElementById("attaquestatennemi");
defensemonster = document.getElementById("defensestatennemi");
newmonster = document.getElementById("nouveaumonstre");
typedemonstre = Math.round(Math.random()*2);


//On crée des stats de base pour le joueur
viejoueur=10000;
expjoueur=0;
niveaujoueur=1;
defensejoueur = 0;
vitesseattaquejoueur = 2000;
attaquejoueur=1;

niveaumonstre = 0;
viemonstre = 0;

attack = document.getElementById("attaquer");

newmonster.addEventListener("click",apparaitremonstre,"false");
attack.addEventListener("click",attaquemonstre,"false");

function apparaitremonstre(){
if(niveaujoueur <= 10){
if(typedemonstre == 0){
    namemonster.innerText="Zombie";
    viemonstre = 1;
    niveaumonstre = 1;
    degatsmonstre=Math.round(Math.random()*2,3);
    lifemonster.innerText=viemonstre;
    expjoueur = expjoueur + 10;
}else if(typedemonstre == 1){
    namemonster.innerText="Goule";
    viemonstre =1;
    niveaumonstre = 1;
    degatsmonstre=Math.round(Math.random()*2,3);
    lifemonster.innerText=viemonstre;
    expjoueur = expjoueur + 10;
}else if(typedemonstre == 2){
    namemonster.innerText="Chien";
    viemonstre=1;
    niveaumonstre = 1;
    degatsmonstre=Math.round(Math.random()*2,3);
    lifemonster.innerText=viemonstre;
    expjoueur = expjoueur + 10;
}
}else if(niveaujoueur>10){
    if(typedemonstre==0){
        namemonster.innerText="Dragon";
        lifemonster.innerText=viemonstre;
        viemonstre = 100;
        niveaumonstre = 10;
        degatsmonstre =30;
        expjoueur = expjoueur+100;
    }else if(typedemonstre == 1){
        namemonster.innerText="Golem";
        lifemonster.innerText=viemonstre;
        viemonstre = 500;
        niveaumonstre = 10;
        degatsmonstre = 10;
        expjoueur = expjoueur+100;
    }else if(typedemonstre == 2){
        namemonster.innerText="Dragon bleu";
        lifemonster.innerText=viemonstre;
        viemonstre = 50;
        niveaumonstre = 10;
        degatsmontre = 50;
        expjoueur = expjoueur+100;
    }
}

typedemonstre = Math.round(Math.random()*2);
}

function loot(){
    typedeloot = Math.round(Math.random()*2);
    if(typedeloot == 0){
        defensejoueur++;
    }if(typedeloot == 1 && vitesseattaquejoueur >100){
        vitesseattaquejoueur = vitesseattaquejoueur -2;
    }else if(typedeloot == 2){
        attaquejoueur++;
    }
}

function attaquemonstre(){

    viemonstre = viemonstre - attaquejoueur;
    lifemonster.innerText=viemonstre;

    if(degatsmonstre>defensejoueur){
    viejoueur = viejoueur - (degatsmonstre-defensejoueur)   ;
    }

    lifejoueur.innerText=viejoueur;
    leveljoueur.innerText=niveaujoueur;
    experiencejoueur.value=expjoueur;
    attaquestatsjoueur.innerText=attaquejoueur;
    defensestatsjoueur.innerText=defensejoueur;
    vitesseattaquestatsjoueur.innerText=vitesseattaquejoueur;

    levelmonster.innerText=niveaumonstre;
    attaquemonster.innerText=degatsmonstre;
    
    if(viemonstre<=0){
        apparaitremonstre();
        loot();
        if(niveaujoueur<10){
        if(expjoueur>=100){
           experiencejoueur.max="100";
           niveaujoueur++;
           expjoueur = expjoueur-100; 
        }
    }else if(niveaujoueur>10){
        if(expjoueur>=20000){
            experiencejoueur.max="20000";
            niveaujoueur++;
            expjoueur=expjoueur-20000;
        }
    }
        //alert("vous avez tué "+namemonster.innerText);
    }else if(viejoueur<=0){
        alert("Tu as perdu");
    }
}

//setInterval(attaquemonstre,vitesseattaquejoueur);