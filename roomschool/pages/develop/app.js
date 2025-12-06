import { Select } from '../../assets/scripts/components/Select.js';
import { Header } from '../../assets/scripts/modules/Header.js';

function main() {
    const header = new Header({
        elements: {
            header: ".header",
            burger: "#burger",
            searchBtn: ".panel__btn_search",
            searchInput: ".panel__form",
            chatBtn: ".header__chat-btn",
        },

        handlers: {
            header: {
                target: 'window',
                event: "scroll",
                callback() {
                    this.onScroll();
                }
            },
            burger: {
                event: "click",
                callback() {
                    this.toggleMenu();
                },
            },
            searchBtn: {
                event: "click",
                callback() {
                    this.toggleSearch();
                },
            },
            searchInput: {
                event: "input",
                callback(e) {
                    this.searchData();
                },
            },
            chatBtn: {
                event: "click",
                callback() {
                    this.handleChat();
                },
            },
        },
    });

    const sortedSelect = new Select({
        obj: '.filters__select',
        input: '.filters__wrapper',
        options: '.filters__sort'
    })
}

document.addEventListener("DOMContentLoaded", () => {
    main()
})