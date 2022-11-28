let brgMenuBtn = document.querySelector('.header_item_brgMenu');
let brgMenu = document.querySelector('.header_item_brgMenu_inner');

brgMenuBtn.addEventListener('click', function() {
    brgMenuBtn.classList.toggle('active');
    brgMenu.classList.toggle('active');

})