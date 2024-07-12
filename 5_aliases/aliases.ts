type StringOrNumber = string | number;

type personObject = {
    name: string;
    id: StringOrNumber;
}

const person1: personObject = {
    name: 'Murtaza',
    id: 1,
  };

  const person2: personObject = {
    name: 'kamran',
    id: 2,
  };

  const person3: personObject = {
    name: 'kaleem',
    id: 3,
  };
  

  const sayHello = (person: personObject) => {
    return 'Hi ' + person.name;
  };
  console.log(sayHello(person2));
