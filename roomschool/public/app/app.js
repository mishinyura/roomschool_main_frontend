import { Form } from '../assets/scripts/components/Form.js';
import { InputMask } from '../assets/scripts/components/InputMask.js';
import { Select } from '../assets/scripts/components/Select.js';

import coursesJson from './data/courses.json' with { type: "json" };

const { createApp } = Vue;

function main() {
    const namePage = document.querySelector('meta[name="page"]').content

    new InputMask('#inputPhoneNumber')
    const formCallback = new Form('callback__form')

    const selectCallback = new Select({
        obj: '.callback__select',
        input: '.callback__wrapper',
        options: '.callback__item'
    })

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

    const coursesSettings = {
        data() {
            return {
                courses: coursesJson
            }
        },
        methods: {
            getLabel(label) {
                switch (label) {
                    case 'popular':
                        return 'Популярный'
                    case 'new':
                        return 'Новый'
                    case 'recommendation':
                        return 'Рекомендуем'
                    default:
                        return 'Скоро'
                }
            }
        }
    }


    const headerApp = createApp(headerSettings)
    const coursesApp = createApp(coursesSettings)
    headerApp.mount('.header')
    coursesApp.mount('.courses')
}

document.addEventListener("DOMContentLoaded", () => {
    main()
})