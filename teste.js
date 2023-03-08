
function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
}
let pessoa = new Person('Cristiano', 'Martins')
console.log(pessoa);
Person.prototype.nationality = "English";
console.log(pessoa);

let pessoa2 = new Person('Cristiano', 'Martins')
console.log(pessoa2);