let inputNum = document.getElementById('inputText');
let outputNum = document.querySelector('#outputText').innerHTML

let number = ""

number = outputNum


document.querySelector('#plus').addEventListener('click', addition);
document.querySelector('#minus').addEventListener('click', subtraction);

function addition() {
    outputNum = Number(inputNum.value) + Number(outputNum)
    document.querySelector('#outputText').innerHTML = outputNum
}


function subtraction() {
    console.log(inputNum.value)
    outputNum = Number(outputNum) - Number(inputNum.value)
    document.querySelector('#outputText').innerHTML = outputNum    
}
