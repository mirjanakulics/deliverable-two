var eventType=prompt("What type of event are you going to?");
var tempFahr=prompt("What is the temperature outside?");
var result = "";

if (eventType==="formal" && tempFahr < 54) {
result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear a suit and a coat`;
console.log(result);
} else if (eventType==="formal" && tempFahr > 70) {
  result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear a suit and a no jacket`;
console.log(result);
}
else if (eventType==="formal" && tempFahr > 54 && tempFahr < 70) {
  result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear a suit and jacket`;
console.log(result);
}
else if (eventType==="semi-formal" && tempFahr < 54) {
  result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear a polo and a coat`;
console.log(result);
}

else if (eventType==="semi-formal" && tempFahr > 54 && tempFahr < 70) {
  result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear a polo and a jacket`;
console.log(result);
} else if (eventType==="semi-formal" && tempFahr > 70) {
  result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear a polo and no jacket`;
console.log(result);
}

else if (eventType==="casual" && tempFahr < 54){
  result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should something comfy and coat`;
console.log(result);
} else if (eventType==="casual" && tempFahr > 54 && tempFahr < 70) {
  result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear something comft and a jacket`;
  console.log(result);
}

else if (eventType==="casual" && tempFahr > 70){
  result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear something comfy and no jacket`;
  console.log(result);
}
