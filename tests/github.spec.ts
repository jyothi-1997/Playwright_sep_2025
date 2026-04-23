/*Github/Bitbucket/GitLab
        Github is known as "Version Control Tool" which stores code on different versions
        eg: 10 members are working inside a project, lets say one work on Login page, one on dashboard page etcc.. so 
            ever individual will work on diff diff cases so everyone will get all the details and no need to stop working parallely

How do we work with "Version Control Tool"?
    1. To work Github we need to install Github in our system
    2. goto browser ->download git -> download from https://git-scm.com/downloads and install it in our system
        goto "https://github.com/" -->login -> To sync gitbash(present in local system) and github(cloud based platform) follow below steps
            A. open gitbash -> press git(it will open all the things whichs are installed)
            B. "git config --global user.name "jyothi-1997"" -----> Sets your Git username globally for all repositories on your system.
            c. "git config --global user.email "jyothikummitha1997@gmail.com"" --------> Sets your Git email globally, which is used in commit records. 
            d. git config --list
            e. create repository on Github
            f. cd your-project-folder
            g. git init
            h. git remote add origin "newly created repository url"
            i. git branch -M main
            j. git push -u origin main -----if u follow these steps u will successfully add the folder to repository
    ** If you want to change the existing origin(means repository) --> "git remote -v" --> "git remote set-url origin <new-repo-url>"

    3. If the repository is already available
            1. Clone the respository in your local system - "git clone repo_url"
                cloneing means the replica or copy of repository that u see
                repo_url -->click on code and copy https url

            2. Install all the dependencies - npm install - npm install playwright(Not mandatory but if the test fails then you can install)
            
            3. create a new branch - If u r asked to work on any task or LoginPage then create a new branch and u have zira ticket number
                     so create as TS01LoginPage ---TS01(zira ticket number)Loginpage(Branchname) 
                How to create a new branch --> enter in terminal "git checkout -b branchname" ---> -b means create new branch
            4. validae if the branch has been created - "git branch"
            5. Make the changes in the code and save the filename
            6. "git status" - to check the files which are modified
            6. "git add ." - to stage all the modified files
            7. "git commit -m "Added the login page test cases"" - to commit the changes
            8. "git push origin TS01LoginPage" - to push the changes to the remote branch
            9. Go to the github/bitbucket/gitlab portal - you will see a pop up to create a pull request -> click on it
                which says i have made the changes correctly so move to main branch which is master
            10. click on "Create pull request" for the changes - assign the reviewer(inside organization) and create the PR 
            11. Once the reviewer approves the changes - click on "Merge pull request"->"confirm merge" so it will merge the changes to the main branch
          

        //3.0:  Pull all the changes inside you local system from the main/master branch by 
                moving to the main branch inside your local system
        //"git checkout master" - to move to the main branch
        //"git pull origin master" - to pull all the changes from the remote main branch to your local main branch
        // Repeat #3 to #12
        //If u want work on same branch #5 to #12
        //If u already on master page just say ---> 
        // 1. git pull origin master
        // 2.git push origin master 
        // 3. If any error comes and u r confident about to push just say "git push --force origin master"

Note:
gitignore: whatever u mention in gitignore will not move to repository
            eg: consider if u mention env file in gitignore then it will not move to repository
Branch: Branch will consists of all the codes till date eg: branch name can be "master" or anything
        ***Never try to push the code on Master branch, as it will overriden the other users data***




        step1: git clone "repository_url"
        step2: npm install
        step3: npm install playwright
        step4: git checkout -b branchname --for new branch


*/