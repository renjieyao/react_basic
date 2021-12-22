function Sum(one: number, two: number): number {
    return one + two
}

function noReback(): void {
    return
}

function oracle(): never{
    while(true){
        
    }
    console.log("1")
}

function add ({one,two}:{one:number,two:number}): number{
    return two+one
}
console.log(add({one:4,two:2}))
Sum(1,2);
noReback();
// oracle();
