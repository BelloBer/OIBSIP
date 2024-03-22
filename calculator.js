let displayValue = '';
let history = '';
let previous = null;


//function to display on screen
function showOnDisplay(value){
    if(value === 'ans'){
        if(previous!==null){
            displayValue += previous;
        }
    }else {
        displayValue += value;
    }
    updateDisplay();
}

//function to delete a value from the display
function deleteVal(){
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

//Function to clear all contents on the display box
function clearAll(){
    displayValue = '';
    updateDisplay();
}

//function to evaluate
function calculate(){
    try{
        let result = eval(displayValue);
        history = displayValue + " = " + result;

        // display the result
        document.getElementById('display').value = result;

        //show recent history
        document.getElementById('history').innerHTML = history;

        //clear display after calculation
        displayValue = '';
        previous = result;
    } catch (error){
        alert("Error in calculation");
        clearAll();
    }
}

//function to toggle +/-
function toggleSign() {
    if (displayValue[0] === '-') {
        displayValue = displayValue.slice(1);
    } else {
        displayValue = '-' + displayValue;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

//Event listener for keyboard input
document.addEventListener('keydown', function (event){
    const key = event.key;
    if(!isNaN(key) || key === '.'){
        showOnDisplay(key);
    }else if(key === '+'){
        showOnDisplay('+');
    }else if(key ==='-'){
        showOnDisplay('-');
    }else if(key === '*'){
        showOnDisplay('*');
    }else if(key === '/'){
        showOnDisplay('/');
    }else if(key === '('){
        showOnDisplay('(');
    }else if(key === ')'){
        showOnDisplay(')');
    }else if(key === 'Enter'){
        calculate();
    }else if(key === 'Backspace'){
        deleteVal();
    }else if(key === 'Delete'){
        clearAll();
    }

});