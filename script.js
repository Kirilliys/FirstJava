let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?','пример: "Простые, Сложные, Интерактивные"');
let screenPrice 
let adaptive = confirm('Нужен ли адаптив на сайте?');
let rollback = 56;

let service1 
let servicePrice1 
let service2 
let servicePrice2 

const showTypeOf = function(variable){
  console.log(variable, typeof variable);
}

const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && !num.trim().length
}

const asking = function() {
  do {
    let screenPrice = prompt('Сколько будет стоить данная работа?', 'пример:1200')
  } while(!isNumber(screenPrice))
}



// Объявление функции типа function expression
const getAllServicePrices = function(){
          let sum = 0

          for (let i = 0; i < 2; i++){
            if (i === 0){
              service1 = prompt('Какой дополнительный тип услуги нужен?')
            } else if (i === 1) {
              service2 = prompt('Какой дополнительный тип услуги нужен?')
            }
            sum += +prompt('Сколько это будет стоить?')
          }

          return sum
}


// Объявление функции типа function declaration
function getFullPrice(a,b){
  return a + b
}



// Объявление функции с названием (первая большая буква, отсальные маленькие)
let getTitle = function(title){
  title = title.trim().toLowerCase();
  return title[0].toUpperCase() + title.substring(1);

}

// Объявление функции возвращения итоговой стоимости за выетом отката
let getServicePercentPrices = function(){
  return Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
}


// Объявление функции с условием
const getRollbackMessage = function(price){
  switch (true) {
  case 30000 <= price:
    return 'Даём скидку в 10%'
    break
  case ((15000 <= price) && (price< 30000)):
    return 'Даём скидку в 5%'
    break
  case( (0 <= price) && (price < 15000)):
    return 'Скидка не предусмотрена'
    break
  default:
    return 'Что-то пошло не так'
 }
}

asking()
allServicePrice = getAllServicePrices(servicePrice1,servicePrice2);
fullPrice = getFullPrice(screenPrice,allServicePrice);
servicePersentPrice = getServicePercentPrices();



showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

// превращение строки в массив
console.log(screens.split(' '));
console.log(getRollbackMessage(fullPrice));
console.log(servicePersentPrice,'rub');

