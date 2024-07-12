interface Speech {
    sayHi(name: string):string;
    sayBye: (name:string) => string;

}

let sayStuff : Speech={
    sayHi: function(name: string){
        return `hi ${name}`;
    },
    sayBye: (name: string)=> `bye ${name}`
};

console.log(sayStuff.sayHi('murtaza'));
console.log(sayStuff.sayBye('murtaza'));

// extending an interface ...

interface Animal {
    name: string
}

interface bear extends Animal{
    honey: boolean
}

const Bear: bear = {
    name: 'brownie',
    honey: true,
}
console.log(Bear);