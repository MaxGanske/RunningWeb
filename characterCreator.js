console.log("running!");

let headVariants = ["$_$", "@_@", "*_*"];
let torsoVariants = ["-- H --", "-- X --", "-- | --"];
let legsVariants = ["1 1", "! !", "/\\"];
let feetVariants = ["@ @", "= =", "- -"];

let headIndex = 0;
let torsoIndex = 0;
let legsIndex = 0;
let feetIndex = 0;

let characterParts = [];

const head = document.getElementById("head");
const torso = document.getElementById("torso");
const legs = document.getElementById("legs");
const feet = document.getElementById("feet");

const createCharacterTab = document.getElementById("createCharacterTab");

function changeHead(){

    let currHead;
    if (headIndex < headVariants.length) {
        currHead = headVariants[headIndex];
        headIndex++;
    } else {
        headIndex = 0;
        currHead = headVariants[headIndex];
        headIndex++;
    }
    head.innerText = currHead;
}
function changeTorso() {

    let currTorso;
    if (torsoIndex < torsoVariants.length) {
        currTorso = torsoVariants[torsoIndex];
        torsoIndex++;
    } else {
        torsoIndex = 0;
        currTorso = torsoVariants[torsoIndex];
        torsoIndex++;
    }
    torso.innerText = currTorso;
}
function changeLegs(){

    let currLegs;
    if (legsIndex < legsVariants.length) {
        currLegs = legsVariants[legsIndex];
        legsIndex++;
    } else {
        legsIndex = 0;
        currLegs = legsVariants[legsIndex];
        legsIndex++;
    }
    legs.innerText = currLegs;
}
function changeFeet(){

    let currFeet;
    if (feetIndex < feetVariants.length) {
        currFeet = feetVariants[feetIndex];
        feetIndex++;
    } else {
        feetIndex = 0;
        currFeet = feetVariants[feetIndex];
        feetIndex++;
    }
    feet.innerText = currFeet;
}

function saveCharacter() {

        characterParts[0] = head.innerText;
        characterParts[1] = torso.innerText;
        characterParts[2] = legs.innerText;
        characterParts[3] = feet.innerText;
        createCharacterTab.classList.add("is-hidden");

        for(let i = 0; i < characterParts.length; i++){
            console.log(characterParts[i]);
        }
}

