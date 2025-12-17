<template>
  <section class="main__section courses">
    <div class="courses__container">
      <div class="courses__head">
        <h2 class="courses__title">Самые популярные курсы на платформе</h2>
        <p class="courses__description">
          Выберите курс и начните свой путь к новой профессии уже сегодня. Все
          курсы разработаны экспертами индустрии
        </p>
        <div class="courses__btns">
          <a href="/courses" class="courses__btn courses__btn_neon"
            >Посмотреть все</a
          >
          <a href="#callback-title" class="courses__btn courses__btn_neoninv">
            Узнать больше
          </a>
        </div>
      </div>
      <div class="courses__list course">
        <article
          :class="['course__item', 'course__item_' + course.color]"
          itemscope
          itemtype="https://schema.org/Product"
          v-for="(course, index) in courses.slice(0, 4)"
          :key="index"
          :course="course"
        >
          <meta itemprop="brand" content="RoomSchool" />
          <div class="course__info">
            <span :class="['course__label', 'course__label_' + course.label]">
              {{ getLabel(course.label) }}
            </span>
            <div :class="['course__icon', 'course__icon_' + course.color]">
              <img src="/media/icons/like.svg" />
            </div>
            <h3 class="course__title" itemprop="name">
              <a
                :href="'/pages/course-detail/' + course.slug"
                class="course__link"
                tabindex="0"
              >
                {{ course.name }}
              </a>
            </h3>
            <p class="course__description">
              {{ course.description.main }}
            </p>
            <div
              class="course__stats"
              itemprop="aggregateRating"
              itemscope
              itemtype="https://schema.org/AggregateRating"
            >
              <span class="course__rating rating-course" itemprop="ratingValue">
                {{ course.rating }}
              </span>
              <span class="course__hours stats-course__hours">
                {{ course.duration / 60 }}
              </span>
            </div>
            <span class="course__level"> Новичок </span>
          </div>
          <div class="course__control">
            <div class="course__prices">
              <span
                class="course__price course__price_new"
                itemprop="price"
                :content="course.price"
              >
                {{ calcPrice(course.price, course.discount) }}
              </span>
              <span
                class="course__price course__price_old"
                v-if="course.discount"
              >
                {{ course.price }}
              </span>
              <span class="course__period"> в месяц </span>
            </div>
            <button
              :class="[
                'course__btn',
                course.label == 'soon' ? 'course__btn_disabled' : '',
              ]"
              tabindex="0"
            >
              Поступить
            </button>
          </div>
        </article>
        <!-- <article class="course__item course__item_purpure" itemscope itemtype="https://schema.org/Product">
                        <meta itemprop="brand" content="RoomSchool">
                        <div class="course__info">
                            <span class="course__label course__label_popular">
                                Популярный
                            </span>
                            <div class="course__icon course__icon_purpure">
                                <img src="../assets/media/icons/like.svg" alt="">
                            </div>
                            <h3 class="course__title" itemprop="name">
                                <a href="" class="course__link" tabindex="0">
                                    Эмоциональная грамотность
                                </a>
                            </h3>
                            <p class="course__description">
                                Научитесь понимать и управлять эмоциями, развивайте эмпатию и навыки общения
                            </p>
                            <div class="course__stats" itemprop="aggregateRating" itemscope
                                itemtype="https://schema.org/AggregateRating">
                                <span class="course__rating rating-course" itemprop="ratingValue">
                                    4.9
                                </span>
                                <span class="course__hours stats-course__hours">
                                    40
                                </span>
                            </div>
                            <span class="course__level">
                                Новичок
                            </span>
                        </div>
                        <div class="course__control">
                            <div class="course__prices">
                                <span class="course__price course__price_new" itemprop="price" content="990">
                                    990
                                </span>
                                <span class="course__price course__price_old">
                                    1990
                                </span>
                                <span class="course__period">
                                    в месяц
                                </span>
                            </div>
                            <button class="course__btn" tabindex="0">
                                Поступить
                            </button>
                        </div>
                    </article>
                    <article class="course__item course__item_blue" itemscope itemtype="https://schema.org/Product">
                        <meta itemprop="brand" content="RoomSchool">
                        <div class="course__info">
                            <span class="course__label course__label_recommendation">
                                Рекомендуем
                            </span>
                            <div class="course__icon course__icon_blue">
                                <img src="../assets/media/icons/like.svg" alt="">
                            </div>
                            <h3 class="course__title" itemprop="name">
                                <a href="" class="course__link" tabindex="0">
                                    Правовая грамотность
                                </a>
                            </h3>
                            <p class="course__description">
                                Изучите основы права, защитите свои интересы и избегайте правовых ошибок
                            </p>
                            <div class="course__stats" itemprop="aggregateRating" itemscope
                                itemtype="https://schema.org/AggregateRating">
                                <span class="course__rating rating-course" itemprop="ratingValue">
                                    4.9
                                </span>
                                <span class="course__hours stats-course__hours">
                                    40
                                </span>
                            </div>
                            <span class="course__level">
                                Новичок
                            </span>
                        </div>
                        <div class="course__control">
                            <div class="course__prices">
                                <span class="course__price course__price_new" itemprop="price" content="990">
                                    990
                                </span>
                                <span class="course__price course__price_old">
                                    1990
                                </span>
                                <span class="course__period">
                                    в месяц
                                </span>
                            </div>
                            <button class="course__btn" tabindex="0">
                                Поступить
                            </button>
                        </div>
                    </article>
                    <article class="course__item course__item_green" itemscope itemtype="https://schema.org/Product">
                        <meta itemprop="brand" content="RoomSchool">
                        <div class="course__info">
                            <span class="course__label course__label_new">
                                Новый
                            </span>
                            <div class="course__icon course__icon_green">
                                <img src="../assets/media/icons/like.svg" alt="">
                            </div>
                            <h3 class="course__title" itemprop="name">
                                <a href="" class="course__link" tabindex="0">
                                    Основы программирования
                                </a>
                            </h3>
                            <p class="course__description">
                                Познакомьтесь с миром программирования и создайте свои первые проекты на одном из самых
                                популярных языков программирования
                            </p>
                            <div class="course__stats" itemprop="aggregateRating" itemscope
                                itemtype="https://schema.org/AggregateRating">
                                <span class="course__rating rating-course" itemprop="ratingValue">
                                    5
                                </span>
                                <span class="course__hours stats-course__hours">
                                    50
                                </span>
                            </div>
                            <span class="course__level">
                                Новичок
                            </span>
                        </div>
                        <div class="course__control">
                            <div class="course__prices">
                                <span class="course__price course__price_new" itemprop="price" content="990">
                                    480
                                </span>
                                <span class="course__price course__price_old">
                                    1990
                                </span>
                                <span class="course__period">
                                    в месяц
                                </span>
                            </div>
                            <button class="course__btn" tabindex="0">
                                Поступить
                            </button>
                        </div>
                    </article>
                    <article class="course__item course__item_red" itemscope itemtype="https://schema.org/Product">
                        <meta itemprop="brand" content="RoomSchool">
                        <div class="course__info">
                            <span class="course__label course__label_soon">
                                Скоро
                            </span>
                            <div class="course__icon course__icon_red">
                                <img src="../assets/media/icons/like.svg" alt="">
                            </div>
                            <h3 class="course__title" itemprop="name">
                                <a href="" class="course__link" tabindex="0">
                                    Разработка веб-сайтов
                                </a>
                            </h3>
                            <p class="course__description">
                                Научитесь понимать и управлять эмоциями, развивайте эмпатию и навыки общения
                            </p>
                            <div class="course__stats" itemprop="aggregateRating" itemscope
                                itemtype="https://schema.org/AggregateRating">
                                <span class="course__rating rating-course" itemprop="ratingValue">
                                    4.9
                                </span>
                                <span class="course__hours stats-course__hours">
                                    40
                                </span>
                            </div>
                            <span class="course__level">
                                Продвинутый
                            </span>
                        </div>
                        <div class="course__control">
                            <div class="course__prices">
                                <span class="course__price course__price_new" itemprop="price" content="990">
                                    990
                                </span>
                                <span class="course__price course__price_old">
                                    1990
                                </span>
                                <span class="course__period">
                                    в месяц
                                </span>
                            </div>
                            <button class="course__btn course__btn_disabled" tabindex="0">
                                Поступить
                            </button>
                        </div>
                    </article> -->
      </div>
    </div>
  </section>
</template>

<script>
import coursesJson from "~/data/courses.json";
export default {
  data() {
    return {
      courses: coursesJson,
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
    calcPrice(price, discount) {
      const result = price * ((100 - discount) * 0.01);
      return Math.floor(result);
    },
  },
};
</script>

<style scoped>
/* 
_____________
Секция с курсами
_____________
*/
.courses__container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: var(--padding-tb-container-desktop)
    var(--padding-lr-container-desktop);
}

.courses__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  max-width: 70%;
  margin-bottom: var(--margin-bottom-description);
}

.courses__title {
  margin-bottom: var(--margin-bottom-title);
  text-align: center;
}

.courses__description {
  margin-bottom: var(--margin-bottom-description);
  text-align: center;
  font-size: var(--font-size-text-lg);
}

.courses__btns {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: var(--margin-cards);
}

.courses__btn {
  font-family: var(--font-family-montserrat);
}

.course {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--margin-cards);
}

.course__item {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: var(--padding-cards);
  border-radius: var(--radius-lg) var(--radius-lg) 60px var(--radius-lg);
  overflow: hidden;
  transition: box-shadow 0.1s;
}

.course__item_purpure {
  background-color: var(--color-card-purpure);
}

.course__item_green {
  background-color: var(--color-card-green);
}

.course__item_blue {
  background-color: var(--color-card-blue);
}

.course__item_red {
  background-color: var(--color-card-red);
}

.course__info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 20px;
  border-bottom: var(--border-grey);
}

.course__label {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.3em 0.8em;
  border-radius: 0 var(--radius-lg) 0 var(--radius-lg);
  box-shadow: var(--shadow-classic);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-min);
  font-weight: 500;
  color: var(--color-text-white);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.course__label_popular {
  background: var(--color-label-red-orange-gradient);
}

.course__label_recommendation {
  background: var(--color-label-blue-purpure-gradient);
}

.course__label_new {
  background: var(--color-label-green-blue-gradient);
}

.course__label_soon {
  background: var(--color-label-pink-purpure-gradient);
}

.course__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
  border-radius: 100px;
  box-shadow: var(--shadow-podium);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.course__icon_purpure {
  background-color: var(--color-icon-purpure);
}

.course__icon_green {
  background-color: var(--color-icon-green);
}

.course__icon_blue {
  background-color: var(--color-icon-blue);
}

.course__icon_red {
  background-color: var(--color-icon-red);
}

.course__title {
  margin-bottom: 15px;
  font-size: var(--font-size-title-sm);
  font-weight: 500;
}

.course__link {
  transition: color 0.1s;
}

.course__link:hover {
  color: var(--color-action-blue);
}

.course__link:focus-visible {
  color: var(--color-action-blue);
}

.course__description {
  flex-grow: 1;
  display: -webkit-box;
  margin-bottom: 20px;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: var(--font-size-text-sm);
  font-weight: 300;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.course__stats {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.course__level {
  position: relative;
  align-self: flex-start;
  display: inline-block;
  margin-bottom: 20px;
  padding: 0.3em 0.8em;
  border-radius: var(--radius-lg);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-min);
  font-weight: 300;
  background-color: var(--color-label-grey);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.course__level_purpure {
  background-color: var(--color-level-purpure);
}

.course__level_green {
  background-color: var(--color-level-green);
}

.course__level_blue {
  background-color: var(--color-level-blue);
}

.course__level_red {
  background-color: var(--color-level-red);
}

.course__prices {
  margin-bottom: 20px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.course__price {
  display: inline-block;
  margin-right: 10px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-md);
  font-weight: 400;
  user-select: none;
}

.course__price::after {
  content: "₽";
}

.course__price_old {
  text-decoration: line-through;
  font-size: calc(var(--font-size-text-sm) - 2px);
  font-weight: 400;
  color: var(--color-text-grey);
}

.course__period {
  display: block;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-xs);
  font-weight: 400;
  color: var(--color-text-grey);
}

.course__btn {
  display: block;
  width: 100%;
  padding: 0.5em 1em;
  border-radius: var(--radius-lg);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-sm);
  font-weight: 400;
  background-color: var(--color-btn-blue);
  transition: background-color 0.1s, transform 0.1s, color 0.1s, box-shadow 0.1s;
}

.course__btn_disabled {
  pointer-events: none;
  background-color: var(--color-btn-grey);
  color: var(--color-text-grey);
}

.course__btn:hover {
  transform: translateX(-15px);
  box-shadow: 10px 0 10px 0 rgba(0, 0, 0, 0.2);
  background-color: var(--color-action-dark-blue);
  color: var(--color-text-white);
}

.course__btn:focus-visible {
  transform: translateX(-15px);
  box-shadow: 10px 0 10px 0 rgba(0, 0, 0, 0.2);
  background-color: var(--color-action-dark-blue);
  color: var(--color-text-white);
}

.course__btn:active {
  transform: translateX(-15px) translateY(2px);
  background-color: var(--color-action-dark-blue);
  color: var(--color-text-white);
}

/* ============================== */
/* MEDIA 1400px (87.5rem) */
/* ============================== */
@media (max-width: 87.5rem) {
  .courses__container {
    max-width: var(--max-width-container-laptop);
  }
}

/* ============================== */
/* MEDIA 1200px (75rem) */
/* ============================== */
@media (max-width: 75rem) {
  .courses__container {
    max-width: var(--max-width-container-tablet);
    padding: var(--padding-tb-container-tablet)
      var(--padding-lr-container-tablet);
  }

  .courses__title {
    font-size: var(--font-size-title-md);
  }

  .courses__description {
    font-size: var(--font-size-text-md);
  }
}

/* ============================== */
/* MEDIA 992px (62rem) */
/* ============================== */
@media (max-width: 62rem) {
  .courses__container {
    max-width: var(--max-width-container-smartphone);
  }

  .course {
    grid-template-columns: repeat(2, 1fr);
  }

  .courses__head {
    max-width: initial;
  }
}

/* ============================== */
/* MEDIA 768px (48rem) */
/* ============================== */
@media (max-width: 48rem) {
  .courses__container {
    max-width: var(--max-width-container-mobile);
    padding: var(--padding-tb-container-mobile)
      var(--padding-lr-container-mobile);
  }

  .courses__head {
    max-width: initial;
  }
}

/* ============================== */
/* MEDIA 576px (36rem) */
/* ============================== */
@media (max-width: 36rem) {
  .courses__head {
    align-items: stretch;
  }

  .courses__title {
    font-size: var(--font-size-title-sm);
  }

  .courses__description {
    font-size: var(--font-size-text-sm);
  }

  .courses__btns {
    flex-direction: column;
    align-items: stretch;
  }

  .course {
    grid-template-columns: 1fr;
  }

  .course__title {
    font-size: var(--font-size-title-xs);
  }

  .course__description {
    font-size: var(--font-size-text-xs);
  }
}
</style>