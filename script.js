let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
minValue = minValue || 0;
minValue = (minValue < -999) ? -999: minValue;
minValue = (minValue > 999) ?   999: minValue;

let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
maxValue = maxValue || 100;
maxValue = (maxValue > 999) ? 999: maxValue;
maxValue = (maxValue < -999) ? -999: maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');


    if (answerNumber > 19 && answerNumber < 100) {

    let firstNumber = (parseInt(answerNumber / 10));
    switch (firstNumber) {
    case 2:
    firstNumber = ('двадцать');
    break;
    case 3:
    firstNumber = ('тридцать');
    break;
    case 4:
    firstNumber = ('сорок');
    break;
    case 5:
    firstNumber = ('пятьдесят');
    break;
    case 6:
    firstNumber = ('шестьдесят');
    break;
    case 7:
    firstNumber = ('семьдесят');
    break;
    case 8:
    firstNumber = ('восемьдесят');
    break;
    case 9:
    firstNumber = ('девяносто');
    break;
    }

    let secondNumber = (answerNumber % 10);

    switch (secondNumber) {
    case 1:
    secondNumber = ('один');
    break;
    case 2:
    secondNumber = ('два');
    break;
    case 3:
    secondNumber = ('три');
    break;
    case 4:
    secondNumber = ('четыре');
    break;
    case 5:
    secondNumber = ('пять');
    break;
    case 6:
    secondNumber = ('шесть');
    break;
    case 7:
    secondNumber = ('семь');
    break;
    case 8:
    secondNumber = ('восемь');
    break;
    case 9:
    secondNumber = ('девять');
    break;
    case 0:
    secondNumber = ('');
    break;

    }

    answerField.innerText = 'Вы загадали ' + firstNumber + ' ' + secondNumber + '?';
}

 if (answerNumber > 9 && answerNumber < 20) {

    let firstNumber = (answerNumber % 10);

    switch (firstNumber) {
    case 1:
    firstNumber = ('одиннадцать');
    break;
    case 2:
    firstNumber = ('двенадцать');
    break;
    case 3:
    firstNumber = ('тринадцать');
    break;
    case 4:
    firstNumber = ('четырнадцать');
    break;
    case 5:
    firstNumber = ('пятнадцать');
    break;
    case 6:
    firstNumber = ('шестнадцать');
    break;
    case 7:
    firstNumber = ('семнадцать');
    break;
    case 8:
    firstNumber = ('восемнадцать');
    break;
    case 9:
    firstNumber = ('девятнадцать');
    break;
    case 0:
    firstNumber = ('десять');
    break;
        
  }

  answerField.innerText = 'Вы загадали ' + firstNumber  + '?';
}

if (answerNumber > -1 && answerNumber < 10) {

    let firstNumber = (answerNumber * 1);

    switch (firstNumber) {
    case 1:
    firstNumber = ('один');
    break;
    case 2:
    firstNumber = ('два');
    break;
    case 3:
    firstNumber = ('три');
    break;
    case 4:
    firstNumber = ('четыре');
    break;
    case 5:
    firstNumber = ('пять');
    break;
    case 6:
    firstNumber = ('шесть');
    break;
    case 7:
    firstNumber = ('семь');
    break;
    case 8:
    firstNumber = ('восемь');
    break;
    case 9:
    firstNumber = ('девять');
    break;
    case 0:
    firstNumber = ('ноль');
    break;
  
        
  }

  answerField.innerText = 'Вы загадали ' + firstNumber  + '?';
}

if (answerNumber > 100 && answerNumber < 1000) {

    let firstNumber = (parseInt(answerNumber / 100));
    switch (firstNumber) {
    case 1:
    firstNumber = ('сто');
    case 2:
    firstNumber = ('двести');
    break;
    case 3:
    firstNumber = ('триста');
    break;
    case 4:
    firstNumber = ('четыреста');
    break;
    case 5:
    firstNumber = ('пятьсот');
    break;
    case 6:
    firstNumber = ('шестьсот');
    break;
    case 7:
    firstNumber = ('семьсот');
    break;
    case 8:
    firstNumber = ('восемьсот');
    break;
    case 9:
    firstNumber = ('девятьсот');
    break;
    }

    let secondNumber = (answerNumber % 100);

    switch (secondNumber) {
    case 1:
    secondNumber = ('один');
    break;
    case 2:
    secondNumber = ('два');
    break;
    case 3:
    secondNumber = ('три');
    break;
    case 4:
    secondNumber = ('четыре');
    break;
    case 5:
    secondNumber = ('пять');
    break;
    case 6:
    secondNumber = ('шесть');
    break;
    case 7:
    secondNumber = ('семь');
    break;
    case 8:
    secondNumber = ('восемь');
    break;
    case 9:
    secondNumber = ('девять');
    break;
    case 10:
    secondNumber = ('десять');
    break;
    case 11:
    secondNumber = ('одиннадцать');
    break;
    case 12:
    secondNumber = ('двенадцать');
    break;
    case 13:
    secondNumber = ('тринадцать');
    break;
    case 14:
    secondNumber = ('четырнадцать');
    break;
    case 15:
    secondNumber = ('пятнадцать');
    break;
    case 16:
    secondNumber = ('шестнадцать');
    break;
    case 17:
    secondNumber = ('всемнадцать');
    break;
    case 18:
    secondNumber = ('восемнадцать');
    break;
    case 19:
    secondNumber = ('девятнадцать');
    break;
    case 20:
    secondNumber = ('двадцать');
    break;
    case 21:
    secondNumber = ('двадцать один');
    break;
    case 22:
    secondNumber = ('двадцать два');
    break;
    case 23:
    secondNumber = ('двадцать три');
    break;
    case 24:
    secondNumber = ('двадцать четыре');
    break;
    case 25:
    secondNumber = ('двадцать пять');
    break;
    case 26:
    secondNumber = ('двадцать шесть');
    break;
    case 27:
    secondNumber = ('двадцать семь');
    break;
    case 28:
    secondNumber = ('двадцать восемь');
    break;
    case 29:
    secondNumber = ('двадцать девять');
    break;
    case 30:
    secondNumber = ('тридцать');
    break;
    case 31:
    secondNumber = ('тридцать один');
    break;
    case 32:
    secondNumber = ('тридцать два');
    break;
    case 33:
    secondNumber = ('тридцать три');
    break;
    case 34:
    secondNumber = ('тридцать четыре');
    break;
    case 35:
    secondNumber = ('тридцать пять');
    break;
    case 36:
    secondNumber = ('тридцать шесть');
    break;
    case 37:
    secondNumber = ('тридцать семь');
    break;
    case 38:
    secondNumber = ('тридцать восемь');
    break;
    case 39:
    secondNumber = ('тридцать девять');
    break;
    case 40:
    secondNumber = ('двадцать');
    break;
    case 41:
    secondNumber = ('сорок один');
    break;
    case 42:
    secondNumber = ('сорок два');
    break;
    case 43:
    secondNumber = ('сорок три');
    break;
    case 44:
    secondNumber = ('сорок четыре');
    break;
    case 45:
    secondNumber = ('сорок пять');
    break;
    case 46:
    secondNumber = ('сорок шесть');
    break;
    case 47:
    secondNumber = ('сорок семь');
    break;
    case 48:
    secondNumber = ('сорок восемь');
    break;
    case 49:
    secondNumber = ('сорок девять');
    break;
    case 50:
    secondNumber = ('пятьдесят');
    break;
    case 51:
    secondNumber = ('пятьдесят один');
    break;
    case 52:
    secondNumber = ('пятьдесят два');
    break;
    case 53:
    secondNumber = ('пятьдесят три');
    break;
    case 54:
    secondNumber = ('пятьдесят четыре');
    break;
    case 55:
    secondNumber = ('пятьдесят пять');
    break;
    case 56:
    secondNumber = ('пятьдесят шесть');
    break;
    case 57:
    secondNumber = ('пятьдесят семь');
    break;
    case 58:
    secondNumber = ('пятьдесят восемь');
    break;
    case 59:
    secondNumber = ('пятьдесят девять');
    break;
    case 60:
    secondNumber = ('шестьдесят');
    break;
    case 61:
    secondNumber = ('шестьдесят один');
    break;
    case 62:
    secondNumber = ('шестьдесят два');
    break;
    case 63:
    secondNumber = ('шестьдесят три');
    break;
    case 64:
    secondNumber = ('шестьдесят четыре');
    break;
    case 65:
    secondNumber = ('шестьдесят пять');
    break;
    case 66:
    secondNumber = ('шестьдесят шесть');
    break;
    case 67:
    secondNumber = ('шестьдесят семь');
    break;
    case 68:
    secondNumber = ('шестьдесят восемь');
    break;
    case 69:
    secondNumber = ('шестьдесят девять');
    break;
    case 70:
    secondNumber = ('семьдесят');
    break;
    case 71:
    secondNumber = ('семьдесят один');
    break;
    case 72:
    secondNumber = ('семьдесят два');
    break;
    case 73:
    secondNumber = ('семьдесят три');
    break;
    case 74:
    secondNumber = ('семьдесят четыре');
    break;
    case 75:
    secondNumber = ('семьдесят пять');
    break;
    case 76:
    secondNumber = ('семьдесят шесть');
    break;
    case 77:
    secondNumber = ('семьдесят семь');
    break;
    case 78:
    secondNumber = ('семьдесят восемь');
    break;
    case 79:
    secondNumber = ('семьдесят девять');
    break;
    case 80:
    secondNumber = ('восемьдесят');
    break;
    case 81:
    secondNumber = ('восемьдесят один');
    break;
    case 82:
    secondNumber = ('восемьдесят два');
    break;
    case 83:
    secondNumber = ('восемьдесят три');
    break;
    case 84:
    secondNumber = ('восемьдесят четыре');
    break;
    case 85:
    secondNumber = ('восемьдесят пять');
    break;
    case 86:
    secondNumber = ('восемьдесят шесть');
    break;
    case 87:
    secondNumber = ('восемьдесят семь');
    break;
    case 88:
    secondNumber = ('восемьдесят восемь');
    break;
    case 89:
    secondNumber = ('восемьдесят девять');
    break;
    case 90:
    secondNumber = ('девяносто');
    break;
    case 91:
    secondNumber = ('девяносто один');
    break;
    case 92:
    secondNumber = ('девяносто два');
    break;
    case 93:
    secondNumber = ('девяносто три');
    break;
    case 94:
    secondNumber = ('девяносто четыре');
    break;
    case 95:
    secondNumber = ('девяносто пять');
    break;
    case 96:
    secondNumber = ('девяносто шесть');
    break;
    case 97:
    secondNumber = ('девяносто семь');
    break;
    case 98:
    secondNumber = ('девяносто восемь');
    break;
    case 99:
    secondNumber = ('девяносто девять');
    break;
    case 0:
        secondNumber = (' ');
        break;


    }


    answerField.innerText = 'Вы загадали ' + firstNumber + ' ' + secondNumber + '  ?';

}

if (answerNumber < -19 && answerNumber > -100) {

    let firstNumber = (parseInt(answerNumber / 10));
    switch (firstNumber) {
    case -2:
    firstNumber = ('двадцать');
    break;
    case -3:
    firstNumber = ('тридцать');
    break;
    case -4:
    firstNumber = ('сорок');
    break;
    case -5:
    firstNumber = ('пятьдесят');
    break;
    case -6:
    firstNumber = ('шестьдесят');
    break;
    case -7:
    firstNumber = ('семьдесят');
    break;
    case -8:
    firstNumber = ('восемьдесят');
    break;
    case -9:
    firstNumber = ('девяносто');
    break;
    }

    let secondNumber = (answerNumber % 10);

    switch (secondNumber) {
    case -1:
    secondNumber = ('один');
    break;
    case -2:
    secondNumber = ('два');
    break;
    case -3:
    secondNumber = ('три');
    break;
    case -4:
    secondNumber = ('четыре');
    break;
    case -5:
    secondNumber = ('пять');
    break;
    case -6:
    secondNumber = ('шесть');
    break;
    case -7:
    secondNumber = ('семь');
    break;
    case -8:
    secondNumber = ('восемь');
    break;
    case -9:
    secondNumber = ('девять');
    break;
    case 0:
    secondNumber = ('');
    break;

    }

    answerField.innerText = 'Вы загадали ' + 'минус ' + firstNumber + ' ' + secondNumber + '  ?';
}

if (answerNumber < -9 && answerNumber > -20) {

    let firstNumber = (answerNumber % 10);
    
    switch (firstNumber) {
    case -1:
    firstNumber = ('одиннадцать');
    break;
    case -2:
    firstNumber = ('двенадцать');
    break;
    case -3:
    firstNumber = ('тринадцать');
    break;
    case -4:
    firstNumber = ('четырнадцать');
    break;
    case -5:
    firstNumber = ('пятнадцать');
    break;
    case -6:
    firstNumber = ('шестнадцать');
    break;
    case -7:
    firstNumber = ('семнадцать');
    break;
    case -8:
    firstNumber = ('восемнадцать');
    break;
    case -9:
    firstNumber = ('девятнадцать');
    break;
    case 0:
    firstNumber = ('десять');
    break;
        
    }

    answerField.innerText = 'Вы загадали ' + 'минус ' + firstNumber + '  ?';
}

if (answerNumber < -100 && answerNumber > -1000) {

    let firstNumber = (parseInt(answerNumber / 100));
    switch (firstNumber) {
    case -1:
    firstNumber = ('сто');
    case -2:
    firstNumber = ('двести');
    break;
    case -3:
    firstNumber = ('триста');
    break;
    case -4:
    firstNumber = ('четыреста');
    break;
    case -5:
    firstNumber = ('пятьсот');
    break;
    case -6:
    firstNumber = ('шестьсот');
    break;
    case -7:
    firstNumber = ('семьсот');
    break;
    case -8:
    firstNumber = ('восемьсот');
    break;
    case -9:
    firstNumber = ('девятьсот');
    break;
    }

    let secondNumber = (answerNumber % 100);

    switch (secondNumber) {
    case -1:
    secondNumber = ('один');
    break;
    case -2:
    secondNumber = ('два');
    break;
    case -3:
    secondNumber = ('три');
    break;
    case -4:
    secondNumber = ('четыре');
    break;
    case -5:
    secondNumber = ('пять');
    break;
    case -6:
    secondNumber = ('шесть');
    break;
    case -7:
    secondNumber = ('семь');
    break;
    case -8:
    secondNumber = ('восемь');
    break;
    case -9:
    secondNumber = ('девять');
    break;
    case -10:
    secondNumber = ('десять');
    break;
    case -11:
    secondNumber = ('одиннадцать');
    break;
    case -12:
    secondNumber = ('двенадцать');
    break;
    case -13:
    secondNumber = ('тринадцать');
    break;
    case -14:
    secondNumber = ('четырнадцать');
    break;
    case -15:
    secondNumber = ('пятнадцать');
    break;
    case -16:
    secondNumber = ('шестнадцать');
    break;
    case -17:
    secondNumber = ('всемнадцать');
    break;
    case -18:
    secondNumber = ('восемнадцать');
    break;
    case -19:
    secondNumber = ('девятнадцать');
    break;
    case -20:
    secondNumber = ('двадцать');
    break;
    case -21:
    secondNumber = ('двадцать один');
    break;
    case -22:
    secondNumber = ('двадцать два');
    break;
    case -23:
    secondNumber = ('двадцать три');
    break;
    case -24:
    secondNumber = ('двадцать четыре');
    break;
    case -25:
    secondNumber = ('двадцать пять');
    break;
    case -26:
    secondNumber = ('двадцать шесть');
    break;
    case -27:
    secondNumber = ('двадцать семь');
    break;
    case -28:
    secondNumber = ('двадцать восемь');
    break;
    case -29:
    secondNumber = ('двадцать девять');
    break;
    case -30:
    secondNumber = ('тридцать');
    break;
    case -31:
    secondNumber = ('тридцать один');
    break;
    case -32:
    secondNumber = ('тридцать два');
    break;
    case -33:
    secondNumber = ('тридцать три');
    break;
    case -34:
    secondNumber = ('тридцать четыре');
    break;
    case -35:
    secondNumber = ('тридцать пять');
    break;
    case -36:
    secondNumber = ('тридцать шесть');
    break;
    case -37:
    secondNumber = ('тридцать семь');
    break;
    case -38:
    secondNumber = ('тридцать восемь');
    break;
    case -39:
    secondNumber = ('тридцать девять');
    break;
    case -40:
    secondNumber = ('двадцать');
    break;
    case -41:
    secondNumber = ('сорок один');
    break;
    case -42:
    secondNumber = ('сорок два');
    break;
    case -43:
    secondNumber = ('сорок три');
    break;
    case -44:
    secondNumber = ('сорок четыре');
    break;
    case -45:
    secondNumber = ('сорок пять');
    break;
    case -46:
    secondNumber = ('сорок шесть');
    break;
    case -47:
    secondNumber = ('сорок семь');
    break;
    case -48:
    secondNumber = ('сорок восемь');
    break;
    case -49:
    secondNumber = ('сорок девять');
    break;
    case -50:
    secondNumber = ('пятьдесят');
    break;
    case -51:
    secondNumber = ('пятьдесят один');
    break;
    case -52:
    secondNumber = ('пятьдесят два');
    break;
    case -53:
    secondNumber = ('пятьдесят три');
    break;
    case -54:
    secondNumber = ('пятьдесят четыре');
    break;
    case -55:
    secondNumber = ('пятьдесят пять');
    break;
    case -56:
    secondNumber = ('пятьдесят шесть');
    break;
    case -57:
    secondNumber = ('пятьдесят семь');
    break;
    case -58:
    secondNumber = ('пятьдесят восемь');
    break;
    case -59:
    secondNumber = ('пятьдесят девять');
    break;
    case -60:
    secondNumber = ('шестьдесят');
    break;
    case -61:
    secondNumber = ('шестьдесят один');
    break;
    case -62:
    secondNumber = ('шестьдесят два');
    break;
    case -63:
    secondNumber = ('шестьдесят три');
    break;
    case -64:
    secondNumber = ('шестьдесят четыре');
    break;
    case -65:
    secondNumber = ('шестьдесят пять');
    break;
    case -66:
    secondNumber = ('шестьдесят шесть');
    break;
    case -67:
    secondNumber = ('шестьдесят семь');
    break;
    case -68:
    secondNumber = ('шестьдесят восемь');
    break;
    case -69:
    secondNumber = ('шестьдесят девять');
    break;
    case -70:
    secondNumber = ('семьдесят');
    break;
    case -71:
    secondNumber = ('семьдесят один');
    break;
    case -72:
    secondNumber = ('семьдесят два');
    break;
    case -73:
    secondNumber = ('семьдесят три');
    break;
    case -74:
    secondNumber = ('семьдесят четыре');
    break;
    case -75:
    secondNumber = ('семьдесят пять');
    break;
    case -76:
    secondNumber = ('семьдесят шесть');
    break;
    case -77:
    secondNumber = ('семьдесят семь');
    break;
    case -78:
    secondNumber = ('семьдесят восемь');
    break;
    case -79:
    secondNumber = ('семьдесят девять');
    break;
    case -80:
    secondNumber = ('восемьдесят');
    break;
    case -81:
    secondNumber = ('восемьдесят один');
    break;
    case -82:
    secondNumber = ('восемьдесят два');
    break;
    case -83:
    secondNumber = ('восемьдесят три');
    break;
    case -84:
    secondNumber = ('восемьдесят четыре');
    break;
    case -85:
    secondNumber = ('восемьдесят пять');
    break;
    case -86:
    secondNumber = ('восемьдесят шесть');
    break;
    case -87:
    secondNumber = ('восемьдесят семь');
    break;
    case -88:
    secondNumber = ('восемьдесят восемь');
    break;
    case -89:
    secondNumber = ('восемьдесят девять');
    break;
    case -90:
    secondNumber = ('девяносто');
    break;
    case -91:
    secondNumber = ('девяносто один');
    break;
    case -92:
    secondNumber = ('девяносто два');
    break;
    case -93:
    secondNumber = ('девяносто три');
    break;
    case -94:
    secondNumber = ('девяносто четыре');
    break;
    case -95:
    secondNumber = ('девяносто пять');
    break;
    case -96:
    secondNumber = ('девяносто шесть');
    break;
    case -97:
    secondNumber = ('девяносто семь');
    break;
    case -98:
    secondNumber = ('девяносто восемь');
    break;
    case -99:
    secondNumber = ('девяносто девять');
    break;
    case 0:
        secondNumber = (' ');
        break;
    }
    
    
    answerField.innerText = 'Вы загадали ' + 'минус ' + firstNumber + ' ' + secondNumber + '  ?';
}


let orderNumber = 1;
let gameRun = true;

orderNumberField.innerText = orderNumber;





document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } 
        
        else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            if (answerNumber > 19 && answerNumber < 100) {

                let firstNumber = (parseInt(answerNumber / 10));
                switch (firstNumber) {
                case 2:
                firstNumber = ('двадцать');
                break;
                case 3:
                firstNumber = ('тридцать');
                break;
                case 4:
                firstNumber = ('сорок');
                break;
                case 5:
                firstNumber = ('пятьдесят');
                break;
                case 6:
                firstNumber = ('шестьдесят');
                break;
                case 7:
                firstNumber = ('семьдесят');
                break;
                case 8:
                firstNumber = ('восемьдесят');
                break;
                case 9:
                firstNumber = ('девяносто');
                break;
                }
            
                let secondNumber = (answerNumber % 10);
            
                switch (secondNumber) {
                case 1:
                secondNumber = ('один');
                break;
                case 2:
                secondNumber = ('два');
                break;
                case 3:
                secondNumber = ('три');
                break;
                case 4:
                secondNumber = ('четыре');
                break;
                case 5:
                secondNumber = ('пять');
                break;
                case 6:
                secondNumber = ('шесть');
                break;
                case 7:
                secondNumber = ('семь');
                break;
                case 8:
                secondNumber = ('восемь');
                break;
                case 9:
                secondNumber = ('девять');
                break;
                case 0:
                secondNumber = ('');
                break;
         
                }

            const answerRandom = Math.round( Math.random()*3);
            let answerPhrase = (answerRandom === 3);
                switch (answerRandom) {
                case 0:
                 answerPhrase = 'Это ' + ' ' + firstNumber + ' ' + secondNumber + '?';
                 break;
                case 1:
                answerPhrase = 'Совсем просто! Это' + ' ' + firstNumber + ' ' + secondNumber + '?';
                break;
                case 2:
                answerPhrase = 'Не подсказывай!!' + ' ' + firstNumber + ' ' + secondNumber + '?';
                break;
                default:
                answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + firstNumber + ' ' + secondNumber + '?';
            
                }

        answerField.innerText = answerPhrase;

            }
        
        if (answerNumber > 9 && answerNumber < 20) {

            let firstNumber = (answerNumber % 10);
        
            switch (firstNumber) {
            case 1:
            firstNumber = ('одиннадцать');
            break;
            case 2:
            firstNumber = ('двенадцать');
            break;
            case 3:
            firstNumber = ('тринадцать');
            break;
            case 4:
            firstNumber = ('четырнадцать');
            break;
            case 5:
            firstNumber = ('пятнадцать');
            break;
            case 6:
            firstNumber = ('шестнадцать');
            break;
            case 7:
            firstNumber = ('семнадцать');
            break;
            case 8:
            firstNumber = ('восемнадцать');
            break;
            case 9:
            firstNumber = ('девятнадцать');
            break;
            case 0:
            firstNumber = ('десять');
            break;
            default:
                123;
                
          }



          const answerRandom = Math.round( Math.random()*3);
            let answerPhrase = (answerRandom === 3);
                switch (answerRandom) {
                case 0:
                 answerPhrase = 'Это ' + ' ' + firstNumber + ' ' + '?';
                 break;
                case 1:
                answerPhrase = 'Совсем просто! Это' + ' ' + firstNumber + ' ' + '?';
                break;
                case 2:
                answerPhrase = 'Не подсказывай!!' + ' ' + firstNumber + ' ' + '?';
                break;
                default:
                answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + firstNumber + ' ' + '?';
            
                }



        answerField.innerText = answerPhrase;
    }

    if (answerNumber > -1 && answerNumber < 10) {

        let firstNumber = (answerNumber * 1);
    
        switch (firstNumber) {
        case 1:
        firstNumber = ('один');
        break;
        case 2:
        firstNumber = ('два');
        break;
        case 3:
        firstNumber = ('три');
        break;
        case 4:
        firstNumber = ('четыре');
        break;
        case 5:
        firstNumber = ('пять');
        break;
        case 6:
        firstNumber = ('шесть');
        break;
        case 7:
        firstNumber = ('семь');
        break;
        case 8:
        firstNumber = ('восемь');
        break;
        case 9:
        firstNumber = ('девять');
        break;
        case 0:
        firstNumber = ('ноль');
        break;
      
            
      }

      const answerRandom = Math.round( Math.random()*3);
        let answerPhrase = (answerRandom === 3);
            switch (answerRandom) {
            case 0:
             answerPhrase = 'Это ' + ' ' + firstNumber + ' ' + '?';
             break;
            case 1:
            answerPhrase = 'Совсем просто! Это' + ' ' + firstNumber + ' ' + '?';
            break;
            case 2:
            answerPhrase = 'Не подсказывай!!' + ' ' + firstNumber + ' ' + '?';
            break;
            default:
            answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + firstNumber + ' ' + '?';
        
            }



    answerField.innerText = answerPhrase;
}


if (answerNumber > 100 && answerNumber < 1000) {

let firstNumber = (parseInt(answerNumber / 100));
    switch (firstNumber) {
    case 1:
    firstNumber = ('сто');
    case 2:
    firstNumber = ('двести');
    break;
    case 3:
    firstNumber = ('триста');
    break;
    case 4:
    firstNumber = ('четыреста');
    break;
    case 5:
    firstNumber = ('пятьсот');
    break;
    case 6:
    firstNumber = ('шестьсот');
    break;
    case 7:
    firstNumber = ('семьсот');
    break;
    case 8:
    firstNumber = ('восемьсот');
    break;
    case 9:
    firstNumber = ('девятьсот');
    break;
    }

    let secondNumber = (answerNumber % 100);

    switch (secondNumber) {
        case 1:
            secondNumber = ('один');
            break;
            case 2:
            secondNumber = ('два');
            break;
            case 3:
            secondNumber = ('три');
            break;
            case 4:
            secondNumber = ('четыре');
            break;
            case 5:
            secondNumber = ('пять');
            break;
            case 6:
            secondNumber = ('шесть');
            break;
            case 7:
            secondNumber = ('семь');
            break;
            case 8:
            secondNumber = ('восемь');
            break;
            case 9:
            secondNumber = ('девять');
            break;
            case 10:
            secondNumber = ('десять');
            break;
    case 11:
    secondNumber = ('одиннадцать');
    break;
    case 12:
    secondNumber = ('двенадцать');
    break;
    case 13:
    secondNumber = ('тринадцать');
    break;
    case 14:
    secondNumber = ('четырнадцать');
    break;
    case 15:
    secondNumber = ('пятнадцать');
    break;
    case 16:
    secondNumber = ('шестнадцать');
    break;
    case 17:
    secondNumber = ('всемнадцать');
    break;
    case 18:
    secondNumber = ('восемнадцать');
    break;
    case 19:
    secondNumber = ('девятнадцать');
    break;
    case 20:
    secondNumber = ('двадцать');
    break;
    case 21:
    secondNumber = ('двадцать один');
    break;
    case 22:
    secondNumber = ('двадцать два');
    break;
    case 23:
    secondNumber = ('двадцать три');
    break;
    case 24:
    secondNumber = ('двадцать четыре');
    break;
    case 25:
    secondNumber = ('двадцать пять');
    break;
    case 26:
    secondNumber = ('двадцать шесть');
    break;
    case 27:
    secondNumber = ('двадцать семь');
    break;
    case 28:
    secondNumber = ('двадцать восемь');
    break;
    case 29:
    secondNumber = ('двадцать девять');
    break;
    case 30:
    secondNumber = ('тридцать');
    break;
    case 31:
    secondNumber = ('тридцать один');
    break;
    case 32:
    secondNumber = ('тридцать два');
    break;
    case 33:
    secondNumber = ('тридцать три');
    break;
    case 34:
    secondNumber = ('тридцать четыре');
    break;
    case 35:
    secondNumber = ('тридцать пять');
    break;
    case 36:
    secondNumber = ('тридцать шесть');
    break;
    case 37:
    secondNumber = ('тридцать семь');
    break;
    case 38:
    secondNumber = ('тридцать восемь');
    break;
    case 39:
    secondNumber = ('тридцать девять');
    break;
    case 40:
    secondNumber = ('двадцать');
    break;
    case 41:
    secondNumber = ('сорок один');
    break;
    case 42:
    secondNumber = ('сорок два');
    break;
    case 43:
    secondNumber = ('сорок три');
    break;
    case 44:
    secondNumber = ('сорок четыре');
    break;
    case 45:
    secondNumber = ('сорок пять');
    break;
    case 46:
    secondNumber = ('сорок шесть');
    break;
    case 47:
    secondNumber = ('сорок семь');
    break;
    case 48:
    secondNumber = ('сорок восемь');
    break;
    case 49:
    secondNumber = ('сорок девять');
    break;
    case 50:
    secondNumber = ('пятьдесят');
    break;
    case 51:
    secondNumber = ('пятьдесят один');
    break;
    case 52:
    secondNumber = ('пятьдесят два');
    break;
    case 53:
    secondNumber = ('пятьдесят три');
    break;
    case 54:
    secondNumber = ('пятьдесят четыре');
    break;
    case 55:
    secondNumber = ('пятьдесят пять');
    break;
    case 56:
    secondNumber = ('пятьдесят шесть');
    break;
    case 57:
    secondNumber = ('пятьдесят семь');
    break;
    case 58:
    secondNumber = ('пятьдесят восемь');
    break;
    case 59:
    secondNumber = ('пятьдесят девять');
    break;
    case 60:
    secondNumber = ('шестьдесят');
    break;
    case 61:
    secondNumber = ('шестьдесят один');
    break;
    case 62:
    secondNumber = ('шестьдесят два');
    break;
    case 63:
    secondNumber = ('шестьдесят три');
    break;
    case 64:
    secondNumber = ('шестьдесят четыре');
    break;
    case 65:
    secondNumber = ('шестьдесят пять');
    break;
    case 66:
    secondNumber = ('шестьдесят шесть');
    break;
    case 67:
    secondNumber = ('шестьдесят семь');
    break;
    case 68:
    secondNumber = ('шестьдесят восемь');
    break;
    case 69:
    secondNumber = ('шестьдесят девять');
    break;
    case 70:
    secondNumber = ('семьдесят');
    break;
    case 71:
    secondNumber = ('семьдесят один');
    break;
    case 72:
    secondNumber = ('семьдесят два');
    break;
    case 73:
    secondNumber = ('семьдесят три');
    break;
    case 74:
    secondNumber = ('семьдесят четыре');
    break;
    case 75:
    secondNumber = ('семьдесят пять');
    break;
    case 76:
    secondNumber = ('семьдесят шесть');
    break;
    case 77:
    secondNumber = ('семьдесят семь');
    break;
    case 78:
    secondNumber = ('семьдесят восемь');
    break;
    case 79:
    secondNumber = ('семьдесят девять');
    break;
    case 80:
    secondNumber = ('восемьдесят');
    break;
    case 81:
    secondNumber = ('восемьдесят один');
    break;
    case 82:
    secondNumber = ('восемьдесят два');
    break;
    case 83:
    secondNumber = ('восемьдесят три');
    break;
    case 84:
    secondNumber = ('восемьдесят четыре');
    break;
    case 85:
    secondNumber = ('восемьдесят пять');
    break;
    case 86:
    secondNumber = ('восемьдесят шесть');
    break;
    case 87:
    secondNumber = ('восемьдесят семь');
    break;
    case 88:
    secondNumber = ('восемьдесят восемь');
    break;
    case 89:
    secondNumber = ('восемьдесят девять');
    break;
    case 90:
    secondNumber = ('девяносто');
    break;
    case 91:
    secondNumber = ('девяносто один');
    break;
    case 92:
    secondNumber = ('девяносто два');
    break;
    case 93:
    secondNumber = ('девяносто три');
    break;
    case 94:
    secondNumber = ('девяносто четыре');
    break;
    case 95:
    secondNumber = ('девяносто пять');
    break;
    case 96:
    secondNumber = ('девяносто шесть');
    break;
    case 97:
    secondNumber = ('девяносто семь');
    break;
    case 98:
    secondNumber = ('девяносто восемь');
    break;
    case 99:
    secondNumber = ('девяносто девять');
    break;
    case 0:
        secondNumber = (' ');
        break;


    }


const answerRandom = Math.round( Math.random()*3);
let answerPhrase = (answerRandom === 3);
    switch (answerRandom) {
    case 0:
     answerPhrase = 'Это ' + ' ' + firstNumber + ' ' + secondNumber + ' ?';
     break;
    case 1:
    answerPhrase = 'Совсем просто! Это' + ' ' + firstNumber + ' ' + secondNumber + ' ?';
    break;
    case 2:
    answerPhrase = 'Не подсказывай!!' + ' ' + firstNumber + ' ' + secondNumber + ' ?';
    break;
    default:
    answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + firstNumber + ' ' + secondNumber + ' ?';

    }

answerField.innerText = answerPhrase;

}


if (answerNumber < -19 && answerNumber > -100) {

    let firstNumber = (parseInt(answerNumber / 10));
    switch (firstNumber) {
    case -2:
    firstNumber = ('двадцать');
    break;
    case -3:
    firstNumber = ('тридцать');
    break;
    case -4:
    firstNumber = ('сорок');
    break;
    case -5:
    firstNumber = ('пятьдесят');
    break;
    case -6:
    firstNumber = ('шестьдесят');
    break;
    case -7:
    firstNumber = ('семьдесят');
    break;
    case -8:
    firstNumber = ('восемьдесят');
    break;
    case -9:
    firstNumber = ('девяносто');
    break;
    }

    let secondNumber = (answerNumber % 10);

    switch (secondNumber) {
    case -1:
    secondNumber = ('один');
    break;
    case -2:
    secondNumber = ('два');
    break;
    case -3:
    secondNumber = ('три');
    break;
    case -4:
    secondNumber = ('четыре');
    break;
    case -5:
    secondNumber = ('пять');
    break;
    case -6:
    secondNumber = ('шесть');
    break;
    case -7:
    secondNumber = ('семь');
    break;
    case -8:
    secondNumber = ('восемь');
    break;
    case -9:
    secondNumber = ('девять');
    break;
    case 0:
    secondNumber = ('');
    break;

    }

const answerRandom = Math.round( Math.random()*3);
let answerPhrase = (answerRandom === 3);
    switch (answerRandom) {
    case 0:
     answerPhrase = 'Это ' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + '?';
     break;
    case 1:
    answerPhrase = 'Совсем просто! Это' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + '?';
    break;
    case 2:
    answerPhrase = 'Не подсказывай!!' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + '?';
    break;
    default:
    answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + ' ' + 'минус' + firstNumber + ' ' + secondNumber + '?';

    }

answerField.innerText = answerPhrase;

}

if (answerNumber < -9 && answerNumber > -20) {

let firstNumber = (answerNumber % 10);

switch (firstNumber) {
case -1:
firstNumber = ('одиннадцать');
break;
case -2:
firstNumber = ('двенадцать');
break;
case -3:
firstNumber = ('тринадцать');
break;
case -4:
firstNumber = ('четырнадцать');
break;
case -5:
firstNumber = ('пятнадцать');
break;
case -6:
firstNumber = ('шестнадцать');
break;
case -7:
firstNumber = ('семнадцать');
break;
case -8:
firstNumber = ('восемнадцать');
break;
case -9:
firstNumber = ('девятнадцать');
break;
case 0:
firstNumber = ('десять');
break;
    
}

const answerRandom = Math.round( Math.random()*3);
let answerPhrase = (answerRandom === 3);
    switch (answerRandom) {
    case 0:
     answerPhrase = 'Это ' + ' ' + 'минус' + ' ' + firstNumber + ' ' + '?';
     break;
    case 1:
    answerPhrase = 'Совсем просто! Это' + ' ' + 'минус' + ' ' + firstNumber + ' ' + '?';
    break;
    case 2:
    answerPhrase = 'Не подсказывай!!' + ' ' + 'минус' + ' ' + firstNumber + ' ' + '?';
    break;
    default:
    answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + ' ' + 'минус' + firstNumber + ' ' + '?';

    }



answerField.innerText = answerPhrase;
}

if (answerNumber < -1 && answerNumber > -9) {

let firstNumber = (answerNumber * 1);

switch (firstNumber) {
case -1:
firstNumber = ('один');
break;
case -2:
firstNumber = ('два');
break;
case -3:
firstNumber = ('три');
break;
case -4:
firstNumber = ('четыре');
break;
case -5:
firstNumber = ('пять');
break;
case -6:
firstNumber = ('шесть');
break;
case -7:
firstNumber = ('семь');
break;
case -8:
firstNumber = ('восемь');
break;
case -9:
firstNumber = ('девять');
break;
case 0:
firstNumber = ('ноль');
break;


}

const answerRandom = Math.round( Math.random()*3);
let answerPhrase = (answerRandom === 3);
switch (answerRandom) {
case 0:
 answerPhrase = 'Это ' + ' ' + 'минус' + ' ' + firstNumber + ' ' + '?';
 break;
case 1:
answerPhrase = 'Совсем просто! Это' + ' ' + 'минус' + ' ' + firstNumber + ' ' + '?';
break;
case 2:
answerPhrase = 'Не подсказывай!!' + ' ' + 'минус' + ' ' + firstNumber + ' ' + '?';
break;
default:
answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + ' ' + 'минус' + firstNumber + ' ' + '?';

}



answerField.innerText = answerPhrase;
}

if (answerNumber < -100 && answerNumber > -1000) {

    let firstNumber = (parseInt(answerNumber / 100));
    switch (firstNumber) {
    case -1:
    firstNumber = ('сто');
    case -2:
    firstNumber = ('двести');
    break;
    case -3:
    firstNumber = ('триста');
    break;
    case -4:
    firstNumber = ('четыреста');
    break;
    case -5:
    firstNumber = ('пятьсот');
    break;
    case -6:
    firstNumber = ('шестьсот');
    break;
    case -7:
    firstNumber = ('семьсот');
    break;
    case -8:
    firstNumber = ('восемьсот');
    break;
    case -9:
    firstNumber = ('девятьсот');
    break;
    }

    let secondNumber = (answerNumber % 100);

    switch (secondNumber) {
        case -1:
            secondNumber = ('один');
            break;
            case -2:
            secondNumber = ('два');
            break;
            case -3:
            secondNumber = ('три');
            break;
            case -4:
            secondNumber = ('четыре');
            break;
            case -5:
            secondNumber = ('пять');
            break;
            case -6:
            secondNumber = ('шесть');
            break;
            case -7:
            secondNumber = ('семь');
            break;
            case -8:
            secondNumber = ('восемь');
            break;
            case -9:
            secondNumber = ('девять');
            break;
            case -10:
            secondNumber = ('десять');
            break;
    case -11:
    secondNumber = ('одиннадцать');
    break;
    case -12:
    secondNumber = ('двенадцать');
    break;
    case -13:
    secondNumber = ('тринадцать');
    break;
    case -14:
    secondNumber = ('четырнадцать');
    break;
    case -15:
    secondNumber = ('пятнадцать');
    break;
    case -16:
    secondNumber = ('шестнадцать');
    break;
    case -17:
    secondNumber = ('всемнадцать');
    break;
    case -18:
    secondNumber = ('восемнадцать');
    break;
    case -19:
    secondNumber = ('девятнадцать');
    break;
    case -20:
    secondNumber = ('двадцать');
    break;
    case -21:
    secondNumber = ('двадцать один');
    break;
    case -22:
    secondNumber = ('двадцать два');
    break;
    case -23:
    secondNumber = ('двадцать три');
    break;
    case -24:
    secondNumber = ('двадцать четыре');
    break;
    case -25:
    secondNumber = ('двадцать пять');
    break;
    case -26:
    secondNumber = ('двадцать шесть');
    break;
    case -27:
    secondNumber = ('двадцать семь');
    break;
    case -28:
    secondNumber = ('двадцать восемь');
    break;
    case -29:
    secondNumber = ('двадцать девять');
    break;
    case -30:
    secondNumber = ('тридцать');
    break;
    case -31:
    secondNumber = ('тридцать один');
    break;
    case -32:
    secondNumber = ('тридцать два');
    break;
    case -33:
    secondNumber = ('тридцать три');
    break;
    case -34:
    secondNumber = ('тридцать четыре');
    break;
    case -35:
    secondNumber = ('тридцать пять');
    break;
    case -36:
    secondNumber = ('тридцать шесть');
    break;
    case -37:
    secondNumber = ('тридцать семь');
    break;
    case -38:
    secondNumber = ('тридцать восемь');
    break;
    case -39:
    secondNumber = ('тридцать девять');
    break;
    case -40:
    secondNumber = ('двадцать');
    break;
    case -41:
    secondNumber = ('сорок один');
    break;
    case -42:
    secondNumber = ('сорок два');
    break;
    case -43:
    secondNumber = ('сорок три');
    break;
    case -44:
    secondNumber = ('сорок четыре');
    break;
    case -45:
    secondNumber = ('сорок пять');
    break;
    case -46:
    secondNumber = ('сорок шесть');
    break;
    case -47:
    secondNumber = ('сорок семь');
    break;
    case -48:
    secondNumber = ('сорок восемь');
    break;
    case -49:
    secondNumber = ('сорок девять');
    break;
    case -50:
    secondNumber = ('пятьдесят');
    break;
    case -51:
    secondNumber = ('пятьдесят один');
    break;
    case -52:
    secondNumber = ('пятьдесят два');
    break;
    case -53:
    secondNumber = ('пятьдесят три');
    break;
    case -54:
    secondNumber = ('пятьдесят четыре');
    break;
    case -55:
    secondNumber = ('пятьдесят пять');
    break;
    case -56:
    secondNumber = ('пятьдесят шесть');
    break;
    case -57:
    secondNumber = ('пятьдесят семь');
    break;
    case -58:
    secondNumber = ('пятьдесят восемь');
    break;
    case -59:
    secondNumber = ('пятьдесят девять');
    break;
    case -60:
    secondNumber = ('шестьдесят');
    break;
    case -61:
    secondNumber = ('шестьдесят один');
    break;
    case -62:
    secondNumber = ('шестьдесят два');
    break;
    case -63:
    secondNumber = ('шестьдесят три');
    break;
    case -64:
    secondNumber = ('шестьдесят четыре');
    break;
    case -65:
    secondNumber = ('шестьдесят пять');
    break;
    case -66:
    secondNumber = ('шестьдесят шесть');
    break;
    case -67:
    secondNumber = ('шестьдесят семь');
    break;
    case -68:
    secondNumber = ('шестьдесят восемь');
    break;
    case -69:
    secondNumber = ('шестьдесят девять');
    break;
    case -70:
    secondNumber = ('семьдесят');
    break;
    case -71:
    secondNumber = ('семьдесят один');
    break;
    case -72:
    secondNumber = ('семьдесят два');
    break;
    case -73:
    secondNumber = ('семьдесят три');
    break;
    case -74:
    secondNumber = ('семьдесят четыре');
    break;
    case -75:
    secondNumber = ('семьдесят пять');
    break;
    case -76:
    secondNumber = ('семьдесят шесть');
    break;
    case -77:
    secondNumber = ('семьдесят семь');
    break;
    case -78:
    secondNumber = ('семьдесят восемь');
    break;
    case -79:
    secondNumber = ('семьдесят девять');
    break;
    case -80:
    secondNumber = ('восемьдесят');
    break;
    case -81:
    secondNumber = ('восемьдесят один');
    break;
    case -82:
    secondNumber = ('восемьдесят два');
    break;
    case -83:
    secondNumber = ('восемьдесят три');
    break;
    case -84:
    secondNumber = ('восемьдесят четыре');
    break;
    case -85:
    secondNumber = ('восемьдесят пять');
    break;
    case -86:
    secondNumber = ('восемьдесят шесть');
    break;
    case -87:
    secondNumber = ('восемьдесят семь');
    break;
    case -88:
    secondNumber = ('восемьдесят восемь');
    break;
    case -89:
    secondNumber = ('восемьдесят девять');
    break;
    case -90:
    secondNumber = ('девяносто');
    break;
    case -91:
    secondNumber = ('девяносто один');
    break;
    case -92:
    secondNumber = ('девяносто два');
    break;
    case -93:
    secondNumber = ('девяносто три');
    break;
    case -94:
    secondNumber = ('девяносто четыре');
    break;
    case -95:
    secondNumber = ('девяносто пять');
    break;
    case -96:
    secondNumber = ('девяносто шесть');
    break;
    case -97:
    secondNumber = ('девяносто семь');
    break;
    case -98:
    secondNumber = ('девяносто восемь');
    break;
    case -99:
    secondNumber = ('девяносто девять');
    break;
    case 0:
        secondNumber = (' ');
        break;
    }




const answerRandom = Math.round( Math.random()*3);
let answerPhrase = (answerRandom === 3);
switch (answerRandom) {
case 0:
answerPhrase = 'Это ' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + ' ?';
break;
case 1:
answerPhrase = 'Совсем просто! Это' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + ' ?';
break;
case 2:
answerPhrase = 'Не подсказывай!!' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + ' ?';
break;
default:
answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + ' ?';

}

answerField.innerText = answerPhrase;

}



}}})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue) {
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } 
        
        else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            if (answerNumber > 19 && answerNumber < 100) {

                let firstNumber = (parseInt(answerNumber / 10));
                switch (firstNumber) {
                case 2:
                firstNumber = ('двадцать');
                break;
                case 3:
                firstNumber = ('тридцать');
                break;
                case 4:
                firstNumber = ('сорок');
                break;
                case 5:
                firstNumber = ('пятьдесят');
                break;
                case 6:
                firstNumber = ('шестьдесят');
                break;
                case 7:
                firstNumber = ('семьдесят');
                break;
                case 8:
                firstNumber = ('восемьдесят');
                break;
                case 9:
                firstNumber = ('девяносто');
                break;
                }
            
                let secondNumber = (answerNumber % 10);
            
                switch (secondNumber) {
                case 1:
                secondNumber = ('один');
                break;
                case 2:
                secondNumber = ('два');
                break;
                case 3:
                secondNumber = ('три');
                break;
                case 4:
                secondNumber = ('четыре');
                break;
                case 5:
                secondNumber = ('пять');
                break;
                case 6:
                secondNumber = ('шесть');
                break;
                case 7:
                secondNumber = ('семь');
                break;
                case 8:
                secondNumber = ('восемь');
                break;
                case 9:
                secondNumber = ('девять');
                break;
                case 0:
                secondNumber = ('');
                break;
         
                }

            const answerRandom = Math.round( Math.random()*3);
            let answerPhrase = (answerRandom === 3);
                switch (answerRandom) {
                case 0:
                    answerPhrase = 'Это ' + ' ' + firstNumber + ' ' + secondNumber + '?';
                    break;
                   case 1:
                   answerPhrase = 'Совсем просто! Это' + ' ' + firstNumber + ' ' + secondNumber + '?';
                   break;
                   case 2:
                   answerPhrase = 'Не подсказывай!!' + ' ' + firstNumber + ' ' + secondNumber + '?';
                   break;
                   default:
                   answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + firstNumber + ' ' + secondNumber + '?';
               
                   }

        answerField.innerText = answerPhrase;
        }

        if (answerNumber > 9 && answerNumber < 20) {

            let firstNumber = (answerNumber % 10);
        
            switch (firstNumber) {
            case 1:
            firstNumber = ('одиннадцать');
            break;
            case 2:
            firstNumber = ('двенадцать');
            break;
            case 3:
            firstNumber = ('тринадцать');
            break;
            case 4:
            firstNumber = ('четырнадцать');
            break;
            case 5:
            firstNumber = ('пятнадцать');
            break;
            case 6:
            firstNumber = ('шестнадцать');
            break;
            case 7:
            firstNumber = ('семнадцать');
            break;
            case 8:
            firstNumber = ('восемнадцать');
            break;
            case 9:
            firstNumber = ('девятнадцать');
            break;
            case 0:
            firstNumber = ('десять');
            break;
            default:
                123;
                
          }

          const answerRandom = Math.round( Math.random()*3);
            let answerPhrase = (answerRandom === 3);
                switch (answerRandom) {
                case 0:
                 answerPhrase = 'Это ' + ' ' + firstNumber + ' ' + '?';
                 break;
                case 1:
                answerPhrase = 'Совсем просто! Это' + ' ' + firstNumber + ' ' + '?';
                break;
                case 2:
                answerPhrase = 'Не подсказывай!!' + ' ' + firstNumber + ' ' + '?';
                break;
                default:
                answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + firstNumber + ' ' + '?';
            
                }



        answerField.innerText = answerPhrase;
    }

        if (answerNumber > -1 && answerNumber < 10) {

            let firstNumber = (answerNumber * 1);
        
            switch (firstNumber) {
            case 1:
            firstNumber = ('один');
            break;
            case 2:
            firstNumber = ('два');
            break;
            case 3:
            firstNumber = ('три');
            break;
            case 4:
            firstNumber = ('четыре');
            break;
            case 5:
            firstNumber = ('пять');
            break;
            case 6:
            firstNumber = ('шесть');
            break;
            case 7:
            firstNumber = ('семь');
            break;
            case 8:
            firstNumber = ('восемь');
            break;
            case 9:
            firstNumber = ('девять');
            break;
            case 0:
            firstNumber = ('ноль');
            break;
          
                
          }

          const answerRandom = Math.round( Math.random()*3);
            let answerPhrase = (answerRandom === 3);
                switch (answerRandom) {
                case 0:
                 answerPhrase = 'Это ' + ' ' + firstNumber + ' ' + '?';
                 break;
                case 1:
                answerPhrase = 'Совсем просто! Это' + ' ' + firstNumber + ' ' + '?';
                break;
                case 2:
                answerPhrase = 'Не подсказывай!!' + ' ' + firstNumber + ' ' + '?';
                break;
                default:
                answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + firstNumber + ' ' + '?';
            
                }



        answerField.innerText = answerPhrase;
    }


    if (answerNumber > 100 && answerNumber < 1000) {

        let firstNumber = (parseInt(answerNumber / 100));
            switch (firstNumber) {
            case 1:
            firstNumber = ('сто');
            case 2:
            firstNumber = ('двести');
            break;
            case 3:
            firstNumber = ('триста');
            break;
            case 4:
            firstNumber = ('четыреста');
            break;
            case 5:
            firstNumber = ('пятьсот');
            break;
            case 6:
            firstNumber = ('шестьсот');
            break;
            case 7:
            firstNumber = ('семьсот');
            break;
            case 8:
            firstNumber = ('восемьсот');
            break;
            case 9:
            firstNumber = ('девятьсот');
            break;
            }
        
            let secondNumber = (answerNumber % 100);
        
            switch (secondNumber) {
                case 1:
    secondNumber = ('один');
    break;
    case 2:
    secondNumber = ('два');
    break;
    case 3:
    secondNumber = ('три');
    break;
    case 4:
    secondNumber = ('четыре');
    break;
    case 5:
    secondNumber = ('пять');
    break;
    case 6:
    secondNumber = ('шесть');
    break;
    case 7:
    secondNumber = ('семь');
    break;
    case 8:
    secondNumber = ('восемь');
    break;
    case 9:
    secondNumber = ('девять');
    break;
    case 10:
    secondNumber = ('десять');
    break;
            case 11:
            secondNumber = ('одиннадцать');
            break;
            case 12:
            secondNumber = ('двенадцать');
            break;
            case 13:
            secondNumber = ('тринадцать');
            break;
            case 14:
            secondNumber = ('четырнадцать');
            break;
            case 15:
            secondNumber = ('пятнадцать');
            break;
            case 16:
            secondNumber = ('шестнадцать');
            break;
            case 17:
            secondNumber = ('всемнадцать');
            break;
            case 18:
            secondNumber = ('восемнадцать');
            break;
            case 19:
            secondNumber = ('девятнадцать');
            break;
            case 20:
            secondNumber = ('двадцать');
            break;
            case 21:
            secondNumber = ('двадцать один');
            break;
            case 22:
            secondNumber = ('двадцать два');
            break;
            case 23:
            secondNumber = ('двадцать три');
            break;
            case 24:
            secondNumber = ('двадцать четыре');
            break;
            case 25:
            secondNumber = ('двадцать пять');
            break;
            case 26:
            secondNumber = ('двадцать шесть');
            break;
            case 27:
            secondNumber = ('двадцать семь');
            break;
            case 28:
            secondNumber = ('двадцать восемь');
            break;
            case 29:
            secondNumber = ('двадцать девять');
            break;
            case 30:
            secondNumber = ('тридцать');
            break;
            case 31:
            secondNumber = ('тридцать один');
            break;
            case 32:
            secondNumber = ('тридцать два');
            break;
            case 33:
            secondNumber = ('тридцать три');
            break;
            case 34:
            secondNumber = ('тридцать четыре');
            break;
            case 35:
            secondNumber = ('тридцать пять');
            break;
            case 36:
            secondNumber = ('тридцать шесть');
            break;
            case 37:
            secondNumber = ('тридцать семь');
            break;
            case 38:
            secondNumber = ('тридцать восемь');
            break;
            case 39:
            secondNumber = ('тридцать девять');
            break;
            case 40:
            secondNumber = ('двадцать');
            break;
            case 41:
            secondNumber = ('сорок один');
            break;
            case 42:
            secondNumber = ('сорок два');
            break;
            case 43:
            secondNumber = ('сорок три');
            break;
            case 44:
            secondNumber = ('сорок четыре');
            break;
            case 45:
            secondNumber = ('сорок пять');
            break;
            case 46:
            secondNumber = ('сорок шесть');
            break;
            case 47:
            secondNumber = ('сорок семь');
            break;
            case 48:
            secondNumber = ('сорок восемь');
            break;
            case 49:
            secondNumber = ('сорок девять');
            break;
            case 50:
            secondNumber = ('пятьдесят');
            break;
            case 51:
            secondNumber = ('пятьдесят один');
            break;
            case 52:
            secondNumber = ('пятьдесят два');
            break;
            case 53:
            secondNumber = ('пятьдесят три');
            break;
            case 54:
            secondNumber = ('пятьдесят четыре');
            break;
            case 55:
            secondNumber = ('пятьдесят пять');
            break;
            case 56:
            secondNumber = ('пятьдесят шесть');
            break;
            case 57:
            secondNumber = ('пятьдесят семь');
            break;
            case 58:
            secondNumber = ('пятьдесят восемь');
            break;
            case 59:
            secondNumber = ('пятьдесят девять');
            break;
            case 60:
            secondNumber = ('шестьдесят');
            break;
            case 61:
            secondNumber = ('шестьдесят один');
            break;
            case 62:
            secondNumber = ('шестьдесят два');
            break;
            case 63:
            secondNumber = ('шестьдесят три');
            break;
            case 64:
            secondNumber = ('шестьдесят четыре');
            break;
            case 65:
            secondNumber = ('шестьдесят пять');
            break;
            case 66:
            secondNumber = ('шестьдесят шесть');
            break;
            case 67:
            secondNumber = ('шестьдесят семь');
            break;
            case 68:
            secondNumber = ('шестьдесят восемь');
            break;
            case 69:
            secondNumber = ('шестьдесят девять');
            break;
            case 70:
            secondNumber = ('семьдесят');
            break;
            case 71:
            secondNumber = ('семьдесят один');
            break;
            case 72:
            secondNumber = ('семьдесят два');
            break;
            case 73:
            secondNumber = ('семьдесят три');
            break;
            case 74:
            secondNumber = ('семьдесят четыре');
            break;
            case 75:
            secondNumber = ('семьдесят пять');
            break;
            case 76:
            secondNumber = ('семьдесят шесть');
            break;
            case 77:
            secondNumber = ('семьдесят семь');
            break;
            case 78:
            secondNumber = ('семьдесят восемь');
            break;
            case 79:
            secondNumber = ('семьдесят девять');
            break;
            case 80:
            secondNumber = ('восемьдесят');
            break;
            case 81:
            secondNumber = ('восемьдесят один');
            break;
            case 82:
            secondNumber = ('восемьдесят два');
            break;
            case 83:
            secondNumber = ('восемьдесят три');
            break;
            case 84:
            secondNumber = ('восемьдесят четыре');
            break;
            case 85:
            secondNumber = ('восемьдесят пять');
            break;
            case 86:
            secondNumber = ('восемьдесят шесть');
            break;
            case 87:
            secondNumber = ('восемьдесят семь');
            break;
            case 88:
            secondNumber = ('восемьдесят восемь');
            break;
            case 89:
            secondNumber = ('восемьдесят девять');
            break;
            case 90:
            secondNumber = ('девяносто');
            break;
            case 91:
            secondNumber = ('девяносто один');
            break;
            case 92:
            secondNumber = ('девяносто два');
            break;
            case 93:
            secondNumber = ('девяносто три');
            break;
            case 94:
            secondNumber = ('девяносто четыре');
            break;
            case 95:
            secondNumber = ('девяносто пять');
            break;
            case 96:
            secondNumber = ('девяносто шесть');
            break;
            case 97:
            secondNumber = ('девяносто семь');
            break;
            case 98:
            secondNumber = ('девяносто восемь');
            break;
            case 99:
            secondNumber = ('девяносто девять');
            break;
            case 0:
            secondNumber = (' ');
                break;
        
        
            }
    
    
    
    
    const answerRandom = Math.round( Math.random()*3);
    let answerPhrase = (answerRandom === 3);
        switch (answerRandom) {
        case 0:
         answerPhrase = 'Это ' + ' ' + firstNumber + ' ' + secondNumber + ' ?';
         break;
        case 1:
        answerPhrase = 'Совсем просто! Это' + ' ' + firstNumber + ' ' + secondNumber + ' ?';
        break;
        case 2:
        answerPhrase = 'Не подсказывай!!' + ' ' + firstNumber + ' ' + secondNumber + ' ?';
        break;
        default:
        answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + firstNumber + ' ' + secondNumber + ' ?';
    
        }
    
    answerField.innerText = answerPhrase;
    
    }  

    if (answerNumber < -19 && answerNumber > -100) {

        let firstNumber = (parseInt(answerNumber / 10));
        switch (firstNumber) {
        case -2:
        firstNumber = ('двадцать');
        break;
        case -3:
        firstNumber = ('тридцать');
        break;
        case -4:
        firstNumber = ('сорок');
        break;
        case -5:
        firstNumber = ('пятьдесят');
        break;
        case -6:
        firstNumber = ('шестьдесят');
        break;
        case -7:
        firstNumber = ('семьдесят');
        break;
        case -8:
        firstNumber = ('восемьдесят');
        break;
        case -9:
        firstNumber = ('девяносто');
        break;
        }
    
        let secondNumber = (answerNumber % 10);
    
        switch (secondNumber) {
        case -1:
        secondNumber = ('один');
        break;
        case -2:
        secondNumber = ('два');
        break;
        case -3:
        secondNumber = ('три');
        break;
        case -4:
        secondNumber = ('четыре');
        break;
        case -5:
        secondNumber = ('пять');
        break;
        case -6:
        secondNumber = ('шесть');
        break;
        case -7:
        secondNumber = ('семь');
        break;
        case -8:
        secondNumber = ('восемь');
        break;
        case -9:
        secondNumber = ('девять');
        break;
        case 0:
        secondNumber = ('');
        break;
    
        }
    
    const answerRandom = Math.round( Math.random()*3);
    let answerPhrase = (answerRandom === 3);
        switch (answerRandom) {
        case 0:
         answerPhrase = 'Это ' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + '?';
         break;
        case 1:
        answerPhrase = 'Совсем просто! Это' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + '?';
        break;
        case 2:
        answerPhrase = 'Не подсказывай!!' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + '?';
        break;
        default:
        answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + ' ' + 'минус' + firstNumber + ' ' + secondNumber + '?';
    
        }
    
    answerField.innerText = answerPhrase;
    
    }
    
    if (answerNumber < -9 && answerNumber > -20) {
    
    let firstNumber = (answerNumber % 10);
    
    switch (firstNumber) {
    case -1:
    firstNumber = ('одиннадцать');
    break;
    case -2:
    firstNumber = ('двенадцать');
    break;
    case -3:
    firstNumber = ('тринадцать');
    break;
    case -4:
    firstNumber = ('четырнадцать');
    break;
    case -5:
    firstNumber = ('пятнадцать');
    break;
    case -6:
    firstNumber = ('шестнадцать');
    break;
    case -7:
    firstNumber = ('семнадцать');
    break;
    case -8:
    firstNumber = ('восемнадцать');
    break;
    case -9:
    firstNumber = ('девятнадцать');
    break;
    case 0:
    firstNumber = ('десять');
    break;
        
    }
    
    const answerRandom = Math.round( Math.random()*3);
    let answerPhrase = (answerRandom === 3);
        switch (answerRandom) {
        case 0:
         answerPhrase = 'Это ' + ' ' + 'минус' + ' ' + firstNumber + ' ' + '?';
         break;
        case 1:
        answerPhrase = 'Совсем просто! Это' + ' ' + 'минус' + ' ' + firstNumber + ' ' + '?';
        break;
        case 2:
        answerPhrase = 'Не подсказывай!!' + ' ' + 'минус' + ' ' + firstNumber + ' ' + '?';
        break;
        default:
        answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + ' ' + 'минус' + firstNumber + ' ' + '?';
    
        }
    
    
    
    answerField.innerText = answerPhrase;
    }
    
    if (answerNumber < -1 && answerNumber > -9) {
    
    let firstNumber = (answerNumber * 1);
    
    switch (firstNumber) {
    case -1:
    firstNumber = ('один');
    break;
    case -2:
    firstNumber = ('два');
    break;
    case -3:
    firstNumber = ('три');
    break;
    case -4:
    firstNumber = ('четыре');
    break;
    case -5:
    firstNumber = ('пять');
    break;
    case -6:
    firstNumber = ('шесть');
    break;
    case -7:
    firstNumber = ('семь');
    break;
    case -8:
    firstNumber = ('восемь');
    break;
    case -9:
    firstNumber = ('девять');
    break;
    case 0:
    firstNumber = ('ноль');
    break;
    
    
    }
    
    const answerRandom = Math.round( Math.random()*3);
    let answerPhrase = (answerRandom === 3);
    switch (answerRandom) {
    case 0:
     answerPhrase = 'Это ' + ' ' + 'минус' + ' ' + firstNumber + ' ' + '?';
     break;
    case 1:
    answerPhrase = 'Совсем просто! Это' + ' ' + 'минус' + ' ' + firstNumber + ' ' + '?';
    break;
    case 2:
    answerPhrase = 'Не подсказывай!!' + ' ' + 'минус' + ' ' + firstNumber + ' ' + '?';
    break;
    default:
    answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + ' ' + 'минус' + firstNumber + ' ' + '?';
    
    }
    
    
    
    answerField.innerText = answerPhrase;
    }
    
    if (answerNumber < -100 && answerNumber > -1000) {

        let firstNumber = (parseInt(answerNumber / 100));
        switch (firstNumber) {
        case -1:
        firstNumber = ('сто');
        case -2:
        firstNumber = ('двести');
        break;
        case -3:
        firstNumber = ('триста');
        break;
        case -4:
        firstNumber = ('четыреста');
        break;
        case -5:
        firstNumber = ('пятьсот');
        break;
        case -6:
        firstNumber = ('шестьсот');
        break;
        case -7:
        firstNumber = ('семьсот');
        break;
        case -8:
        firstNumber = ('восемьсот');
        break;
        case -9:
        firstNumber = ('девятьсот');
        break;
        }
    
        let secondNumber = (answerNumber % 100);
    
        switch (secondNumber) {
            case -1:
    secondNumber = ('один');
    break;
    case -2:
    secondNumber = ('два');
    break;
    case -3:
    secondNumber = ('три');
    break;
    case -4:
    secondNumber = ('четыре');
    break;
    case -5:
    secondNumber = ('пять');
    break;
    case -6:
    secondNumber = ('шесть');
    break;
    case -7:
    secondNumber = ('семь');
    break;
    case -8:
    secondNumber = ('восемь');
    break;
    case -9:
    secondNumber = ('девять');
    break;
        case -10:
        secondNumber = ('десять');
        break;
        case -11:
        secondNumber = ('одиннадцать');
        break;
        case -12:
        secondNumber = ('двенадцать');
        break;
        case -13:
        secondNumber = ('тринадцать');
        break;
        case -14:
        secondNumber = ('четырнадцать');
        break;
        case -15:
        secondNumber = ('пятнадцать');
        break;
        case -16:
        secondNumber = ('шестнадцать');
        break;
        case -17:
        secondNumber = ('всемнадцать');
        break;
        case -18:
        secondNumber = ('восемнадцать');
        break;
        case -19:
        secondNumber = ('девятнадцать');
        break;
        case -20:
        secondNumber = ('двадцать');
        break;
        case -21:
        secondNumber = ('двадцать один');
        break;
        case -22:
        secondNumber = ('двадцать два');
        break;
        case -23:
        secondNumber = ('двадцать три');
        break;
        case -24:
        secondNumber = ('двадцать четыре');
        break;
        case -25:
        secondNumber = ('двадцать пять');
        break;
        case -26:
        secondNumber = ('двадцать шесть');
        break;
        case -27:
        secondNumber = ('двадцать семь');
        break;
        case -28:
        secondNumber = ('двадцать восемь');
        break;
        case -29:
        secondNumber = ('двадцать девять');
        break;
        case -30:
        secondNumber = ('тридцать');
        break;
        case -31:
        secondNumber = ('тридцать один');
        break;
        case -32:
        secondNumber = ('тридцать два');
        break;
        case -33:
        secondNumber = ('тридцать три');
        break;
        case -34:
        secondNumber = ('тридцать четыре');
        break;
        case -35:
        secondNumber = ('тридцать пять');
        break;
        case -36:
        secondNumber = ('тридцать шесть');
        break;
        case -37:
        secondNumber = ('тридцать семь');
        break;
        case -38:
        secondNumber = ('тридцать восемь');
        break;
        case -39:
        secondNumber = ('тридцать девять');
        break;
        case -40:
        secondNumber = ('двадцать');
        break;
        case -41:
        secondNumber = ('сорок один');
        break;
        case -42:
        secondNumber = ('сорок два');
        break;
        case -43:
        secondNumber = ('сорок три');
        break;
        case -44:
        secondNumber = ('сорок четыре');
        break;
        case -45:
        secondNumber = ('сорок пять');
        break;
        case -46:
        secondNumber = ('сорок шесть');
        break;
        case -47:
        secondNumber = ('сорок семь');
        break;
        case -48:
        secondNumber = ('сорок восемь');
        break;
        case -49:
        secondNumber = ('сорок девять');
        break;
        case -50:
        secondNumber = ('пятьдесят');
        break;
        case -51:
        secondNumber = ('пятьдесят один');
        break;
        case -52:
        secondNumber = ('пятьдесят два');
        break;
        case -53:
        secondNumber = ('пятьдесят три');
        break;
        case -54:
        secondNumber = ('пятьдесят четыре');
        break;
        case -55:
        secondNumber = ('пятьдесят пять');
        break;
        case -56:
        secondNumber = ('пятьдесят шесть');
        break;
        case -57:
        secondNumber = ('пятьдесят семь');
        break;
        case -58:
        secondNumber = ('пятьдесят восемь');
        break;
        case -59:
        secondNumber = ('пятьдесят девять');
        break;
        case -60:
        secondNumber = ('шестьдесят');
        break;
        case -61:
        secondNumber = ('шестьдесят один');
        break;
        case -62:
        secondNumber = ('шестьдесят два');
        break;
        case -63:
        secondNumber = ('шестьдесят три');
        break;
        case -64:
        secondNumber = ('шестьдесят четыре');
        break;
        case -65:
        secondNumber = ('шестьдесят пять');
        break;
        case -66:
        secondNumber = ('шестьдесят шесть');
        break;
        case -67:
        secondNumber = ('шестьдесят семь');
        break;
        case -68:
        secondNumber = ('шестьдесят восемь');
        break;
        case -69:
        secondNumber = ('шестьдесят девять');
        break;
        case -70:
        secondNumber = ('семьдесят');
        break;
        case -71:
        secondNumber = ('семьдесят один');
        break;
        case -72:
        secondNumber = ('семьдесят два');
        break;
        case -73:
        secondNumber = ('семьдесят три');
        break;
        case -74:
        secondNumber = ('семьдесят четыре');
        break;
        case -75:
        secondNumber = ('семьдесят пять');
        break;
        case -76:
        secondNumber = ('семьдесят шесть');
        break;
        case -77:
        secondNumber = ('семьдесят семь');
        break;
        case -78:
        secondNumber = ('семьдесят восемь');
        break;
        case -79:
        secondNumber = ('семьдесят девять');
        break;
        case -80:
        secondNumber = ('восемьдесят');
        break;
        case -81:
        secondNumber = ('восемьдесят один');
        break;
        case -82:
        secondNumber = ('восемьдесят два');
        break;
        case -83:
        secondNumber = ('восемьдесят три');
        break;
        case -84:
        secondNumber = ('восемьдесят четыре');
        break;
        case -85:
        secondNumber = ('восемьдесят пять');
        break;
        case -86:
        secondNumber = ('восемьдесят шесть');
        break;
        case -87:
        secondNumber = ('восемьдесят семь');
        break;
        case -88:
        secondNumber = ('восемьдесят восемь');
        break;
        case -89:
        secondNumber = ('восемьдесят девять');
        break;
        case -90:
        secondNumber = ('девяносто');
        break;
        case -91:
        secondNumber = ('девяносто один');
        break;
        case -92:
        secondNumber = ('девяносто два');
        break;
        case -93:
        secondNumber = ('девяносто три');
        break;
        case -94:
        secondNumber = ('девяносто четыре');
        break;
        case -95:
        secondNumber = ('девяносто пять');
        break;
        case -96:
        secondNumber = ('девяносто шесть');
        break;
        case -97:
        secondNumber = ('девяносто семь');
        break;
        case -98:
        secondNumber = ('девяносто восемь');
        break;
        case -99:
        secondNumber = ('девяносто девять');
        break;
        case 0:
        secondNumber = (' ');
        break;
    
        }
    
    
    
    
    const answerRandom = Math.round( Math.random()*3);
    let answerPhrase = (answerRandom === 3);
    switch (answerRandom) {
    case 0:
    answerPhrase = 'Это ' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + ' ?';
    break;
    case 1:
    answerPhrase = 'Совсем просто! Это' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + ' ?';
    break;
    case 2:
    answerPhrase = 'Не подсказывай!!' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + ' ?';
    break;
    default:
    answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + ' ?';
    
    }
    
    answerField.innerText = answerPhrase;
    
    }




}
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const answerRandom = Math.round( Math.random()*3);
            let answerPhrase = (answerRandom === 3);
                switch (answerRandom) {
                case 0:
                 answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
                 break;
                case 1:
                answerPhrase = `Не благодари!`;
                break;
                case 2:
                answerPhrase = `Не ожидал?))`;
                break;
                default:
                answerPhrase = `Абра-Кадабра!`;
            }

        answerField.innerText = answerPhrase;
    }
})






document.getElementById('btnRetry').addEventListener('click', function () {
  
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    minValue = minValue || 0;
    minValue = (minValue < -999) ? -999: minValue;
    minValue = (minValue > 999) ?   999: minValue;

    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    maxValue = maxValue || 100;
    maxValue = (maxValue > 999) ? 999: maxValue;
    maxValue = (maxValue < -999) ? -999: maxValue;  

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);


   
    if (answerNumber > 19 && answerNumber < 100) {

    let firstNumber = (parseInt(answerNumber / 10));
    switch (firstNumber) {
    case 2:
    firstNumber = ('двадцать');
    break;
    case 3:
    firstNumber = ('тридцать');
    break;
    case 4:
    firstNumber = ('сорок');
    break;
    case 5:
    firstNumber = ('пятьдесят');
    break;
    case 6:
    firstNumber = ('шестьдесят');
    break;
    case 7:
    firstNumber = ('семьдесят');
    break;
    case 8:
    firstNumber = ('восемьдесят');
    break;
    case 9:
    firstNumber = ('девяносто');
    break;
    }

    let secondNumber = (answerNumber % 10);

    switch (secondNumber) {
    case 1:
    secondNumber = ('один');
    break;
    case 2:
    secondNumber = ('два');
    break;
    case 3:
    secondNumber = ('три');
    break;
    case 4:
    secondNumber = ('четыре');
    break;
    case 5:
    secondNumber = ('пять');
    break;
    case 6:
    secondNumber = ('шесть');
    break;
    case 7:
    secondNumber = ('семь');
    break;
    case 8:
    secondNumber = ('восемь');
    break;
    case 9:
    secondNumber = ('девять');
    break;
    case 0:
    secondNumber = ('');
    break;

    }

    answerField.innerText = 'Вы загадали ' + firstNumber + ' ' + secondNumber + '?';
}

 if (answerNumber > 9 && answerNumber < 20) {

    let firstNumber = (answerNumber % 10);

    switch (firstNumber) {
    case 1:
    firstNumber = ('одиннадцать');
    break;
    case 2:
    firstNumber = ('двенадцать');
    break;
    case 3:
    firstNumber = ('тринадцать');
    break;
    case 4:
    firstNumber = ('четырнадцать');
    break;
    case 5:
    firstNumber = ('пятнадцать');
    break;
    case 6:
    firstNumber = ('шестнадцать');
    break;
    case 7:
    firstNumber = ('семнадцать');
    break;
    case 8:
    firstNumber = ('восемнадцать');
    break;
    case 9:
    firstNumber = ('девятнадцать');
    break;
    case 0:
    firstNumber = ('десять');
    break;
        
  }

  answerField.innerText = 'Вы загадали ' + firstNumber  + '?';
}

if (answerNumber > -1 && answerNumber < 10) {

    let firstNumber = (answerNumber * 1);

    switch (firstNumber) {
    case 1:
    firstNumber = ('один');
    break;
    case 2:
    firstNumber = ('два');
    break;
    case 3:
    firstNumber = ('три');
    break;
    case 4:
    firstNumber = ('четыре');
    break;
    case 5:
    firstNumber = ('пять');
    break;
    case 6:
    firstNumber = ('шесть');
    break;
    case 7:
    firstNumber = ('семь');
    break;
    case 8:
    firstNumber = ('восемь');
    break;
    case 9:
    firstNumber = ('девять');
    break;
    case 0:
    firstNumber = ('ноль');
    break;
  
        
  }

  answerField.innerText = 'Вы загадали ' + firstNumber  + '?';
}

if (answerNumber > 100 && answerNumber < 1000) {

    let firstNumber = (parseInt(answerNumber / 100));
    switch (firstNumber) {
    case 1:
    firstNumber = ('сто');
    case 2:
    firstNumber = ('двести');
    break;
    case 3:
    firstNumber = ('триста');
    break;
    case 4:
    firstNumber = ('четыреста');
    break;
    case 5:
    firstNumber = ('пятьсот');
    break;
    case 6:
    firstNumber = ('шестьсот');
    break;
    case 7:
    firstNumber = ('семьсот');
    break;
    case 8:
    firstNumber = ('восемьсот');
    break;
    case 9:
    firstNumber = ('девятьсот');
    break;
    }

    let secondNumber = (answerNumber % 100);

    switch (secondNumber) {
        case 1:
    secondNumber = ('один');
    break;
    case 2:
    secondNumber = ('два');
    break;
    case 3:
    secondNumber = ('три');
    break;
    case 4:
    secondNumber = ('четыре');
    break;
    case 5:
    secondNumber = ('пять');
    break;
    case 6:
    secondNumber = ('шесть');
    break;
    case 7:
    secondNumber = ('семь');
    break;
    case 8:
    secondNumber = ('восемь');
    break;
    case 9:
    secondNumber = ('девять');
    break;
    case 10:
    secondNumber = ('десять');
    break;
    
    case 11:
    secondNumber = ('одиннадцать');
    break;
    case 12:
    secondNumber = ('двенадцать');
    break;
    case 13:
    secondNumber = ('тринадцать');
    break;
    case 14:
    secondNumber = ('четырнадцать');
    break;
    case 15:
    secondNumber = ('пятнадцать');
    break;
    case 16:
    secondNumber = ('шестнадцать');
    break;
    case 17:
    secondNumber = ('всемнадцать');
    break;
    case 18:
    secondNumber = ('восемнадцать');
    break;
    case 19:
    secondNumber = ('девятнадцать');
    break;
    case 20:
    secondNumber = ('двадцать');
    break;
    case 21:
    secondNumber = ('двадцать один');
    break;
    case 22:
    secondNumber = ('двадцать два');
    break;
    case 23:
    secondNumber = ('двадцать три');
    break;
    case 24:
    secondNumber = ('двадцать четыре');
    break;
    case 25:
    secondNumber = ('двадцать пять');
    break;
    case 26:
    secondNumber = ('двадцать шесть');
    break;
    case 27:
    secondNumber = ('двадцать семь');
    break;
    case 28:
    secondNumber = ('двадцать восемь');
    break;
    case 29:
    secondNumber = ('двадцать девять');
    break;
    case 30:
    secondNumber = ('тридцать');
    break;
    case 31:
    secondNumber = ('тридцать один');
    break;
    case 32:
    secondNumber = ('тридцать два');
    break;
    case 33:
    secondNumber = ('тридцать три');
    break;
    case 34:
    secondNumber = ('тридцать четыре');
    break;
    case 35:
    secondNumber = ('тридцать пять');
    break;
    case 36:
    secondNumber = ('тридцать шесть');
    break;
    case 37:
    secondNumber = ('тридцать семь');
    break;
    case 38:
    secondNumber = ('тридцать восемь');
    break;
    case 39:
    secondNumber = ('тридцать девять');
    break;
    case 40:
    secondNumber = ('двадцать');
    break;
    case 41:
    secondNumber = ('сорок один');
    break;
    case 42:
    secondNumber = ('сорок два');
    break;
    case 43:
    secondNumber = ('сорок три');
    break;
    case 44:
    secondNumber = ('сорок четыре');
    break;
    case 45:
    secondNumber = ('сорок пять');
    break;
    case 46:
    secondNumber = ('сорок шесть');
    break;
    case 47:
    secondNumber = ('сорок семь');
    break;
    case 48:
    secondNumber = ('сорок восемь');
    break;
    case 49:
    secondNumber = ('сорок девять');
    break;
    case 50:
    secondNumber = ('пятьдесят');
    break;
    case 51:
    secondNumber = ('пятьдесят один');
    break;
    case 52:
    secondNumber = ('пятьдесят два');
    break;
    case 53:
    secondNumber = ('пятьдесят три');
    break;
    case 54:
    secondNumber = ('пятьдесят четыре');
    break;
    case 55:
    secondNumber = ('пятьдесят пять');
    break;
    case 56:
    secondNumber = ('пятьдесят шесть');
    break;
    case 57:
    secondNumber = ('пятьдесят семь');
    break;
    case 58:
    secondNumber = ('пятьдесят восемь');
    break;
    case 59:
    secondNumber = ('пятьдесят девять');
    break;
    case 60:
    secondNumber = ('шестьдесят');
    break;
    case 61:
    secondNumber = ('шестьдесят один');
    break;
    case 62:
    secondNumber = ('шестьдесят два');
    break;
    case 63:
    secondNumber = ('шестьдесят три');
    break;
    case 64:
    secondNumber = ('шестьдесят четыре');
    break;
    case 65:
    secondNumber = ('шестьдесят пять');
    break;
    case 66:
    secondNumber = ('шестьдесят шесть');
    break;
    case 67:
    secondNumber = ('шестьдесят семь');
    break;
    case 68:
    secondNumber = ('шестьдесят восемь');
    break;
    case 69:
    secondNumber = ('шестьдесят девять');
    break;
    case 70:
    secondNumber = ('семьдесят');
    break;
    case 71:
    secondNumber = ('семьдесят один');
    break;
    case 72:
    secondNumber = ('семьдесят два');
    break;
    case 73:
    secondNumber = ('семьдесят три');
    break;
    case 74:
    secondNumber = ('семьдесят четыре');
    break;
    case 75:
    secondNumber = ('семьдесят пять');
    break;
    case 76:
    secondNumber = ('семьдесят шесть');
    break;
    case 77:
    secondNumber = ('семьдесят семь');
    break;
    case 78:
    secondNumber = ('семьдесят восемь');
    break;
    case 79:
    secondNumber = ('семьдесят девять');
    break;
    case 80:
    secondNumber = ('восемьдесят');
    break;
    case 81:
    secondNumber = ('восемьдесят один');
    break;
    case 82:
    secondNumber = ('восемьдесят два');
    break;
    case 83:
    secondNumber = ('восемьдесят три');
    break;
    case 84:
    secondNumber = ('восемьдесят четыре');
    break;
    case 85:
    secondNumber = ('восемьдесят пять');
    break;
    case 86:
    secondNumber = ('восемьдесят шесть');
    break;
    case 87:
    secondNumber = ('восемьдесят семь');
    break;
    case 88:
    secondNumber = ('восемьдесят восемь');
    break;
    case 89:
    secondNumber = ('восемьдесят девять');
    break;
    case 90:
    secondNumber = ('девяносто');
    break;
    case 91:
    secondNumber = ('девяносто один');
    break;
    case 92:
    secondNumber = ('девяносто два');
    break;
    case 93:
    secondNumber = ('девяносто три');
    break;
    case 94:
    secondNumber = ('девяносто четыре');
    break;
    case 95:
    secondNumber = ('девяносто пять');
    break;
    case 96:
    secondNumber = ('девяносто шесть');
    break;
    case 97:
    secondNumber = ('девяносто семь');
    break;
    case 98:
    secondNumber = ('девяносто восемь');
    break;
    case 99:
    secondNumber = ('девяносто девять');
    break;
    case 0:
        secondNumber = (' ');
        break;


    }


    answerField.innerText = 'Вы загадали ' + firstNumber + ' ' + secondNumber + '  ?';

}

if (answerNumber < -19 && answerNumber > -100) {

    let firstNumber = (parseInt(answerNumber / 10));
    switch (firstNumber) {
    case -2:
    firstNumber = ('двадцать');
    break;
    case -3:
    firstNumber = ('тридцать');
    break;
    case -4:
    firstNumber = ('сорок');
    break;
    case -5:
    firstNumber = ('пятьдесят');
    break;
    case -6:
    firstNumber = ('шестьдесят');
    break;
    case -7:
    firstNumber = ('семьдесят');
    break;
    case -8:
    firstNumber = ('восемьдесят');
    break;
    case -9:
    firstNumber = ('девяносто');
    break;
    }

    let secondNumber = (answerNumber % 10);

    switch (secondNumber) {
    case -1:
    secondNumber = ('один');
    break;
    case -2:
    secondNumber = ('два');
    break;
    case -3:
    secondNumber = ('три');
    break;
    case -4:
    secondNumber = ('четыре');
    break;
    case -5:
    secondNumber = ('пять');
    break;
    case -6:
    secondNumber = ('шесть');
    break;
    case -7:
    secondNumber = ('семь');
    break;
    case -8:
    secondNumber = ('восемь');
    break;
    case -9:
    secondNumber = ('девять');
    break;
    case 0:
    secondNumber = ('');
    break;

    }

    answerField.innerText = 'Вы загадали ' + 'минус ' + firstNumber + ' ' + secondNumber + '  ?';
}

if (answerNumber < -9 && answerNumber > -20) {

    let firstNumber = (answerNumber % 10);
    
    switch (firstNumber) {
    case -1:
    firstNumber = ('одиннадцать');
    break;
    case -2:
    firstNumber = ('двенадцать');
    break;
    case -3:
    firstNumber = ('тринадцать');
    break;
    case -4:
    firstNumber = ('четырнадцать');
    break;
    case -5:
    firstNumber = ('пятнадцать');
    break;
    case -6:
    firstNumber = ('шестнадцать');
    break;
    case -7:
    firstNumber = ('семнадцать');
    break;
    case -8:
    firstNumber = ('восемнадцать');
    break;
    case -9:
    firstNumber = ('девятнадцать');
    break;
    case 0:
    firstNumber = ('десять');
    break;
        
    }

    answerField.innerText = 'Вы загадали ' + 'минус ' + firstNumber + '  ?';
}

if (answerNumber < -100 && answerNumber > -1000) {

    let firstNumber = (parseInt(answerNumber / 100));
    switch (firstNumber) {
    case -1:
    firstNumber = ('сто');
    case -2:
    firstNumber = ('двести');
    break;
    case -3:
    firstNumber = ('триста');
    break;
    case -4:
    firstNumber = ('четыреста');
    break;
    case -5:
    firstNumber = ('пятьсот');
    break;
    case -6:
    firstNumber = ('шестьсот');
    break;
    case -7:
    firstNumber = ('семьсот');
    break;
    case -8:
    firstNumber = ('восемьсот');
    break;
    case -9:
    firstNumber = ('девятьсот');
    break;
    }

    let secondNumber = (answerNumber % 100);

    switch (secondNumber) {
        case -1:
            secondNumber = ('один');
            break;
            case -2:
            secondNumber = ('два');
            break;
            case -3:
            secondNumber = ('три');
            break;
            case -4:
            secondNumber = ('четыре');
            break;
            case -5:
            secondNumber = ('пять');
            break;
            case -6:
            secondNumber = ('шесть');
            break;
            case -7:
            secondNumber = ('семь');
            break;
            case -8:
            secondNumber = ('восемь');
            break;
            case -9:
            secondNumber = ('девять');
            break;
            case -10:
            secondNumber = ('десять');
            break;
    case -11:
    secondNumber = ('одиннадцать');
    break;
    case -12:
    secondNumber = ('двенадцать');
    break;
    case -13:
    secondNumber = ('тринадцать');
    break;
    case -14:
    secondNumber = ('четырнадцать');
    break;
    case -15:
    secondNumber = ('пятнадцать');
    break;
    case -16:
    secondNumber = ('шестнадцать');
    break;
    case -17:
    secondNumber = ('всемнадцать');
    break;
    case -18:
    secondNumber = ('восемнадцать');
    break;
    case -19:
    secondNumber = ('девятнадцать');
    break;
    case -20:
    secondNumber = ('двадцать');
    break;
    case -21:
    secondNumber = ('двадцать один');
    break;
    case -22:
    secondNumber = ('двадцать два');
    break;
    case -23:
    secondNumber = ('двадцать три');
    break;
    case -24:
    secondNumber = ('двадцать четыре');
    break;
    case -25:
    secondNumber = ('двадцать пять');
    break;
    case -26:
    secondNumber = ('двадцать шесть');
    break;
    case -27:
    secondNumber = ('двадцать семь');
    break;
    case -28:
    secondNumber = ('двадцать восемь');
    break;
    case -29:
    secondNumber = ('двадцать девять');
    break;
    case -30:
    secondNumber = ('тридцать');
    break;
    case -31:
    secondNumber = ('тридцать один');
    break;
    case -32:
    secondNumber = ('тридцать два');
    break;
    case -33:
    secondNumber = ('тридцать три');
    break;
    case -34:
    secondNumber = ('тридцать четыре');
    break;
    case -35:
    secondNumber = ('тридцать пять');
    break;
    case -36:
    secondNumber = ('тридцать шесть');
    break;
    case -37:
    secondNumber = ('тридцать семь');
    break;
    case -38:
    secondNumber = ('тридцать восемь');
    break;
    case -39:
    secondNumber = ('тридцать девять');
    break;
    case -40:
    secondNumber = ('двадцать');
    break;
    case -41:
    secondNumber = ('сорок один');
    break;
    case -42:
    secondNumber = ('сорок два');
    break;
    case -43:
    secondNumber = ('сорок три');
    break;
    case -44:
    secondNumber = ('сорок четыре');
    break;
    case -45:
    secondNumber = ('сорок пять');
    break;
    case -46:
    secondNumber = ('сорок шесть');
    break;
    case -47:
    secondNumber = ('сорок семь');
    break;
    case -48:
    secondNumber = ('сорок восемь');
    break;
    case -49:
    secondNumber = ('сорок девять');
    break;
    case -50:
    secondNumber = ('пятьдесят');
    break;
    case -51:
    secondNumber = ('пятьдесят один');
    break;
    case -52:
    secondNumber = ('пятьдесят два');
    break;
    case -53:
    secondNumber = ('пятьдесят три');
    break;
    case -54:
    secondNumber = ('пятьдесят четыре');
    break;
    case -55:
    secondNumber = ('пятьдесят пять');
    break;
    case -56:
    secondNumber = ('пятьдесят шесть');
    break;
    case -57:
    secondNumber = ('пятьдесят семь');
    break;
    case -58:
    secondNumber = ('пятьдесят восемь');
    break;
    case -59:
    secondNumber = ('пятьдесят девять');
    break;
    case -60:
    secondNumber = ('шестьдесят');
    break;
    case -61:
    secondNumber = ('шестьдесят один');
    break;
    case -62:
    secondNumber = ('шестьдесят два');
    break;
    case -63:
    secondNumber = ('шестьдесят три');
    break;
    case -64:
    secondNumber = ('шестьдесят четыре');
    break;
    case -65:
    secondNumber = ('шестьдесят пять');
    break;
    case -66:
    secondNumber = ('шестьдесят шесть');
    break;
    case -67:
    secondNumber = ('шестьдесят семь');
    break;
    case -68:
    secondNumber = ('шестьдесят восемь');
    break;
    case -69:
    secondNumber = ('шестьдесят девять');
    break;
    case -70:
    secondNumber = ('семьдесят');
    break;
    case -71:
    secondNumber = ('семьдесят один');
    break;
    case -72:
    secondNumber = ('семьдесят два');
    break;
    case -73:
    secondNumber = ('семьдесят три');
    break;
    case -74:
    secondNumber = ('семьдесят четыре');
    break;
    case -75:
    secondNumber = ('семьдесят пять');
    break;
    case -76:
    secondNumber = ('семьдесят шесть');
    break;
    case -77:
    secondNumber = ('семьдесят семь');
    break;
    case -78:
    secondNumber = ('семьдесят восемь');
    break;
    case -79:
    secondNumber = ('семьдесят девять');
    break;
    case -80:
    secondNumber = ('восемьдесят');
    break;
    case -81:
    secondNumber = ('восемьдесят один');
    break;
    case -82:
    secondNumber = ('восемьдесят два');
    break;
    case -83:
    secondNumber = ('восемьдесят три');
    break;
    case -84:
    secondNumber = ('восемьдесят четыре');
    break;
    case -85:
    secondNumber = ('восемьдесят пять');
    break;
    case -86:
    secondNumber = ('восемьдесят шесть');
    break;
    case -87:
    secondNumber = ('восемьдесят семь');
    break;
    case -88:
    secondNumber = ('восемьдесят восемь');
    break;
    case -89:
    secondNumber = ('восемьдесят девять');
    break;
    case -90:
    secondNumber = ('девяносто');
    break;
    case -91:
    secondNumber = ('девяносто один');
    break;
    case -92:
    secondNumber = ('девяносто два');
    break;
    case -93:
    secondNumber = ('девяносто три');
    break;
    case -94:
    secondNumber = ('девяносто четыре');
    break;
    case -95:
    secondNumber = ('девяносто пять');
    break;
    case -96:
    secondNumber = ('девяносто шесть');
    break;
    case -97:
    secondNumber = ('девяносто семь');
    break;
    case -98:
    secondNumber = ('девяносто восемь');
    break;
    case -99:
    secondNumber = ('девяносто девять');
    break;
    case 0:
    secondNumber = (' ');
    break;
    }
    
    
    answerField.innerText = 'Вы загадали ' + 'минус ' + firstNumber + ' ' + secondNumber + '  ?';
}



orderNumber = 1;
gameRun = true;
orderNumberField.innerText = orderNumber

})
