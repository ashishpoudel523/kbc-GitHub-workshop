# kbc-it-workshop
3 days Git &amp; GitHub workshop


For Config: => git config --global user.name "Bishworaj Poudel" => git config --global user.email "iambrp.tech@gmail.com"

To View user.name and email git config --list

To Get Help: => git help => git help

Initialize a Repository => git init

To Add File To Staging Area => git add filename => git add filename1 filename2 => git add . [To Add All Files In Directory]

To Commit Change => git commit -m 'Short and Sweet Message' => git commit -am 'Staging and Comit Directly'

Clone Existing Repository => git clone <project_url>

Checking the Status Files => git status => git status -s [Short Status]

View Difference => git diff [ Find difference between commited and unstaged files ] => git diff --staged [difference in staged files]

To Remove File From git => git rm filename

To Move File => git mv file_from file_to [If we rename the file]

To Move staged file to not staged => git reset HEAD => git reset HEAD file1.txt

To Unmodifying a Modified File => git checkout filename

To View Commit History => git log => git log --oneline [Oneline Easy and Fast] => git log --stat [More History] => git log --pretty=oneline [Show SHA1 Value] => git log --pretty=format:"%h %s" --graph => git log --pretty=format:"%h - %an, %ar : %s" => git log --since=2.weeks => git log --after=2.weeks => git log --author "Bishworaj Poudel" => git log --oneline --decorate --graph --all

To ignore files: => create .gitignore file => then add filename/foldername line by line => *.c => ignore al .c files => !main.c => not ignore main.c file => node_modules/ => Directory node_modules and all files inside it.

To Unstaging a Staged File with git restore => git restore => git restore --staged file1.txt

To Work With Remote Repository => git remote show origin [To View Remote Origin Details] => git remote -v => git remote add origin : => git push origin master => git pull => pull data with current head => git fetch => only download the data to local repository => git fetch origin mod => To retrive remote branch => git remote rename pb paul => git remote remove paul => git push origin --delete bad-branch-name

Git Tag => git tag -l => git tag --list => git tag -a v1.4 -m "my version 1.4" => git show v1.4 => git tag v1.4-lw [Lightweigt] => git tag -d v1.4-lw => git checkout v2.0.0

To Transfer Tag to Remote => git push origin .

Working With Branch => git branch testing [To Creating Testing Branch] => git checkout testing [Switch Branch] => git commit -am 'made a change' => git checkout master [To Move to Master Branch] => git checkout -b .[Creating branch and switching to it] => git branch --merged => git branch --no-merged => git branch --move bad-branch-name corrected-branch-name

Redo Commit => git reset => git reset SHA1 => git reset -hard SHA1

Git Stash => git stash save => git stash list => git stash pop => git stash apply stash{0} => git stash clear => git stash grop stash

Merge git merge branchname git merge --no-ff branch name

Rebase

git rebase branchname

kbc-it-workshop
Useful Git Commands List

Command Description

git init Initialize a local Git repository

git clone repo_url Clone public repository

git clone ssh://git@github.com/[username]/[repository-name].git Clone private repository

git status Check status

git add [file-name] Add a file to the staging area

git add -A Add all new and changed files to the staging area

git commit -m "[commit message]" Commit changes

git rm -r [file-name.txt] Remove a file (or folder)

git branch List of branches (the asterisk denotes the current branch)

git branch -a List all branches (local and remote)

git branch [branch name] Create a new branch

git branch -d [branch name] Delete a branch

git branch -D [branch name] Delete a branch forcefully

git push origin --delete [branch name] Delete a remote branch

git checkout -b [branch name] Create a new branch and switch to it

git checkout -b [branch name] origin/[branch name] Clone a remote branch and switch to it

git branch -m [old branch name] [new branch name] Rename a local branch

git checkout [branch name] Switch to a branch

git checkout - Switch to the branch last checked out

git checkout -- [file-name.txt] Discard changes to a file

git merge [branch name] Merge a branch into the active branch

git merge [source branch] [target branch] Merge a branch into a target branch

git stash Stash changes in a dirty working directory

git stash clear Remove all stashed entries

git push origin [branch name] Push a branch to your remote repository

git push -u origin [branch name] Push changes to remote repository (and remember the branch)

git push Push changes to remote repository (remembered branch)

git push origin --delete [branch name] Delete a remote branch

git pull Update local repository to the newest commit

git pull origin [branch name] Pull changes from remote repository

git remote add origin ssh://git@github.com/[username]/[repository-name].git Add a remote repository

git remote set-url origin ssh://git@github.com/[username]/[repository-name].git Set a repository's origin branch to SSH

git log View changes

git log --summary View changes (detailed)

git log --oneline View changes (briefly)

git diff [source branch] [target branch] Preview changes before merging

git revert commitid Revert commit changes

git config --global user.name "your_username" Set globally Username

git config --global user.email "your_email_address@example.com" Set globally Email id

git config --global --list Get global config
