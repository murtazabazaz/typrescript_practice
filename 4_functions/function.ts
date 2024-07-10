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
