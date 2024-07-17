// class Person{
//     constructor(name, age){
//         this. name = name;
//         this. age = age;
//     }
//     eat(){
//         console.log(`${this.name} is eating`);
//     }

//     greet (){
//         console.log(`Hi ${this. name}`);
//     }
// }

// let person1 = new Person("John", 25);
// let person2 = new Person("Jane", 27);
// console.log(person1.name)
// console.log(person1.age)
// person1.eat();
// person1.greet();

 
//Q36
class book{
    constructor(title,author,pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
    }
    read(){
        console.log(`read${this.title}`);
    }
}

let book1= new book("Alice of wonderland","Salina",200)
let book2=new book("How the Dead Speak","Val McDermid",300)
console.log(book1.title)
console.log(book1.pages)
console.log(book1.author)

console.log(book2.title)
console.log(book2.author)
console.log(book2.pages)


// //Q1
class car{
    constructor(make,model,year){
        this.make
        this.model
        this.year
    }
    drive(){
        console.log(`drive${this.model}`);
    }
}

let car1= new car("camry","Tesla",2007)
let car2= new car("model S","Toyota",2001)

console.log(car1.make)
console.log(car1.model)
console.log(car1.year)

console.log(car2.make)
console.log(car2.model)
console.log(car2.year)


//Q2
class animal{
    constructor() {
        console.log("Some sound");
      }
    }
    
     class Animal {
      sound() {
        console.log("Bark");
      }
    }
    let animal1 = new animal("Bark");
    console.log("animal")

   
    
    const message=new message((resolve, reject) => {
        const resolved=true
        if( message){
         resolve("message delay") 
        }else{
          reject()
        }
        });
    
    
    Resolve()
      .then((message) => {
        console.log(message); 
        return "Chained promise result";
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });



