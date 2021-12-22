// 对象类型
const girl:{
    name:string,
    age:number
}={
    name:"xiaohong",
    age:18
}
console.log(girl.name);
// 数组类型
const girls:string[]=["jerry","amy","mole"];
// 类类型
// class Person{}
// const tom:Person=new Person();
// 函数类型
const meetGirl:()=>string=()=>{
    return "hello world"
}
console.log(meetGirl())

