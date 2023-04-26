
let tomHeight = 9;
let tomWeight = 8;
let jerryHeight =10;
let jerryWeight = 45;

function bmi(t,j) {
    return t / (j*j);
}  
 let tomHeightbmi = bmi(tomWeight,tomHeight) > bmi(jerryWeight , jerryHeight);
  console.log("Is Tom’s BMI higher than Jerry’s? " + tomHeightbmi);

























