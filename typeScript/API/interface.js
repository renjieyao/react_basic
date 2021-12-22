"use strict";
var screenResume = function (girl) {
    girl.age > 18 && girl.age < 45 && girl.goast > 90 && console.log(girl.name + ",U passed the ingerview");
    girl.age < 18 || girl.age > 45 || girl.goast <= 90 && console.log(girl.name + ",U are denied");
};
var getResume = function (girl) {
    console.log(girl.name + "'s age is " + girl.age);
    console.log(girl.sex);
};
var jerry = {
    phoneNumber: 17709224686,
    name: "jerry",
    age: 22,
    goast: 90,
    sex: "female",
    say: function () {
        return "hello world";
    },
    teacher: function () {
        return "hello teacher";
    }
};
var xiaoJieJie = (function () {
    function xiaoJieJie() {
        this.name = "marry";
        this.age = 12;
        this.goast = 99;
        this.sex = "female";
        this.say = function () {
            return "hi";
        };
    }
    return xiaoJieJie;
}());
getResume(jerry);
