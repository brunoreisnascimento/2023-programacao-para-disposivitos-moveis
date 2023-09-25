
// Definição de variáveis
let nomeDisciplina = "Nome da primeira disciplina";
const nomeDisciplina2 = "Nome da segunda disciplina";

console.log(`nomeDisciplina: ${nomeDisciplina}`);
console.log("nomeDisciplina: ", nomeDisciplina);
console.log('nomeDisciplina: '+ nomeDisciplina);
console.log(1,1);
console.log(1+1);


// Condicionais


let turno = "Noite";

if (turno == "Matutino") {
    console.log("O Sol está nascendo!");
} if (turno == "Vespertino") {
    console.log("O Sol está  se pondo");
} else {
    console.log("O Céu está escuro!");
}

turno = "Diurno"
let horario = 14;
if (horario >= 00 && horario <= 12) {
    console.log("Está de manhã");
} else if (horario >= 13 && horario <= 18){
    console.log("Está de tarde");
} else {
    console.log("Está de noite");
}    

let hora = 23;
let  minutos = 0;
switch (hora !== '' && minutos !== '') {
    case (hora >= 00 && hora <= 12 && minutos >= 1 && minutos <= 59):
        console.log(`Está de manhã e são: ${hora}:${minutos}h`);
        break;
    case (hora >= 13 && hora <= 18 && minutos >=1 && minutos <= 59):
        console.log(`Está de tarde e são: ${hora}:${minutos}h`);
        break;
    case (hora >= 19 && hora <= 23 && minutos>= 1 && minutos <= 59):
        console.log(`Está de noite e são: ${hora}:${minutos}h`);
        break;
    default:
        console.log("Horário inválido!");
        break;
}


let modeloArray = [10,2,1,50,9,8,7,0];

let testeOutro = ["teste",1, 10,"bolinha"];

for (let index = 0; index < testeOutro.length; index++) {
    const element = testeOutro[index];
    console.log("For: ", element);
}

testeOutro.forEach(element => {
    console.log("forEach: ",element);
});

for (const key in testeOutro) {
    const element = testeOutro[key];
    console.log("For in: ", element);
}

testeOutro.map((t1) => {console.log("Map: ", t1);});

console.log(modeloArray);

let filtro = modeloArray.filter((m)=> m >= 8);
console.log(filtro);

let teste3 = modeloArray.filter((t) => t > 3).map((t)=> {
    console.log("Map + filter: ", t);
});

let filtrados = [];
for (let index = 0; index < modeloArray.length; index++) {
    if(modeloArray[index] >=8){
        filtrados.push(modeloArray[index])
    }
}

console.log(filtrados);