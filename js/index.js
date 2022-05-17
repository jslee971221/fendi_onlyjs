const wd = window.innerWidth;
const cnt01Pbtn = document.querySelectorAll('.cnt01 .paging li');
const cnt01Grp = document.querySelector('.cnt01 .artGroup');
//컨텐츠1 변수 선언
const cnt04Grp = document.querySelector('.cnt04 .artGroup');
const cnt04Btn = document.querySelectorAll('.cnt04 .btns i');
const cnt04Art = document.querySelectorAll('.cnt04 .artFamily');
let artSet = [];
let cnt04Flag = true;
//컨텐츠4 변수 선언
//컨텐츠1 인덱스 페이징
if(wd <= 1024 && wd > 420){
    cnt01Pbtn.forEach((btn, a) => btn.addEventListener('click', () => {
        cnt01Grp.style.marginTop = 'max(' + a * -9 + 'rem,' + -360 * a + 'px)';
        for(let i = 0; i < cnt01Pbtn.length; i++){
            cnt01Pbtn[i].classList.remove('show');
        }
        btn.className = 'show';
    }));
}else{
    cnt01Pbtn.forEach((btn, a) => btn.addEventListener('click', () => {
        cnt01Grp.style.marginLeft = a * -100 + '%';
        for(let i = 0; i < cnt01Pbtn.length; i++){
            cnt01Pbtn[i].classList.remove('show');
        }
        btn.className = 'show';
    }));
}

//컨텐츠4 슬라이드
if(wd > 420){
    cnt04Btn[0].addEventListener('click', function(){
        if(cnt04Flag){
            cnt04Flag = false;
            artSet = document.querySelectorAll('.cnt04 .artFamily');
            cnt04Grp.style.marginLeft = '0%';
            cnt04Grp.animate([{marginLeft : '-100%'},{marginLeft : '0%'}], 500);
            setTimeout(function(){
                cnt04Grp.style.marginLeft = '-100%';
                cnt04Grp.prepend(artSet[artSet.length - 1]);
                cnt04Flag = true;
            }, 500)
        }
    });
    
    cnt04Btn[1].addEventListener('click', function(){
        if(cnt04Flag){
            cnt04Flag = false;
            artSet = document.querySelectorAll('.cnt04 .artFamily');
            cnt04Grp.style.marginLeft = '-200%';
            cnt04Grp.animate([{marginLeft : '-100%'},{marginLeft : '-200%'}], 500);
            setTimeout(function(){
                cnt04Grp.style.marginLeft = '-100%';
                cnt04Grp.append(artSet[0]);
                cnt04Flag = true;
            }, 500);
        }
    });
    


}