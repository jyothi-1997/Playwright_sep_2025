/* Class: It is a blueprint to create an object
         Introduces in 2015 - ES6
        class is a collection of properties and methods
        className should be similar to the filename eg: Employee.ts

    Syntax: 
    class className{
        //properties - variables - locators(in Playwright)
            key : datatype                  //by default here it is public    
            private key1 : datatype         //It is private
            redonly key2 : datatype         //It is constant we cant update,edit,modify etc
            static key3: datatype ="ABC"    //static variable should be defined only inside class and it belongs only to class

        //construtor:
        constructor(key:datatype, ke1:datatype, key3:datatype){
         this.key = key
         this.key1=key1
         this.key2=key2

        }

    //methods - functions - Action - loginIntoApplication()
        1. There is no need of creating function inside the class
        2. loginIntoApplication() whatever u declare inside () that we call it as functionc

        /*Non-static method: it can be called by using "new" keyword to create an object
        employeeInformation(){
        }
        */

        /*Static method: we can create as a method and we can directly call using classname
        static displayCompanyName(){   
        }
}
        const obj = new className(1,2,3)
        obj.key
        obj.employeeInformation

        className.displayCompanyName()
        className.key3
        */
        
/*


Access Modifiers: It is basically a permission to access variables and methods 
                  public, private are access modifiers


Constructor: It is a special method used to initialize the properties of a class
             It should be created with keyword as "constructor" only
this Keyword: It is a reference variable that refers the current class object

static Keyword: It belongs to class rather than object of a class. That means to access the 
                static properties and method we have to access using classNmae
                eg: className.displayCompanyName()
                    className.key3
Non-static Keyword: It belongs to object of the class. to access the 
                    non-static properties and method we have to create the object of a class
                    eg: obj.key
                        obj.employeeInformation

Private Keyword: It is a access modifier.
                 It is used to restrict the access of a variable and method within the class only. 
                 It cannot be accessible outside the class
Readonly Keyword: It is used to declare the variable as readonly
                  It can be initialized only once either at the time of declaration or in the
                  constructor of the class, After that it cannot be modified
Properties declaaration inside the class is mandatory in TS but not in JS


Import - it will just import necessary things which are needed in playwright
Export - To make class public in nature we need to use Export

*/

export class Employee{

    empId : number
    empName: string
    empAge : number
    private empSalary
    readonly Offer
    static company = "ABC"




    constructor(id , name,age, empSalary, offer) // id, name,age, empSalary, offer are parameters
    {
       this.empId = id
        this.empName = name
        this.empAge = age
        this.empSalary = empSalary
        this.Offer = offer
}
    employeeInformation() :void{ //non-static
        console.log(`Employee Id: ${this.empId}, Employee Name : ${this.empName}, Employee Age: ${this.empAge}
            , Employee Salary: ${this.empSalary}, Employee offer: ${this.Offer}` )
    }

    static displayCompanyName(){
        console.log(Employee.company)
        
    }

}

const emp = new Employee(21, "John", 25, 100000, 3000000) 
console.log(emp)
console.log(emp.empName) //created object emp and empname is printed as it is non-static

//print empSalary
//emp.empSalary - this will not work outside the class as it is private in nature 
emp.employeeInformation() //this will print based on condition

//emp.offer = 20000 -- we cannot change this as it is readonly
//emp.displayCompanyName() - It cannot be accessed using object but only with classname - 
Employee.displayCompanyName() //- it will work


