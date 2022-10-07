const pokemonsImg = document.querySelectorAll(".poke-image-right, .poke-image-left");

pokemonsImg.forEach((pokemonImg) => {
    pokemonImg.addEventListener("click",() => {
        const pokemonName = pokemonImg.id.substring(5,pokemonImg.id.length);
        const pokemonSound = new Audio(`./assets/pokemon-sound/${pokemonName}.mp3`);
        pokemonSound.play();
    });
});