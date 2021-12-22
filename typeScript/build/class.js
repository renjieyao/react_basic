"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var youngLady = (function () {
    function youngLady() {
        this.content = "hello world";
    }
    youngLady.prototype.sayHello = function () {
        return this.content;
    };
    return youngLady;
}());
var Woman = (function (_super) {
    __extends(Woman, _super);
    function Woman() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Woman.prototype.sayHi = function () {
        return "hi world";
    };
    Woman.prototype.sayHello = function () {
        return "rewrite hello world";
    };
    return Woman;
}(youngLady));
var superWoman = (function (_super) {
    __extends(superWoman, _super);
    function superWoman() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    superWoman.prototype.sayHello = function () {
        return _super.prototype.sayHello.call(this) + " super";
    };
    return superWoman;
}(youngLady));
var godness = new youngLady();
var god = new Woman();
var gold = new superWoman();
console.log(gold.sayHello());
console.log(god.sayHi());
var PersonType = (function () {
    function PersonType() {
    }
    PersonType.prototype.sayHello = function () {
        return (this.name + " world Nihilo");
    };
    return PersonType;
}());
var child = (function (_super) {
    __extends(child, _super);
    function child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    child.prototype.sayHa = function () {
        return this.sex + "hihihi";
    };
    return child;
}(PersonType));
var person = new PersonType();
var childExp = new child();
person.name = "hello world";
console.log(childExp.sayHa());
