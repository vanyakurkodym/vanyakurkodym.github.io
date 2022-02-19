document.addEventListener('DOMContentLoaded', function(){

    window.addEventListener("resize", function() {
        changeResize();
    })
    function changeResize(){
        if (document.documentElement.clientHeight < 400){
            document.querySelector('.promo').classList.add('resize');
            document.querySelector('.menu').classList.add('resize_menu');
        } else {
            document.querySelector('.promo').classList.remove('resize');
            document.querySelector('.menu').classList.remove('resize_menu');
        }
    }
    changeResize();

    const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
    menuLinks = document.querySelectorAll('.menu__link')
    body = document.querySelector('body');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        body.style.overflow = 'hidden';
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
        body.style.overflow = 'auto';
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            body.style.overflow = 'auto';
        })
    })

    const skill_procent = document.querySelectorAll('.skills__ratings-counter');
    const skill_value = document.querySelectorAll('.skills__ratings-line span');

    skill_procent.forEach((item, i) => {
        skill_value[i].style.width = item.innerHTML;
        skill_value[i].style.transitionDuration = '2s';
    })

    $('form').submit(function(event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert('Ваше сообщение успешно отправлено!');
            $('form').trigger('reset');
        });
        return false;
    });

    new WOW().init();
})

// document.querySelector('form').submit(function(e) {
//     e.preventDefault();
//     $.ajax({
//         type: "POST",
//         url: "mailer/smart.php",
//         data: $(this).serialize()
//     }).done(function() {
//         $(this).find("input").val("");
//         $('form').trigger('reset');
//     });
//     return false;
// });