"use strict";
var Xishi = (function () {
    function Xishi(_age, name) {
        this._age = _age;
        this._name = name;
    }
    Object.defineProperty(Xishi.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age + 3;
        },
        enumerable: false,
        configurable: true
    });
    Xishi.sayHello = function () {
        console.log("Hello Yao");
    };
    return Xishi;
}());
Xishi.sayHello();
