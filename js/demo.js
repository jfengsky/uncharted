var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 'aaaa';
var b = 2222;
var c = 7;
c = 'ccc';
// const add = (x: number, y: number): number => x + y
function add(x, y) {
    if (y === void 0) { y = 0; }
    return x + y;
}
var reduce = function (x, y) { return x - y; };
add(3);
reduce(4, 6);
var test = function (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
};
function func1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
}
func1(1, 2, 3, 4);
var Person = (function () {
    function Person() {
    }
    Person.prototype.eat = function () {
        console.log(name);
    };
    return Person;
}());
var p1 = new Person();
var Employer = (function (_super) {
    __extends(Employer, _super);
    function Employer(name, code) {
        return _super.call(this) || this;
    }
    Employer.prototype.work = function () {
        _super.prototype.eat.call(this);
    };
    return Employer;
}(Person));
var e1 = new Employer('aaa', 1);
var xcatliu = {
    name: 'xCat',
    age: 25
};
// xcatliu.name = 'xbt'
xcatliu.age = 20;
var array1 = [1, 2, 3, 4];
var array2 = [1, '2', true];
var mySum = function (x, y) {
    return x + y;
};
var mySum2 = function (x, y) { return x + y; };
mySum2(1, 2);
var mySum3 = function (x, y) {
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
