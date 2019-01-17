var animalPopulation = 0;



function run() {
    //sleep("Tigger ");
    //eat("Tigger", "meat");
    //eat("Tigger", "bacon");

    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    // tigger.eat("kibble");

    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");

    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");

    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");

    var stinger = new Bee("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");

    Animal.getPopulation();

    var zoebot = new Zookeeper("Zoebot");
    var animals = [rarity, tigger, pooh, gemma, stinger];
    zoebot.feedAnimals(animals,"peas");
 }

class Zookeeper {
    constructor(name) {
        this.name = name;
    }
    feedAnimals(animals,food) {
        console.log(this.name + " is feeding " + food + " to " + animals.length + " animals out of " + animalPopulation + " total animals");
        for (var i=0; i<animals.length; i++) {
            animals[i].eat(food);
        }
    }
}
class Animal {
    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood=favoriteFood;
        animalPopulation++;
    }
    sleep(){
        console.log(this.name + " sleeps for 8 hours")
    }
    eat(food){
        console.log(this.name + " eats " + food);
        food==this.favoriteFood ? console.log(" YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }
    static getPopulation(){
        console.log("Population: " + animalPopulation)
    }

}

 class Tiger extends Animal {
    constructor(name) {
        super(name,"meat");
    }
 }

 class Bear extends Animal{
    constructor(name) {
        super(name, "fish");
    }
     sleep(){
         console.log(this.name + " hibernates for 4 months")
     }
 }
class Unicorn extends Animal {
    constructor(name) {
        super(name,"marshmallows");
    }
    sleep(){
        console.log(this.name + " sleeps in a cloud")
    }
    eat(food){
        console.log(this.name + " eats " + food);
        if (food==this.favoriteFood ){
            console.log(" YUM!!! " + this.name + " wants more " + food);
        }
        this.sleep();
    }
}

class Giraffe extends Animal {
    constructor(name) {
        super(name,"leaves");
    }
    eat(food){
        if(food!== this.favoriteFood){
            console.log(" YUCK!!! " + this.name + " will not eat " + food);
        } else {
        console.log(this.name + " eats " + food);
        console.log(" YUM!!! " + this.name + " wants more " + food);
        this.sleep();
        }
    }
}

class Bee extends Animal {
    constructor(name) {
        super(name,"pollen");
    }

    eat(food) {
        if (food !== this.favoriteFood) {
            console.log(" YUCK!!! " + this.name + " will not eat " + food);
        } else {
            console.log(this.name + " eats " + food);
            console.log(" YUM!!! " + this.name + " wants more " + food);
            this.sleep();
        }
    }
    sleep(){
        console.log(this.name + " never sleeps")
    }
}


