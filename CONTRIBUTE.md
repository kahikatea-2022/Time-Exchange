# Contribution / Git Workflow

## General Git hygiene
- Only push to branches starting with an issue number (e.g. dont push to `dev` or `main`)
- Merging with dev should be done via pull requests
- Ideally have someone else merge your pull request, especially for larger changes
- Always run `git status` before adding/commiting. Make sure you're only commiting files relating to your ticket
- If in doubt, ask for help

## Starting a new ticket
- Assign ticket to yourself
- Make sure your clear on the scope of the ticket. As the team if unsure.
- Move ticket to In Progress
- `git checkout dev`
- `git pull origin dev`
- `git checkout -b newBranchName`

**Branch Naming**: [issue-number]-[brief-title-in-kebab-case] (e.g: 5-create-profile-component)

## When finishing a ticket
- `git pull origin dev`
- Handle any merge conflicts (ask for help if required)
- `npm run format` (or `npm run lint` to check if there are any formatting issues)
- `npm run test` and make sure all tests are passing
- Push your branch to github
- Create a new pull request
  - Add "Closes #[issue-number]" to the PR comments (e.g. "Closes #5") 
- Ask someone to review and merge your PR
- Close the branch once merged

## Creating new issues
- Go to the [issues board](https://github.com/kahikatea-2022/Time-Exchange/issues)
- Click "New Issue"
- Add relevant infomation
- Add labels
- Add project as Time-Exchange
- Save

## Adding issues to the board
Issues don't automatically show up on the board. To create a ticket from an issue:
- Go to the [board](https://github.com/kahikatea-2022/Time-Exchange/projects/1)
- Click `+ Add cards` (top right corner)
- Drag required issue to the To Do list
