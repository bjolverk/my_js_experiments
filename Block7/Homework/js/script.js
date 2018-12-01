let menu = document.querySelector('.menu'),
    adv= document.querySelector('.adv'),
    title= document.getElementById('title'),
    userMeaning = document.getElementById('prompt');
 let menuVithItems = document.querySelectorAll('.menu-item');

let newLi = document.createElement('li');
newLi.classList.add('menu-item');
newLi.textContent = 'Пятый пункт';
menu.appendChild(newLi);
//console.log(menu.children[0]);
menu.insertBefore(menu.children[2], menu.children[1]);
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
//menu_items[2]
title.textContent = "Мы продаем только подлинную технику Apple";
adv.remove();
let userAnswer = prompt("Как Вы тоноситесь к технике Apple?", "");
userMeaning.textContent = userAnswer;

console.log(menuVithItems);