'use strict'

const divWrapper = document.getElementById('wrapper'); 
const divWrap = document.getElementsByClassName('wrap');
const countField = document.getElementById('count');
let btnNext = document.getElementById('next');
let btnPrev = document.getElementById('prev');

let url = 'https://rickandmortyapi.com/api/character?page=1';

async function getHeroesCards (url) {
    let responce = await fetch(url);
    let data = await responce.json();

   data.results.forEach(element => {
        divWrapper.insertAdjacentHTML('beforeend', `<div class="wrap"><p class ="hero_id">${element.id}</p><p class ="hero_name">${element.name}</p><p class ="hero_status">${element.status}</p></div>`);
    });
    divWrapper.appendChild('div');
}

// function clearFunc () {
//     divWrapper.removeChild(divWrapper.lastChild);
// }

let currentPage = 1;

getHeroesCards(`https://rickandmortyapi.com/api/character?page=1`);

btnPrev.addEventListener('click', () => {
    divWrapper.innerHTML = '';

    if (currentPage > 1) {
        --currentPage;
    };

    getHeroesCards(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
    
    const urlParamsPrev = new URL(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
    const pagePrev = urlParamsPrev.searchParams.get('page')

    countField.innerHTML = pagePrev;
})


btnNext.addEventListener('click', () => {
    divWrapper.innerHTML = '';
    ++currentPage;
    
    getHeroesCards(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
    
    const urlParamsPrev = new URL(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
    const pagePrev = urlParamsPrev.searchParams.get('page')

    countField.innerHTML = pagePrev;
})





    














