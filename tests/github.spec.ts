/*Git and github are different
Git is a version control system
Repository or repo: Its just a project folder 
Remote repository or repo: A repository that is stored on a remote server, such as GitHub, GitLab, or Bitbucket.
Github: It is one example of remote repository hosting service -- hosting services ante vere vaalla projects ni oka dantlo store cheyadaniki use chesedhi github/gitlab etc..
        Github is free of source so lot of them use it
Local Repository: A repository that is stored on your local machine, where you can make changes and commit them before 
                pushing to a remote repository.
branch: A branch in Git is a separate line of development that allows you to work on different features or bug fixes without affecting the main codebase. It enables multiple developers to collaborate on the same project simultaneously.
pull request: A pull request is a way to propose changes to a codebase in a Git repository. It allows developers to submit their changes for review and discussion before merging them into the main branch. Pull requests are commonly used in collaborative software development to facilitate code review and ensure that changes are thoroughly vetted before being integrated into the main codebase.
merge: Merging in Git is the process of combining changes from one branch into another. It allows you to integrate the work done on a feature branch back into the main branch (often called "master" or "main"). When you merge, Git takes the changes from the source branch and applies them to the target branch, creating a new commit that represents the merged changes. Merging is a fundamental part of collaborative software development, enabling multiple developers to work on different features or bug fixes simultaneously and then bring their changes together into a cohesive codebase.

/***************** 
Appudaina manam git loki folder pampinchali ante first mana local machine lo vundali
command prompt or vs code terminal lo cheyochu
1.git init --> initialises the empty git repository
2.git status --> to check the status of the repository
3."git add filename" --> miku just one file maatrame add cheyali ante -- "git add filename"
4.git commit -m "commitplaywrightmcpusingAI" --> to commit the changes with a message

////goto github portal --> create a new repository or remote repository --> local filename and remote repository filename same vundali
Readme file: check or uncheck cheyochu as It is a file which gives the information about the project, how to run the project, 
            how to install the dependencies etc.. it is a documentation file which gives the information about the project
.gitignore file: It is a file which is used to ignore the files which we dont want to push to the repository/////

5.git remote add origin https://github.com/jyothi-1997/PlaywrightMCPusingAI.git --> to add the remote repository url to your local repository 
niku remote repository means org anedhi telidhu so local machine lo cmd lo ee link paste cheyu so add aithadhi
6. git branch
7. git push -u origin master --> to push the changes to the remote repository
eeeeeeeeee step aipoyanaka github ki velli newly created repository page ni refresh cheyandi appudu commit chesina single or multiple files kanipisthadhi

main/master: Main branch is the default branch in Git repositories, often used as the primary branch for development. 
            It is where the stable and production-ready code is typically maintained. Developers create feature branches off of the main branch 
            to work on new features or bug fixes, and then merge those changes back into the main branch once they are complete and tested. 
            The main branch serves as the central point of collaboration and integration for a project, ensuring that all changes are consolidated and ready for deployment.
branch: A branch in Git is a separate line of development that allows you to work on different features or bug fixes without affecting the
        main codebase. It enables multiple developers to collaborate on the same project simultaneously. Each branch can have its own 
        commits and changes, and you can switch between branches to work on different aspects of the project. Once the work on a branch 
        is complete, it can be merged back into the main branch to integrate the changes.
pull request: A pull request is a way to propose changes to a codebase in a Git repository. It allows developers to submit their changes 
              for review and discussion before merging them into the main branch. Pull requests are commonly used in collaborative 
              software development to facilitate code review and ensure that changes are thoroughly vetted before being integrated 
              into the main codebase. When a pull request is created, other team members can review the proposed changes, 
              leave comments, and suggest modifications. Once the pull request is approved, it can be merged into the main branch, 
              making the changes part of the official codebase.

How to create branch:
8. "git checkout -b branchname"
checkout: "git checkout -b branchname" --> to create a new branch and switch or jump to it

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
            
            g. git init --> initialises the empty git repository
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
                    8.1 - Switch to the main branch and make pull - git checkout master - git pull
                    8.2 - Switch back to your feature branch - "git checkout TS01LoginPage"
                    8.3 - Merge the main branch changes to your feature branch - "git merge master"
            9. Go to the github/bitbucket/gitlab portal - you will see a pop up to create a pull request -> click on it
                which says i have made the changes correctly so move to main branch which is master
            10. click on "Create pull request" for the changes - assign the reviewer(inside organization) and create the PR 
            11. Once the reviewer approves the changes - click on "Merge pull request"->"confirm merge" so it will merge the changes to the main branch
          

        //3.0:  Pull all the changes inside you local system from the main/master branch by 
                moving to the main branch inside your local system
        //"git checkout master" - to move to the main branch
        //"git pull origin master" - to pull all the changes from the remote main branch to your local main branch
        
        // Repeat #3 to #12
        //If u want work on same branchy #5 to #12
        //If u already on master page just say ---> 
        // 1. git pull origin master
        // 2. git push origin master 
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