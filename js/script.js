'use strict';

const title = document.getElementsByTagName('h1')[0];
const button = document.getElementsByClassName('handler_btn')[0];
const buttonPlus = document.querySelector('.screen-btn');

const otherItemsPercent = document.querySelectorAll('.other-items.percent'); 
const otherItemsNumber = document.querySelectorAll('.other-items.number'); 

const range = document.querySelector('.rollback > div > input');
const rangeValue = document.querySelector('.rollback > div > .range-value');

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];


let screenAll = document.querySelectorAll('.screen');


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    screenCount: 0,
    adaptive: true,
    rollback: 0,
    servicesPercent: {},
    servicesNumber: {},
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    init: function() {
        appData.addTitle();
        button.addEventListener('click', (e) => {
            e.preventDefault();
            appData.checkValue();
        });
        buttonPlus.addEventListener('click', appData.addScreenBlock);
        range.addEventListener('input', appData.changeRange);
    },
    addTitle: function() {
        document.title = title.textContent;
    },
    changeRange: function() {
        rangeValue.textContent = range.value + '%';
        appData.rollback = range.value;
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
        totalCountRollback.value = appData.servicePercentPrice;
    },
    showResult: function() {
        total.value = appData.screenPrice;
        totalCount.value = appData.screenCount;
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;
        totalCountRollback.value = appData.servicePercentPrice;
    },
    addScreens: function() {
        screenAll = document.querySelectorAll('.screen');

        screenAll.forEach(function(screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            });
        });

    },
    addServices: function() {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
    },
    addScreenBlock: function() {
        screenAll = document.querySelectorAll('.screen');
        const cloneScreen = screenAll[0].cloneNode(true);
        screenAll[screenAll.length - 1].after(cloneScreen);
    },
    addPrices: function() {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let screen of appData.screens) {
            appData.screenCount += +screen.count;
        }

        for(let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for(let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }

        appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;

        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
    },
    isError: false,
    checkValue: function() {
        screenAll = document.querySelectorAll('.screen');
        appData.isError = false;
        screenAll.forEach(screen => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            if (select.value === '' || input.value === '') {
                appData.isError = true;
            }
        });

        if(!appData.isError) {
            appData.start();
        } else {
            alert('Заполните поле');
        }
    },
    start: function() {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        appData.showResult();
        // appData.logger();
    },
    logger: function() {
        for (let key in appData) {
            console.log(key + appData[key]);
        }
        console.log(appData.services);
    }
};

appData.init();