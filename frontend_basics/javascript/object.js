// object in javascript

var houseKeeper1 = {
    name : "jane",
    yearsOfExperience : 12,
    cleaningRepertoire : ["bathroom", "lobby", "bedroom", "kitchen"]
}

// in this if we want to create multiple housekeeper object having same property then we need to create it again and again 
// instead we can create constructor function to create multiple objects

// constructor function (always keep its name capital)

function HouseKeeper(name, yearsOfExperience, cleaningRepertoire){
    // properties
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;

    //method
    this.clean = function (){
        console.log("cleaning done")
    }
}

var houseKeeper2 = new HouseKeeper("mandy", 10, ["bathroom", "lobby"])
console.log(houseKeeper2.name)
console.log(houseKeeper2.clean())