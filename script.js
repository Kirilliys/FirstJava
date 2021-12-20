

const appData = {
 title: '', 
 screens: '', 
 screenPrice: 0, 
 adaptive: true, 
 rollback: 56,
 service1: '', 
 service2: '',

 
 asking: function () {
   appData.title = prompt('Как называется ваш проект?')
   appData.screens = prompt('Какие типы экранов нужно разработать?',' "Простые, Сложные, Интерактивные"' )
  do {
     appData.screenPrice = +prompt('Сколько будет стоить данная работа?', 'пример:1200')
  } while(!this.isNumber(appData.screenPrice))

  appData.adaptive = confirm('Нужен ли адаптив на сайте?')
 },
 

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) 
  },

  getAllServicePrices: function () {
          let sum = 0;
          let plusSum;
          for (let i = 0; i < 2; i++){
            if (i === 0){
              appData.service1 = prompt('Какой дополнительный тип услуги нужен?')
            } else if (i === 1) {
              appData.service2 = prompt('Какой дополнительный тип услуги нужен?')
            }
            do{
              plusSum = +prompt('Сколько это будет стоить?')
            } while (!this.isNumber(plusSum))
            sum += +plusSum;

          }

          return sum;
   },

   getTitle: function(title){
  title = appData.title.trim().toLowerCase();
  return appData.title[0].toUpperCase() + appData.title.substring(1);
  },

  getFullPrice(a,b){
  return a + b
  },

  getServicePercentPrices: function(){
  return Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
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
    for (let key in appData) {
      console.log(key + " " + appData[key]);
    }
    console.log(appData.fullPrice);
    console.log(appData.servicePersentPrice);
    
  },

  start: function(){
   appData.asking();
   appData.allServicePrices = appData.getAllServicePrices();
   appData.fullPrice = appData.getFullPrice(appData.screenPrice,appData.allServicePrices);
   appData.servicePersentPrice = appData.getServicePercentPrices();
   appData.title = appData.getTitle();
   appData.logger();

 },

};

appData.start();









