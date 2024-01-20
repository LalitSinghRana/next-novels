#!/bin/bash
# This is a shebang line that specifies the script should be run using bash

# Switch to 'main' branch.
#   - To be safe, in order to avoid deleting main branch.
git switch main

# Update local repository and remove remote-tracking references to deleted [remote] branches
git pull --prune

# Get a list of local branches without a corresponding remote branch
orphan_branches=$(
  # Get a verbose listing of all local branches and their upstream branches
  git branch -vv | 

  # Filter to only include lines where the upstream branch on 'origin' is gone
  # This'll not effect local branches that never had upstream branch
  grep 'origin/.*: gone]' | 

  # Print only the first field (the branch name) of each line
  awk '{print $1}'
)

# If there are any orphan branches, ask for user confirmation before deleting them
if [ -n "$orphan_branches" ]; then
  echo "The following orphan branches will be deleted:"
  echo "$orphan_branches"
  read -p "Are you sure you want to proceed? [Y/n] " -n 1 -r
  echo    # move to a new line
  if [[ $REPLY =~ ^[Yy]$ ]]
  then
    # If the user confirmed, delete the branches
    # For each branch name, run 'git branch -D' to force delete the branch
    # Force deleting because:
    #   - We do 'squash and merge' on GitHub. 
    #   - Git only consider last commit of the branch as merged. 
    #   - Even though we have merged all the commits of the branch. 
    #   - So git will not allow to delete the branch.
    echo "$orphan_branches" | xargs -n 1 git branch -D
  fi
else
  echo "No orphan branches to delete."
fi