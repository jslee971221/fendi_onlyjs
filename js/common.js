$(function(){
    //헤더 로딩
    $('.hdr').load('./inc/header.html', function(){
        let nav = document.querySelectorAll('.hdrWrap nav h4');
        const bar = document.querySelector('.hdrWrap .bar');
        const btn =nav[nav.length - 1];
        let flag = true;
        btn.addEventListener('click', function(){
            if(flag){
                bar.style.opacity = 1;
            }else{
                bar.style.opacity = 0;
            }
            flag = !flag;
        });
    });

    //푸터 로딩
    $('.ftr').load('./inc/footer.html', function(){
        const ftrBtn = document.querySelectorAll('footer nav li:nth-child(1)');
        const wd = window.innerWidth;
        const firstBtn = ftrBtn[0].parentElement;
        if(wd > 420 && wd <= 1024){
            firstBtn.style.height = 'min(4rem, 160px)';
            firstBtn.querySelector('i.xi-caret-down').className = 'xi-caret-up';
            ftrBtn.forEach(th => th.addEventListener('click', () => {
                if(th.querySelector('i').className == 'xi-caret-down'){
                    th.querySelector('i').className = 'xi-caret-up';
                    th.parentElement.style.height = 'min(4rem, 160px)';
                }else{
                    th.querySelector('i').className = 'xi-caret-down';
                    th.parentElement.style.height = 'min(1rem, 40px)';
                }
            }));
        }
    });
});
