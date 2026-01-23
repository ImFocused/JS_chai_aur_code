// .innertext - also gets innercontent but cant show hidden 
// .textcontent - used to show all texts or contents inside a tag ( hidden ones too ) 
// .innerHTML - Gets the text as well as the other tags if used in the parent tag,.

// # Id
// . class

document.querySelector() //gets you the first selected value of the tag given 
document.querySelectorAll() // gets all values of selected tags

// querySelectorAll returns nodelist ( little same as array have forEach() but dont have map() )

.getElementsByClassName() // gets us the HTML Collection which is again different from node list and arrays 

// TO CONVERT HTML COLLECTION TO ARRAY USE ....
Array.from(HTMLCollection) // gives us array with map and forEach ;)