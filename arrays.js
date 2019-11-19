//-------------------------------------------------ARRAYS-------------------------------------------------------------------------


let shoppingList = ["bread", "milk", "oranges"];

let shoppingList2 = [
    "bread",                           // These two arrays are the same
    "milk", 
    "oranges"
];

//---------------------------------------------------------------------------------------------------------------------------------

let shoppingList3 = ["bread", "milk", "oranges"];

// index positions start at 0. In the above example, "bread" = index 0, "milk" = index 1, "oranges" = index 2, etc

console.log(shoppingList3[2]); // logs the value stored in index position 2 to the console

console.log(shoppingList3.length); // logs the total number of filled index poitions in an array

shoppingList3.push("Kit-Kat"); // Adds a value to the end of an array

console.log(shoppingList3.length); // logs the total number of items in an array to the console

console.log(shoppingList3); // logs all items in an array to the console

shoppingList3.pop(); // Removes the last entry from an array
shoppingList3.pop();

console.log(shoppingList3); // logs all items in an array to the console

//-----------------------------------------------------------------------------------------------------------------------------------

let colours = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
console.log(colours)

let colours2 = [...colours, "Mauve", "Purple"]; // ...colours adds whole of that array at the start of new array
console.log(colours2);

let colours3 = ["Mauve", "Purple", ...colours]; // ...colours adds whole of that array at the end of new array
console.log(colours3);

//-----------------------------------------------------------------------------------------------------------------------------------

let snacks = ["Crisps", "Sweets", "Chocolate"];
let fruit = ["Apples", "Oranges", "Pears"];
let drinks = ["Juice", "Tea", "Coffee"];

let foods = [...snacks, ...fruit, ...drinks] // Adds all three arrays into a new array called foods

console.log(foods)



//-----------------------------------------------------------------------------------------------------------------------------------

// ** Activity 1

let favWebsites = ["Youtube", "Reddit", "Newgrounds"];
console.log(favWebsites);

favWebsites.push("Twitter");
console.log(favWebsites);

favWebsites.push("Twitch");
console.log(favWebsites);

favWebsites.pop();
console.log(favWebsites);

// ** Activity 2

// ** The Shift() method removes the first element from an array 

let favWebsites2 = ["Youtube", "Reddit", "Newgrounds"];
console.log(favWebsites2);
let removedElement = favWebsites2.shift(); // Here we assign the removed item to a variable
console.log(favWebsites2);
console.log(removedElement);
console.log(favWebsites2.shift());
console.log(favWebsites2);

// ** The unshift() method adds one or more elements to the beginning of an array and returns the new array length

let favWebsites3 = ["Youtube", "Reddit", "Newgrounds"];

console.log(favWebsites3);

console.log(favWebsites3.unshift("Twitter", "Twitch")); // Adds "Twitter" and "Twitch" to the start of the array and logs new array length

console.log(favWebsites3);

// ** The slice() method returns a copy of a portion of an array into a new object. The original array is left unchanged.

let favWebsites4 = ["Youtube", "Reddit", "Newgrounds", "Twitter", "BBC", "Twitch"];

console.log(favWebsites4);
console.log(favWebsites4.slice(2)); // Returns the items in an array from (and including) index 2
console.log(favWebsites4.slice(2, 4)); // Returns the items in an array from (and including) index 2, up to (but not including) index 4

let favFoods = ["Twix", "Kit-Kat", "Aero", "Minstrels", "Maltesers", "Pizza", "Burgers", "Cereal"];

let favSweets = favFoods.slice(0, 5); // Creates new array with items from positions 0, 1, 2, 3, 4
let favSavoury = favFoods.slice(5);  // Creates new array with items from positions 5, 6, 7
console.log(favFoods);
console.log(favSweets);
console.log(favSavoury);


// ** The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let favWebsites5 = ["Youtube", "Reddit", "Newgrounds"];

favWebsites5.splice(1, 0, "twitter"); // Parameters are (position to splice at, number of items to remove, items to add) if 

console.log(favWebsites5);

favWebsites5.splice(2, 2, "Twitch", "Spotify"); // Starting at index position 2, remove 2 items beginning at starting index, then add 2  elements beginning at the start index.

console.log(favWebsites5);



