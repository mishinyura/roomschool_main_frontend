<template>
  <header class="header" v-cloak>
    <div class="header__container">
      <a href="/" class="header__logo">
        <svg viewBox="0.4 0.1 80 32">
          <use href="#logo-full-icon"></use>
        </svg>
      </a>
      <nav class="header__nav">
        <ul :class="['header__menu topmenu', { active: isOpenSubMenu }]">
          <li class="tobmenu__item">
            <a href="/" class="topmenu__link" data-text="Школа"> Школа </a>
            <div class="topmenu__dropdown submenu">
              <div class="submenu__col">
                <ul class="submenu__list">
                  <li class="submenu__item">
                    <NuxtLink to="/about" class="submenu__link">
                      <span class="submenu__name"> История школы </span>
                    </NuxtLink>
                  </li>
                  <li class="submenu__item">
                    <NuxtLink to="/documents" class="submenu__link">
                      <span class="submenu__name"> Правовая информация </span>
                      <span class="submenu__description">
                        Юридические документы, договора, лицензия
                      </span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="tobmenu__item">
            <NuxtLink to="/courses" class="topmenu__link" data-text="Программы">
              Программы
            </NuxtLink>
            <div class="topmenu__dropdown submenu">
              <div class="submenu__col">
                <a href="#" class="submenu__title"> Технические </a>
                <ul class="submenu__list">
                  <li class="submenu__item">
                    <NuxtLink to="/courses/main-programming" class="submenu__link">
                      <span class="submenu__name">
                        Основы программирования
                      </span>
                      <span class="submenu__description">
                        Программа обучения детей от 9 по 17 лет
                      </span>
                    </NuxtLink>
                  </li>
                  <li class="submenu__item">
                    <NuxtLink to="/courses/base-programming" class="submenu__link">
                      <span class="submenu__name">
                        Базовое программирование на Python
                      </span>
                      <span class="submenu__description">
                        Изучение основного синтаксиса языка
                      </span>
                    </NuxtLink>
                  </li>
                  <li class="submenu__item">
                    <NuxtLink to="/courses/base-programming-go" class="submenu__link">
                      <span class="submenu__name">
                        Базовое программирование на Go
                      </span>
                      <span class="submenu__description">
                        Изучение основного синтаксиса языка
                      </span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="submenu__col">
                <a href="#" class="submenu__title"> Социальные </a>
                <ul class="submenu__list">
                  <li class="submenu__item">
                    <NuxtLink to="/courses/finance" class="submenu__link">
                      <span class="submenu__name">
                        Финансовая граммотность
                      </span>
                      <span class="submenu__description">
                        Организация финансовой устойчивости нового поколения
                      </span>
                    </NuxtLink>
                  </li>
                  <li class="submenu__item">
                    <NuxtLink to="/courses/emotional" class="submenu__link">
                      <span class="submenu__name">
                        Эмоциональная граммотность
                      </span>
                      <span class="submenu__description">
                        Изучение природы эмоций и управление ими
                      </span>
                    </NuxtLink>
                  </li>
                  <li class="submenu__item">
                    <NuxtLink to="/courses/legal" class="submenu__link">
                      <span class="submenu__name">
                        Юридическая граммотность
                      </span>
                      <span class="submenu__description">
                        Основные юридические знания
                      </span>
                    </NuxtLink>
                  </li>
                  <li class="submenu__item">
                    <NuxtLink to="/courses/time-management" class="submenu__link">
                      <span class="submenu__name"> Тайм-менеджмент </span>
                      <span class="submenu__description">
                        Научим распоряжаться временем с пользой
                      </span>
                    </NuxtLink>
                  </li>
                  <li class="submenu__item">
                    <NuxtLink to="/courses/oratorical" class="submenu__link">
                      <span class="submenu__name"> Ораторское искусство </span>
                      <span class="submenu__description">
                        Освоим современные способы коммуникации
                      </span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="submenu__col">
                <ul class="submenu__list">
                  <li class="submenu__item">
                    <NuxtLink to="/courses/main" class="submenu__link">
                      <span class="submenu__name"> Общая образовательная </span>
                      <span class="submenu__description">
                        Начальная школа (1-4 класс), средняя (5-8 класс) и
                        старшая (9-11 класс)
                      </span>
                    </NuxtLink>
                  </li>
                  <li class="submenu__item">
                    <NuxtLink to="/courses/professional" class="submenu__link">
                      <span class="submenu__name"> Профессиональная </span>
                    </NuxtLink>
                  </li>
                  <li class="submenu__item">
                    <NuxtLink to="/courses/international" class="submenu__link">
                      <span class="submenu__name"> Международная </span>
                    </NuxtLink>
                  </li>
                  <li class="submenu__item">
                    <NuxtLink to="/courses/individual" class="submenu__link">
                      <span class="submenu__name"> Индивидуальная </span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="tobmenu__item">
            <a href="/articles" class="topmenu__link" data-text="Статьи">
              Статьи
            </a>
          </li>
        </ul>
      </nav>
      <div class="header__btns panel">
        <form
          action="/"
          :class="['panel__form search', { active: isOpenSearch }]"
        >
          <div class="search__head">
            <h5 class="search__title">Поиск по сайту</h5>
            <button
              class="search__close"
              type="button"
              @click="toggleSearch"
            ></button>
          </div>
          <div class="search__input">
            <label class="search__label">
              <input
                type="text"
                placeholder="Введите запрос для поиска курсов или статей"
              />
            </label>
            <button class="search__btn search__btn_classic">Найти</button>
          </div>
          <div class="search__templates">
            <span class="search__subtitle"> Популярные запросы: </span>
            <ul class="search__list">
              <li class="search__item" tabindex="0">Программирование</li>
              <li class="search__item" tabindex="0">Финансовая грамотность</li>
              <li class="search__item" tabindex="0">AI в образовании</li>
              <li class="search__item" tabindex="0">Эмоциональный интеллект</li>
            </ul>
          </div>
        </form>
        <button
          class="panel__btn panel__btn_search"
          tabindex="0"
          @click="toggleSearch"
        ></button>
        <a href="#" class="panel__btn panel__btn_login" tabindex="0"> </a>
        <button class="panel__btn panel__btn_chat panel__btn_grey" tabindex="0">
          <span class="panel__btn-text"> Подобрать </span>
        </button>
        <button
          :class="['panel__btn panel__btn_burger', { open: isOpenSubMenu }]"
          id="burger"
          tabindex="0"
          @click="toggleSubMenu"
        >
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpenSubMenu: false,
      isOpenSearch: false,
      isScrolled: false,
    };
  },
  methods: {
    toggleSubMenu() {
      this.isOpenSubMenu = !this.isOpenSubMenu;
    },
    toggleSearch() {
      this.isOpenSearch = !this.isOpenSearch;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    closeMenu() {
      this.isOpenSubMenu = false;
      this.isOpenSearch = false;

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }
  },
  watch: {
    isScrolled(newValue) {
      const headerEl = document.querySelector(".header");
      if (newValue) {
        headerEl.classList.add("scrolled");
      } else {
        headerEl.classList.remove("scrolled");
      }
    },
    $route() {
      this.closeMenu()
    }
    
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>


<style scoped>
/* 
_____________
Header
_____________
*/
.header {
  position: fixed;
  left: 0;
  right: 0;
  background: transparent;
  z-index: 1000;
  transition: box-shadow .2s, opacity .2s;
}

.header::before {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  content: '';
  opacity: 0;
  transition: opacity .2s, backdrop-filter .2s;
}

.header.scrolled {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.39);
}

.header.scrolled::before {
  opacity: 1;
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
}

.header__container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width-container-desktop);
  margin: auto;
  gap: 80px;
  padding: 0 var(--padding-lr-container-desktop);
}

.header__logo {
  max-width: 90px;
}

.header__logo svg {
  width: 100%;
  transition: color .1s;
}

.header__logo:hover svg {
  color: var(--color-action-blue);
}

.header__logo:focus-visible svg {
  color: var(--color-action-blue);
}

.header__logo:active svg {
  color: var(--color-action-dark-blue);
}

.header__nav {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

.topmenu {
  display: flex;
  align-items: center;
  gap: 25px;
}

.topmenu__link {
  display: inline-block;
  padding: 30px 0;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-title-sm);
  font-weight: 500;
  transition: color .1s, opacity .1s;
}

.topmenu__link:hover {
  color: var(--color-action-blue);
}

.topmenu__link:focus-visible {
  color: var(--color-action-blue);
}

.topmenu__link:active {
  color: var(--color-action-dark-blue);
}


/* 
_____________
Вложенное меню
_____________
*/
.submenu {
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 1em;
  top: 100%;
  left: 0;
  right: 0;
  visibility: hidden;
  opacity: 0;
  border: var(--border-grey);
  border-radius: var(--radius-lg);
  background-color: rgba(180, 226, 255, 0.5);
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  z-index: 1000;
  transform: translateY(30px);
  transition: opacity .2s linear,
    visibility .2s linear,
    transform .2s linear;
}

.submenu:focus-within {
  visibility: visible;
  opacity: 1;
  transform: none;
}

.tobmenu__item:hover .submenu {
  visibility: visible;
  opacity: 1;
  transform: none;
}

.topmenu__link:focus-within+.submenu {
  visibility: visible;
  opacity: 1;
  transform: none;
}


.submenu__col {
  padding: 0 1em;
}

.submenu__col:not(:last-child) {
  border-right: 1px solid rgb(204, 204, 204);
}

.submenu__title {
  display: block;
  margin-bottom: 20px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-title-sm);
  color: var(--color-text-grey);
  font-weight: 500;
  transition: color .1s;
}

.submenu__title:hover {
  color: var(--color-text-black);
}

.submenu__title:focus-within {
  color: var(--color-action-blue);
}

.submenu__item {
  border-radius: var(--radius-lg);
  transition: background-color .1s;
}

.submenu__item:hover {
  background-color: var(--color-bg-grey);
}

.submenu__link {
  display: block;
  padding: 0.5em;
}

.submenu__link:focus-within {
  color: var(--color-action-blue);
}

.submenu__name {
  display: block;
  margin-bottom: 5px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-title-xs);
  font-weight: 500;
}

.submenu__description {
  font-family: var(--font-family-nunito);
  font-size: var(--font-size-text-xs);
  color: var(--color-text-grey);
}





.panel {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.search {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 2em;
  background-color: var(--color-btn-white);
  transform: scaleY(0) translateY(200px);
  transition: transform .2s;
}

.search.active {
  transform: scaleY(1) translateY(0);
}

.search__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

.search__title {
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-title-sm);
  font-weight: 500;
}

.search__close {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
}

.search__close::before {
  position: absolute;
  content: '';
  width: 80%;
  height: 2px;
  background-color: #000;
  transform: rotate(45deg);
}

.search__close::after {
  position: absolute;
  content: '';
  width: 80%;
  height: 2px;
  background-color: #000;
  transform: rotate(-45deg);
}

.search__input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.search__label {
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.search__label::before {
  position: absolute;
  left: 10px;
  content: '';
  width: 20px;
  height: 20px;
  mask: url('/media/icons/search.svg') no-repeat center/contain;
  background-color: var(--color-text-grey);
}

.search__label input {
  width: 100%;
  padding: 0.5em 1em 0.5em 2.5em;
  box-sizing: border-box;
  border: var(--border-grey);
  border-radius: var(--radius-md);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
  outline: none;
  color: var(--color-text-black);
  font-family: var(--font-family-montserrat);
  transition: box-shadow .1s;
}

.search__label input:focus-visible {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

.search__btn {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

.search__templates {
  flex-basis: 100%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

.search__subtitle {
  display: block;
  margin-bottom: 10px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-title-xs);
  font-weight: 500;
  color: var(--color-text-grey);
}

.search__list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.search__item {
  padding: 0.3em 1em;
  outline: none;
  border: var(--border-grey);
  border-radius: var(--radius-md);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-xs);
  color: var(--color-text-black);
  background-color: var(--color-btn-grey-transparent);
  transition: background-color .1s;
  cursor: var(--cursor-point);
}

.search__item:hover {
  background-color: var(--color-btn-grey);
}

.search__item:focus-visible {
  background-color: var(--color-btn-grey);
}

.search__item:active {
  background-color: var(--color-btn-grey);
}


.panel__btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  min-width: 30px;
  min-height: 30px;
  border-radius: var(--radius-max);
  box-sizing: border-box;
  background-color: #000;
  background-size: 20px;
  transition: background .1s;

  /* 576 px */
  @media (max-width: 36rem) {
    min-width: 60px;
    min-height: 60px;
    background-size: 60px;
  }
}

.panel__btn:hover {
  background-color: var(--color-action-white);
}

.panel__btn:focus-visible {
  background-color: var(--color-action-white);
}

.panel__btn_chat {
  padding: 0.5em 1em;
  border: var(--border-white);
  border-radius: var(--radius-max);
  background-color: var(--color-btn-white-transparent);
}

.header.scrolled .panel__btn_chat {
  /* background-color: var(--color-btn-blue); */
  border-color: transparent;
}

.header.scrolled .panel__btn_chat:hover {
  background-color: var(--color-action-blue);
}

.header.scrolled .panel__btn_chat:focus-visible {
  background-color: var(--color-action-blue);
}

.panel__btn_search {
  mask: url('/media/icons/search.svg') no-repeat center/contain;
}

.panel__btn_login {
  mask: url('/media/icons/log-in.svg') no-repeat center/contain;
}

.panel__btn-text {
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-sm);
  font-weight: 500;
  color: var(--color-text-black);
}

.panel__btn_burger {
  position: relative;
  display: none;
  background-color: transparent;
}

.panel__btn_burger span {
  position: absolute;
  top: 50%;
  left: 17%;
  right: 0;
  width: 70%;
  height: 2px;
  border-radius: var(--radius-lg);
  background-color: #000;
  transition: background-color .2s, transform .2s;
}

.panel__btn_burger::before {
  position: absolute;
  top: 30%;
  left: 10%;
  width: 30%;
  height: 2px;
  border-radius: var(--radius-lg);
  background-color: #000;
  content: '';
  transition: top .2s, width .2s, transform .2s .15s;
}

.panel__btn_burger::after {
  position: absolute;
  top: 70%;
  right: 10%;
  width: 30%;
  height: 2px;
  border-radius: var(--radius-lg);
  background-color: #000;
  content: '';
  transition: top .2s, width .2s, transform .2s .15s;
}

.panel__btn_burger.open span {
  transform: scaleX(0);
  background-color: transparent;
}

.panel__btn_burger.open::before {
  top: 50%;
  width: 80%;
  transform: rotate(45deg);
  transition: top .2s .15s, width .2s, transform .2s;
}

.panel__btn_burger.open::after {
  top: 50%;
  width: 80%;
  transform: rotate(-45deg);
  transition: top .2s .15s, width .2s, transform .2s;
}


/* 1400 px */
@media (max-width: 87.5rem) {
  .header__container {
    max-width: var(--max-width-container-laptop);
  }

  .topmenu__link {
    font-size: var(--font-size-title-xs);
  }

  .submenu__title {
    font-size: var(--font-size-title-xs);
  }

  .submenu__name {
    font-size: var(--font-size-title-min);
  }

  .submenu__description {
    font-size: var(--font-size-text-min);
  }
}

/* 1200 px */
@media (max-width: 75rem) {
  .header__container {
    max-width: var(--max-width-container-tablet);
    padding: 0 var(--padding-lr-container-tablet);
  }
}

/* 992 px */
@media (max-width: 62rem) {
  .header__container {
    max-width: var(--max-width-container-smartphone);
  }

  .submenu {
    left: 0;
    right: 0;
  }
}

/* 768 px */
@media (max-width: 48rem) {
  .header__container {
    max-width: var(--max-width-container-mobile);
    padding: 1em var(--padding-lr-container-mobile);
  }

  .header__nav {
    justify-content: flex-end;
  }

  .topmenu {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    flex-direction: column;
    align-items: flex-start;
    padding: 60px 1em;
    overflow-y: scroll;
    background-color: rgba(180, 226, 255, 0.5);
    backdrop-filter: blur(16px) saturate(150%);
    -webkit-backdrop-filter: blur(16px) saturate(150%);
    transform: scale(0) translate(100%, -200%);
    transition: transform .5s;
  }

  .topmenu.active {
    transform: scale(1) translate(0, 0);
  }

  .topmenu__link {
    padding: 0;
  }

  .submenu {
    position: static;
    flex-direction: column;
    opacity: 1;
    visibility: visible;
    border: none;
    background-color: transparent;
    backdrop-filter: initial;
    -webkit-backdrop-filter: initial;
    transform: none;
  }

  .submenu__col {
    padding: 0;
  }

  .submenu__col:not(:last-child) {
    margin-bottom: 20px;
    border-right: none;
    border-bottom: 1px solid rgb(204, 204, 204);
  }

  .panel__btn_chat {
    padding: 0;
    border-radius: 0;
    background-color: #000;

    mask: url('/media/icons/chat.svg') no-repeat center/contain;
  }

  .header.scrolled .panel__btn_chat:hover {
    background-color: #000;
  }

  .panel__btn-text {
    display: none;
  }

  .panel__btn_burger {
    display: inline-block;
  }
}

/* 576 px */
@media (max-width: 36rem) {
  .header {
    position: absolute;
  }

  .header::before {
    content: none;
  }

  .header__container {
    justify-content: center;
    max-width: 100%;
  }

  .submenu {
    max-width: 100%;
  }

  .panel {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    gap: 45px;
    padding: 0.5em 1em;
    backdrop-filter: blur(16px) saturate(150%);
    -webkit-backdrop-filter: blur(16px) saturate(150%);
  }

  .search {
    bottom: 55px;
  }

  .panel__btn {
    min-width: 40px;
    min-height: 40px;
    background-size: 60px;
  }

  .panel__btn_chat {
    order: 1;
    width: 60px;
  }

  .panel__btn_search {
    order: 2;
  }

  .panel__btn_login {
    order: 3;
  }

  .panel__btn_burger {
    width: 10%;
    height: 10%;
    order: 4;
  }


}
</style>