console.log('JS OK')
// Recupero gli elementi dal DOM 
const namesElement = document.getElementById('names')
const roleElement = document.getElementById('role')
const profilesElement = document.getElementById('profiles')

// Creo un array con all'interno lo staff 
const staff = [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      profilePic: "wayne-barnett-founder-ceo.jpg",
    },
    {
      name: "Angela Caroll",
      role: "Chief Editor",
      profilePic: "angela-caroll-chief-editor.jpg",
    },
    {
      name: "Walter Gordon",
      role: "Office Manager",
      profilePic: "walter-gordon-office-manager.jpg",
    },
    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      profilePic: "angela-lopez-social-media-manager.jpg",
    },
    {
      name: "Scott Estrada",
      role: "Developer",
      profilePic: "scott-estrada-developer.jpg",
    },
    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      profilePic: "barbara-ramos-graphic-designer.jpg",
    },
];


// Un for in loop per stampare in console il nostro array 
for (let key in staff){
    // console.log(key, staff[key])
}


// Stampo i nomi dello staff in pagina 
namesList = `<ul>`
for (let person of staff){
  namesList += `<li>${person.name}</li>`
}
namesList += `</ul>`
namesElement.innerHTML = namesList;


// Stampo i ruoli dello staff in pagina 
let rolesList = `<ul>`;
for (let person of staff){
    rolesList += `<li>${person.role}</li>`;
}
rolesList += `</ul>`;
roleElement.innerHTML = rolesList;


// Stampo le stringhe delle foto dello staff in pagina 
let profilePicsList = `<ul>`;
for (let person of staff){
  profilePicsList +=`<li>${person.profilePic}</li>`;
}
profilePicsList += `</ul>`;
profilesElement.innerHTML = profilePicsList;


/* Da quì in poi ho deciso di ricominciare da capo il codice con query selector e tutto il resto */
// Recupero gli elementi dal DOM 
const cardProfile = document.querySelectorAll('.card-img-top')
const cardName = document.querySelectorAll('.card-title')
const cardRole = document.querySelectorAll('.card-text')


// Ho fatto un unico ciclo for (solo in questo caso perché sappiamo che ogni array è della stessa lunghezza)
for (let i = 0; i < staff.length; i++){
    const profilePic = staff[i].profilePic
    cardProfile[i].src = `img/${profilePic}`
    const roles = staff[i].role
    cardRole[i].innerHTML = roles
    const names = staff[i].name
    cardName[i].innerHTML = names
}


