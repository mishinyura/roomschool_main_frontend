import { Form } from '../../../assets/scripts/components/Form.js'
import { InputMask } from '../../../assets/scripts/components/InputMask.js'
import { Select } from '../../../assets/scripts/components/Select.js'
import { Header } from '../../../assets/scripts/modules/Header.js'

function main() {
    const namePage = document.querySelector('meta[name="page"]').content

    new InputMask('#inputPhoneNumber')
    const formCallback = new Form('callback__form')

    const selectCallback = new Select({
        obj: '.callback__select',
        input: '.callback__wrapper',
        options: '.callback__item'
    })

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


}

document.addEventListener("DOMContentLoaded", () => {
    main()
})