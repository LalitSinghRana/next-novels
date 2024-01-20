#!/bin/bash
# This is a shebang line that specifies the script should be run using bash

# Get a verbose listing of all local branches and their upstream branches
git branch -vv | 

# Filter to only include lines where the upstream branch on 'origin' is gone
# This'll not effect local branches that never had upstream branch
grep 'origin/.*: gone]' | 

# Print only the first field (the branch name) of each line
awk '{print $1}' | 

# For each branch name, run 'git branch -D' to force delete the branch
# Force deleting because:
#   - We do 'squash and merge' on GitHub. 
#   - Git only consider last commit of the branch as merged. 
#   - Even though we have merged all the commits of the branch. 
#   - So git will not allow to delete the branch.
xargs -n 1 git branch -D