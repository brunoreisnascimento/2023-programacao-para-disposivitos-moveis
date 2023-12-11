
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