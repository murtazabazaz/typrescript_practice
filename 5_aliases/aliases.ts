type StringOrNumber = string | number;

type personObject = {
    name: string;
    id: StringOrNumber;
}

const person1: personObject = {
    name: 'Murtaza',
    id: 1,
  };

  const sayHello = (person: personObject) => {
    return 'Hi ' + person.name;
  };
  console.log(sayHello(person1));