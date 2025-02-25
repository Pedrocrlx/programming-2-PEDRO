const users = [
    { id: 1, name: "Alice", city: "Paris" },
    { id: 2, name: "Bob", city: "London" },
    { id: 3, name: "Charlie", city: "Paris" },
];

const data = new Map();

users.forEach((user) => {
    if (!data.has(user.city)) {
        data.set(user.city, []);
    }
    data.get(user.city).push(user);
});

console.log(data);
