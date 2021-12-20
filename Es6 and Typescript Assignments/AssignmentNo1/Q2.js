function myHalfName(name : String){
    if(name=="sai" || name=="jaswanth"){
        let message = "Hello jaswanth";
        console.log(message); //gives output because it is inside if condition.
    }
  console.log(message); //gives an error it is outside if condition
}
myHalfName("jaswanth");
