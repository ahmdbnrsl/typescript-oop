import { Interfaces, Tools } from './main';

const anu = new Tools.MathOperations<number, string>(2, 2, 'tambah');
Tools.Print.Log(anu.result);

interface Food {
    [index: number]: string;
}

interface Pers<Type extends Food> {
    name: string;
    age: number;
    food: Array<Type>;
}
class Person {
    constructor(
        public name: string = 'beni',
        public age: number = 0
    ) {}
}

class Persons<T extends Pers<Food>, F extends Array<Food>>
    extends Person
    implements Pers<Food>
{
    hobbies: Array<string>;
    constructor(
        name: string,
        age: number,
        hobbies: Array<string>,
        public detail: T,
        public food: F
    ) {
        super(name, age);
        this.hobbies = hobbies;
    }
}

const person = new Persons<Pers<Food>, Array<Food>>(
    'Via Fitriana',
    19,
    ['Make up maybe'],
    {
        name: 'anu',
        age: 9,
        food: ['ayam', 'ya']
    },
    ['ayam']
);

console.info(person.name);
