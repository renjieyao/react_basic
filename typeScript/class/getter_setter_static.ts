// private getter setter
class Xishi {
    public readonly _name : string;
    constructor(private _age: number,name :string) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age: number) {
        this._age = age + 3;
    }
    static sayHello(){
        console.log("Hello Yao")
    }
}
Xishi.sayHello();
//  static
