
const arg = prompt('Введите что-нибудь');

function  funs(arg){
  if (!isNaN(Number(arg))) {
    return 'Необходимо ввести строчное значение'
  } else {
    arg = arg.trim();
    return arg.length > 30 ? arg.substring(0,30)+'...':arg;
  }
}


console.log(funs(arg));

