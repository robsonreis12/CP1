let comida = "macarrão"; 

let tempo = 10

switch(comida){
    case "pipoca":
       if (tempo > 20 && tempo <= 29) {
        console.log (comida = "comida queimou");
    } else if ("pipoca" <10){
        console.log ("tempo insuficiente")
    } else if ("pipoca" >= 30) {
        comida = "kabumm";
    } else { console.log ("Prato pronto, bom apetite!!!")}
        break;

    case "macarrão":
        if ("macarrão" > 8 && "macarrão" <= 23) {
        console.log ("comida queimou");
    } else if ("macarrão" <8){
        console.log ("tempo insuficiente");
    } else if ("macarrão" >= 24) {
        console.log ("kabumm");
    } else { console.log ("Prato pronto, bom apetite!!!")}
        break;

    case "carne":
        if ("carne" > 30 && "carne" <= 44) {
        console.log ("comida queimou");
    } else if ("carne" <15){
        console.log ("tempo insuficiente");
    } else if ("carne" >= 45) {
        console.log ("kabumm");
    } else { console.log ("Prato pronto, bom apetite!!!")}
        break;

    case "Feijão":
        if ("Feijão" > 24 && "Feijão" <= 35) {
        console.log ("comida queimou");
    } else if ("Feijão" <12){
        console.log ("tempo insuficiente");
    } else if ("Feijão" >= 36) {
        console.log ("kabumm");
    } else { console.log ("Prato pronto, bom apetite!!!")}
        break;

    case "Brigadeiro":
        if ("Brigadeiro" > 16 && "Brigadeiro" <= 23) {
        console.log ("comida queimou");
    } else if ("Brigadeiro" <8){
        console.log ("tempo insuficiente");
    } else if ("Brigadeiro" >= 24) {
        console.log ("kabumm");
    } else { console.log ("Prato pronto, bom apetite!!!")}
        break;

    default: 
        console.log ("Prato inexistente")
    
}

