

const { createApp, createSSRApp } = Vue;

function main() {
    const namePage = document.querySelector('meta[name="page"]').content


    const coursesSlider = new Swiper('.reviews__slider', {
        direction: 'horizontal',
        loop: true,
        speed: 400,
        spaceBetween: 40,
        slidesPerView: 1,
        effect: 'cube',
        autoHeight: true,
        // centeredSlides: true,

        wrapperClass: 'reviews__wrapper',
        slideClass: 'reviews__slide',
        pagination: {
            el: '.swiper-pagination',
        },

        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
    })


    const headerSettings = {
        data() {
            return {
                message: 'Привет Vue!',
                isOpenSubMenu: false,
                isOpenSearch: false,
                isScrolled: false
            }
        },
        methods: {
            toggleSubMenu() {
                this.isOpenSubMenu = !this.isOpenSubMenu
            },
            toggleSearch() {
                this.isOpenSearch = !this.isOpenSearch
            },
            handleScroll() {
                this.isScrolled = window.scrollY > 50;
            }
        },
        watch: {
            isScrolled(newValue) {
                const headerEl = document.querySelector('.header');
                if (newValue) {
                    headerEl.classList.add('scrolled');
                } else {
                    headerEl.classList.remove('scrolled');
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        }
    }



    const headerApp = createApp(headerSettings)
    headerApp.mount('.header')
}

document.addEventListener("DOMContentLoaded", () => {
    main()
})