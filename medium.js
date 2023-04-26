
let userChoose =prompt("Enter a number 1-12 to choose a month");
var months =["January", "February","March","April","May","June","July","August","September","october","November","December"] 
   
function numMonth(x) {
if (x < 13 && x > 0){
    return document.write(`This month is ${months[x-1]}`)
} else {
    return document.write(`The number you have enter is invalid`)
}

}
numMonth(userChoose)




