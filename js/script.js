const title = document.getElementsByTagName('h1')
const but = document.getElementsByClassName('handler_btn')
const plus = document.querySelector('.screen-btn')

const percent = document.querySelectorAll('.other-items')
const number = document.querySelectorAll('.other-items')

const rollbackInput = document.querySelector('.rollback > .main-controls__range > [type=range]')
const rollbackSpan = document.querySelector('.rollback > .main-controls__range > .range-value')


const total = document.getElementsByClassName('total-input')
// загружаем total в массив
const total2 = []
for(let i in total) total2[i] = total[i]

let scr = document.querySelectorAll('.screen')

const appData = {
 screens: [], 
 screenPrice: 0, 
 adaptive: true, 
 rollback: 56,
 services: {}, 
 allServicePrices: 0,

  start: function(){
   appData.asking();
   appData.addPrices();
   appData.getFullPrice();
   appData.getServicePercentPrices();

   appData.logger();

 },
 
 asking: function () {
   
    for (let i = 0; i < 2; i++) {
      let name
      do{
         name = prompt('Какие типы экранов нужно разработать?')
      } while(appData.isString(name))
      let price = 0

       do {
     price = +prompt('Сколько будет стоить данная работа?')
  } while(!appData.isNumber(price))

   appData.screens.push({ id: i, name: name, price: price })
    }



    for (let i = 0; i < 2; i++){
         let name
            do{
               name =  prompt('Какой дополнительный тип услуги нужен?')
            }while(appData.isString(name))
            let price = 0;
           
            do{
              price = +prompt('Сколько это будет стоить?')
            } while (!appData.isNumber(price))
         appData.services[name] = price
          }

  appData.adaptive = confirm('Нужен ли адаптив на сайте?')
  
 },
 
 addPrices: function() {
    for (let screen of appData.screens) {
      appData.screenPrice += screen.price
    }

    for(let key in appData.services) {
            appData.allServicePrices += appData.services[key]
          }

 },

  isString: function(str) {
   return !isNaN(parseFloat(str)) && isFinite(str) 
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) 
  },

/* Большие и маленькие буквы
   getTitle: function(title){
  title = appData.title.trim().toLowerCase();
  appData.title = appData.title[0].toUpperCase() + appData.title.substring(1);
  },
*/

  getFullPrice: function(){
  appData.fullPrice =  appData.screenPrice + appData.allServicePrices
  },

  getServicePercentPrices: function(){
  appData.servicePersentPrice =  Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
  },

  

  getRollbackMessage: function(price){
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
  },

  logger: function() {
    //перебор Объекта
    for (let key in appData) {
      console.log(key + " " + appData[key]);
    } 
    console.log(title);
    console.log(but);
    console.log(plus);

    for (let item of percent) {
      if(item.matches('.percent')) console.log(item);
    }
    
    for (let item of number) {
      if(item.matches('.number')) console.log(item);
    }


    console.log(rollbackInput);
    console.log(rollbackSpan);

    total2.forEach(function(element){
      console.log(element);
    })

    for(let key of scr){
      console.log(key);
    }

    console.log(appData.fullPrice);
    console.log(appData.servicePersentPrice);
    console.log(appData.screens);
    
  },

};

appData.start();







