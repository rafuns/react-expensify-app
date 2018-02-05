/* ************* */
/* Object Destructuring */
/* ************* */

// const person = {
//     name: 'Theo',
//     age: 26,
//     location: {
//         city: 'Bucharest',
//         temp: 1
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (temperature && city) {
//     console.log(`It's ${temperature} deg C in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

/* ************* */
/* Array Destructuring */
/* ************* */


const address = ['45 Vasile Vasilache', 'Voluntari', 'Ilfov', '077190'];
const [, city, county = 'Bucuresti'] = address;
console.log(`You are in ${city} ${county}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, small, medium, large] = item;

console.log(`A medium ${coffee} costs ${medium}`);
