// JavaScript source code
function binary(){
    let numberD = document.getElementById('binaryNumber').value; //get input

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
    document.getElementById('binaryOutput').innerHTML = String(numberB);
}

binaryBtn.addEventListener('click', binary);