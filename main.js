const books = document.querySelectorAll('.books')
const book = document.querySelectorAll('.book')
//замена фона
const bgc = document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)'

// Замена названия главы
const name = document.querySelectorAll('.book > h2 > a')
name[4].textContent = 'Книга 3. this и Прототипы Объектов'

//Удаление рекламы
const adv = document.querySelector('.adv')
adv.remove()

// Восстановление порядка глав
const two = document.querySelectorAll('.book > ul > li')
// Порядок во второй книге
two[3].after(two[6])
two[6].after(two[8])
two[8].after(two[4])
two[4].after(two[5])
// Порядок в 5ой книге
two[55].after(two[49])
two[49].after(two[50])
two[50].after(two[48])
two[48].after(two[52])
two[52].after(two[53])
two[53].after(two[51])
two[51].after(two[54])
two[54].after(two[56])

// Добавление главы

const es6 = two[2].cloneNode(true)

es6.textContent = 'Глава 8: За пределами ES6'
two[25].append(es6)


books[0].prepend(book[1]) // в самое начало элемент
book[4].after(book[3]) // книга с индексом 3, после книги с индексом 4 и т.д.
book[3].after(book[5])
book[5].after(book[2])
book[0].after(book[4])


//другой способ
/*
books[0].prepend(book[1])
books[0].append(book[4])
books[0].append(book[3])
books[0].append(book[5])
books[0].append(book[2])
*/

//Замена фона через функцию
 /*
     const bgc = function() {
       document.body.style.background = 'url(image/you-dont-know-js.jpg)'
     }
     document.addEventListener("DOMContentLoaded", bgc);
*/





console.log(book);
console.log(name);
console.log(two);
