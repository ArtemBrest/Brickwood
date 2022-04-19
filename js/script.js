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
window.addEventListener("load", function () {
    let Fade = document.querySelector(".fade");
    let ModalThanks = document.getElementById("ModalThanks");
    let Modal = document.querySelector(".modal");
    let ModalClose = document.querySelector(".modal__close");
    if (Modal !== null && Fade !== null && ModalThanks !== null) {
        Fade.addEventListener("click", function (e) {
            fadeOut(ModalThanks);
            fadeOut(Modal);
            fadeOut(Fade);
        });
    }
    if (Modal !== null && Fade !== null && ModalClose !== null) {
        ModalClose.addEventListener("click", function (e) {
            fadeOut(Modal);
            fadeOut(Fade);
        });
    }

    let HeaderMobBtn = document.querySelector(".menu__btn");
    let MenuMob = document.querySelector(".menu-mob");
    let MenuOverlay = document.querySelector(".menu-overlay");
    if (HeaderMobBtn !== null && MenuMob !== null && MenuOverlay !== null) {
        HeaderMobBtn.addEventListener("click", function () {
            if (HeaderMobBtn.classList.contains("menu__btn_active")) {
                HeaderMobBtn.classList.remove("menu__btn_active");
                fadeOut(MenuMob);
                fadeOut(MenuOverlay)
            } else {
                HeaderMobBtn.classList.add("menu__btn_active");
                fadeIn(MenuMob);
                fadeIn(MenuOverlay)
            }
        });
        MenuOverlay.addEventListener("click", function () {
            if (HeaderMobBtn.classList.contains("active")) {
                HeaderMobBtn.classList.remove("active");
                fadeOut(MenuMob);
                fadeOut(MenuOverlay)
            }
        })
    }
    let tabLinks = document.querySelectorAll(".credit-calc-tabs__item");
    let tabPanels = document.querySelectorAll(".credit-calc-content__item");
    if (tabPanels !== null && tabLinks !== null) {
        for (let el of tabLinks) {
            el.addEventListener("click", e => {
                e.preventDefault();
                if (document.querySelector(".credit-calc-tabs__item.credit-calc-tabs__item--active")) {
                    document.querySelector(".credit-calc-tabs__item.credit-calc-tabs__item--active").classList.remove("credit-calc-tabs__item--active");
                }
                if (document.querySelector(".credit-calc-content__item.credit-calc-content__item--active")) {
                    document.querySelector(".credit-calc-content__item.credit-calc-content__item--active").classList.remove("credit-calc-content__item--active");
                }
                //const parentListItem = el.parentElement;
                el.classList.add("credit-calc-tabs__item--active");
                var index = [...el.parentElement.children].indexOf(el);
                var panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
                panel[0].classList.add("credit-calc-content__item--active");
            });
        }
    }
    let tabLinksSub = document.querySelectorAll(".credit-calc-content-tabs__item");
    let tabPanelsSub = document.querySelectorAll(".credit-calc-content-info__item");
    if (tabPanelsSub !== null && tabLinksSub !== null) {
        for (let el of tabLinksSub) {
            el.addEventListener("click", e => {
                e.preventDefault();
                if (document.querySelector(".credit-calc-content-tabs__item.credit-calc-content-tabs__item--active")) {
                    document.querySelector(".credit-calc-content-tabs__item.credit-calc-content-tabs__item--active").classList.remove("credit-calc-content-tabs__item--active");
                }
                if (document.querySelector(".credit-calc-content-info__item.credit-calc-content-info__item--active")) {
                    document.querySelector(".credit-calc-content-info__item.credit-calc-content-info__item--active").classList.remove("credit-calc-content-info__item--active");
                }
                //const parentListItem = el.parentElement;
                el.classList.add("credit-calc-content-tabs__item--active");
                var index = [...el.parentElement.children].indexOf(el);
                var panel = [...tabPanelsSub].filter(el => el.getAttribute("data-index") == index);
                panel[0].classList.add("credit-calc-content-info__item--active");
            });
        }
    }

    var scrollToTopBtn = document.querySelector(".up");
    if (scrollToTopBtn !== null) {
        document.addEventListener("scroll", handleScroll);

        function handleScroll() {
            var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var GOLDEN_RATIO = 0.2;

            if ((document.documentElement.scrollTop / scrollableHeight) > GOLDEN_RATIO) {
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
    if (PopupBtn !== null) {
        for (let el of PopupBtn) {
            el.addEventListener("click", function () {
                fadeIn(Modal);
                fadeIn(Fade);
            })
        }
    }


    let HeaderMenuItem = document.querySelectorAll(".menu__item");
    if (HeaderMenuItem !== null) {
        for (let i = 0; i < HeaderMenuItem.length; i++) {
            if (HeaderMenuItem[i].querySelector(".menu__sub")) {
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
                }, 100);
                if (HeaderMenuItem[i].querySelector(".menu__sub")) {
                    HeaderMenuItem[i].querySelector(".menu__sub").style.display = "flex";
                }
                if (HeaderMenuItem[i].querySelector(".building__wrapper")) {
                    HeaderMenuItem[i].querySelector(".building__wrapper").style.display = "block";
                }
            });
            HeaderMenuItem[i].addEventListener("mouseleave", function () {
                clearTimeout(mouseenter_ev);
                HeaderMenuItem[i].classList.remove("menu__item_active");
                if (HeaderMenuItem[i].querySelector(".menu__sub")) {
                    HeaderMenuItem[i].querySelector(".menu__sub").style.display = "none";
                }
                if (HeaderMenuItem[i].querySelector(".building__wrapper")) {
                    HeaderMenuItem[i].querySelector(".building__wrapper").style.display = "none";
                }
            });
        }
    }

    let ProjectSwiper = document.querySelector(".project__swiper");
    if (ProjectSwiper !== null) {
        var swiper = new Swiper(ProjectSwiper, {
            slidesPerView: "auto",
            spaceBetween: 10,
            navigation: {
                nextEl: ".project__btn-next",
                prevEl: ".project__btn-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1235: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            },
        });
    }
    let ProjectOtherSwiper = document.querySelector(".project-other__swiper");
    if (ProjectOtherSwiper !== null) {
        var swiper = new Swiper(ProjectOtherSwiper, {
            slidesPerView: "auto",
            spaceBetween: 10,
            centeredSlides: false,
            navigation: {
                nextEl: ".project__btn-next",
                prevEl: ".project__btn-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 30,
                    centeredSlides: true,
                }
            },
        });
    }
    let ProductSwiperMain = document.querySelector(".single-product__swiper-main");
    let ProductSwiperSub = document.querySelector(".single-product__swiper-sub");
    if (ProductSwiperMain !== null && ProductSwiperSub !== null) {
        var swiperSub = new Swiper(ProductSwiperSub, {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesProgress: true,
        });
        var swiperMain = new Swiper(ProductSwiperMain, {
            loop: true,
            spaceBetween: 10,
            navigation: {
                nextEl: ".single-product__btn-next",
                prevEl: ".single-product__btn-prev",
            },
            thumbs: {
                swiper: swiperSub,
            },
        });
        lightGallery(ProductSwiperMain, {
            selector: '.single-product__swiper-item',
        });
    }
    let ProductLinks = document.querySelectorAll(".tab__btn");
    let ProductPanels = document.querySelectorAll(".tab__content");
    if (ProductPanels !== null && ProductLinks !== null) {
        for (let el of ProductLinks) {
            el.addEventListener("click", e => {
                e.preventDefault();
                if (document.querySelector(".tab__btn.tab__btn_active")) {
                    document.querySelector(".tab__btn.tab__btn_active").classList.remove("tab__btn_active");
                }
                if (document.querySelector(".tab__content.tab__content_active")) {
                    document.querySelector(".tab__content.tab__content_active").classList.remove("tab__content_active");
                }
                //const parentListItem = el.parentElement;
                el.classList.add("tab__btn_active");
                var index = [...el.parentElement.children].indexOf(el);
                var panel = [...ProductPanels].filter(el => el.getAttribute("data-index") == index);
                panel[0].classList.add("tab__content_active");
            });
        }
    }

    let ProductGallery = document.querySelectorAll(".tab-gallery");
    if (ProductGallery !== null) {
        for (let i = 0; i < ProductGallery.length; i++) {
            lightGallery(ProductGallery[i], {
                selector: '.tab-gallery__card',
            });
        }
    }

    let PortfolioSwiper = document.querySelector(".portfolio__swiper");
    if (PortfolioSwiper !== null) {
        var swiper = new Swiper(PortfolioSwiper, {
            slidesPerView: "auto",
            spaceBetween: 10,
            centeredSlides: true,
            navigation: {
                nextEl: ".portfolio__btn-next",
                prevEl: ".portfolio__btn-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 30,
                    centeredSlides: true,
                }
            },
        });
    }
    let PortfolioVideo = document.querySelectorAll(".portfolio__video");
    if (PortfolioVideo !== null) {
        for (let i = 0; i < PortfolioVideo.length; i++) {
            lightGallery(PortfolioVideo[i], {
                selector: '.card__play',
                plugins: [lgVideo],
            });
        }
    }
    let PortfolioListWrapper = document.querySelector(".portfolio-list__wrapper");
    if (PortfolioListWrapper !== null) {
        lightGallery(PortfolioListWrapper, {
            selector: '.portfolio-list__item',
        });
    }
    let PortfolioReviewWrapper = document.querySelector(".portfolio-review__wrapper");
    if (PortfolioReviewWrapper !== null) {
        lightGallery(PortfolioReviewWrapper, {
            selector: '.portfolio-review__column',
            plugins: [lgVideo],
        });
    }


    let HowDoWorkSwiper = document.querySelector(".how-do-work__swiper");
    if (HowDoWorkSwiper !== null) {
        var swiper = new Swiper(HowDoWorkSwiper, {
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: ".how-do-work__btn-next",
                prevEl: ".how-do-work__btn-prev",
            },
        });
    }
    let HowDoWorkVideo = document.getElementById("how-do-work__video");
    if (HowDoWorkVideo !== null) {
        lightGallery(HowDoWorkVideo, {
            selector: '.how-do-work__play',
            plugins: [lgVideo],
        });
    }

    function initAcc(elem, option) {
        let item = elem.querySelectorAll(".faq__card-header");
        let item_content = elem.querySelectorAll(".faq__card-text");
        for (let i = 0; i < item.length; i++) {
            item[i].addEventListener('click', function (e) {
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

    function initAcccCredit(elem, option) {
        let item = elem.querySelectorAll(".info-revert__name");
        let item_content = elem.querySelectorAll(".info-revert__caption");
        for (let i = 0; i < item.length; i++) {
            item[i].addEventListener('click', function (e) {
                let content = this.parentElement.querySelector(".info-revert__caption");
                let mouseenter_ev;
                if (!this.classList.contains('info-revert__name--active')) {
                    if (option == true) {
                        for (let i = 0; i < item.length; i++) {
                            item[i].classList.remove('active');
                            mouseenter_ev = setTimeout(() => {
                                fadeOut(item_content[i]);
                            }, 100);
                        }
                    }
                    clearTimeout(mouseenter_ev);
                    this.classList.add('info-revert__name--active');
                    fadeIn(content);
                } else {
                    if (option == true) {
                        for (let i = 0; i < item.length; i++) {
                            item[i].classList.remove('info-revert__name--active');
                            mouseenter_ev = setTimeout(() => {
                                fadeOut(item_content[i]);
                            }, 100);
                        }
                    }
                    clearTimeout(mouseenter_ev);
                    this.classList.remove('info-revert__name--active');
                    fadeOut(content);
                }
            });
        }
    }

    let CreditContent = document.querySelector(".credit-calc__content");
    if (CreditContent !== null) {
        initAcccCredit(CreditContent, false);
    }
    let HelpfulSwiper = document.querySelector(".helpful__swiper");
    if (HelpfulSwiper !== null) {
        var swiper = new Swiper(HelpfulSwiper, {
            slidesPerView: "auto",
            spaceBetween: 10,
            centeredSlides: false,
            navigation: {
                nextEl: ".helpful__btn-next",
                prevEl: ".helpful__btn-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 30,
                    centeredSlides: true,
                }
            },
        });
    }
    let AboutVideoSwiper = document.querySelector(".about-video__swiper");
    if (AboutVideoSwiper !== null) {
        var swiper = new Swiper(AboutVideoSwiper, {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            navigation: {
                nextEl: ".about-video__btn-next",
                prevEl: ".about-video__btn-prev",
            },
            breakpoints: {
                1235: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                }
            },
        });
        lightGallery(AboutVideoSwiper, {
            selector: '.about-video__item',
            plugins: [lgVideo],
        });
    }
    let TeamSwiper = document.querySelector(".team__swiper");
    if (TeamSwiper !== null) {
        var swiper = new Swiper(TeamSwiper, {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            navigation: {
                nextEl: ".team__btn-next",
                prevEl: ".team__btn-prev",
            },
            breakpoints: {
                1235: {
                    slidesPerView: "auto",
                    spaceBetween: 30,
                }
            },
        });
        lightGallery(TeamSwiper, {
            selector: '.team__card',
            plugins: [lgVideo],
        });
    }
    let LookSlider = document.getElementById("look__slider");
    if (LookSlider !== null) {
        Cocoen.create(LookSlider);
    }

    let ServicesItem = document.querySelectorAll(".services-grid-item__arrow_full");
    let ServicesItemClose = document.querySelectorAll(".services-grid-item__icon");
    if (ServicesItem !== null && ServicesItemClose !== null) {
        for (let i = 0; i < ServicesItem.length; i++) {
            ServicesItem[i].addEventListener("click", function () {
                var parent = ServicesItem[i].parentNode;
                if (parent.classList.contains("services-grid-item--active")) {
                    parent.classList.remove("services-grid-item--active");
                } else {
                    parent.classList.add("services-grid-item--active");
                }
            });
            ServicesItemClose[i].addEventListener("click", function () {
                var parent = ServicesItemClose[i].parentNode.parentNode;
                if (parent.classList.contains("services-grid-item--active")) {
                    parent.classList.remove("services-grid-item--active");
                }
            });
        }
    }

    let IndividualSwiperMain = document.querySelector(".individual-include__swiper-main");
    let IndividualSwiperSub = document.querySelector(".individual-include__swiper-sub");
    if (IndividualSwiperMain !== null && IndividualSwiperSub !== null) {
        var swiperSub = new Swiper(IndividualSwiperSub, {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });
        var swiperMain = new Swiper(IndividualSwiperMain, {
            loop: true,
            spaceBetween: 10,
            navigation: {
                nextEl: ".individual-include__btn-next",
                prevEl: ".individual-include__btn-prev",
            },
            thumbs: {
                swiper: swiperSub,
            },
        });
        lightGallery(IndividualSwiperMain, {
            selector: '.individual-include__swiper-item',
        });
    }


    var skroll = new Skroll()
        .addAnimation("custom", {
            start: function (el) {
                el.style["opacity"] = 0;
            },
            end: function (el) {
                el.style["opacity"] = 1;
            }
        }).add(".anim1", {
            animation: "custom",
            duration: 1000,
            delay: 300
        })
        .add(".anim5", {
            animation: "slideInLeft",
            delay: 300,
            duration: 1000,
        })
        .add(".anim6", {
            animation: "slideInRight",
            delay: 300,
            duration: 1000,
        }).init();
})