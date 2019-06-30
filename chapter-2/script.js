const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
    "happy"
  ];
  
  let longWords = words.filter(word => word.length > 6);
  console.log('long words are : ', longWords);

  let stringIBBatam = "Impact Byte Batam";
console.log('char At 0 : ', stringIBBatam.charAt(0))
console.log('char At 6 : ', stringIBBatam.charAt(6))


let resultLength = stringIBBatam.length;
console.log('resultLength is ', resultLength)

stringIBBatam.toUpperCase()
stringIBBatam.split(" ",)


let object1 = { fname: "John" };
let object2 = { fname: 'budi', lname: "Doe" };
let object3 = { age: 30 };

let object4 = {...object1, ...object2, ...object3}

console.log(`object4 value is`, object4)

let object5 = { object1, object2, object3}

console.log(`object5 value is`, object5)

let resultObjectKeys = Object.keys(object4);
console.log(`resultObjectKeys is`, resultObjectKeys)


const myFunction = (totalPrice = 0, name="none") => {
  const totalTax = totalPrice * 0.1;
  const detailTax = ` pajak untuk ${name}, adalah ${totalTax}`;
  
  return detailTax;
}

const barangDanPajax = myFunction(10000, 'Shirt');
console.log(barangDanPajax)
console.log(myFunction(500, 'celana'))
console.log(myFunction(5000, 'es krim'))
console.log(myFunction())


let carName = 'bmw';
console.log('carName 1', carName)
function myFunction2() {
    let carName = "Volvo";
    console.log('carName 2', carName)
}
console.log('carName 3', carName)
myFunction2();
console.log('carName 4', carName)

let person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
      // debugger;
      return this.firstName + " " + this.lastName;
  }
};
console.log(`person fullname is ${person.fullName()}`)


let person1 = {
  fullName: function() {
      // debugger;
      return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}

console.log(person1.fullName.bind(person2)()  )
console.log(person1.fullName())
