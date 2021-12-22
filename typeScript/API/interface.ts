
// const screenResume=(name: string, age: number, goast: number)=>{
//     age > 18 && age < 45 && goast > 90 && console.log(name + ",U passed the ingerview");
//     age <18 || age > 45 && goast <=90 && console.log(name + ",U are denied");
// }
interface Girl {
    name: string,
    age: number,
    goast: number,
    // 可选属性
    phoneNumber?:number,
    // 任意类型的属性
    [propname:string]:any,
    // 接口里面的方法
    say(): string, 
}
const screenResume = (girl: Teacher) => {
    girl.age > 18 && girl.age < 45 && girl.goast > 90 && console.log(girl.name + ",U passed the ingerview");
    girl.age < 18 || girl.age > 45 || girl.goast <= 90 && console.log(girl.name + ",U are denied");
}
const getResume = (girl: Girl) => {
    console.log(girl.name + "'s age is " + girl.age)
    console.log(girl.sex);
}
const jerry = {
    phoneNumber:17709224686,
    name: "jerry",
    age: 22,
    goast: 90,
    sex:"female",
    say(){
        return "hello world"
    },
    teacher(){
        return "hello teacher"
    }
}
interface Teacher extends Girl{
    teacher():string
}
// 接口的约束
class xiaoJieJie implements Girl{
    name="marry";
    age=12;
    goast=99;
    sex="female";
    say=()=>{
        return "hi"
    }
}
// screenResume(jerry);
getResume(jerry);