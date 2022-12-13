class Vehicle {

    // private properties, aka access modifiers
    #people;
    #maxSpeed;

    // constructor, the properties that will be passed into the Object at instantiation
    constructor(people, maxSpeed) {
        this.#people = people
        this.#maxSpeed = maxSpeed
    }

    // getters
    getPeople(){
        return this.#people;
    }

    getMaxSpeed(){
        return this.#maxSpeed;
    }

    // setters
    setPeople(people){
        this.#people = people
        return this.#people
    }

    setMaxSpeed(maxSpeed){
        this.#maxSpeed = maxSpeed
        return this.#maxSpeed
    }

    description(){
        console.log(`Our vehicle can fit ${this.#people} person(s), and can move at a maximum speed of ${this.#maxSpeed}mph`)
    }

}

class Bike extends Vehicle {

    #pegs;
    #type;

    constructor(people, maxSpeed, type, pegs) {
        super(people, maxSpeed);
        this.#type = type;
        this.#pegs = pegs; // this will be a boolean value
    }

    hasPegs() {
        if (this.#pegs) {
            console.log('this bike has pegs!')
        } else {
            console.log('this bike does not have pegs')
        }
    }

    getType() {
        return this.#type;
    }

    description() {
        console.log(`Number of People: ${this.getPeople()}`)
        console.log(`Max Speed: ${this.getMaxSpeed()}mph`)
        console.log(`Has Pegs? ${this.#pegs}`)
        console.log(`Type of Bike: ${this.getType()}`)
    }

}

class Bus extends Vehicle {

}

class Car extends Vehicle {

}

var mountainBike = new Bike(1, 30, 'Mountain Bike', true)

mountainBike.description();