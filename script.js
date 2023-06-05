// ЗАДАНИЕ 1

// литеральный способ создания объекта
const counter1 = {
  count: 0,
  inc: function () {
    this.count += 1;
  },
  dec: function () {
    this.count -= 1;
  },
};

// создание объекта с помощью функции-конструктора
function Counter() {
  this.count = 0;
  this.dec = function () {
    this.count -= 1;
  };
  this.inc = function () {
    this.count += 1;
  };
}

const counter2 = new Counter();

// создание объекта с помощью Object.create()
const counter3 = Object.create(
  {},
  {
    count: {
      enumerable: true,
      writable: true,
      configurable: false,
      value: 0,
    },
    inc: {
      enumerable: true,
      writable: false,
      configurable: false,
      value: function () {
        this.count += 1;
      },
    },
    dec: {
      enumerable: true,
      writable: false,
      configurable: false,
      value: function () {
        this.count -= 1;
      },
    },
  }
);

// создание объекта с помощью Object.assgin()
const counter4 = Object.assign(
  {},
  {
    count: 0,
    inc: function () {
      this.count += 1;
    },
    dec: function () {
      this.count -= 1;
    },
  }
);

// ЗАДАНИЕ 2

// копирование объекта с помощью Object.assign()
const counter5 = Object.assign({}, counter1)

// копирование объекта с помощью spread-оператора
const counter6 = {...counter1}

// копирование объекта с помощью JSON.parse(JSON.stringify())
const counter7 = JSON.parse(JSON.stringify(counter1))

// ЗАДАНИЕ 3 

// создаем счетчик с помощью FD
function makeCounter(){
    let count = 0

    return function(){
        return count++ 
    }
}

// создаем счетчик с помощью FE
const makeCounter2 = function(){
    let count = 0

    return function(){
        return count++
    }
}

// создаем счетчик с помощью arrow function
const makeCounter3 = ()=>{
    let count = 0

    return function(){
        return count++
    }
}

// БОНУСНОЕ ЗАДАНИЕ 2

function reverseStr(str){
    return str.split("").reverse().join("")
}






