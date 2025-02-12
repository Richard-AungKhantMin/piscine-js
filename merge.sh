#!/bin/bash

 echo -e "\033[36mEntering the master branch\033[0m" 
git checkout master

 echo -e "\033[36mGit Status\033[0m" 
git status

 echo -e "\033[36mEntering the main branch\033[0m" 
git checkout main
git branch

 echo -e "\033[36mMerging the branches\033[0m" 
# Run git merge with --allow-unrelated-histories
git merge master --allow-unrelated-histories
