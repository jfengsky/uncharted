const a = 'aaaa';
const b = 2222;
let c = 7;
c = 'ccc';
// const add = (x: number, y: number): number => x + y
function add(x, y = 0) {
    return x + y;
}
const reduce = (x, y) => x - y;
add(3);
reduce(4, 6);
const test = (a, b, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
};
function func1(...args) {
    console.log(args);
}
func1(1, 2, 3, 4);
class Person {
    constructor() {
    }
    eat() {
        console.log(name);
    }
}
const p1 = new Person();
class Employer extends Person {
    constructor(name, code) {
        super();
    }
    work() {
        super.eat();
    }
}
const e1 = new Employer('aaa', 1);
let xcatliu = {
    name: 'xCat',
    age: 25
};
// xcatliu.name = 'xbt'
xcatliu.age = 20;
let array1 = [1, 2, 3, 4];
let array2 = [1, '2', true];
let mySum = function (x, y) {
    return x + y;
};
let mySum2 = (x, y) => x + y;
mySum2(1, 2);
let mySum3 = function (x, y) {
    return x + y;
};
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function handleEvent(ele, event) {
}
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
