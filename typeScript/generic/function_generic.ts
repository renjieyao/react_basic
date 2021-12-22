function join<ANY>(first: ANY,second: ANY){
    return `${first}${second}`
}

function join2<T,P>(first: T,second: P){
    return `${first}${second}`
}

console.log(join<string>('hello','world'));
console.log(join2<string,number>('hello',2));

// 泛型中数组的使用
// function myFun<T>(params:Array<T>){
//     return params
// }
function myFun<T>(params: T[]){
    return params
}
myFun<string>(["123","123"]);