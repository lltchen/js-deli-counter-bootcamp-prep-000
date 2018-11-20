var katzDeliLine = [];

function takeANumber(katzDeli, name) {
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length <= 1){
    return(`Currently serving ${katzDeliLine[0]}`)
  }
  if (katzDeliLine.length == 0){
    return("There is nobody waiting to be served!")
  }

  katzDeliLine.shift(1);
}
function currentLine(katzDeliLine){
  return(`The line is currently: 1.${katzDeliLine[0]}, 2.${katzDeliLine[1]}`)
  
}