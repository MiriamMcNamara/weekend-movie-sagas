# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

PART ONE: /details page
[x]- create MovieDetails component
[]- add button in MovieList that links to MovieDetails when you click on the image
[]- create a GET route call that uses the id of the movie that's clicked to pull that movie's info, including genres
[]- use redux to store movie details
[]- display movie details, including genres
[]- back to list button that takes you back to movieList

PART TWO: /addmovie page (perhaps linked from main page?)
[]- create AddMovie component with all of the fields listed in the instructions, cancel button that redirects to homepage, and save button that triggers the POST call (which is already written, base your stuff on it)
[]-you should be creating an object with all the fields filled in from the inputs and directly tied into the POST call fields
[]-use genres from database for the drop-down. Only allow select for one in base mode. Genre ID should be generated in a function/hook with a bunch of if statements? Is there a better way to do this?