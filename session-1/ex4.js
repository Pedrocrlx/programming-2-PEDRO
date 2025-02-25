// Object way for only 1 student ------------

const student = {
    name: 'Pedro Santos',
    age: 20,
    grades: { 'Math': 10, 'Science': 15, 'English': 16 }
};

// OUTPUT : [GRADES]
const AllGrades = Object.values(student.grades);

// REDUCE METHOD TO SUM ELEMENTS FROM ARRAY
const sum = AllGrades.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

// AVERAGE CALC
const averageGrade = sum / AllGrades.length;

console.log('APENAS 1 OBJETO PARA APENAS 1 ESTUDANTE ------- ' + student.name + ':' + ' média => ' + parseInt(averageGrade));


// Map way for 3 students --------------

//ARRAY OF OBJECTS OF STUDENTS
const students = [
    {
        name: 'Paulo Dias',
        age: 20,
        grades: [10, 15, 16]
    },
    {
        name: 'Maria Oliveira',
        age: 22,
        grades: [19, 20, 17]
    },
    {
        name: 'Jorge Carneiro',
        age: 21,
        grades: [16, 18, 15]
    }
]
const StudentGrades = () => {
    console.log("----------------------------------------------");
    console.log("MAPA COM UM ARRAY DE OBJETOS COM 3 ESTUDANTES");
    //FOR..OF TO ITERATE EACH STUDENT OF STUDENTS
    for (const student of students) {
        //GETTING GRADES OF EACH STUDENT
        let StudentGrades = student.grades;
        //REDUCE METHOD TO SUM ELEMENTS FROM ARRAY
        const initialValue = 0;
        const sumWithInitial = StudentGrades.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue,
        );
        //AVERAGE CALCULATION
        const AvgGrade = sumWithInitial / StudentGrades.length;
        console.log(student.name + ":" + " média => " + parseInt(AvgGrade));
    }
    console.log("----------------------------------------------");
}

StudentGrades();
