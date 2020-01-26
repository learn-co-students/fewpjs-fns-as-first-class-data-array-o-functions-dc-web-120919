

//takes each individual function as an array and runs them
const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];


// practice with function expression and arrow function 

function exerciseDog(dog, breed){
    return routine.map( iteratorFunction => iteratorFunction(dog, breed)); 
}


// You can have the functions below because they are invoked before runtime as declarations

function wakeDog(name, breed){
    let activity = `Wake ${name} the ${breed}`;
    console.log(activity);
    return activity;
}

function leashDog(name, breed){
    let activity = `Leash ${name} the ${breed}`;
    console.log(activity);
    return activity;
}

function walkToPark(name, breed){
    let activity = `Walk to the park with ${name} the ${breed}`;
    console.log(activity);
    return activity;
}

function throwFrisbee(name, breed){
    let activity = `Throw the frisbee for ${name} the ${breed}`;
    console.log(activity);
    return activity;
}

function walkHome(name, breed){
    let activity = `Walk home with ${name} the ${breed}`;
    console.log(activity);
    return activity;
}

function unleashDog(name, breed){
    let activity = `Unleash ${name} the ${breed}`;
    console.log(activity);
    return activity;
}

