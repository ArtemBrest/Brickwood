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

    let PopupBtn = document.querySelectorAll(".PopupBtn");
    if(PopupBtn !== null) {
        for (let el of PopupBtn) {
            el.addEventListener("click", function () {
                fadeIn(Modal);
                fadeIn(Fade);
            })
        }
    }


    let HeaderMenuItem = document.querySelectorAll(".menu__item");
    if(HeaderMenuItem !== null){
        for (let i = 0; i < HeaderMenuItem.length; i++){
            if(HeaderMenuItem[i].querySelector(".menu__sub")){
                let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("class", "menu__item-icon");
                svg.setAttribute("viewBox", "0 0 14 8");
                svg.setAttribute("width", "14");
                svg.setAttribute("height", "8");
                svg.setAttribute("fill", "none");
                let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("stroke", "#303030");
                path.setAttribute("d", "M1 1L7 7L13 1");
                svg.appendChild(path);
                HeaderMenuItem[i].appendChild(svg);
            }
            var mouseenter_ev;
            HeaderMenuItem[i].addEventListener("mouseenter", function () {
                mouseenter_ev = setTimeout(() => {
                    HeaderMenuItem[i].classList.add("menu__item_active");
                },100);
                if(HeaderMenuItem[i].querySelector(".menu__sub")){
                    HeaderMenuItem[i].querySelector(".menu__sub").style.display = "flex";
                }
                if(HeaderMenuItem[i].querySelector(".building__wrapper")){
                    HeaderMenuItem[i].querySelector(".building__wrapper").style.display = "block";
                }
            });
            HeaderMenuItem[i].addEventListener("mouseleave", function () {
                clearTimeout(mouseenter_ev);
                HeaderMenuItem[i].classList.remove("menu__item_active");
                if(HeaderMenuItem[i].querySelector(".menu__sub")){
                    HeaderMenuItem[i].querySelector(".menu__sub").style.display = "none";
                }
                if(HeaderMenuItem[i].querySelector(".building__wrapper")){
                    HeaderMenuItem[i].querySelector(".building__wrapper").style.display = "none";
                }
            });
        }
    }

    let ProjectSwiper = document.querySelector(".project__swiper");
    if(ProjectSwiper !== null){
        var swiper = new Swiper(ProjectSwiper, {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            navigation: {
                nextEl: ".project__btn-next",
                prevEl: ".project__btn-prev",
            },
            breakpoints:{
                1235:{
                    slidesPerView:3,
                    spaceBetween: 30,
                }
            },
        });
    }
    function initAcc(elem, option) {
        let item = elem.querySelectorAll(".faq__card-header");
        let item_content = elem.querySelectorAll(".faq__card-text");
        for (let i = 0; i < item.length; i++) {
            item[i].addEventListener('click', function(e) {
                let content = this.parentElement.querySelector(".faq__card-text");
                let mouseenter_ev;
                if (!this.classList.contains('faq__card-header_active')) {
                    if (option == true) {
                        for (let i = 0; i < item.length; i++) {
                            item[i].classList.remove('active');
                            mouseenter_ev = setTimeout(() => {
                                fadeOut(item_content[i]);
                            }, 100);
                        }
                    }
                    clearTimeout(mouseenter_ev);
                    this.classList.add('faq__card-header_active');
                    fadeIn(content);
                } else {
                    if (option == true) {
                        for (let i = 0; i < item.length; i++) {
                            item[i].classList.remove('faq__card-header_active');
                            mouseenter_ev = setTimeout(() => {
                                fadeOut(item_content[i]);
                            }, 100);
                        }
                    }
                    clearTimeout(mouseenter_ev);
                    this.classList.remove('faq__card-header_active');
                    fadeOut(content);
                }
            });
        }
    }
    let FAQ = document.querySelector(".faq");
    if (FAQ !== null) {
        initAcc(FAQ, false);
    }

    let HelpfulSwiper = document.querySelector(".helpful__swiper");
    if(HelpfulSwiper !== null){
        var swiper = new Swiper(HelpfulSwiper, {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            navigation: {
                nextEl: ".helpful__btn-next",
                prevEl: ".helpful__btn-prev",
            },
            breakpoints:{
                1235:{
                    slidesPerView: "auto",
                    spaceBetween: 30,
                }
            },
        });
    }
    let LookSlider = document.getElementById("look__slider");
    if(LookSlider !== null){
        Cocoen.create(LookSlider);
    }
})