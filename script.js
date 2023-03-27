let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
minValue = minValue || 0;
minValue = (minValue < -999) ? -999: minValue;

let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
maxValue = maxValue || 100;
maxValue = (maxValue > 999) ? 999: maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;




const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;


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

    if (answerNumber > -1 && answerNumber < 9) {

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

    let secondNumber = (parseInt((answerNumber % 100) / 10));

    switch (secondNumber) {
    case 1:
    secondNumber = ('один');
    break;
    case 2:
    secondNumber = ('двадцать');
    break;
    case 3:
    secondNumber = ('тридцать');
    break;
    case 4:
    secondNumber = ('сорок');
    break;
    case 5:
    secondNumber = ('пятьдесят');
    break;
    case 6:
    secondNumber = ('шестьдесят');
    break;
    case 7:
    secondNumber = ('семьдесят');
    break;
    case 8:
    secondNumber = ('восемьдесят');
    break;
    case 9:
    secondNumber = ('девяносто');
    break;
    case 0:
    secondNumber = ('');
    break;

    }

    let thirdNumber = parseInt(answerNumber % 10);

    switch (thirdNumber) {
    case 1:
    thirdNumber = ('один');
    break;
    case 2:
        thirdNumber = ('два');
    break;
    case 3:
        thirdNumber = ('три');
    break;
    case 4:
        thirdNumber = ('четыре');
    break;
    case 5:
        thirdNumber = ('пять');
    break;
    case 6:
        thirdNumber = ('шесть');
    break;
    case 7:
        thirdNumber = ('семь');
    break;
    case 8:
        thirdNumber = ('восемь');
    break;
    case 9:
        thirdNumber = ('девять');
    break;
    case 0:
        thirdNumber = ('');
    break;

    }




const answerRandom = Math.round( Math.random()*3);
let answerPhrase = (answerRandom === 3);
    switch (answerRandom) {
    case 0:
     answerPhrase = 'Это ' + ' ' + firstNumber + ' ' + secondNumber + ' ' + thirdNumber + '?';
     break;
    case 1:
    answerPhrase = 'Совсем просто! Это' + ' ' + firstNumber + ' ' + secondNumber + ' ' + thirdNumber + '?';
    break;
    case 2:
    answerPhrase = 'Не подсказывай!!' + ' ' + firstNumber + ' ' + secondNumber + ' ' + thirdNumber + '?';
    break;
    default:
    answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + firstNumber + ' ' + secondNumber + ' ' + thirdNumber + '?';

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

let secondNumber = (parseInt((answerNumber % 100) / 10));

switch (secondNumber) {
case -1:
secondNumber = ('один');
break;
case -2:
secondNumber = ('двадцать');
break;
case -3:
secondNumber = ('тридцать');
break;
case -4:
secondNumber = ('сорок');
break;
case -5:
secondNumber = ('пятьдесят');
break;
case -6:
secondNumber = ('шестьдесят');
break;
case -7:
secondNumber = ('семьдесят');
break;
case -8:
secondNumber = ('восемьдесят');
break;
case -9:
secondNumber = ('девяносто');
break;
case 0:
secondNumber = ('');
break;

}

let thirdNumber = parseInt(answerNumber % 10);

switch (thirdNumber) {
case -1:
thirdNumber = ('один');
break;
case -2:
thirdNumber = ('два');
break;
case -3:
thirdNumber = ('три');
break;
case -4:
thirdNumber = ('четыре');
break;
case -5:
thirdNumber = ('пять');
break;
case -6:
thirdNumber = ('шесть');
break;
case -7:
thirdNumber = ('семь');
break;
case -8:
thirdNumber = ('восемь');
break;
case -9:
thirdNumber = ('девять');
break;
case 0:
thirdNumber = ('');
break;

}




const answerRandom = Math.round( Math.random()*3);
let answerPhrase = (answerRandom === 3);
switch (answerRandom) {
case 0:
answerPhrase = 'Это ' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + ' ' + thirdNumber + '?';
break;
case 1:
answerPhrase = 'Совсем просто! Это' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + ' ' + thirdNumber + '?';
break;
case 2:
answerPhrase = 'Не подсказывай!!' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + ' ' + thirdNumber + '?';
break;
default:
answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + ' ' + thirdNumber + '?';

}

answerField.innerText = answerPhrase;

}



}}})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 2) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } 
        
        else {
            maxValue = answerNumber  + 1;
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

        if (answerNumber > -1 && answerNumber < 9) {

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
    
        let secondNumber = (parseInt((answerNumber % 100) / 10));
    
        switch (secondNumber) {
        case 1:
        secondNumber = ('один');
        break;
        case 2:
        secondNumber = ('двадцать');
        break;
        case 3:
        secondNumber = ('тридцать');
        break;
        case 4:
        secondNumber = ('сорок');
        break;
        case 5:
        secondNumber = ('пятьдесят');
        break;
        case 6:
        secondNumber = ('шестьдесят');
        break;
        case 7:
        secondNumber = ('семьдесят');
        break;
        case 8:
        secondNumber = ('восемьдесят');
        break;
        case 9:
        secondNumber = ('девяносто');
        break;
        case 0:
        secondNumber = ('');
        break;
    
        }
    
        let thirdNumber = parseInt(answerNumber % 10);
    
        switch (thirdNumber) {
        case 1:
        thirdNumber = ('один');
        break;
        case 2:
            thirdNumber = ('два');
        break;
        case 3:
            thirdNumber = ('три');
        break;
        case 4:
            thirdNumber = ('четыре');
        break;
        case 5:
            thirdNumber = ('пять');
        break;
        case 6:
            thirdNumber = ('шесть');
        break;
        case 7:
            thirdNumber = ('семь');
        break;
        case 8:
            thirdNumber = ('восемь');
        break;
        case 9:
            thirdNumber = ('девять');
        break;
        case 0:
            thirdNumber = ('');
        break;
    
        }
    
    
    
    
    const answerRandom = Math.round( Math.random()*3);
    let answerPhrase = (answerRandom === 3);
        switch (answerRandom) {
        case 0:
         answerPhrase = 'Это ' + ' ' + firstNumber + ' ' + secondNumber + ' ' + thirdNumber + '?';
         break;
        case 1:
        answerPhrase = 'Совсем просто! Это' + ' ' + firstNumber + ' ' + secondNumber + ' ' + thirdNumber + '?';
        break;
        case 2:
        answerPhrase = 'Не подсказывай!!' + ' ' + firstNumber + ' ' + secondNumber + ' ' + thirdNumber + '?';
        break;
        default:
        answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + firstNumber + ' ' + secondNumber + ' ' + thirdNumber + '?';
    
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
    
    let secondNumber = (parseInt((answerNumber % 100) / 10));
    
    switch (secondNumber) {
    case -1:
    secondNumber = ('один');
    break;
    case -2:
    secondNumber = ('двадцать');
    break;
    case -3:
    secondNumber = ('тридцать');
    break;
    case -4:
    secondNumber = ('сорок');
    break;
    case -5:
    secondNumber = ('пятьдесят');
    break;
    case -6:
    secondNumber = ('шестьдесят');
    break;
    case -7:
    secondNumber = ('семьдесят');
    break;
    case -8:
    secondNumber = ('восемьдесят');
    break;
    case -9:
    secondNumber = ('девяносто');
    break;
    case 0:
    secondNumber = ('');
    break;
    
    }
    
    let thirdNumber = parseInt(answerNumber % 10);
    
    switch (thirdNumber) {
    case -1:
    thirdNumber = ('один');
    break;
    case -2:
    thirdNumber = ('два');
    break;
    case -3:
    thirdNumber = ('три');
    break;
    case -4:
    thirdNumber = ('четыре');
    break;
    case -5:
    thirdNumber = ('пять');
    break;
    case -6:
    thirdNumber = ('шесть');
    break;
    case -7:
    thirdNumber = ('семь');
    break;
    case -8:
    thirdNumber = ('восемь');
    break;
    case -9:
    thirdNumber = ('девять');
    break;
    case 0:
    thirdNumber = ('');
    break;
    
    }
    
    
    
    
    const answerRandom = Math.round( Math.random()*3);
    let answerPhrase = (answerRandom === 3);
    switch (answerRandom) {
    case 0:
    answerPhrase = 'Это ' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + ' ' + thirdNumber + '?';
    break;
    case 1:
    answerPhrase = 'Совсем просто! Это' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + ' ' + thirdNumber + '?';
    break;
    case 2:
    answerPhrase = 'Не подсказывай!!' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + ' ' + thirdNumber + '?';
    break;
    default:
    answerPhrase = 'Могу так хоть целый день \n\u{1F60E}' + ' ' + 'минус' + ' ' + firstNumber + ' ' + secondNumber + ' ' + thirdNumber + '?';
    
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
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
})
