// Abbreviate a Two Word Name

// Descrition:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:

// Loop
function abbrevName(name){
    const answer = [name[0]]
    for (let i = 0; i < name.length; i++) {
      if(name[i] == " ") {
        answer.push(name[i + 1]);
      }
    }
 return answer.map(el => el.toUpperCase()).join(".")
 }

// Array
function abbrevName(name){
   const newArray = name.split(" ")
   return (newArray[0][0] + "." + newArray[1][0]).toUpperCase()
}

// Map
function abbrevName(name){
    return name.split(" ").map(el => el[0].toUpperCase()).join(".")
 }

 console.log(abbrevName('Biggie Doo'))