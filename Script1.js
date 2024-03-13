// JavaScript source code
const numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
 
function binary(){
    let numberD = document.getElementById('binaryNumber').value; //get input

    //validates input
    if(isNaN(parseInt(numberD)) || numberD % 1 != 0 || numberD < 0){
        document.getElementById('binaryOutput').innerText = 'Input a positive integer.';
        return;
    }

    //calculates required digits
    let digits = 1;
    while (2 ** digits - 1 < Number(numberD)){
        digits++;
    }

    //assembles binary number
    let numberB = '';
    let numberCheck = 0;
    for (let i = digits; i >= 1; i--){
        if (numberCheck + 2 ** (i - 1) > numberD){
            numberB += '0';
        }
        else{
            numberB += '1';
            numberCheck += 2 ** (i - 1);
        }
    }

    //output
    document.getElementById('binaryOutput').innerText = numberB;
}

function hexadecimal(){
    let numberD = document.getElementById('hexNumber').value; //get input

    //validates input
    if(isNaN(parseInt(numberD)) || numberD % 1 != 0 || numberD < 0){
        document.getElementById('hexOutput').innerText = 'Input a positive integer.';
        return;
    }

    //calculates required digits
    let digits = 1;
    while (16 ** digits - 1 < Number(numberD)){
        digits++;
    }

    //assembles hexadecimal number
    let numberH = '';
    let numberCheck = 0;
    for (let i = digits; i >= 1; i--){
        for (let j = 15; j >= 0; j--){
            if (numberCheck + j * (16 ** (i - 1)) <= numberD){
                numberH += numerals[j];
                numberCheck += j * (16 ** (i - 1));
                break; 
            }
        }
    }

    //output
    document.getElementById('hexOutput').innerText = numberH;
}

binaryNumber.addEventListener('input', binary);
hexNumber.addEventListener('input', hexadecimal);