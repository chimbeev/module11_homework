const obj2 ={};


const obj1 = { color: "green", model: "F150", mark: "Ford"}


console.log(obj2);
obj2.color = "white";
obj2.model = "Corolla";
obj2.mark = "Toyota";
obj2.horsePower = 100;
obj2.myName = () => {console.log(`My Name ${obj2.mark} ${obj2.model}. And my color ${obj2.color}`)};


console.log(obj2);

obj2.myName();
delete obj2.horsePower;
console.log(obj2);





