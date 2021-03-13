# Data-Pagination

Thoughts on how to put it together:

createElement method to create buttons on the bottom of the page, depending on how many search results are there. 
  Every X number of students, another page button will be added and results x+1 to x+y will be displayed. 
  Add new results to the 'last-child' of the buttons.

Need to set initial display to X number of children with buttons at the bottom of that page. 
  Create a variable for 'displayMax' that can be changed to set how many results per page.
      Set that in a dropdown list of 9, 12, or 15 for the user to control, just for fun.
