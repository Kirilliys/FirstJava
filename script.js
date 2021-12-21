

const appData = {
 title: '', 
 screens: '', 
 screenPrice: 0, 
 adaptive: true, 
 rollback: 56,
 services: {}, 
 

  start: function(){
   appData.asking();
   appData.getAllServicePrices();
   appData.getFullPrice();
   appData.getServicePercentPrices();
   appData.getTitle();

   appData.logger();

 },
 
 asking: function () {
   appData.title = prompt('Как называется ваш проект?')
   appData.screens = prompt('Какие типы экранов нужно разработать?',' "Простые, Сложные, Интерактивные"' )
  do {
     appData.screenPrice = +prompt('Сколько будет стоить данная работа?', 'пример:1200')
  } while(!appData.isNumber(appData.screenPrice))


    for (let i = 0; i < 2; i++){
            let name =  prompt('Какой дополнительный тип услуги нужен?')
            let plusSum = 0;
           
            do{
              plusSum = +prompt('Сколько это будет стоить?')
            } while (!appData.isNumber(plusSum))
         appData.services[name] = +plusSum 
          }

  appData.adaptive = confirm('Нужен ли адаптив на сайте?')
  
        
 },
 

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) 
  },

  getAllServicePrices: function () {
          for(let key in appData.services) {
            appData.allServicePrices += appData.services[key]
          }
   },

   getTitle: function(title){
  title = appData.title.trim().toLowerCase();
  appData.title = appData.title[0].toUpperCase() + appData.title.substring(1);
  },

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
    for (let key in appData) {
      console.log(key + " " + appData[key]);
    }
    console.log(appData.fullPrice);
    console.log(appData.servicePersentPrice);
    
  },

};

appData.start();









