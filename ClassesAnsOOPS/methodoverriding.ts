class Animal {
    speak(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak(): void {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak(): void {
        console.log("Cat meows");
    }
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

animal.speak(); 
dog.speak();    
cat.speak();   
