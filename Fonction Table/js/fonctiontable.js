function ajouterAvatar(fichier, position, animation){

    const img = document.createElement("img");

    img.src = fichier;
    document.body.appendChild(img);
    img.classList.add('avatar' + animation);
    img.style.position = "absolute";
    img.style.left = position.x;
    img.style.top = position.y;
}


ajouterAvatar("images/avatar_fleur.svg",{x:"550px", y:"300px"}, 0);

//setTimeout fait démarrer la fonction a la fin du timer

setTimeout(function() {ajouterAvatar("images/avatar_avion.svg",{x:"550px", y:"100px"}, 1)}, 2250);

setTimeout(function() {ajouterAvatar("images/avatar_montagne.svg",{x:"25px", y:"200px"}, 2)}, 4500);

setTimeout(function() {ajouterAvatar("images/avatar_voiture.svg",{x:"25px", y:"200px"}, 3)}, 6750);