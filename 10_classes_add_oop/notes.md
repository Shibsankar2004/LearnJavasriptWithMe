# Javascript and classes

## oop
## Object
-collection of properties and methods
-toLowerCase
## why use oop

## parts of OOP
object literal

-Constructor function
-Prototypes
-Classes
-Instance (new,this)

## 4 pillars
Abstraction
Encapsulation
Inheritance
polymorphism

### JavaScript and Classes (OOP) - Complete Explanation
# What is OOP?

            OOP (Object-Oriented Programming) is a programming paradigm that organizes code into objects. Objects contain:

            Properties (data/variables)
            Methods (functions/actions)

            Real-life example:

            const car = {
                brand: "Toyota",     // property
                color: "Red",        // property

                start: function() {  // method
                    console.log("Car started");
                }
            };


            Here:

            brand, color → Properties
            start() → Method
## Object

            An object is a collection of properties and methods.

            Example:

            const user = {
                name: "Shib",
                age: 20,

                greet() {
                    console.log("Hello");
                }
            };


            JavaScript already provides many built-in objects:

            let str = "HELLO";

            console.log(str.toLowerCase());


            Output:

            hello


            Here:

            str is an object of String type.
            toLowerCase() is a method.
            Why Use OOP?

            Without OOP:

            let name1 = "John";
            let age1 = 25;

            let name2 = "Alice";
            let age2 = 30;


            A lot of repeated code.

            With OOP:

            class User {
                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                }
            }


            Benefits:

            ✅ Reusable Code

            ✅ Better Organization

            ✅ Easy Maintenance

            ✅ Real-world Modeling

            ✅ Scalability

## Parts of OOP
        1. Object Literal

        Directly creating an object.

        const user = {
            name: "Shib",
            age: 20,

            greet() {
                console.log(`Hello ${this.name}`);
            }
        };

        user.greet();


        Output:

        Hello Shib

## 2. Constructor Function

        Before ES6 classes, objects were created using constructor functions.

        function User(name, age) {
            this.name = name;
            this.age = age;

            this.greet = function() {
                console.log("Hello");
            };
        }

        const user1 = new User("John", 25);

        console.log(user1.name);


        Output:

        John

What does new do?
            const user1 = new User("John", 25);


            Steps:

            Creates an empty object.
            this points to that object.
            Properties are added.
            Object is returned.
## 3. Prototypes

                JavaScript uses prototypal inheritance.

                Instead of creating a copy of methods for every object:

                function User(name) {
                    this.name = name;
                }

                User.prototype.greet = function() {
                    console.log(`Hello ${this.name}`);
                };

                const u1 = new User("John");
                const u2 = new User("Alice");

                u1.greet();
                u2.greet();

                Why Prototype?

                Without prototype:

                this.greet = function(){};


                Every object gets its own function.

                With prototype:

                User.prototype.greet = function(){};


                One function shared by all objects.

                Memory efficient ✅

## 4. Classes (ES6)

        Modern JavaScript uses classes.

        class User {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }

            greet() {
                console.log(`Hello ${this.name}`);
            }
        }

        const user1 = new User("Shib", 20);

        user1.greet();


        Output:

        Hello Shib

## 5. Instance
        const user1 = new User("Shib", 20);


        user1 is called an instance of User class.

        Think:

        class = Blueprint
        object = Real Building


        Example:

        class Car {
            constructor(brand) {
                this.brand = brand;
            }
        }

        const c1 = new Car("BMW");
        const c2 = new Car("Audi");


        c1 and c2 are instances.

Understanding this

            this refers to the current object.

            class User {
                constructor(name) {
                    this.name = name;
                }

                show() {
                    console.log(this.name);
                }
            }

            const user = new User("Shib");
            user.show();


            Output:

            Shib


            Here:

            this.name


            means:

            user.name

# The 4 Pillars of OOP
## 1. Abstraction
                Meaning

                Hide unnecessary details and show only important features.

                Real-life:

                You drive a car.

                You only use:

                Steering
                Brake
                Accelerator


                You don't need to know how the engine works internally.

                That's abstraction.

                JavaScript Example
                class CoffeeMachine {
                    start() {
                        this.boilWater();
                        console.log("Making coffee...");
                    }

                    boilWater() {
                        console.log("Boiling water...");
                    }
                }

                const coffee = new CoffeeMachine();
                coffee.start();


                Output:

                Boiling water...
                Making coffee...


                User only calls:

                coffee.start();


                Internal details remain hidden.

                2. Encapsulation
                Meaning

                Wrapping data and methods together while restricting direct access.

                Protecting object's data.

                Without Encapsulation
                class BankAccount {
                    constructor(balance) {
                        this.balance = balance;
                    }
                }

                const account = new BankAccount(1000);

                account.balance = -5000;

                console.log(account.balance);


                Output:

                -5000


                Problem ❌

                Balance became invalid.

                With Encapsulation
                class BankAccount {
                    #balance;

                    constructor(balance) {
                        this.#balance = balance;
                    }

                    deposit(amount) {
                        this.#balance += amount;
                    }

                    getBalance() {
                        return this.#balance;
                    }
                }

                const acc = new BankAccount(1000);

                acc.deposit(500);

                console.log(acc.getBalance());


                Output:

                1500


                Trying:

                console.log(acc.#balance);


                Error ❌

                Because private fields protect data.

                3. Inheritance
                Meaning

                One class acquires properties and methods of another class.

                Parent → Child relationship.

                Example
                class Animal {
                    eat() {
                        console.log("Animal can eat");
                    }
                }

                class Dog extends Animal {
                    bark() {
                        console.log("Dog barks");
                    }
                }

                const dog = new Dog();

                dog.eat();
                dog.bark();


                Output:

                Animal can eat
                Dog barks


                Inheritance tree:

                Animal
                ↑
                Dog


                Dog inherited eat().

                Using super
                class Animal {
                    constructor(name) {
                        this.name = name;
                    }
                }

                class Dog extends Animal {
                    constructor(name) {
                        super(name);
                    }
                }

                const dog = new Dog("Tommy");

                console.log(dog.name);


                Output:

                Tommy


                super() calls the parent constructor.

                4. Polymorphism
                Meaning

                Same method name behaves differently depending on object.

                "Poly" = Many

                "Morphism" = Forms

                One interface, many implementations.

                Example
                class Animal {
                    sound() {
                        console.log("Animal Sound");
                    }
                }

                class Dog extends Animal {
                    sound() {
                        console.log("Bark");
                    }
                }

                class Cat extends Animal {
                    sound() {
                        console.log("Meow");
                    }
                }

                const dog = new Dog();
                const cat = new Cat();

                dog.sound();
                cat.sound();


                Output:

                Bark
                Meow


                Same method:

                sound()


                Different behavior:

                Dog → Bark
                Cat → Meow


                This is Method Overriding, a form of polymorphism.

                Complete OOP Example
                class Animal {
                    constructor(name) {
                        this.name = name;
                    }

                    sound() {
                        console.log("Animal sound");
                    }
                }

                class Dog extends Animal {
                    sound() {
                        console.log(`${this.name} says Bark`);
                    }
                }

                class Cat extends Animal {
                    sound() {
                        console.log(`${this.name} says Meow`);
                    }
                }

                const dog = new Dog("Tommy");
                const cat = new Cat("Kitty");

                dog.sound();
                cat.sound();


                Output:

                Tommy says Bark
                Kitty says Meow


                Here:

                ✅ Class → Animal

                ✅ Constructor → constructor()

                ✅ Object/Instance → dog, cat

                ✅ Inheritance → extends Animal

                ✅ Polymorphism → overridden sound()

                ✅ Encapsulation → data inside object

                ✅ Abstraction → user only uses sound()

###### Quick Interview Revision
            # Object:
                Collection of properties and methods.

            # OOP:
                Programming using objects.

            # Constructor:
                Special function used to initialize objects.

            #Prototype:
                Shared methods between objects.

             #  Class:
                Blueprint for creating objects.

            # Instance:
                Object created from a class.

                this:
                Refers to the current object.

                new:
                Creates a new object instance.

             # Abstraction:
                Hide implementation details.

            # Encapsulation:
                Protect and bundle data.

            # Inheritance:
                Acquire properties and methods from another class.

            # Polymorphism:
                Same method, different behavior.


                This covers all major JavaScript OOP concepts from basic objects to classes, prototypes, this, new, and the four pillars with examples.