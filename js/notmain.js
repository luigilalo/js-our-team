// Questo è il file che contiene tutto il codice JS della pagina web

// LC1: Dichiarazione, visualizzazione e manipolazione di oggetti in JS
/*
let person = {
    name: "Pinco",
    surname: "Pallino",
    age: 15
};

let ball = {
    colour: ["giallo", "verde"],
    weight: 0.5,
    type: "palla da calcio",
    diameter: 60
};

let ball2 = {
    colour: ["blu", "rosso"],
    weight: 0.7,
    type: "palla da calcio",
    diameter: 50
};


// Stampare un oggetto in console
printObject(ball);
printObject(ball2);

// Svolgo qualche modifica e aggiunta di proprietà ad un oggetto

ball.colour = ["verde"];
// ball["colour"] = ["verde"];

ball.weight = 0.4;
// ball["weight"] = 0.4;

ball.material = "cuoio";
//ball["material"] = "cuoio";

console.log("Ho modificato l'oggetto ball! Lo ristampo:");
printObject(ball);

// Chiedi all'utente la proprietà che vuole visualizza e metti il suo valore in un alert
let userKeyToModifyOrAdd = prompt("Inserisci la proprietà della palla che vuoi modifcare o aggiungere");
let newValueToKey = prompt("Inserisci il valore che vuoi associare alla chiave " + userKeyToModifyOrAdd);

if(!isNaN(newValueToKey)){
    newValueToKey = parseFloat(newValueToKey);
}

ball[userKeyToModifyOrAdd] = newValueToKey;

alert("Il nuovo valore aggiornato di " + userKeyToModifyOrAdd + " è: " + ball[userKeyToModifyOrAdd]);

printObject(ball);
*/




/*
    LC 2:
    Definiamo un array di oggetti:
    - ogni elemento dell'array è un oggetto che rappresenta uno stundente
    - ogni studente ha le proprietà nome, cognome, eta e materie preferite
*/

let students = [
    {
        name: "Pinco",
        surname: "Pallino",
        age: 30,
        favourite_subjects: ["Matematica", "Informatica"]
    },
    {
        name: "Marco",
        surname: "Pippo",
        age: 27,
        favourite_subjects: ["Italiano", "Geografia", "Storia"]
    },
    {
        name: "Giulia",
        surname: "Carta",
        age: 25,
        favourite_subjects: ["Italiano", "Geografia", "Storia", "Filosofia"]
    }
];


// Stampiamo la lista degli studenti partecipanti
printArrayStudent(students);

// Supponiamo che l'utente voglia inserire un nuovo studente

let newName = prompt("Inserisci il nome dello studente: ");
let newSurname = prompt("Inserisci il cognome dello studente");
let newAge = prompt("Inserisci l'età dello studente");


// Come faccio ad aggiungere un po di materie preferite ( da 1 a ....)
let numbersOfFavouritesSubjects = prompt("Inserisci il numero di materie preferite");

let newListFavouriteSubjects = [];

for (let i = 0; i < numbersOfFavouritesSubjects; i++) {
    let newFavouriteSubjects = prompt("Inserisci il nome della materia preferita");
    newListFavouriteSubjects.push(newFavouriteSubjects);
}


let newStudent = {
    name: newName,
    surname: newSurname,
    age: newAge,
    favourite_subjects: newListFavouriteSubjects
};

students.push(newStudent);

// Stampiamo la lista aggionrata degli studenti partecipanti
printArrayStudent(students);

console.log(students);







// ------------ FUNZIONI ---------------------

function printObject(object) {
    let string = "";

    string += "{\n";

    for (let key in object) {
        string += "\t " + key + ": " + object[key] + "\n";
    }

    string += "}";

    console.log(string);

}

function printArrayStudent(arrayStudents) {
    for (let i = 0; i < arrayStudents.length; i++) {

        let student = arrayStudents[i];

        console.log("Lo studente n° " + (i + 1) + " è:");
        printObject(student);
    }
}