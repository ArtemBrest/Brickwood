// ** FADE IN FUNCTION **
function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0.1) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};
window.addEventListener("load", function() {
    let Fade = document.querySelector(".fade");
    let ModalThanks = document.getElementById("ModalThanks");
    let Modal = document.querySelector(".modal");
    let ModalClose = document.querySelector(".modal__close");
    if(Modal !== null && Fade !== null && ModalThanks !== null){
        Fade.addEventListener("click",function(e){
            fadeOut(ModalThanks);
            fadeOut(Modal);
            fadeOut(Fade);
        });
    }
    if(Modal !== null && Fade !== null && ModalClose !== null){
        ModalClose.addEventListener("click",function(e){
            fadeOut(Modal);
            fadeOut(Fade);
        });
    }

    /*

    //GALLERY
    let gallery_default = document.querySelectorAll('.gallery_default');
    if(gallery_default !== null) {
        for (let i = 0; i < gallery_default.length; i++) {
            lightGallery(gallery_default[i], {
                selector: 'a',
            });
        }
    }

    ///SWIPER
    if(document.querySelector(".cooperation_swiper") !== null){
        var cooperation_swiper = new Swiper(".cooperation_swiper", {
            slidesPerView: 4,
            spaceBetween: 25,
            loop: true,
            navigation: {
                nextEl: ".cooperation-button-next",
                prevEl: ".cooperation-button-prev",
            },
            breakpoints:{
                200: {
                    slidesPerView:1,
                    spaceBetween:10,
                },480:{
                    slidesPerView:2,
                    spaceBetween:15,
                },991:{
                    slidesPerView:3,
                    spaceBetween:20,
                },1320:{
                    slidesPerView:4,
                }
            },
        });
    }


    ///TABS
    let tabLinks = document.querySelectorAll(".tabs_item");
    let tabPanels = document.querySelectorAll(".tab_content");
    if(tabPanels !== null && tabLinks !== null) {
        for (let el of tabLinks) {
            el.addEventListener("click", e => {
                e.preventDefault();
                if (document.querySelector(".tabs_item.active")) {
                    document.querySelector(".tabs_item.active").classList.remove("active");
                }
                if (document.querySelector(".tab_content.active")) {
                    document.querySelector(".tab_content.active").classList.remove("active");
                }
                //const parentListItem = el.parentElement;
                el.classList.add("active");
                var index = [...el.parentElement.children].indexOf(el);
                var panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
                panel[0].classList.add("active");
            });
        }
    }
    */

    var scrollToTopBtn = document.querySelector(".up");
    if (scrollToTopBtn !== null) {
        document.addEventListener("scroll", handleScroll);
        function handleScroll() {
            var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var GOLDEN_RATIO = 0.2;

            if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
                //show button
                scrollToTopBtn.style.opacity = "1";
            } else {
                //hide button
                scrollToTopBtn.style.opacity = "0";
            }
        }
        scrollToTopBtn.addEventListener("click", scrollToTop);
    }
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
})