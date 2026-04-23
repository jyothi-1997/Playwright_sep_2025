//class16

/*Download - download event - page.waitforEvent("Download")

step by step procedure to handle downloads in playwright:

1. Launch the url
2. we have to wait for "download" event to appear on the page - page.waitforEvent("Download")
3. Identify and click on the element that is responsible for generation of download event
4. wait for completion of download of a file - const file = await download;
5. By using the "path" module we can generate the path to store the downloaded file inside the download folder
    const filepath = path.join(__dirname, '../download')
6. Download - fd.suggestedFilename() - returns the filename for the downloded file
    , saveAs()
7. save the file using fd.saveAs(filepath)
8. verify the filaname is available inside the download folder or not using 
    fs module- fs.exitsSync(filepath)



*/


import{test, expect} from '@playwright/test'
import path from 'path' //path helps to work with directories,files etc..,
import fs from 'fs' //it will have idea of filenames or foldernames of entire system


test("file downloads handling", async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("button#generatePdf").click()
    
    //we have to wait for "download" event to appear on the page - page.waitforEvent("Download")
    const downloadResult = page.waitForEvent("download")
    console.log(downloadResult)

    //3. Identify and click on the element that is responsible for generation of download event
    await page.locator("a#pdfDownloadLink").click()

    //4. wait for completion of download 
    const download = await downloadResult
    console.log(download)

    //5. By using the "path" module we can generate the path to store the downloaded file
    //  inside the download folder - const filepath = path.join(__dirname, '../download')
    //const downloaddir = path.join(__dirname, '../download', download.suggestedFilename()) - we can use this line also instead of 47
    const downloaddir = path.join(__dirname, '../download')

    //6. Download - fd.suggestedFilename() - returns the filename for the downloded file
    //, saveAs()
    const filename = download.suggestedFilename()
    const filepath = path.join(__dirname, '../download', filename) //complete filepath we r checking 
    console.log(filepath)

    //7. save the file using fd.saveAs(filepath)
    await download.saveAs(filepath)
   // await download.delete() // we can delete the file

    //8. verify the filaname is available inside the download folder or not using 
    //fs module- fs.exitsSync(filepath)

    await expect(filepath).toContain(filename)
    await expect(fs.existsSync(filepath)).toBeTruthy() //returns true if filepath exists

    //cleanup - clean up the downloaded file after verification
    await fs.promises.unlink(filepath) // deletes the downloaded file
    await expect(fs.existsSync(filepath)).toBeFalsy()
    //tobeTruthy: means expecting value should be true
    //tobefals: means expecting value should be false



})