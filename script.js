'use strict'

let title 
let screens 
let screenPrice 
let adaptive 
let rollback = 56;
let allServicePrices
let fullPrice
let ServicePercentPrice
let service1 
let service2 

const appData = {

}

const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num) 
}

const asking = function() {
  title = prompt('Как называется ваш проект?');
  screens = prompt('Какие типы экранов нужно разработать?','пример: "Простые, Сложные, Интерактивные"');

  do {
     screenPrice = +prompt('Сколько будет стоить данная работа?', 'пример:1200')
  } while(!isNumber(screenPrice))

  adaptive = confirm('Нужен ли адаптив на сайте?');
}



// Объявление функции типа function expression
const getAllServicePrices = function () {
          let sum = 0

          for (let i = 0; i < 2; i++){
            let price = 0

            if (i === 0){
              service1 = prompt('Какой дополнительный тип услуги нужен?')
            } else if (i === 1) {
              service2 = prompt('Какой дополнительный тип услуги нужен?')
            }
            do {
              price = prompt('Сколько это будет стоить?')
            } while (!isNumber(price))

            sum += +price
          }

          return sum
}


const getFullPrice = function () {
  return +screenPrice + allServicePrice
}



// Объявление функции с названием (первая большая буква, отсальные маленькие)
let getTitle = function(title){
  title = title.trim().toLowerCase();
  return title[0].toUpperCase() + title.substring(1);

}

// Объявление функции возвращения итоговой стоимости за выетом отката
let getServicePercentPrice = function(){
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
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePersentPrice = getServicePercentPrice();
title = getTitle()






console.log(screens.split(' '));
console.log(getRollbackMessage(fullPrice));
console.log(servicePersentPrice,'rub');