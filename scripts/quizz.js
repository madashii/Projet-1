// LISTE DES QUESTIONS
const questions = [
    {
        id:0,
        question:"En quelle année ont été créés les Pokémon ?",
        clauses:[{text:"1996",correct:true},{text:"1998",correct:false},{text:"2000",correct:false},{text:"2002",correct:false}]
    },
    {
        id:1,
        question:"Quels ont été les 2 premiers jeux Pokémon en France ?",
        clauses:[{text:"Rouge et Jaune",correct:false},{text:"Vert et Bleu",correct:false},{text:"Rouge et bleu",correct:true},{text:"Rouge et vert",correct:false}]
    },
    {
        id:2,
        question:"Combien de Pokémons comptaient la première génération ?",
        clauses:[{text:"100",correct:false},{text:"101",correct:false},{text:"150",correct:false},{text:"151",correct:true}]
    },
    {
        id:3,
        question:"Lequel de ces Pokémons ne fait pas partie de la première génération ?",
        clauses:[{text:"Caninos",correct:false},{text:"Dodrio",correct:false},{text:"Artikodin",correct:false},{text:"Wattouat",correct:true}]
    },
    {
        id:4,
        question:"Quel pokémon est le numéro 1 dans le pokédex ?",
        clauses:[{text:"Pikachu",correct:false},{text:"Bulbizarre",correct:true},{text:"Carapuce",correct:false},{text:"Roucool",correct:false}]
    },
    {
        id:5,
        question:"Dans la première saison du dessin animé Pokémon, dans quelle ligue se trouve les héros ?",
        clauses:[{text:"Johto",correct:false},{text:"Sinnoh",correct:false},{text:"Indigo",correct:true},{text:"Unys",correct:false}]
    },
    {
        id:6,
        question:"Quel est le badge donné par Ondine en tant que championne Pokémon ?",
        clauses:[{text:"Terre",correct:false},{text:"Cascade",correct:true},{text:"Océan",correct:false},{text:"Volcan",correct:false}]
    },
    {
        id:7,
        question:"Sous quel nom est connu le personnage de Sacha en version anglaise ?",
        clauses:[{text:"Sam",correct:false},{text:"Ash",correct:true},{text:"Sato",correct:false},{text:"Ketch",correct:false}]
    },
    {
        id:8,
        question:"Quel est l’âge de Sacha lorsqu’il commence sa quête pour devenir un maître Pokémon ?",
        clauses:[{text:"8 ans",correct:false},{text:"10 ans",correct:true},{text:"12 ans",correct:false},{text:"14 ans",correct:false}]
    },
    {
        id:9,
        question:"Quelle est l’évolution de Fantominus ?",
        clauses:[{text:"Ectoplasma",correct:false},{text:"Ténéfix",correct:false},{text:"Spectrum",correct:true},{text:"Marshadow",correct:false}]
    },
]

//FCT TO DISPLAY LIFE 
const displayHealth = (healthNumber) => {
    const healthBar = document.querySelector(".quizz-health");
    healthBar.style.background = `url(\"./assets/quizz/healthbar/${healthNumber}.webp\") no-repeat`; // on choisit l'image en fonction du nombre de pokeballs
    healthBar.style.backgroundSize = "cover";
}

//FCT TO DISPLAY QUESTION
const displayQuestion = (questions,questionNumber) => {
    const question = document.querySelector("#question-text");
    question.innerHTML = questions[questionNumber].question; // on affiche la question
}

const displayNumberQuestion = (questions,currentQuestion) => {
    const numberQuestion = document.querySelector("#number-question");
    numberQuestion.innerHTML = currentQuestion+1+"/"+questions.length; // on affiche le numéro de la question
}

//FCT TO DISPLAY CLAUSES
const displayClauses = (questions,questionNumber) =>{
    for(let i=0;i<4;i++){ // on boucle sur les 4 clauses pour les afficher
        const clause = document.querySelector(`#choice${i+1}-text`);
        clause.innerHTML = questions[questionNumber].clauses[i].text;
    }
}

// FCT TO DISPLAY QUESTION+CLAUSES
const displayQuestionClauses = (questions,questionNumber,currentQuestion) => {
    displayQuestion(questions,questionNumber); //on affiche la question
    displayClauses(questions,questionNumber); //on affiche les clauses
    displayNumberQuestion(questions,currentQuestion); //on affiche le numéro de la question
}

// FCT TO DISPLAY GOOD ANSWER
const displayGoodAnswer = (questions,questionNumber) => {
    for(let i=0;i<4;i++){ //on gère l'affichage de la bonne réponse et des mauvaises réponses
        const clause = document.querySelector(`#choice${i+1}-text`);
        const card = document.querySelector(`#choice${i+1}`);
        if(questions[questionNumber].clauses[i].correct){ // si la clause est correcte on affiche la carte verte
            clause.style.color = "#417028";
            card.style.background = `url(\"./assets/quizz/cards/green_card.webp\") no-repeat`;
        }
        else{
            clause.style.color = "#7B1F1F";
            card.style.background = `url(\"./assets/quizz/cards/red_card.webp\") no-repeat`;
        }
        card.style.backgroundSize = "cover";
    }
}

//FCT POUR REMETTRE LES CARTES EN GRISES
const displayGreyCards = () => {
    for(let i=0;i<4;i++){ // on remet les cartes en grises
        const clause = document.querySelector(`#choice${i+1}-text`);
        clause.style.color = "black";
        const card = document.querySelector(`#choice${i+1}`);
        card.style.background = `url(\"./assets/quizz/cards/grey_card.webp\") no-repeat`;
        card.style.backgroundSize = "cover";
    }
}

//FCT POUR VERIFIER SI LA REPONSE EST VRAIE OU FAUSSE
const isGoodAnswer = (questions, currentQuestion, idCardPressed) => { //retourne true si la réponse où le user a cliqué est bonne
    return questions[currentQuestion].clauses[idCardPressed].correct;
}

// FCT POUR GERER L'AFFICHAGE EN FONCTION DE SI LE QUIZZ EST LANCE OU NON
const quizzStarted = (isStarted) => { 
    const quizzStartDiv = document.querySelector(".quizz-start");
    const quizzHealthDiv = document.querySelector(".quizz-health");
    const quizzClausesDiv = document.querySelector(".quizz-clauses");
    const quizzFooterDiv = document.querySelector(".quizz-footer");
    const quizzQuestion = document.querySelector("#question-text");
    if(isStarted){
        quizzStartDiv.style.display = "none";
        quizzHealthDiv.style.display = "block";
        quizzClausesDiv.style.display = "grid";
        quizzFooterDiv.style.display = "block";
    }
    else{
        quizzStartDiv.style.display = "block";
        quizzQuestion.innerHTML = "Commence le quizz en appuyant sur START";
        quizzHealthDiv.style.display = "none";
        quizzClausesDiv.style.display = "none";
        quizzFooterDiv.style.display = "none";
    }
}



quizzStarted(false); //le quizz n'a pas commencé
let currentQuestion = 1; //question actuelle
let currentHealth = 6; //nombre de vies actuelles
const music = new Audio('./assets/quizz/music/quizz-music.mp3');
const startButton = document.querySelector(".quizz-start");

startButton.addEventListener("click", () => { // quand on appuie sur start
    quizzStarted(true); // on commence le quizz
    displayHealth(6); // on affiche les 6 vies de départ
    displayQuestionClauses(questions,0,0); // on affiche la première question
    //music.play();

});

const cards = document.querySelectorAll(".quizz-clauses-card"); // on récupère les 4 boutons
let disableCardClick = false; // on bloque la possiblité d'appuyer sur les cards
cards.forEach((card) => { // on boucle sur chaque bouton
    card.addEventListener("click",() => { // si on clique sur un des boutons
        if(disableCardClick){ 
            return; // on ne fait rien
        }

        const textQuestion = document.querySelector("#question-text");
        displayGoodAnswer(questions,currentQuestion-1); //on affiche les bonnes réponses
        if(isGoodAnswer(questions,currentQuestion-1,card.id[6]-1)){ //si la réponse est bonne
            textQuestion.innerHTML = "Bonne réponse !";
        }
        else{
            currentHealth--;
            displayHealth(currentHealth); //on enlève une vie
            textQuestion.innerHTML = "Mauvaise réponse !";
        }
        disableCardClick = true; // on bloque la possibilité de cliquer sur les cartes
        setTimeout(() => { //au bout de 3 secondes
            console.log(currentQuestion);
            console.log(questions.length);
            if(currentQuestion < questions.length){ // si il reste des questions
                displayQuestionClauses(questions,currentQuestion,currentQuestion); //on affiche une nouvelle question
            }
            if(currentQuestion === questions.length || currentHealth===0 ){ //si on est à la dernière question
                quizzStarted(false); //on arrête le quizz
                startButton.style.background = `url(\"./assets/quizz/restart.webp\") no-repeat`;
                startButton.style.backgroundSize = "cover";
                if (currentHealth === 0) {
                    textQuestion.innerHTML = "Tu n'as plus de vie !";
                }
                else{
                    textQuestion.innerHTML = `Fin du quizz ! Tu as eu ${6-currentHealth} ${6-currentHealth <= 1 ? "mauvaise réponse" : "mauvaises réponses"} sur ${questions.length}!`;
                }
                    //music.pause();
                //music.currentTime = 0;
                currentQuestion = 1; // on reset
                currentHealth = 6; // on reset
            }
            displayGreyCards(); // on reset les boutons
            currentQuestion++;
            disableCardClick = false; // on débloque la possibilité de cliquer sur les cartes
        }, 3000);
    })
})
