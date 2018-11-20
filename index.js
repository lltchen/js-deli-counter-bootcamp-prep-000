var katzDeliLine = [];

function takeANumber(katzDeli, name) {
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length <= 1){
    return(`Currently serving ${katzDeliLine[0]}`)
  }
}