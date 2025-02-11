const { platform } = require("os");


// EX 1 FROM DEEP SEEK

/* const animals = ['cachorro', 'gato', 'cachorro', 'pássaro', 'gato', 'gato'];
// Resultado esperado: Map { 'cachorro' => 2, 'gato' => 3, 'pássaro' => 1 }
const result = new Map();

animals.forEach((animal) => {
    if (result.has(animal)) {
        result.set(animal, result.get(animal) + 1);
    } else {
        result.set(animal, 1);
    }
});
console.log(result); */

// EX 2 FROM DEEP SEEK

const alunos = new Map();
let id = 0;
const check = () => {
    alunos.set("E00" + `${id + 1}`, { pedro: [10, 15, 20] })
}

check()
console.log(alunos);
