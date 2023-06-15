// ЗАДАНИЕ 3

// создадим объект Person в прототипном стиле
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.logInfo = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
};

let person = new Person("John", 23);

// в этом объекте доступны методы объекта objPerson
let person2 = {__proto__: person}


// другой способ создания объекта

const objPerson = {
  name: "John",
  age: 23,
  logInfo: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  },
};

// в этом объекте доступны методы объекта objPerson
const objPerson2 = {__proto__: objPerson}

// ЗАДАНИЕ 4

class PersonThree extends Person{
    constructor(name, age){
        super(name, age)
    }

    get() {
        return this.name
    }

    set(name){
        this.name = name
    }

}


