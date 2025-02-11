const person = {
    age : 10,
    country,
}

const clone1 = Object.assign({}, person)
const clone2 = {...person}
const samePerson = person

person.age += 1
person.country = 'FR'