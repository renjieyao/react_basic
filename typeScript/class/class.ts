// 1.类
class youngLady{
    content = "hello world";
    sayHello(){
        return this.content
    }
}
// 继承和重写
class Woman extends youngLady{
    sayHi(){
        return "hi world"
    }
    sayHello(){
        return "rewrite hello world"
    }
}
class superWoman extends youngLady{
    sayHello(){
        return super.sayHello() + " super"
    }
}
const godness=new youngLady();
const god=new Woman();
const gold=new superWoman();
console.log(gold.sayHello());
console.log(god.sayHi());

// 2.访问类型
class PersonType{
    
    public name ?: string;

    private age ?: number;

    protected sex ?: string;

    sayHello(){
        return (this.name+" world Nihilo")
    }
}
class child extends PersonType{
    sayHa(){
        return this.sex+"hihihi";
    }
}

const person = new PersonType();
const childExp = new child();
person.name="hello world";
// person.age=12; error
console.log(childExp.sayHa());

