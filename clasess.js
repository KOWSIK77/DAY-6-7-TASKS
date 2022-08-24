class Person{
    constructor(firstName,middleName,lastName,age,birthDate,place,occupation){
        this.firstName=firstName;
        this.middlenName=middleName;
        this.lastName=lastName;
        this.age=age;
        this.birthDate=birthDate;
        this.place=place;
        this.occupation=occupation;
    }
    getDetails(){
        return(`The name of the person is ${this.firstName} ${this.middlenName} ${this.lastName}`)
    }

    getAge(){
        return(`I'm born on ${this.birthDate} currently my age is ${this.age}`)
    }

    getWorkingDetails(){
        return(`Right now im working as a ${this.occupation} in ${this.place} `)
    }
}


let member = new Person ("Robert","dowrney","JR",21,"07.11.2001","Chennai","Developer");

console.log(member.getDetails());
console.log(member.getAge());
console.log(member.getWorkingDetails());