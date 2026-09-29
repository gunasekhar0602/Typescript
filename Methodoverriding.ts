class Animal
{
    makesound()
    {
        console.log("Make some generic sound")
    }
}

class Dog extends Animal
{
    override makesound()
    {
        console.log("Woof!, Woof!")
    }
}

let dog=new Dog()

dog.makesound()  // "Woof!, Woof!"

