interface Waiter{
    anjiao: boolean;
    say: ()=>{

    }
}
interface Teacher{
    anjiao: boolean;
    skill: ()=>{

    }
}
// Union Types
// Type Assertion
function judgeWho(animal: Waiter | Teacher){
    if(animal.anjiao)
        (animal as Waiter).say();
    else
        (animal as Teacher).skill();
}
// -in
function judgeWhoTwo(animal: Waiter | Teacher){
    if("say" in animal)
        animal.say();
    else
        animal.skill();
}
// typeof
function add(first: number | string, second: number |string){
    if(typeof first === "string" || typeof second === "string")
        return `${second}${first}`;
    else
        return first+second;
}
// instanceof 只能用在类上

class NumberObj{
    count: number = 1;
}

function addObj(first: object | NumberObj, second: object | NumberObj){
    if(first instanceof NumberObj && second instanceof NumberObj)
        return first.count + second.count;
    return 0;
}
