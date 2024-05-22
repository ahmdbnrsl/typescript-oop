import { Tools } from './main';
const anu = new Tools.MathOperations(2, 2, 'tambah');
Tools.Print.Log(anu.result);
class Person {
    name;
    age;
    constructor(name = 'beni', age = 0) {
        this.name = name;
        this.age = age;
    }
}
class Persons extends Person {
    detail;
    food;
    hobbies;
    constructor(name, age, hobbies, detail, food) {
        super(name, age);
        this.detail = detail;
        this.food = food;
        this.hobbies = hobbies;
    }
}
const person = new Persons('Via Fitriana', 19, ['Make up maybe'], {
    name: 'anu',
    age: 9,
    food: ['ayam', 'ya']
}, ['ayam']);
console.info(person.name);
