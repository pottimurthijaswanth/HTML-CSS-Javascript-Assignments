function square(value) {  
    return value * value;
  }
  
  function double(value) {
    return value * 2;
  }
  
  function composedValue(value) {
    return square(double(value));
  }
  
  var myValue = window.prompt("Enter value : ");
  document.write(composedValue(myValue));
  