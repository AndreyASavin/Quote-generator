'use strict';
const quotetext=document.querySelector('#quote');
const authortext=document.querySelector('#author');
const newquote=document.querySelector('#new-quote');

let quotes = [];

function Quote(){
    const onequote = quotes[Math.floor(Math.random()*quotes.length)]
    quotetext.textContent = onequote.text;
    authortext.textContent = onequote.author;
}

async function getQuotes(){
    try{
        const response = await fetch('https://type.fit/api/quotes');
        quotes = await response.json();
        Quote();
    } catch (error){
        throw error
    }
}

newquote.addEventListener('click', getQuotes)