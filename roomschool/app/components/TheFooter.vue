<template>
  <footer class="footer">
    <div class="footer__form callback">
      <div class="callback__container">
        <h3 class="callback__title" id="#callback-title">Оставьте Ваш телефон для связи</h3>
        <p class="callback__description">
          Менеджер свяжется с вами в ближайшие 30 минут
        </p>
        <form action="/" method="post" class="callback__form">
          <label class="callback__input">
            <input
              type="text"
              placeholder="Имя"
              name="name"
              id="inputUserName"
              data-validate="name"
              required
            />
          </label>
          <label class="callback__input">
            <input
              type="text"
              placeholder="Телефон"
              name="phone"
              data-validate="phone"
              ref="inputPhoneNumber"
              required
            />
          </label>
          <TheSelect />
          <!-- <TheSelect
            class="callback__input"
            name="method"
            type="text"
            data-validate="select"
            data-method="phone"
            readonly
            placeholder="Способ связи"
          /> -->
          <!-- <div class="callback__select">
            <label class="callback__wrapper">
              <input
                class="callback__input"
                name="method"
                type="text"
                data-validate="select"
                data-method="phone"
                readonly
                placeholder="Способ связи"
              />
            </label>
            <ul class="callback__list">
              <li class="callback__item" data-method="telegram">Telegram</li>
              <li class="callback__item" data-method="phone">По телефону</li>
              <li class="callback__item" data-method="whatsapp">What's app</li>
            </ul>
          </div> -->
          <label class="callback__label">
            <input type="checkbox" checked name="agreement" required>
            <span class="callback__checkbox"></span>
            <span class="callback__link">Отправляя вы соглашаетесь на 
              <a href="/documents/consent_processing_personal_data.pdf" target="_blank">
                обработку персональных данных
              </a>
            </span>
          </label>
          <button class="callback__btn callback__btn_classic" type="submit">
            Отправить
          </button>
        </form>
        <p class="callback__description">
          Еще больше полезной информации мы оставляем в наших социальных сетях
          или по телефону
        </p>

        <ul class="callback__media socials">
          <li class="socials__item">
            <a class="socials__link socials__link_black" href="#" tabindex="0">
              <svg
                class="socials__svg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use xlink:href="#telegram-icon"></use>
              </svg>
            </a>
          </li>
          <li class="socials__item">
            <a class="socials__link socials__link_green" href="#" tabindex="0">
              <svg
                class="socials__svg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use xlink:href="#whatsapp-icon"></use>
              </svg>
            </a>
          </li>
          <li class="socials__item">
            <a class="socials__link socials__link_blue" href="#" tabindex="0">
              <svg
                class="socials__svg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use xlink:href="#vk-icon"></use>
              </svg>
            </a>
          </li>
          <li class="socials__item">
            <a class="socials__link socials__link_red" href="#" tabindex="0">
              <svg
                class="socials__svg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use xlink:href="#instagram-icon"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <nav class="footer__nav bottommenu">
      <div class="bottommenu__container">
        <div class="bottommenu__wrapper">
          <h4 class="bottommenu__title">Документы</h4>
          <ul class="bottommenu__list">
            <li class="bottommenu__item">
              <a href="#" class="bottommenu__link" tabindex="0">
                Договор на оказание образовательных услуг
              </a>
            </li>
            <li class="bottommenu__item">
              <a href="#" class="bottommenu__link" tabindex="0">
                Лицензия на образовательную деятельность
              </a>
            </li>
            <li class="bottommenu__item">
              <a href="#" class="bottommenu__link" tabindex="0">
                Соглашение на обработку персональных данных
              </a>
            </li>
            <li class="bottommenu__item">
              <a href="#" class="bottommenu__link" tabindex="0">
                Политика конфиденциальности
              </a>
            </li>
            <li class="bottommenu__item">
              <a href="/documents/agreement_roomschool.pdf" class="bottommenu__link" tabindex="0">
                Пользовательское соглашение
              </a>
            </li>
            <li class="bottommenu__item">
              <a href="#" class="bottommenu__link" tabindex="0">
                Регистрационные документы
              </a>
            </li>
          </ul>
        </div>
        <div class="bottommenu__wrapper">
          <h4 class="bottommenu__title">Информация</h4>
          <ul class="bottommenu__list">
            <li class="bottommenu__item">
              <a href="#" class="bottommenu__link" tabindex="0"> Статьи </a>
            </li>
            <li class="bottommenu__item">
              <a href="#" class="bottommenu__link" tabindex="0">
                Ответы на вопросы
              </a>
            </li>
            <li class="bottommenu__item">
              <a href="#" class="bottommenu__link" tabindex="0">
                Спортивные секции
              </a>
            </li>
            <li class="bottommenu__item">
              <a href="#" class="bottommenu__link" tabindex="0"> Полезное </a>
            </li>
            <li class="bottommenu__item">
              <a href="#" class="bottommenu__link" tabindex="0"> Блог </a>
            </li>
          </ul>
        </div>
        <div class="bottommenu__wrapper">
          <h4 class="bottommenu__title">Служебные</h4>
          <ul class="bottommenu__list">
            <li class="bottommenu__item">
              <a href="#" class="bottommenu__link" tabindex="0"> О школе </a>
            </li>
            <li class="bottommenu__item">
              <a href="#" class="bottommenu__link" tabindex="0">
                Техническая поддержка
              </a>
            </li>
            <li class="bottommenu__item">
              <a href="#" class="bottommenu__link" tabindex="0">
                Администрация школы
              </a>
            </li>
            <li class="bottommenu__item">
              <a href="#" class="bottommenu__link" tabindex="0">
                Контактная информация
              </a>
            </li>
            <li class="bottommenu__item">
              <a href="#" class="bottommenu__link" tabindex="0"> Вакансии </a>
            </li>
            <li class="bottommenu__item">
              <a href="#" class="bottommenu__link" tabindex="0">
                Сотрудничество
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="footer__copy copyright">
      <div class="copyright__container">
        <p class="copyright__warning">
          © <span id="year">2025</span> ООО «РУМСКУЛ ТЕХНОЛОГИИ». Все права
          защищены.
        </p>
        <p class="copyright__alert">
          Компания запрещает любое копирование текста, элементов дизайна и кода.
          Все запросы и действия логируются и ограничиваются для предотвращения
          парсинга или других несанкционированных действий, нарушающих
          действующее законодательство РФ.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { InputMask } from "../assets/scripts/components/InputMask.js";
import TheSelect from "./TheSelect.vue";

new InputMask("#inputPhoneNumber");

export default {
  components: { TheSelect },
  data() {
    return {};
  },
  mounted() {
    const inputPhoneNumber = this.$refs.inputPhoneNumber;
    if (inputPhoneNumber) {
      new InputMask(inputPhoneNumber);
    }
  },
};
</script>


<style>
/* 
_____________
Footer
_____________
*/
.footer {
  position: relative;
  background: var(--color-bg-blue-purpure-linear-gradient);
}

.footer__container {
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: var(--padding-tb-container-desktop)
    var(--padding-lr-container-desktop);
}

/* 
_____________
Секция формы обратной связи
_____________
*/
.container {
  position: relative;
  background: linear-gradient(
    135deg,
    rgb(179, 208, 253) 0%,
    rgb(164, 202, 248) 100%
  );
  border-radius: 1000px;
  padding: 10px;
  display: grid;
  place-content: center;
  z-index: 0;
  max-width: 300px;
  margin: 0 10px;
}

.callback__input {
  position: relative;
  width: 100%;
  border-radius: 50px;
  background: linear-gradient(
    135deg,
    rgb(218, 232, 247) 0%,
    rgb(214, 229, 247) 100%
  );
  padding: 5px;
  display: flex;
  align-items: center;
}

.callback__input::after,
.callback__input::before {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: inherit;
  position: absolute;
}

.callback__input::before {
  top: -1px;
  left: -1px;
  background: linear-gradient(
    0deg,
    rgb(218, 232, 247) 0%,
    rgb(255, 255, 255) 100%
  );
  z-index: -1;
}

.callback__input::after {
  bottom: -1px;
  right: -1px;
  background: linear-gradient(
    0deg,
    rgb(163, 206, 255) 0%,
    rgb(211, 232, 255) 100%
  );
  box-shadow: rgba(79, 156, 232, 0.7019607843) 3px 3px 5px 0px,
    rgba(79, 156, 232, 0.7019607843) 5px 5px 20px 0px;
  z-index: -2;
}

.callback__input input {
  padding: 10px;
  width: 100%;
  background: linear-gradient(
    135deg,
    rgb(218, 232, 247) 0%,
    rgb(214, 229, 247) 100%
  );
  border: none;
  color: var(--color-text-black);
  font-size: 20px;
  border-radius: 50px;
}

.callback__input input:focus {
  outline: none;
  background: linear-gradient(
    135deg,
    rgb(239, 247, 255) 0%,
    rgb(214, 229, 247) 100%
  );
}

.search__icon {
  width: 50px;
  aspect-ratio: 1;
  border-left: 2px solid white;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-radius: 50%;
  padding-left: 12px;
  margin-right: 10px;
}

.search__icon:hover {
  border-left: 3px solid white;
}

.search__icon path {
  fill: white;
}

.callback {
  border-bottom: var(--border-white);
}

.callback__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: var(--padding-tb-container-desktop)
    var(--padding-lr-container-desktop) 20px;
}

.callback__title {
  margin-bottom: var(--margin-bottom-title);
}

.callback__description {
  max-width: 50%;
  margin-bottom: var(--margin-bottom-description);
  text-align: center;
  font-size: var(--font-size-text-lg);
}

.callback__form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  width: 40%;
  margin-bottom: var(--margin-bottom-description);
}

/* .callback__input input {
  width: 100%;
  padding: 0.5em 1em;
  border: var(--border-white);
  border-radius: var(--radius-lg);
  box-sizing: border-box;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-sm);
  background-color: var(--color-form-white-transparent);
  color: var(--color-text-black);
}

.callback__label input::placeholder {
  color: var(--color-text-white);
} */

/* .callback__select {
  position: relative;
  align-self: stretch;
  border: var(--border-white);
  border-radius: var(--radius-lg);
  background-color: #fff;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-sm);
  background-color: var(--color-form-white-transparent);
  color: var(--color-text-white);
}

.callback__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 1em;
  cursor: pointer;
}

.callback__wrapper::after {
  width: 10px;
  height: 10px;
  border-bottom: 1px solid #fff;
  border-left: 1px solid #fff;
  content: "";
  transform: rotate(-45deg);
  z-index: 5;
  pointer-events: none;
}

.callback__wrapper input {
  width: 100%;
  cursor: pointer;
  margin-right: 5px;
  z-index: 1;
  background-color: transparent;
  color: var(--color-text-black);
}

.callback__wrapper input::placeholder {
  color: var(--color-text-white);
}

.callback__list {
  position: absolute;
  top: 120%;
  width: 100%;
  padding: 20px 10px;
  border-radius: var(--radius-lg);
  box-sizing: border-box;
  visibility: hidden;
  opacity: 0;
  background-color: #fff;
  transition: opacity 0.1s, visibility 0.1s, top 0.1s;
}

.callback__list.active {
  top: 100%;
  visibility: visible;
  opacity: 1;
}

.callback__item {
  cursor: pointer;
  transition: color 0.1s;
  color: var(--color-text-black);
}

.callback__item:not(:last-child) {
  margin-bottom: 10px;
}

.callback__item.selected {
  color: var(--color-text-blue);
}

.callback__item:hover {
  color: var(--color-text-blue);
} */

.callback__label {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.callback__label input{
  display: none;
}

.callback__checkbox {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-text-white);
  border-radius: 4px;
  box-sizing: border-box;
  margin-right: 10px;
  cursor: pointer;
}
.callback__checkbox::before {
  content: "";
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: var(--color-bg-white);
  transform: scale(0);
  transition: transform 0.1s;
}
.callback__label input:checked + .callback__checkbox::before {
  transform: scale(1);
}

.callback__link{
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-min);
  color: var(--color-text-white);
}

.callback__link a{
  color: var(--color-text-white);
}

.callback__btn {
  padding: 0.5em 1em;
  border-radius: var(--radius-lg);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-sm);
  font-weight: 500;
  background: var(--color-bg-blue);
}

.connection {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 0;
  margin-bottom: 30px;
  border-bottom: var(--border-white);
}

.connection__container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: 20px var(--padding-lr-container-desktop);
}

.connection__description {
  max-width: 50%;
  margin-bottom: var(--margin-bottom-description);
  text-align: center;
  font-size: var(--font-size-text-sm);
}

.socials {
  display: flex;
  align-items: center;
  gap: 10px;
}

.socials__link {
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 50px;
  overflow: hidden;
  background-color: #fff;
}

.socials__svg {
  position: relative;
  width: 100%;
  height: 100%;
  color: #262626;
  transition: 0.5s;
  z-index: 3;
}

.socials__link:hover .socials__svg {
  color: #fff;
  transform: rotateY(360deg);
}

.socials__link:before {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f00;
  transition: 0.5s;
  z-index: 2;
  content: "";
}

.socials__link:hover:before {
  top: 0;
}

.socials__link_black:before {
  background: #282828;
}

.socials__link_green:before {
  background: #62ee55;
}

.socials__link_blue:before {
  background: #0077b5;
}

.socials__link_red:before {
  background: #dd4b39;
}

.bottommenu__container {
  margin-bottom: 50px;
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: 0 var(--padding-lr-container-desktop);
}

.bottommenu__wrapper {
  margin-bottom: 20px;
  padding: 1em 0;
  border-bottom: var(--border-white);
  border-radius: var(--radius-lg);
}

.bottommenu__title {
  margin-bottom: 15px;
  text-align: center;
}

.bottommenu__list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--margin-cards);
}

.bottommenu__item {
  position: relative;
  display: flex;
  align-items: center;
  border: var(--border-white);
  border-radius: var(--radius-md);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-sm);
  font-weight: 400;
  transition: transform 0.1s;
}

.bottommenu__link {
  position: relative;
  left: 0;
  display: block;
  padding: 0.3em 0.8em;
  transition: color 0.1s, left 0.1s;
}

.bottommenu__item:hover .bottommenu__link {
  color: var(--color-action-white);
}

.bottommenu__link:focus-visible {
  color: var(--color-action-blue);
}

.copyright__container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 50px;
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: 20px var(--padding-lr-container-desktop) 100px;
  border-bottom: var(--border-white);
}

.copyright__warning {
  margin-bottom: 5px;
  text-align: center;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-xs);
  font-weight: 500;
}

.copyright__alert {
  text-align: center;
  font-family: var(--font-family-nunito);
  font-size: var(--font-size-text-min);
  font-weight: 300;
  color: var(--color-text-dark-grey);
}

/* 1400 px */
@media (max-width: 87.5rem) {
  .footer__container {
    max-width: var(--max-width-container-laptop);
  }

  .callback__container {
    max-width: var(--max-width-container-laptop);
  }

  .connection__container {
    max-width: var(--max-width-container-laptop);
  }

  .bottommenu__container {
    max-width: var(--max-width-container-laptop);
  }

  .copyright__container {
    max-width: var(--max-width-container-laptop);
  }
}

/* 1200 px */
@media (max-width: 75rem) {
  .footer__container {
    max-width: var(--max-width-container-tablet);
    padding: 0 var(--padding-lr-container-tablet);
  }

  .callback__container {
    max-width: var(--max-width-container-tablet);
  }

  .connection__container {
    max-width: var(--max-width-container-tablet);
  }

  .bottommenu__container {
    max-width: var(--max-width-container-tablet);
  }

  .copyright__container {
    max-width: var(--max-width-container-tablet);
  }
}

/* 992 px */
@media (max-width: 62rem) {
  .footer__container {
    max-width: var(--max-width-container-smartphone);
  }

  .callback__container {
    max-width: var(--max-width-container-smartphone);
  }

  .callback__title {
    font-size: var(--font-size-title-md);
  }

  .callback__description {
    font-size: var(--font-size-text-md);
  }

  .connection__container {
    max-width: var(--max-width-container-smartphone);
  }

  .bottommenu__container {
    max-width: var(--max-width-container-smartphone);
  }

  .copyright__container {
    display: block;
    max-width: var(--max-width-container-smartphone);
  }
}

/* 768 px */
@media (max-width: 48rem) {
  .footer__container {
    max-width: var(--max-width-container-mobile);
    padding: 1em var(--padding-lr-container-mobile);
  }

  .callback__container {
    max-width: var(--max-width-container-mobile);
  }

  .connection__container {
    max-width: var(--max-width-container-mobile);
  }

  .bottommenu__container {
    max-width: var(--max-width-container-mobile);
  }

  .copyright__container {
    max-width: var(--max-width-container-mobile);
  }
}

/* 576 px */
@media (max-width: 36rem) {
  .footer__container {
    justify-content: center;
    max-width: 100%;
  }

  .callback__container {
    justify-content: center;
    max-width: 100%;
  }

  .callback__form {
    width: 100%;
  }

  .connection__container {
    justify-content: center;
    max-width: 100%;
  }

  .bottommenu__container {
    justify-content: center;
    max-width: 100%;
  }

  .copyright__container {
    justify-content: center;
    max-width: 100%;
  }
}
</style>