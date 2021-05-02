function getName() {
    const userName = prompt("What is your user name?");
    return userName;
  }
  function sayHello() {
    const userName = getName();
    alert("Hello " + userName + "!");

    
  }