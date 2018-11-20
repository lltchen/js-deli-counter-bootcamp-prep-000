var katzDeliLine = [];
var line = []

function takeANumber(katzDeli, name) {
    katzDeliLine.push(`${name}`);
    return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeliLine){
    if (katzDeliLine.length == 0){
      return("There is nobody waiting to be served!")
    }
  else{
    return(`Currently serving ${katzDeliLine[0]}`)
    }
    katzDeliLine.shift(1)
}


function currentLine(katzDeliLine){
  var line = []
  for (var i = 0; i < katzDeliLine.length; i++) {
  line.push(` ${i+1}.` +katzDeliLine[i])
  }
      return("The line is currently:" + line )

}
