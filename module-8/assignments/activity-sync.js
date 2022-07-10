function inc(a) {
    return new Promise((resolve) => {
        resolve(a + 1);
    });
}

const sum = (a, b) => {
    return new Promise((resolve) => {
        resolve(a + b);
    });
};

const max = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a > b) resolve(a);
        else reject(b);
    });
};

// *
const avg = (a, b) => {
    return sum(a, b).then((s) => s/2);
};


const obj = {
    name: "Marcus Aurelius",
    split(sep = " ") {
        return new Promise((resolve) => {
            resolve(this.name.split(sep));
        });
    },
};

class Person {
    constructor(name) {
        this.name = name;
    }

    static of(name) {
        return new Person(name);
    }

    split(sep = " ") {
        return new Promise((resolve) => {
            resolve(this.name.split(sep));
        });
    }
}

const person = Person.of("Marcus Aurelius");


inc(5)
  .then((value) => console.log("inc(5) =", value))
  .catch((error) => console.error("Error:", error));


sum(1, 3)
  .then((value) => console.log("sum(1, 3) =", value))
  .catch((error) => console.error("Error:", error));


max(8, 6)
  .then((value) => console.log("max(8, 6) =", value))
  .catch((error) => console.error("Error:", error));


avg(8, 6)
  .then((value) => console.log("avg(8, 6) =", value))
  .catch((error) => console.error("Error:", error));


obj.split()
  .then((value) => console.log("obj.split() =", value))
  .catch((error) => console.error("Error:", error));


person.split()
  .then((value) => console.log("person.split() =", value))
  .catch((error) => console.error("Error:", error));

const promise = new Promise(executor);