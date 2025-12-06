/**
 * @module Select
 * @description Объект Select создает кастомный раскрывающийся
 * список, регулирует показ списка и управляет выбором
 */

export class Select {
    constructor(settings) {
        this.container = document.querySelector(settings.obj)
        this.wrapper = this.container.querySelector(settings.input)

        this.selected = this.wrapper.querySelector('input')
        this.choices = this.container.querySelectorAll(settings.options)
        this.list = this.choices[0].parentElement

        this.handlerShowList = this.showList.bind(this)
        this.handlerHideList = this.hideList.bind(this)

        this.wrapper.addEventListener('click', this.handlerShowList)

        for (let item of this.choices) {
            item.addEventListener('click', this.handlerHideList)
        }
    }

    setChoice(elem) {
        let data = elem.dataset.way
        let value = elem.innerText
        this.selected.dataset.way = data
        this.selected.value = value

        for (let item of this.choices) {
            item.classList.remove('selected')
        }
        elem.classList.add('selected')
    }

    showList() {
        if (!this.list.classList.contains('active')) {
            this.list.classList.add('active')
        }
        this.handleOutside = (e) => this.closeIfOutside(e);
        document.addEventListener('click', this.handleOutside);
    }

    closeIfOutside(e) {
        if (this.container.contains(e.target)) return;

        this.list.classList.remove('active');
        document.removeEventListener('click', this.handleOutside);
    }

    hideList(elem) {
        this.list.classList.remove('active')
        this.setChoice(elem.target)
    }
}
// import { createElement } from '../utils.js'

// class SelectBuilder{
//     createSelector() {
//         let selector = createElement('div', 'selector')

//         return selector
//     }

//     createBtn() {
//         let wrapper = createElement('label', 'selector__wrapper')
//         let input = createElement('input', 'selector__input', {'name': 'method'})
//     }

//     createSelect(lst) {
//         this.container.classList.add('selector')
        
//         let lst = createElement('ul', 'selector__list')

//         for (let item of lst) {
//             let li = document.createElement('li', 'selector__item')
//             li.innerText = item
//             lst.appendChild(li)
//         }
//     }
// }

// export class Select {
//     constructor({container, placeholder, options, defaulValue}) {
//         this.container = document.querySelector(container)
        
//         this.options = options ? options : new Error('Select: options not found')
//         this.activeItem = this.options[defaulValue] ? defaulValue : null
//     }

//     open() {
//         this.container.classList.add('open')
//     }

//     close() {
//         this.container.classList.remove('open')
//     }
// }