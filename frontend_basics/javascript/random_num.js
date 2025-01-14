// project - love calculator

function loveCalculator(name1, name2) {
    //  math random function generates number between 0 to 1 excluding 1
    var loveScore = Math.random() * 100;   

    // math floor function returns gretest integer of num
    loveScore = Math.floor(loveScore) + 1;

    // (===) checks if value as well as data type is same, where (==) checks if values are same
    if (loveScore > 70){
        console.log("Your match is " + loveScore + "%. You love each other like radha krishna")
    }
    if (loveScore > 30 && loveScore <= 70){
        console.log("Your match is " + loveScore + "%")
    }
    else{
        console.log("Your match is " + loveScore + "%. You go together like oil and water")
    }
}

loveCalculator("ladu", "lili")
