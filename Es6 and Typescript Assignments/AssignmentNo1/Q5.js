let add =( a = 15 , b = 6) => {
    console.log(a+b);
};
add();
add(10); 

//sub

 let userWithFriends = (userName: String, ...userFriends: any[]) => {
    console.log('{userName: ${userName},list of Friends is: "${userFriends}"}');
}

userWithFriends('sai', 'jash', 'nithin', 'vinith', 'malli');
userWithFriends('sai', 'sandeep', 'uma', 'vasanth'); 


//sub

let printCapitalNames = (...names) => {
    const result= [];
    names.forEach((element) => {
        result.push(element.toUpperCase());
    });
    console.log(`Names in Upper Case: "${result }"`);
}

let namesList = ['sai','nithin','vinith','malli'];
console.log(namesList);
printCapitalNames(...namesList);
