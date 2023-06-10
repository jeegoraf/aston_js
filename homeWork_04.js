// ЗАДАНИЕ 2

function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

const loggerWrapper = logger.bind(obj)

// БОНУСНОЕ ЗАДАНИЕ

function bind(func, context) {
    return function(){

        // создаем новый метод у переданного объекта
        context.f = func 

        // в момент вызова этого метода проихсодит неявная привязка контекста
        return context.f()
    }
}

const loggerWrapper2 = bind(logger, obj)

