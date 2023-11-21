/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite nella tabella qui sotto.

MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

// Creo l'Array di oggetti con le informazioni fornite nella tabella

let team = [
    {
        name: "Wayne",
        surname: "Barnett",
        role: "Founder & CEO",
        image: "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela",
        surname: "Carroll",
        role: "Chief Editor",
        image: "./img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter",
        surname: "Gordon",
        role: "Office Manager",
        image: "./img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela",
        surname: "Lopez",
        role: "Social Media Manager",
        image: "./img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott",
        surname: "Estrada",
        role: "Developer",
        image: "./img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara",
        surname: "Ramos",
        role: "Graphic Designer",
        image: "./img/barbara-ramos-graphic-designer.jpg"
    }
];


// Stampo nella console le informazioni

for (let i = 0; i < team.length; i++) {
    let members = team[i];
    console.log("---------- Member" + " " + (i + 1) + " -----------")
    for (let key in members) {
        let membersDetails = members[key];
        console.log(`${key}: ${membersDetails}`);
    };
}

let pushCardhtml;
for (let i = 0; i < team.length; i++) {
pushCardhtml = document.getElementById("card").innerHTML += `
<div class="col-4"> <div class="card">
<img src="${team[i].image}" class="card-img-top" alt="FotoProfilo">
<div class="card-body">
  <h5 class="card-title">${team[i].name}</h5>
  <p class="card-text">
  ${team[i].role}</p>
  
</div>
</div>
</div>`


    
}


// ---------------------------------------- FUNZIONI --------------------------------------
