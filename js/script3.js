function Person (name, eyeColor, age, gender) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.age = age;
    this.gender = gender;
    this.updateAge = function(){
        return ++this.age;
    }
}


let person01 = new Person("Keri", "green", 32, "f");
console.log(person01.age);
console.log("this is before the update age function")
console.log(person01.updateAge());
console.log("But the age should still be 32.  Is it?   "+person01.age);
console.log("No.  It actually got incremented!  The age field is now 33 instead of 32.  Right? "+person01.age);
console.log("Updating age by 1 again!  This should be 34.  Is it?  "+person01.updateAge());
console.log("The eyeColor of this person is "+person01.eyeColor);