

let title = prompt('Как называется ваш проект?');


let screens = prompt('Какие типы экранов нужно разработать?','пример: "Простые, Сложные, Интерактивные"');


let screenPrice = +prompt('Сколько будет стоить данная работа?', 'пример:1200')


let adaptive = confirm('Нужен ли адаптив на сайте?');


let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');


let fullPrice = screenPrice + servicePrice1 + servicePrice2



let rollback = 56;
rollback = rollback / 100;
rollback = fullPrice * rollback;


let servicePersentPrice = Math.ceil(fullPrice - rollback );
console.log(servicePersentPrice,'rub');


switch (true) {
  case 30000 <= fullPrice:
    console.log('Даём скидку в 10%');
    break
  case ((15000 <= fullPrice) && (fullPrice < 30000)):
    console.log('Даём скидку в 5%');
    break
  case( (0 <= fullPrice) && (fullPrice < 15000)):
    console.log('Скидка не предусмотрена');
    break
  default:
    console.log('Что-то пошло не так');

}




