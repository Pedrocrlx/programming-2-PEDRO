function hora(time) {
    if (time <= 12) {
        console.info("Bom dia jorge");
    }
    else if (time <= 19) {
        console.info("Boa tarde jorge");
    }
    else {
        console.info("Boa noite jorge");
    }
}
//hora(20) 

let nota = 20
console.log(nota < 9? "passou" : "não passou")