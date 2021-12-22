// class SelectGirl{
//     constructor(private girls:string[],){}
//     getGirl(index:number):string{
//         return this.girls[index]
//     }
// }

// const selectGirl = new SelectGirl(["dajiao","liuying","xiaohong"]);
// console.log(selectGirl.getGirl(1));
interface GirlName{
    name:string
}
class SelectGirl <T extends GirlName | string>{
    constructor(private girls:T[],){}
    getGirl(index:number):T{
        return this.girls[index]
    }
}

const selectGirl = new SelectGirl([
    {name:"dajiao"},
    {name:"liuying"},
    {name:"xiaohong"},
    "hi"
]);
console.log(selectGirl.getGirl(3));
