const wd = window.innerWidth;
const mnBtn = document.querySelectorAll('.main .btns div');
const div = document.querySelectorAll('body>div');
let offset = 0;
let move = 0;



mnBtn.forEach((btn, i) => btn.addEventListener('click', function(){
    offset = window.scrollY + div[i + 2].getBoundingClientRect().top - 40;
    window.scrollTo({top : offset});
}));
