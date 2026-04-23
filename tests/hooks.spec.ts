//class20

/*Hooks - It is a special type of function which performs certain logic.
       setup/teardown before(pre) and after(post) execution of the testcases.

       There are 4 types of Hookid:
       1. test.beforeAll() - It will be executed once before executing any of the testcases
                        - initiate the report,log file(playwright will automatically handle)
                        - Incase of DB connection is needed to initiate the report,log file.get all the testdata from excel 
                        - page fixture is not avialable for BeforeAll
                        - inside the object if u want to refer page fixture that is not possible
                        - browser is applicable here and we can use and code will be 
                
        2. test.beforeEach() - It will run once before running each and every testcase
                            - precondition to execute the testcase or common steps of all the testcases we can write here
                              which is working as a precondition
          test() - in between test() will execute
       3. test.afterEach() - It will run once after running each and every testcase.
                            - after every test execution you also want to logout - usually not needed if need we can write

       4. test.afterAll() - It will be executed once after executing all of the testcases
                        - generate the report, log file, close db connection, close excel file
       */


import{test} from '@playwright/test'

test.beforeAll(async() => {
    console.log("Before All")
})

test("Title1", async()=>{
    console.log("Title1")
})

test("Title2", async()=>{
    console.log("Title1")
})

test("Title3", async()=>{
    console.log("Title1")
})

test.beforeEach(async() =>{
    console.log("Before Each")
})

test.afterEach(async() =>{
    console.log("After Each")
})

test.afterAll(async() =>{
    console.log("After All")
})