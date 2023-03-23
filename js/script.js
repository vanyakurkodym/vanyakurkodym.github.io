document.addEventListener('DOMContentLoaded', function(){

    const vh = window.innerHeight / 100;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // Resize burger_menu
    let burger_links = document.querySelectorAll('.burger-menu-link');
    window.addEventListener("resize", function() {
        changeResize();
    })
    function changeResize(){
        if (document.documentElement.clientHeight < 400){
            burger_links.forEach(link => {
                link.classList.add('burger-menu-link_resize');
            })
        } else {
            burger_links.forEach(link => {
                link.classList.remove('burger-menu-link_resize');
            })
        }
    }
    changeResize();

    //Burger_menu
    let open_menu = document.querySelector('.burger-menu__open');
    let close_menu = document.querySelector('.burger-menu__close');
    let burger_menu = document.querySelector('.burger-menu');
    let main_social = document.querySelector('.social');

    function burgerMenu(btn){
        btn.addEventListener('click', function(){
            this.style.display = 'none';
            if(this.classList.contains('burger-menu__open')){
                burger_menu.style.right = 0 + 'px';
                close_menu.style.display = 'block';
                main_social.style.display = 'none';
            } else {
                burger_menu.style.right = -220 + 'px';
                main_social.style.display = 'block';
                setTimeout(() => {
                    open_menu.style.display = 'block';
                }, 1000);
            }
        })
    }

    burgerMenu(open_menu);
    burgerMenu(close_menu);
    
    //Programs description
    let programs__wrappers = document.querySelectorAll('.programs-item__wrapper');
    let programs_links = document.querySelectorAll('.programs-item__link');
    let programs_description = document.querySelectorAll('.programs-item__descr');
    let programs_back = document.querySelectorAll('.programs-back');

    function details(btns){
        btns.forEach((btn, ind) => {
            btn.addEventListener('click', function(e){
                e.preventDefault();
                this.style.display = 'none';
                if(this.innerHTML == 'Детальніше'){
                    programs_description[ind].style.display = 'block';
                    programs_back[ind].style.display = 'block';
                    programs__wrappers[ind].style.background = 'rgba(0,0,0,0.9)';
                } else {
                    programs_description[ind].style.display = 'none';
                    programs_links[ind].style.display = 'block';
                    programs__wrappers[ind].style.background = 'rgba(0,0,0,0.5)';
                }
            })
        })
    }
    details(programs_links);
    details(programs_back);

    //Questions
    let questions = document.querySelectorAll('.questions-item');
    let questions_btns = document.querySelectorAll('.questions-btn');
    let questions_responses = document.querySelectorAll('.questions-response');


    questions_btns.forEach((btn, ind) => {
        btn.style.transform = 'rotate(0deg)';
        btn.addEventListener('click', function(){
            if(this.style.transform == 'rotate(0deg)'){
                this.style.transform = 'rotate(180deg)';
                questions_responses[ind].style.display = 'block';
            } else{
                this.style.transform = 'rotate(0deg)';
                questions_responses[ind].style.display = 'none';
            }
        })
    })

    
    new WOW().init();
})