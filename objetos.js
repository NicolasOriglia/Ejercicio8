const developer = {nombre: 'Nicolas', apellido:'Origlia', edad: 24,
altura: 1.75, eresDesarrollador: true,};

const friend_1 = {nombre: 'Facundo', apellido:'Palmieri', edad: 23,
altura: 1.75, eresDesarrollador: false,};

const friend_2= {nombre: 'Julian', apellido:'Davies', edad: 24,
altura: 1.75, eresDesarrollador: false,};

let edadPropia = developer.edad;
console.log(edadPropia);

const newArr = [{...developer},{...friend_1}, {...friend_2}];
console.log(newArr);

newArr.sort((a,b)=> b.edad - a.edad);
console.log(newArr);