const ourTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "./img/wayne-barnett-founder-ceo.jpg"
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "./img/angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "./img/walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "./img/angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "./img/scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "./img/barbara-ramos-graphic-designer.jpg"
    }
]


//stampa in console
for (let key in ourTeam) {
    console.log(key, ourTeam[key]);
}


//stampa elementi in pagina come stringhe
const containerEl = document.querySelector('div.container'); 

for (let i = 0; i < ourTeam.length; i++){
    const cardEl = document.createElement('article');
    cardEl.classList.add('card');
    containerEl.appendChild(cardEl);
    let membroTeam = ourTeam[i];
    for (const key in ourTeam[i]) {
        let pEl = document.createElement('p');
            pEl.append(membroTeam[key]);
            cardEl.appendChild(pEl);
    }    
}


//Trovato metodo per inserire le immagini in pagina!

let img = document.createElement("img"); 
img.src = './img/wayne-barnett-founder-ceo.jpg'; 
let src = document.querySelector("article.card"); 
src.appendChild(img); 
