/* Locators: to identify element on the webpage we use locators
           - address of an element
*/

/*DOM(document object model): which help us to identify element on web page
Example:
<input type = "test" name="username" is="username">
 input - tagname
 type, name, id - attrubutes
 test,username - value

 Example2:
 <label for="username>UserName</label>"
label - tagname
for - attribute
UserName -  Test value for an element
</label> - ending tag
 */


/*CSS Selector: it is unique attribute
1. If "id" as an attribute is present we can use below css selector for a locators:
    Syntax:
        a. tagname#idvalue (or)
        b. #idvalue (or)
        c. [id='value']
    Example:
    If tagname is input and username is id="Username" we can write as 
    input#Username (or) #Username (or) [id='Username']

2. class: not sujjestable as it will not be unique most of the cases
 If "class" attribute is present we can use below css selector
    Syntax:
        a. tagname.classname (or)
        b. .classname (or) 
        c. [class='classvalue']
        d. .classname1.classname2.classname3
    Example:
    If tagname is "input" and classname is "user"
    input.user (or) .user (or) class=['user']
    eg2:
    <input class = "mr-sm-s2 form-control" >
    input.mr-sm-s2.form-control (or) .mr-sm-s2.form-control

3. write css based on any attribute: []
    Syntax:
    [attribute='value'] (or)
    input[attribute='value']
    Example:
    [type='username'] (or)
    input[type='username']

4. write css traversing from parent to child:
    Syntax:
    a. parenttagname >> childtagname (or)
    b. parentlocator childlocator
    Example:
    input >> div (or)
    input div(provide space inbetween input and div)

    preceding - its refers to elder one
    following - it refers to younger one

    whenever u try to write the locator using CSS or XPATH - page.locator(.class).first()
    Below are the syntaxes to match the locator uniquely if the locator is matching with with multiple elements on the webpage 
first(): first matching - 
    Syntax: 
     page.locator(.class).first() - it will match with first matching element
     Example:
     page.locator(.mr-sm-2).first()
last(): last matching
    Syntax:
     page.locator(.class).last() - it will match with last matching element
     Example:
     page.locator(.mr-sm-2).last()
nth(index):
Syntax:
     page.locator(.class).nth(index) - index will start with 0
     Example:
     page.locator(.mr-sm-2).nth(5)

*/

/* XPATH:
    there are  2 different types of locators are available
    1. Absolute XPATH: starts with "/" slash and it has to go in heirarchial(from root we need to write xpath) order
                       Absolute xpath we will not use much
        eg: /htms/body/div/div/section/h2
    2. Relative XPATH: starts with "//" slash
        different type of xpath we have
        In XPATH index starts with 1
        a. //*[@attribute='value']: //* means it will searching from root
            eg:
            //*[@id='username']
        b. //tagname[@attribute='value]
            eg:
            //input[@id='username']
        c. (//input)[1] (or) (//tagname[@attribute='value])[2] - if we have multiple input tags in DON then just wrap it so it will 1st one and provide index to
    3. Parent to child: demoqa website
        //div[@class='practice-form-wrapper']//label[1]: //label[1] - identifies great grandchil in demoQA
        //div[@class='practice-form-wrapper']/h1[@class='text-center'] - identifies first child
        
        
        following-sibling:
        //h1[@class='text-center']/following-sibling::h5, //h1[@class='text-center']/following-sibling::h5[1] - first child of div identifies 2nd child 
        Preceding- sibling:
        //h5/preceding-sibling::h1[@class='text-center'] - 2nd child identifies 1st child

        child to parent:
        //h1[@class='text-center']//parent::* (or) //h1[@class='text-center']//parent::div- child identifies its parent 
        Ancestors:
        //h1[@class='text-center']//ancestor::div[1] - child identifies its first parent
        //h1[@class='text-center']//ancestor::* - child identifies multiple great great grandparents called as ancestors
        Text():
         identify the element by text()
        //h5[text()='Student Registration Form'] 
        contains(): 
        identify the element by using "some portion of text value"
        //h5[contains(text(), 'Student')] (or) //*[contains(text(), 'Student')]
        
        
        */

/*Playwrite special methods for locators
we have 7 different type of GetBy locators in playwright
    1. page.getByRole() : identifies the element based on the role of an element
                          identifies the role on a webpage like radiobuttons,textboxes,checkboxes etc
            
            1.Heading element(h1 to h6): identifies the element based on the headings of the element starting from h1 to h6
                    eg: page.getByRole('heading', {name: 'Practice Form'})
            2. button element:           page.getByRole('button', {name: 'Submit'})
            3. Checkbox Element:         page.getByRole('checkbox', {name: 'Subscribe'})
            4. Radio button Element:
            5. Textbox element:
    2. page.getByText(): Identify the element by using text value
                    eg: page.getByText('Student Registration Form', {exact: true}) to locate by text content in contains manner 
    3. page.getByPlaceholder(): Identify the element by using placeholder as an attribute
                                Textboxes and input fields will have placenholders
                    eg: page.getByPlaceholder('First Name') - locates an element by placeholder for an attribute
    4. page.getByTestId(): Identify the element by using "data-testid" as an attribute
                    eg: spicejet application - 
    5. page.getByAltText(): Identify the element(image) by using "Alt" as an attribute
                    eg: page.getByAltText('logo image') - to locate an element, usually it will be image 
                    by its text alternative("alt" as an attribute)
    6. page.getByTitle(): Identify the element by using "Title" as an attribute
    7. page.getByLabel(): Identify the element by using "Label" as an attribute
            Two ways we can locate an element:
                1. when u have "for" as an attribute for an element that have been developed using <label> tag
                there we can directly use page.getbyLabel('Label Text')
                    eg: getByLabel('username')
                2. when u findout <input> tag element which is inside the <label> tag element




    SelectorsHUb - in this portal, getby locators will display based on selection
    Codegen - record and playback tool which will also generate test automation automatically
        command - npx playwright codegen "url"



*/