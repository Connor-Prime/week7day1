//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/

let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]



function checkForDogs(astring, doglist){

    for ( i =0 ; i< doglist.length; i++){

        if (astring.includes(doglist[i])){
            console.log("<matched_"+ doglist[i]+">")
        }else{
            console.log("No match for "+ doglist[i])
        }
    }

}

console.log(checkForDogs(dogString, dogNames))



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/

let arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]

function evens(arr){  

    arr2 = arr
    for (i =0 ; i < arr.length; i+=2){
        arr2.splice(i,1,"even index")
    }
    return arr
}

console.log(evens(arr))
// ---------------------------------------------------
// Codewars in JS
// ---------------------------------------------------------
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


function rowSumOddNumbers(n) {
    //   Each row is the cube of the row length
      return n**3;
    }

    // Got lucky finding a pattern that worked on 100% test cases

console.log(rowSumOddNumbers(5))
    // Question 2

    // Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

    // Examples:
    // a = "xyaabbbccccdefww"
    // b = "xxxxyyyyabklmopq"
    // longest(a, b) -> "abcdefklmopqwxy"
    
    // a = "abcdefghijklmnopqrstuvwxyz"
    // longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

    function longest(s1, s2) {
        let stringSum = s1+s2;
      //   converts to set to remove duplicates, sorts , and then rejoins string
        let x = Array.from(new Set(stringSum.split(""))).sort().join('')
        return x;
      }

    //   Test
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
console.log(longest(a, b)) //-> "abcdefklmopqwxy"