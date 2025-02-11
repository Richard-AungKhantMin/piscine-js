

const clone1 = Object.assign({}, person);
const clone2 = {...person};
const samePerson = person;

person.age += 1;
person.country = 'FR';

console.log(clone1); // { age: 10, country: "US" } (unchanged)
console.log(clone2); // { age: 10, country: "US" } (unchanged)
console.log(samePerson); // { age: 11, country: "FR" } (same as person)
console.log(person); // { age: 11, country: "FR" }