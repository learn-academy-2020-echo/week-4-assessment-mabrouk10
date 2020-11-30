# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. Are Ruby methods accessors or mutators?

  Your answer: Ruby methods are accessors. Lets say a ruby method is done on an array. That array will only be temporarily changed not permanately. However if you put a bang operator inside of the ruby method it will permanantely change said array making it a mutator. A ruby method can be a mutator using a bang operator

  Researched answer: For the most part, Ruby methods are all accessors, meaning they do not mutate the object they are called on. For a method to permanently change the object it is called on, follow it with a bang operator.


2. What is a block in Ruby?

  Your answer: A block in ruby is a method or function that is all done in between curly braces. 

  Researched answer: Ruby has anonymous functions similar to JavaScript. They are called blocks. Blocks can be created with the do/end keywords OR with {}. Blocks are code that is passed to a method.



3. Ruby has an implicit return. What does that mean?

  Your answer: Something will be returned without using the return keyword being necessary

  Researched answer: Ruby has an implicit return, which means the value of the last line of a method is automatically returned without using the keyword return.



4. What is object-oriented programming? How is it different than functional programming?

  Your answer: OOP programming is dealing exclusively with objects. Programs are organized with objects rather than logic and functions. Objects usually contain the logics and functions/methods within them. This way when programs get larger and more complicated it is easier to work with multiple objects that have functions and logic nested in them. Rather than many different functions and logic being applied all over the place. 

  Researched answer: Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior. 

  There are four main OOP concepts

Abstraction. Abstraction means using simple things to represent complexity. We all know how to turn the TV on, but we don’t need to know how it works in order to enjoy it. In Java, abstraction means simple things like objects, classes, and variables represent more complex underlying code and data. This is important because it lets avoid repeating the same work multiple times.

Encapsulation. This is the practice of keeping fields within a class private, then providing access to them via public methods. It’s a protective barrier that keeps the data and code safe within the class itself. This way, we can re-use objects like code components or variables without allowing open access to the data system-wide.

Inheritance. This is a special feature of Object Oriented Programming in Java. It lets programmers create new classes that share some of the attributes of existing classes. This lets us build on previous work without reinventing the wheel.

Polymorphism. This Java OOP concept lets programmers use the same word to mean different things in different contexts. One form of polymorphism in Java is method overloading. That’s when different meanings are implied by the code itself. The other form is method overriding. That’s when the different meanings are implied by the values of the supplied variables. See more on this below.



5. What is the difference between a class and an object?

  Your answer: Class is the blueprint of an object. And an object is an instance of the class.

  Researched answer: The difference is simple and conceptual. A class is a template for objects. ... An object is a member or an "instance" of a class. An object has a state in which all of its properties have values that you either explicitly define or that are defined by default settings.



6. STRETCH: What is Duck Typing?

  Your answer: No idea

  Researched answer: It is a term used in dynamic languages that do not have strong typing.

The idea is that you don't need a type in order to invoke an existing method on an object - if a method is defined on it, you can invoke it.

The name comes from the phrase "If it looks like a duck and quacks like a duck, it's a duck"
The power of Duck Typing is that because Hashes share abilities with classes like Arrays and Ranges, we can use the same methods available to those classes on class Hash.



## Looking Ahead: Terms for Next Week
- PostgreSQL

PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley. 
PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads.

- API

An application programming interface is a computing interface that defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc

- CRUD

n computer programming, create, read, update, and delete are the four basic functions of persistent storage. Alternate words are sometimes used when defining the four basic functions of CRUD, such as retrieve instead of read, modify instead of update, or destroy instead of delete

- Ruby on Rails

Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages
Rails is a development tool which gives web developers a framework, providing structure for all the code they write. The Rails framework helps developers to build websites and applications, because it abstracts and simplifies common repetitive tasks

- ORM

Object-relational mapping in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language.
ORMs will shield your application from SQL injection attacks since the framework will filter the data for you! ORMs provide the concept of Database Abstraction which makes switching databases easier and creates a consistent code base for your application.


- Active Record

In software engineering, the active record pattern is an architectural pattern found in software that stores in-memory object data in relational databases.
Rails Active Records provide an interface and binding between the tables in a relational database and the Ruby program code that manipulates database records