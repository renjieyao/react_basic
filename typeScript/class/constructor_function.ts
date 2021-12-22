class Person{
    // public name: string;
    // constructor(name: string){
    //     this.name = name;
    // }
    constructor(public name: string){

    }
}

const personNihilo = new Person('nihilo');
console.log(personNihilo.name);

class Teacher extends Person{
    constructor(public age:number,public myName:string){
        super(myName);
    }
}

const teacher = new Teacher(18,'charles');
console.log(teacher.age);