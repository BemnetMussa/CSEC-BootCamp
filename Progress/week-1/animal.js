class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }

    nam() {
        console.log('my name is ' + this.name)
    }
}

module.exports = Animal;