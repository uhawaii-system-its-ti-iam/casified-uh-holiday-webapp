### Badges Branch Summary
This branch utilizes Github Actions to automatically update status badges.

Implementing these files into the main branch would require users to pull them after every PR to see the badges update.

Having to re-sync with the remote repo after every PR makes the automation aspect of this badge redundant. 

Instead, we created this branch to automatically update the status of badges without having to pull after every push request to do so.  

Below are working examples of the Jest status badges:

### Example Status Badges
![Branches](./badges/coverage-branches.svg)
![Functions](./badges/coverage-functions.svg)
![Lines](./badges/coverage-lines.svg)
![Statements](./badges/coverage-statements.svg)
![Jest coverage](./badges/coverage-jest%20coverage.svg)
