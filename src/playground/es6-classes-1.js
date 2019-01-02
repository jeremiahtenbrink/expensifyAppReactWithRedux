class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGretting(){
        //return 'Hi!';
        return `Hi. I am ${this.name}!`;
    }
    getDiscription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor (name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }

    getDiscription() {
        let description = super.getDiscription();

        if (this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation () {
        return !!this.homeLocation;
    }

    getGretting() {
        let greeting = super.getGretting();

        if (this.hasHomeLocation()){
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const me = new Student('Jeremiah Tenbrink', 32, "Computer Science");
console.log(me.getDiscription());
console.log(me.hasMajor());

const other = new Traveler("Traveler", 24, 'Colorado');
console.log(other.getGretting());