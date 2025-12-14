import { Select } from '../../assets/scripts/components/Select.js';

const { createApp } = Vue;

function main() {
    const headerSettings = {
        data() {
            return {
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

    const sortedSelect = new Select({
        obj: '.filters__select',
        input: '.filters__wrapper',
        options: '.filters__sort'
    })
}

document.addEventListener("DOMContentLoaded", () => {
    main()
})