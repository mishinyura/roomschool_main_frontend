<template>
  <main class="main">
    <section class="main__section hero">
      <div class="hero__container">
        <h1 class="hero__title">Каталог образовательных программ</h1>
        <p class="hero__description">
          Откройте для себя мир знаний с нашими экспертными курсами. От
          начинающего до профессионала — найдите идеальный путь для вашего
          развития
        </p>
      </div>
    </section>
    <section class="main__section courses">
      <!-- popular, new, recommendation, soon -->
      <div class="courses__container">
        <div class="courses__control filters">
          <div class="filters__control">
            <label class="filters__search">
              <input type="text" placeholder="Поиск курсов" />
            </label>
            <div class="filters__select">
              <label class="filters__wrapper">
                <input
                  class="filters__input"
                  name="method"
                  type="text"
                  value="По телефону"
                  data-validate="select"
                  data-sort="popular"
                  readonly
                  tabindex="0"
                />
              </label>
              <ul class="filters__variants">
                <li class="filters__sort selected" data-sort="popular">
                  По популярности
                </li>
                <li class="filters__sort" data-sort="rating">По рейтингу</li>
                <li class="filters__sort" data-sort="new">Сначала новые</li>
                <li class="filters__sort" data-sort="priceasc">
                  По возрастанию цены
                </li>
                <li class="filters__sort" data-sort="pricedesc">
                  По убыванию цены
                </li>
              </ul>
            </div>
            <button
              class="filters__btn"
              :data-count="totalFiltersCount"
              @click="toggleFilters"
            >
              Фильтры
            </button>
          </div>
          <div :class="['filters__settings', isOpenFilters ? 'open' : '']">
            <div class="filters__col">
              <span class="filters__title"> Категории </span>
              <ul class="filters__list">
                <li class="filters__item">
                  <label class="filters__checkbox">
                    <input
                      type="checkbox"
                      id=""
                      v-model="selectedCategories"
                      value="technical"
                    />
                    <span></span>
                    <span>Технические</span>
                  </label>
                </li>
                <li class="filters__item">
                  <label class="filters__checkbox">
                    <input
                      type="checkbox"
                      id=""
                      value="social"
                      v-model="selectedCategories"
                    />
                    <span></span>
                    <span>Социальные</span>
                  </label>
                </li>
              </ul>
            </div>
            <div class="filters__col">
              <span class="filters__title"> Уровень </span>
              <ul class="filters__list">
                <li class="filters__item">
                  <label class="filters__checkbox">
                    <input
                      type="checkbox"
                      id=""
                      value="beginner"
                      v-model="selectedLevels"
                    />
                    <span></span>
                    <span>Начинающим</span>
                  </label>
                </li>
                <li class="filters__item">
                  <label class="filters__checkbox">
                    <input
                      type="checkbox"
                      id=""
                      value="advanced"
                      v-model="selectedLevels"
                    />
                    <span></span>
                    <span>Продвинутым</span>
                  </label>
                </li>
                <li class="filters__item">
                  <label class="filters__checkbox">
                    <input
                      type="checkbox"
                      id=""
                      value="pro"
                      v-model="selectedLevels"
                    />
                    <span></span>
                    <span>Профессионалам</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="courses__list cards" id="courses-list">
          <article
            class="cards__item"
            v-for="(course, index) in courses"
            :key="index"
          >
            <span
              :class="['cards__label', 'cards__label_' + course.label]"
              v-if="course.label"
            >
              {{ getLabel(course.label) }}
            </span>
            <div class="cards__image">
              <img
                :src="
                  course.image
                    ? './media/images' + course.image
                    : '/media/images/no-photo.webp'
                "
                alt=""
              />
            </div>
            <div class="cards__content">
              <h4 class="cards__title">
                <a :href="'/courses' + course.slug" class="cards__link">
                  {{ course.name }}
                </a>
              </h4>
              <p class="cards__description">
                {{ course.description.main }}
              </p>
              <div class="cards__reviews rating">
                <span class="rating__stars">
                  <span
                    class="rating__img"
                    :style="'width: ' + (course.rating / 5) * 100 + '%'"
                  ></span>
                </span>
                <span class="rating__count">
                  {{ course.rating }}
                </span>
              </div>
              <div class="cards__counter stats-course">
                <span class="stats-course__hours">{{
                  getHours(course.duration)
                }}</span>
                <span class="stats-course__videos">{{ course.videos }}</span>
              </div>
            </div>
            <div class="cards__info">
              <ins class="cards__price cards__price_new">
                {{ getDiscountPrice(course.price, course.discount) }}
              </ins>
              <del class="cards__price cards__price_old" v-if="course.discount">
                {{ course.price }}
              </del>
              <a
                :href="'/courses/' + course.slug"
                class="cards__btn cards__btn_classic"
              >
                Подробнее
              </a>
            </div>
          </article>
        </div>
        <div class="courses__btns">
          <a href="" class="courses__link courses__link_back disabled">Назад</a>
          <a href="" class="courses__link courses__link_num active">1</a>
          <!-- <a href="" class="courses__link courses__link_num">2</a> -->
          <a href="" class="courses__link courses__link_forward disabled">Вперед</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import coursesJson from "~/data/courses.json";

export default {
  data() {
    return {
      courses: coursesJson,
      isOpenFilters: false,
      selectedCategories: [],
      selectedLevels: [],
    };
  },
  methods: {
    getLabel(label) {
      switch (label) {
        case "popular":
          return "Популярный";
        case "new":
          return "Новый";
        case "recommendation":
          return "Рекомендуем";
        default:
          return "Скоро";
      }
    },
    getDiscountPrice(price, discount) {
      const result = price * (1 - discount / 100);
      return Math.floor(result);
    },
    getHours(hours) {
      return parseFloat((hours / 60).toFixed(1));
    },
    toggleFilters() {
      this.isOpenFilters = !this.isOpenFilters;
    },
  },
  computed: {
    totalFiltersCount() {
      console.log(this.selectedCategories, this.selectedLevels);
      return this.selectedCategories.length + this.selectedLevels.length;
    },
  },
};
</script>

<style scoped>
.hero {
  background: var(--color-bg-blue-purpure-linear-gradient);
}

.hero__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: 150px var(--padding-lr-container-desktop)
    var(--padding-tb-container-desktop);
}

.hero__title {
  margin-bottom: var(--margin-bottom-title);
  text-align: center;
}

.hero__description {
  margin-bottom: var(--margin-bottom-description);
  text-align: center;
}
/* 
_____________
Раздел с курсами
_____________
*/
.courses {
  background-color: var(--color-bg-grey);
}
.courses__container {
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: 20px var(--padding-tb-container-desktop)
    var(--padding-lr-container-desktop);
}

.filters {
  position: relative;
}
/* 
_____________
Раздел с шапкой фильтров
_____________
*/
.filters__control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--margin-cards);
  padding: 1em;
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-white);
}

.filters__search {
  position: relative;
  display: flex;
  align-items: center;
  flex-basis: 60%;
  width: 100%;
}

.filters__search::before {
  position: absolute;
  left: 10px;
  background-image: url("/media/icons/search.svg");
}

.filters__btn {
  position: relative;
}

.filters__search::before,
.filters__btn::before {
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 0;
  content: "";
}

.filters__btn::after {
  position: absolute;
  top: -5px;
  right: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: var(--radius-max);
  background-color: var(--color-bg-dark-blue);
  color: var(--color-text-white);
  content: attr(data-count);
  transition: opacity 0.2s;
}

.filters__btn[data-count="0"]::after {
  opacity: 0;
}

.filters__search input {
  width: 100%;
  padding: 0.8em 1em 0.8em 3em;
  box-sizing: border-box;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-min);
  font-weight: 500;
  border: var(--border-grey);
  border-radius: var(--radius-md);
  background-color: var(--color-bg-grey);
}

.filters__select {
  position: relative;
  align-self: stretch;
  border: var(--border-grey);
  border-radius: var(--radius-md);
  background-color: #fff;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-xs);
  font-weight: 500;
}

.filters__wrapper {
  display: flex;
  align-items: center;
  padding: 0.8em 1em;
  cursor: pointer;
}

.filters__wrapper::after {
  width: 10px;
  height: 10px;
  border-bottom: 1px solid #acacac;
  border-left: 1px solid #acacac;
  content: "";
  transform: rotate(-45deg);
  z-index: 20;
  pointer-events: none;
}

.filters__wrapper input {
  cursor: pointer;
  margin-right: 5px;
  z-index: 20;
}

.filters__variants {
  position: absolute;
  top: 70px;
  width: 100%;
  padding: 10px 20px;
  border-radius: var(--radius-lg);
  box-sizing: border-box;
  visibility: hidden;
  opacity: 0;
  background-color: #fff;
  transition: opacity 0.1s, visibility 0.1s, top 0.1s;
  z-index: 10;
}

.filters__variants.active {
  top: 54px;
  visibility: visible;
  opacity: 1;
}

.filters__sort {
  cursor: pointer;
  transition: color 0.1s;
}

.filters__sort:not(:last-child) {
  margin-bottom: 10px;
}

.filters__sort.selected {
  color: var(--color-text-blue);
}

.filters__sort:hover {
  color: var(--color-text-blue);
}

.filters__btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.8em 1em;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-xs);
  font-weight: 500;
  border: var(--border-grey);
  border-radius: var(--radius-md);
  color: var(--color-text-purpure);
}

.filters__btn::before {
  background-image: url("/media/icons/filter.svg");
}
/* 
_____________
Выдвижная панель выбора фильтров
_____________
*/
.filters__settings {
  position: absolute;
  top: 105%;
  left: 0;
  right: 0;
  z-index: 10;
  margin-bottom: 20px;
  padding: 1em;
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-white);
  box-shadow: var(--shadow-podium);
  opacity: 0;
  visibility: hidden;
  transition: visibility 0.2s, opacity 0.2s;
}
.filters__settings.open {
  opacity: 1;
  visibility: visible;
}
.filters__col:not(:last-child) {
  margin-bottom: 20px;
}

.filters__title {
  display: block;
  margin-bottom: 20px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-title-sm);
  font-weight: 500;
}

.filters__item:not(:last-child) {
  margin-bottom: 10px;
}

.filters__checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
}

.filters__checkbox input {
  display: none;
}

.filters__checkbox {
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-xs);
  font-weight: 400;
}

.filters__checkbox input + span {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 14px;
  height: 14px;
  border: var(--border-grey);
  border-radius: var(--radius-max);
}

.filters__checkbox input + span::before {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: var(--radius-max);
  background-color: var(--color-bg-dark-blue);
  content: "";
  transform: scale(0);
  transition: transform 0.2s;
}

.filters__checkbox input:checked + span::before {
  transform: none;
}

/* 
_____________
Раздел с карточками курсов
_____________
*/
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: var(--margin-cards);
  align-items: stretch;
  margin-bottom: 40px;
}

.cards__item {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 480px;
  border: var(--border-grey);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background-color: var(--color-bg-white);
  transition: box-shadow 0.2s;
}

.cards__item:hover {
  box-shadow: var(--shadow-classic);
}

.cards__item:hover .cards__image img {
  transform: scale(1.1);
}

.cards__label {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0.3em 0.6em;
  border-radius: var(--radius-md);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-min);
  font-weight: 500;
  color: var(--color-text-white);
  z-index: 1;
}

.cards__label_popular {
  background: var(--color-label-red-orange-gradient);
}

.cards__label_recommendation {
  background: var(--color-label-blue-purpure-gradient);
}

.cards__label_new {
  background: var(--color-label-green-blue-gradient);
}

.cards__label_soon {
  background: var(--color-label-pink-purpure-gradient);
}

.cards__image {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.cards__image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.cards__content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 2em 1.5em 0;
  margin-bottom: 10px;
}

.cards__title {
  margin-bottom: 10px;
  cursor: var(--cursor-point);
}

.cards__link {
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-title-sm);
  font-weight: 500;
  transition: color 0.2s;
}

.cards__title:hover .cards__link {
  color: var(--color-action-blue);
}

.cards__description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  min-height: calc(1em * 3);
  margin-bottom: 10px;
  font-family: var(--font-family-nunito);
  font-size: var(--font-size-text-sm);
  font-weight: 400;
  user-select: none;
  overflow: hidden;
}

.cards__reviews {
  flex-grow: 1;
  align-items: flex-end;
  margin-bottom: 10px;
  user-select: none;
}

.cards__counter {
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
}

.cards__info {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 1.5em 1.5em;
}

.cards__price {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-family-montserrat);
  user-select: none;
}

.cards__price::after {
  content: "₽";
}

.cards__price_new {
  text-decoration: none;
  font-weight: 600;
  font-size: var(--font-size-text-md);
}

.cards__price_old {
  position: relative;
  top: -5px;
  text-decoration: line-through;
  font-size: var(--font-size-text-sm);
  color: var(--color-text-grey);
}

.cards__btn {
  justify-items: flex-end;
  margin-left: auto;
}

/* 
_____________
Раздел с кнопками
_____________
*/
.courses__btns {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  user-select: none;
}

.courses__link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border: var(--border-grey);
  border-radius: var(--radius-md);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-xs);
  font-weight: 600;
  color: var(--color-text-purpure);
  transition: border-color 0.2s;
}

.courses__link.disabled {
  pointer-events: none;
  filter: opacity(0.4);
}

.courses__link:hover:not(.active) {
  border-color: var(--color-text-purpure);
}

.courses__link_back {
  padding: 0.5em 1em;
}

.courses__link_back::before {
  width: 8px;
  height: 8px;
  border-bottom: 1px solid var(--color-text-purpure);
  border-left: 1px solid var(--color-text-purpure);
  transform: rotate(45deg);
  content: "";
}

.courses__link_num {
  width: 18px;
  height: 18px;
  padding: 0.5em;
}

.courses__link_num.active {
  color: var(--color-text-white);
  background: var(--color-btn-dark-blue);
}

.courses__link_forward {
  padding: 0.5em 1em;
}

.courses__link_forward::after {
  width: 8px;
  height: 8px;
  border-bottom: 1px solid var(--color-text-purpure);
  border-right: 1px solid var(--color-text-purpure);
  transform: rotate(-45deg);
  content: "";
}

/* 1400 px */
@media (max-width: 87.5rem) {
  .hero__container {
    max-width: var(--max-width-container-laptop);
  }

  .courses__container {
    max-width: var(--max-width-container-laptop);
  }

  .cards {
    grid-template-columns: repeat(3, 1fr);
  }

  .cards__title {
    font-size: var(--font-size-title-sm);
  }

  .cards__description {
    font-size: var(--font-size-text-sm);
  }
}

/* 1200 px */
@media (max-width: 75rem) {
  .hero__container {
    max-width: var(--max-width-container-tablet);
  }

  .courses__container {
    max-width: var(--max-width-container-tablet);
  }
}

/* 992 px */
@media (max-width: 62rem) {
  .hero__container {
    max-width: var(--max-width-container-smartphone);
  }

  .courses__container {
    max-width: var(--max-width-container-smartphone);
  }

  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 768 px */
@media (max-width: 48rem) {
  .hero__container {
    max-width: var(--max-width-container-mobile);
  }

  .courses__container {
    max-width: var(--max-width-container-mobile);
  }

  .cards {
    grid-template-columns: 1fr;
  }
}

/* 576 px */
@media (max-width: 36rem) {
  .hero__container {
    align-items: center;
    max-width: 100%;
  }

  .courses__container {
    align-items: center;
    max-width: 100%;
  }
}
</style>