let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let cart = document.querySelector('.shopping-card');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
}