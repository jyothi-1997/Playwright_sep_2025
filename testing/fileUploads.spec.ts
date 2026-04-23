//class14

/*step by step process for file uploads

    1. Launch the url
    2. Identify the file input element on the page
    3. Use the "setInputFiles(path of the file and change to forward slash(/))" method to upload 
       files to the file input element
    4. Verify that the files have been uploaded successfully

*/

import{test, expect} from '@playwright/test'
import path from 'path' //path helps to work with directories,files etc..,


test("file uploads handling", async({page}) =>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")


    //Uploading single file
    //playwright will not handle native windows(which is opened once we clik on upload files) so we need to provide path of file
    await page.locator("#filesToUpload").setInputFiles("C:/Users/jyothi.kummitha/OneDrive - Accenture/Pictures/PHOTOS ALL/Jyothi/8I5A0262.jpg")
    await expect(page.locator("#fileList li")).toContainText("8I5A0262")

    
    
    //upload Multiple files
    const filePath1 = await path.join(__dirname,"../TestData/8I5A0058.jpg")
    console.log(filePath1)
    const filePath2 = await path.join(__dirname,"../TestData/8I5A0078.jpg")
    console.log(filePath2)
    
    await page.locator("#filesToUpload").setInputFiles([filePath1,filePath2])
    await expect(page.locator("#fileList li")).toHaveValue("8I5A0058")
    await expect(page.locator("#fileList li")).toHaveValue("8I5A0078")



    /*hardcoded the paths in line23 and this will be available only inside system not in ci/cd pipeline to execute script so create TestData folder

    __dirname: It will give the current directory path of the file where it is being executed
    path.join(): It will join multiple segments into a single segment
    join(): it is used to join directoryname and path of image or files etc
    (..) : means come out of current directory or folder
    */


})