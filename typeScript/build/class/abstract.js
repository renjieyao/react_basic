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
var Chengyu = (function () {
    function Chengyu() {
    }
    return Chengyu;
}());
var Waiter = (function (_super) {
    __extends(Waiter, _super);
    function Waiter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Waiter.prototype.skill = function () {
        console.log("Drink Water plz");
    };
    return Waiter;
}(Chengyu));
var BaseTeacher = (function (_super) {
    __extends(BaseTeacher, _super);
    function BaseTeacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseTeacher.prototype.skill = function () {
        console.log("Smoke plz");
    };
    return BaseTeacher;
}(Chengyu));
var SeniorTeacher = (function (_super) {
    __extends(SeniorTeacher, _super);
    function SeniorTeacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeniorTeacher.prototype.skill = function () {
        console.log("SPA plz");
    };
    return SeniorTeacher;
}(Chengyu));
