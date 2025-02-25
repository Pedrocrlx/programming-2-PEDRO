const users = [
    { id: 1, name: 'Alice', city: 'Paris' },
    { id: 2, name: 'Bob', city: 'London' },
    { id: 3, name: 'Charlie', city: 'Paris' }
];

const data = new Map();


users.forEach((key) => data.set(key.city, users));

console.log(data);

//so tens que fazer set do value q seja igual a cidade



