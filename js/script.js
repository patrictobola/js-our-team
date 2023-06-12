console.log('JS OK')
// Recupero gli elementi dal DOM 
const namesElement = document.getElementById('names')
const roleElement = document.getElementById('role')
const profilesElement = document.getElementById('profiles')

// Creo un array con all'interno lo staff 
const staff = {
    name: ["Wayne Barnett", "Angela Caroll", "Walter Gordon", "Angela Lopez", "Scott Estrada", "Barbara Ramos"],
    role: ["Founder & CEO", "Chief Editor", "Office Manager", "Social Media Manager", "Developer", "Graphic Designer"],
    profilePic: ["wayne-barnett-founder-ceo.jpg", "angela-caroll-chief-editor.jpg", "walter-gordon-office-manager.jpg", "angela-lopez-social-media-manager.jpg", "scott-estrada-developer.jpg", "barbara-ramos-graphic-designer.jpg"]
}


// Un for in loop per stampare in console il nostro array 
for (let key in staff){
    console.log(key, staff[key])
}


// Stampo i nomi dello staff in pagina 
let namesList = `<ul>`;
for (let i = 0; i < staff.name.length; i++){
    const names = `<li>${staff.name[i]}</li>`;
    namesList += names;
}
namesList += `</ul>`;
namesElement.innerHTML = namesList;


// Stampo i ruoli dello staff in pagina 
let rolesList = `<ul>`;
for (let i = 0; i < staff.role.length; i++){
    const roles = `<li>${staff.role[i]}</li>`;
    rolesList += roles;
}
rolesList += `</ul>`;
roleElement.innerHTML = rolesList;


// Stampo le stringhe delle foto dello staff in pagina 
let profilePicsList = `<ul>`;
for (let i = 0; i < staff.profilePic.length; i++){
    const profilePics = `<li>${staff.profilePic[i]}</li>`;
    profilePicsList += profilePics;
}
profilePicsList += `</ul>`;
profilesElement.innerHTML = profilePicsList;


/* Da quì in poi ho deciso di ricominciare da capo il codice con query selector e tutto il resto */
// Recupero gli elementi dal DOM 
const cardProfile = document.querySelectorAll('.card-img-top')
const cardName = document.querySelectorAll('.card-title')
const cardRole = document.querySelectorAll('.card-text')


// // Ciclo for per stampare in pagina i nomi dello staff 
// for (let i = 0; i < staff.name.length; i++){
//     const names = staff.name[i]
//     cardName[i].innerHTML = names
// }
// // Ciclo for per stampare in pagina i ruoli dello staff 
// for (let i = 0; i < staff.role.length; i++){
//     const roles = staff.role[i]
//     cardRole[i].innerHTML = roles
// }
// // Ciclo for per stampare in pagina le foto dello staff 
// for (let i = 0; i < staff.profilePic.length; i++){
//     const profilePic = staff.profilePic[i]
//     cardProfile[i].src = `/img/${profilePic}`
// }

// Ho fatto un unico ciclo for (solo in questo caso perché sappiamo che ogni array è della stessa lunghezza)
for (let i = 0; i < staff.profilePic.length; i++){
    const profilePic = staff.profilePic[i]
    cardProfile[i].src = `/img/${profilePic}`
    const roles = staff.role[i]
    cardRole[i].innerHTML = roles
    const names = staff.name[i]
    cardName[i].innerHTML = names
}


