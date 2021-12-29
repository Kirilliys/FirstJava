

const appData = {
 title: '', 
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
   appData.getTitle();

   appData.logger();

 },
 
 asking: function () {
   do{
     appData.title = document.getElementsByTagName('h1')
   } while(appData.isString(appData.title))

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
    console.log(appData.screens);
    
  },

};

appData.start();







