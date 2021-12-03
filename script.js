
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?','пример: "Простые, Сложные, Интерактивные"');
let screenPrice = +prompt('Сколько будет стоить данная работа?', 'пример:1200')
let adaptive = confirm('Нужен ли адаптив на сайте?');
let rollback = 56;

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

const showTypeOf = function(variable){
  console.log(variable, typeof variable);
}

// Объявление функции типа function expression
const getAllServicePrices = function(servicePrice1,servicePrice2){
          return servicePrice1 + servicePrice2
}
allServicePrice = getAllServicePrices(servicePrice1,servicePrice2);

// Объявление функции типа function declaration
function getFullPrice(a,b){
  return a + b
}
fullPrice = getFullPrice(screenPrice,allServicePrice);


// Объявление функции с названием (первая большая буква, отсальные маленькие)
let getTitle = function(title){
  title = title.trim().toLowerCase();
  return title[0].toUpperCase() + title.substring(1);

}

// Объявление функции возвращения итоговой стоимости за выетом отката
let getServicePercentPrices = function(){
  return Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
}
servicePersentPrice = getServicePercentPrices();

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






showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

// превращение строки в массив
console.log(screens.split(' '));
console.log(getRollbackMessage(fullPrice));
console.log(servicePersentPrice,'rub');

