// vars

let x = document.querySelector('.wrapper');
let y = document.querySelector('html');
let z = document.querySelector('html');



let data = [
    { comb: 'CTRL + SHIFT + S', val: 'Сохранить как ...' },
    { comb: 'CTRL + K Z', val: 'Zen Режим' },
    { comb: 'SHIFT + ALT + F', val: 'Форматирвать документ' },
    { comb: 'ALT + L ALT + O', val: 'Open with Live Server' },
    { comb: 'ALT + L ALT + C', val: 'Stop Live Server' }
]

let button = document.querySelector('.button');
let combinations = document.querySelector('.combinations');
let value = document.querySelector('.value');
let logo = document.querySelector('.logo');

// functions

function getCounter() {
    let i = 0;
    return function () {
        if (i > data.length - 1)
        i = 0;
        return i++;
    }
}

let count = getCounter();

function getCombinations(array) {
    let j = count();
    // if (j > data.length - 1) {
    //     // j = count();
    // }

    combinations.innerText = array[j].comb;
    value.innerText = array[j].val;
    console.log(j);

}


let a = -1;
var add = function (valueToAdd, array) {

    if (a > data.length - 1) {
        a = -1;
    }
    else {
        a += valueToAdd;
        combinations.innerText = array[a].comb;
        value.innerHTML = array[a].val;
    }
}

function clearData(content1, content2) {
    content1.innerText = '';
    content2.innerText = '';
    logo.classList.toggle('after-click');
}

// events
button.addEventListener('click', function () {
    getCombinations(data);
    //add(1, data);
})


logo.addEventListener('click', function () {
    clearData(combinations, value);
})




/*
$(document).ready(function () {
    $('.content').mouseover(function () {
        $(this).css('opacity', '1');
    })
    $('.content').mouseout(function () {
        $(this).css('opacity', '0.5');
    })
})
*/


function disablehover() {
    var body = document.body,
        timer;

    window.addEventListener('scroll', function () {
        clearTimeout(timer);
        if (!body.classList.contains('disable-hover')) {
            body.classList.add('disable-hover')
        }

        timer = setTimeout(function () {
            body.classList.remove('disable-hover')
        }, 500);
    }, false);

}








// check js

console.log('script');

/////////