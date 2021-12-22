abstract class Chengyu{
    abstract skill() :any
}

class Waiter extends Chengyu{
    skill(){
        console.log("Drink Water plz")
    }
}

class BaseTeacher extends Chengyu{
    skill(){
        console.log("Smoke plz")
    }
}

class SeniorTeacher extends Chengyu{
    skill(){
        console.log("SPA plz")
    }
}