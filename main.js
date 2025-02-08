console.time("bigO");

const n = 50;
for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
        console.log(i + j);
    }
}
/* function hora(time) {
    if (time <= 12) {
        console.info("Bom dia jorge");
    }
    else if (time <= 19) {
        console.info("Boa tarde jorge");
    }
    else {
        console.info("Boa noite jorge");
    }
} */
//hora(20) 

/* let nota = 20
console.log(nota < 9 ? "passou" : "não passou") */
console.timeEnd("bigO");
