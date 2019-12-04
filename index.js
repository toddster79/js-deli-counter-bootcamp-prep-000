// var katzDeliLine = [];



function takeANumber(deliLine, name) {
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var firstPerson = katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`;
  }
}

function currentLine(katzDeliLine) {
  var newLine = [];
  var space = ' '; 
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      newLine.push(`${i + 1}. ${katzDeliLine[i]}`);
    }
    return "The line is currently: " + newLine.join(", ");
  }
}