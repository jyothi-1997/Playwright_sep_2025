/*Interview question - 
1. what is diff b/w websocket and HTTP
    HTTP client server connection is made each and everytime for multiple requests or testcases to execute
    eg: 4 lines of code is present and everytime connection is made for each line whereas
    Playwright client server connection is made once for multiple tcs to execute so it is faster
    eg: 4 lines of code is present and  connection is made only once 

    detailed description PW notes and architecture of playwright folder in PW notes

2. How to execute tescase in playwright?
Run the testcase ->websocket(client) will give to server(nodejs)
-> checks config file and respective tcs -> if everything is correct iit executs tests folder -> execution completed,connection will terminate
whereas selenium works on HTTP connection 

3. what is playwright?
Playwright is not a tool but also a framework
playwright helps in writing testcase

4. what is the use of await?
          await waits for particular line  to execute based on its condition and return the response
          playwright will wait for element by default 30secs
    */