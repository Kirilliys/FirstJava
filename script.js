'use strict'

let a



function isNumber(a) {
  return !isNaN(parseFloat(a)) && isFinite(a) 
}

function num(x) {



     function two() {

    a = prompt("Введите число от 0 до 100")
    if (a === null || a === ' ') {
       alert('До свидания')
      return;
    }

    if(!isNumber(a)) {
      alert('Необходимо ввести целое число от 0 до 100')
      two();
      return;
    }


   else if (a < x) {
      alert('Необходимо ввести число больше')
      two(); 
      return;


    } 
   else if (a > x ) {
    alert("Необходимо ввести число меньше")
    two();
    return;
    } 

   else if (a === x) {
      alert("Поздравляем, вы выйграли")
      return;
   }
   console.log(a);
 
  }
 
   console.log(x);
  two()
}

 
 num(5)