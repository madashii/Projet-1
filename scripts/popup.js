let facts = ["Le Pokémon le plus puissant est Mewtwo, avec 800 points de statistiques totales.","Le Pokémon le plus petit est Minidraco, avec 0,3 mètre de hauteur.","Le Pokémon le plus grand est Méga-Gyarados, avec 6,5 mètres de hauteur.","Le Pokémon le plus rapide est Deoxys, avec 180 km/h.","Le Pokémon le plus lourd est Méga-Gyarados, avec 305 kg.","Le Pokémon le plus léger est Minidraco, avec 0,3 kg.","Le Pokémon le plus fort en attaque est Mewtwo, avec 300 points d'attaque.","Le Pokémon le plus fort en défense est Méga-Shuckle, avec 230 points de défense.","Le Pokémon le plus fort en attaque spéciale est Mewtwo, avec 300 points d'attaque spéciale.","Le Pokémon le plus fort en défense spéciale est Méga-Shuckle, avec 230 points de défense spéciale.","Le Pokémon le plus fort en vitesse est Deoxys, avec 180 points de vitesse.","Le Pokémon le plus fort en précision est Méga-Shuckle, avec 230 points de précision.","Le Pokémon le plus fort en esquive est Méga-Shuckle, avec 230 points d'esquive.","Le Pokémon le plus fort en chance est Méga-Shuckle, avec 230 points de chance.","Le Pokémon le plus fort en évitement est Méga-Shuckle, avec 230 points d'évitement.","Le Pokémon le plus fort en blocage est Méga-Shuckle, avec 230 points de blocage.","Le Pokémon le plus fort en critique est Méga-Shuckle, avec 230 points de critique.","Le Pokémon le plus fort en critique évité est Méga-Shuckle, avec 230 points de critique évité.","Le Pokémon le plus fort en critique multiplié est Méga-Shuckle, avec 230 points de critique multiplié.","Le Pokémon le plus fort en critique évité multiplié est Méga-Shuckle, avec 230 points de critique évité multiplié.","Le Pokémon le plus fort en critique évité multiplié est Méga-Shuckle, avec 230 points de critique évité multiplié.","Le Pokémon le plus fort en critique évité multiplié est Méga-Shuckle, avec 230 points de critique évité multiplié.","Le Pokémon le plus fort"]

const displayPopup = (isDisplay) => {
    const popup = document.querySelector('.modal-popup');
    switch (isDisplay){
        case true:
            displayFact(facts);
            popup.classList.add('modal-popup-display'); 
            setTimeout(() => {
                popup.classList.remove('modal-popup-display');
            }, 8000);
            break;
        case false:
            popup.classList.remove('modal-popup-display');
    } 
}

const displayFact = (facts) => {
    const fact = document.querySelector('.modal-popup-fact');
    fact.innerHTML = facts[Math.floor(Math.random() * facts.length)];
}

const buttonClosePopup = document.querySelector('.modal-popup-header-closebutton');
buttonClosePopup.addEventListener('click', () => {
    displayPopup(false);
});




