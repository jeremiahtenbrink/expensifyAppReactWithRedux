// const person = {
//     age: 33,
//     location: {
//         city: 'Colorado',
//         temp: 32
//     }
// };
//
// const { name = "April", age } = person;
//
// console.log(`${name} is ${age}.`);
//
// const { city, temp } = person.location;
// console.log(`It's ${temp} in ${city}`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin',
    }
};
const { name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);