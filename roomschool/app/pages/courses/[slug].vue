<template>
  <main class="main">
    <section class="main__section courses">
      <div class="courses__container">
        <div class="courses__wrapper">
          <div class="courses__content">
            <h1 class="courses__title">{{ course.data.name }}</h1>
            <p class="courses__description">
              {{ course.data.description.main }}
            </p>
            <span class="courses__videos videos-course">
              {{ course.data.videos }} видео
            </span>
            <span class="courses__hours hours-course">
              {{ getHours(course.data.duration) }} ч.
            </span>
            <span class="courses__rating rating-course">
              {{ course.data.rating }}
            </span>
          </div>
          <div class="courses__image">
            <img :src="'/media/images/' + course.data.image" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="main__section detail">
      <div class="detail__container">
        <div class="detail__info tabs">
          <div class="tabs__btns">
            <button
              @click="activeTab = 'description'"
              :class="['tabs__btn', { active: activeTab === 'description' }]"
            >
              Описание
            </button>
            <button
              @click="activeTab = 'plan'"
              :class="['tabs__btn', { active: activeTab === 'plan' }]"
            >
              План
            </button>
            <button
              @click="activeTab = 'teachers'"
              :class="['tabs__btn', { active: activeTab === 'teachers' }]"
            >
              Преподаватели
            </button>
            <button
              @click="activeTab = 'reviews'"
              :class="['tabs__btn', { active: activeTab === 'reviews' }]"
            >
              Отзывы
            </button>
          </div>
          <div class="tabs__content">
            <Transition name="fade" mode="out-in">
              <div
                v-if="activeTab === 'description'"
                key="description"
                class="tabs__data description_md"
                v-html="renderedDescription"
              ></div>

              <div
                v-else-if="activeTab === 'plan'"
                key="plan"
                class="tabs__data plan"
              >
                <div
                  class="plan__module"
                  v-for="(module, modIndex) in course.data.modules"
                  :key="modIndex"
                >
                  <div class="plan__topic">
                    <p class="plan__title">{{ module.title }}</p>
                    <p class="plan__description">
                      {{ module.description }}
                    </p>
                    <span class="plan__counter videos-course"> 5 </span>
                    <span class="plan__counter testes-course"> 2 </span>
                  </div>
                  <ul class="plan__detail">
                    <li
                      :class="[
                        'plan__item',
                        lesson.type === 'video'
                          ? 'plan__item_video'
                          : 'plan__item_work',
                      ]"
                      :style="'--i:' + lesIndex"
                      v-for="(lesson, lesIndex) in module.lessons"
                      :key="lesIndex"
                    >
                      <span class="plan__name"> {{ lesson.title }} </span>
                      <span class="plan__type">
                        {{ lesson.type === "video" ? "Видео" : "Тест" }}
                      </span>
                      <span class="plan__time hours-course">
                        {{ lesson.duration }} м.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                v-else-if="activeTab === 'teachers'"
                key="teachers"
                class="tabs__data teachers"
              >
                <div
                  class="teachers__item"
                  v-for="(teacher, index) in course.data.teachers"
                  :key="index"
                >
                  <div class="teachers__image">
                    <img
                      :src="
                        '/media/images/' + teacher.image
                          ? teacher.image
                          : 'no-photo.webp'
                      "
                      alt=""
                    />
                  </div>
                  <div class="teachers__info">
                    <span
                      class="teachers__role"
                      title="Выступает на готовых видеоматериалах"
                    >
                      {{ getTeacherRole(teacher.role) }}
                    </span>
                    <h3 class="teachers__name">{{ teacher.name }}</h3>
                    <p class="teachers__post">{{ teacher.post }}</p>
                    <p class="teachers__description">
                      {{ teacher.description }}
                    </p>
                    <span class="teachers__rating rating-course">
                      {{ teacher.rating }}
                    </span>
                  </div>
                </div>
              </div>

              <div
                v-else-if="activeTab === 'reviews'"
                key="reviews"
                class="tabs__data reviews"
              >
                <div class="reviews__head">
                  <div class="reviews__rating">
                    <span class="reviews__count"> 4.8 </span>
                    <span class="reviews__stars">
                      <span class="reviews__star"></span>
                    </span>
                  </div>
                  <div class="reviews__description">
                    <p class="reviews__descr">Рейтинг программы</p>
                    <span class="reviews__amount">
                      {{ course.data.reviews.length }} отзыва
                    </span>
                  </div>
                </div>
                <div class="reviews__list">
                  <div
                    class="reviews__item review"
                    v-for="(review, index) in course.data.reviews"
                    :key="index"
                  >
                    <span class="review__date"> {{ review.created_at }} </span>
                    <h4 class="review__author">{{ review.author }}</h4>
                    <h5 class="review__eval">{{ review.evaluated }}</h5>
                    <div class="review__rating">
                      <span
                        class="review__stars"
                        :style="'width: ' + (review.rating / 5) * 100 + '%'"
                      ></span>
                    </div>
                    <p class="review__comment">{{ review.comment }}</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
        <div class="detail__control course">
          <div class="course__info">
            <span class="course__price course__price_new">
              {{ getDiscountPrice(course.data.price, course.data.discount) }}
            </span>
            <span
              class="course__price course__price_old"
              v-if="course.data.discount"
            >
              {{ course.data.price }}
            </span>

            <span class="course__discount"> {{ course.data.discount }} </span>
          </div>
          <div class="course__control">
            <button class="course__btn">Приобрести</button>
            <button class="course__btn">Попробовать</button>
            <button class="course__btn">Проконсультироваться</button>
          </div>
          <div class="course__recommendations" v-if="recomendations.length">
            <span class="course__title">
              Рекомендуем пройти до начала курса:
            </span>
            <ul class="course__list">
              <li
                class="course__recommendation"
                v-for="(rec, index) in recomendations"
                :key="index"
              >
                <a href="" class="course__link">
                  {{ rec }}
                </a>
              </li>
            </ul>
          </div>
          <ul class="course__conditions">
            <li class="course__condition course__condition_garant">
              10-дневная гарантия возврата
            </li>
            <li class="course__condition course__condition_sertif">
              Сертификат по окончанию
            </li>
            <li class="course__condition course__condition_support">
              Сопровождение ученика на каждом этапе
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import courseJson from "~/data/course.json";

import MarkdownIt from "markdown-it";

export default {
  data() {
    return {
      course: courseJson.find(
        (course) => course.slug === this.$route.params.slug
      ),
      recomendations: [
        "Эмоциональный интеллект (Продвинутый)",
        "Гормональное управление",
      ],
      activeTab: "reviews",
    };
  },
  methods: {
    getHours(hours) {
      return parseFloat((hours / 60).toFixed(1));
    },
    getTeacherRole(role) {
      switch (role) {
        case "speaker":
          return "Спикер";
        case "lecturer":
          return "Преподаватель";
        case "mentor":
          return "Ментор";
      }
    },
    getDiscountPrice(price, discount) {
      const result = price * (1 - discount / 100);
      return Math.floor(result);
    },
  },
  computed: {
    renderedDescription() {
      const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
      });
      return md.render(this.course.data.description.full);
    },
  },
};
</script>

<style scoped>
/* 
_____________
Блок с курсом
_____________
*/
.courses {
  background: var(--color-bg-blue-purpure-linear-gradient);
}

.courses__container {
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: 120px var(--padding-lr-container-desktop) 50px;

  /* 1400 px */
  @media (max-width: 87.5rem) {
    max-width: var(--max-width-container-laptop);
  }

  /* 1200 px */
  @media (max-width: 75rem) {
    max-width: var(--max-width-container-tablet);
    padding: 130px var(--padding-lr-container-tablet)
      var(--padding-tb-container-tablet);
  }

  /* 992 px */
  @media (max-width: 62rem) {
    max-width: var(--max-width-container-smartphone);
  }

  /* 768 px */
  @media (max-width: 48rem) {
    max-width: var(--max-width-container-mobile);
    padding: 100px var(--padding-lr-container-mobile)
      var(--padding-tb-container-mobile);
  }

  /* 576 px */
  @media (max-width: 36rem) {
    align-items: center;
    max-width: 100%;
  }
}

.courses__wrapper {
  display: flex;
  align-items: center;
  gap: 30px;
}

.courses__content {
  flex-basis: 60%;
}

.courses__title {
  margin-bottom: var(--margin-bottom-title);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-title-lg);
  font-weight: 500;
}

.courses__description {
  margin-bottom: var(--margin-bottom-description);
  font-family: var(--font-family-nunito);
  font-size: var(--font-size-text-lg);
}

.courses__videos,
.courses__hours {
  margin-right: 10px;
}

.courses__image {
  flex-basis: 40%;
  min-width: 250px;
  min-height: 250px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-classic);
  background-image: url("/media/images/no-photo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.courses__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* 
_____________
С детальной информацией
_____________
*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.detail__container {
  display: flex;
  gap: 30px;
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: 40px var(--padding-tb-container-desktop)
    var(--padding-lr-container-desktop);

  /* 1400 px */
  @media (max-width: 87.5rem) {
    max-width: var(--max-width-container-laptop);
  }

  /* 1200 px */
  @media (max-width: 75rem) {
    max-width: var(--max-width-container-tablet);
    padding: 130px var(--padding-lr-container-tablet)
      var(--padding-tb-container-tablet);
  }

  /* 992 px */
  @media (max-width: 62rem) {
    max-width: var(--max-width-container-smartphone);
  }

  /* 768 px */
  @media (max-width: 48rem) {
    max-width: var(--max-width-container-mobile);
    padding: 100px var(--padding-lr-container-mobile)
      var(--padding-tb-container-mobile);
  }

  /* 576 px */
  @media (max-width: 36rem) {
    align-items: center;
    max-width: 100%;
  }
}

.tabs {
  width: 70%;
}

.tabs__btns {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 3px;
  margin-bottom: 25px;
  box-sizing: border-box;
  border: var(--border-grey);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-white);
}

.tabs__btn {
  flex: 1;
  width: initial;
  height: initial;
  padding: 0.2em 2em;
  border-radius: var(--radius-max);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-sm);
  font-weight: 500;
  background-color: transparent;
  color: var(--color-text-black);
  opacity: 1;
  transition: color 0.2s, background-color 0.2s;
}

.tabs__btn.active {
  color: #8200db;
  background-color: #f3e8ff;
}

.tabs__btn:hover {
  color: #8200db;
  background-color: #f3e8ff;
}

.tabs__content {
  display: flex;
  border-radius: var(--radius-lg);
  background-color: #fff;
}

.tabs__data {
  flex-shrink: 0;
  flex-basis: 100%;
  counter-reset: modules;
}

/* 
_____________
Таб с описанием курса
_____________
*/
.description {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

/* 
_____________
Таб с планом обучения
_____________
*/
.teachers__item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 2em;
  border: var(--border-grey);
  border-radius: var(--radius-lg);
}

.teachers__item:not(:last-child) {
  margin-bottom: 10px;
}

.teachers__image {
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  border-radius: var(--radius-max);
  overflow: hidden;
}

.teachers__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.teachers__role {
  display: inline-block;
  margin-bottom: 10px;
  padding: 0.5em 1em;
  font-family: var(--font-family-montserrat);
  background: var(--color-label-blue);
}

.teachers__name {
  margin-bottom: 5px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-title-md);
  font-weight: 600;
}

.teachers__post {
  margin-bottom: 10px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-md);
  font-weight: 600;
  color: var(--color-text-purpure);
}

.teachers__description {
  margin-bottom: 10px;
  font-family: var(--font-family-nunito);
  font-size: var(--font-size-text-sm);
  font-weight: 400;
  color: var(--color-text-grey);
}

/* 
_____________
Таб с планом обучения
_____________
*/
.plan__module {
  padding: 1.5em;
  border: var(--border-blue);
  border-radius: var(--radius-md);
}

.plan__module:not(:last-child) {
  margin-bottom: 5px;
}

.plan__topic {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 10px;
  /* padding: 1em 3em; */
  cursor: url("/media/icons/cursor.cur") 0 0, auto;
}

.plan__title {
  flex-basis: 100%;
  margin-bottom: 3px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-title-xs);
  font-weight: 500;
}

.plan__description {
  flex-basis: 100%;
  margin-bottom: 5px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-xs);
  font-weight: 500;
  color: var(--color-text-grey);
}
.plan__counter {
}
.plan__detail {
  list-style: none;
  overflow: hidden;
  /* height: 0; */
  /* opacity: 0; */
  transition: height 0.4s ease, opacity 0.4s ease;
}

.plan__detail.open {
  opacity: 1;
}

.plan__item {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 15px;
  padding: 0.8em 3em;
  /* opacity: 0; */
  border-radius: var(--radius-md);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-sm);
  font-weight: 500;
  background-color: var(--color-bg-white);
  transform: translateY(10px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  transition-delay: calc(var(--i) * 0.15s);
}

.plan__item:not(:last-child) {
  margin-bottom: 10px;
}
.plan__item::before {
  position: absolute;
  left: 15px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  /* transform: scale(0); */
  transition: opacity 0.2s ease, transform 0.2s ease;
  transition-delay: calc(var(--i) * 0.15s + 0.1s);
  content: "";
}
.plan__item_video::before {
  background-image: url("/media/icons/videos.svg");
}
.plan__item_work::before {
  background-image: url("/media/icons/okey.svg");
}
.plan__name {
  flex-basis: 100%;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-title-xs);
  font-weight: 600;
}
.plan__type {
  padding: 0.2em;
  border: var(--border-grey);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-min);
  font-weight: 500;
}
.plan__detail.open .plan__item {
  opacity: 1;
  transform: translateY(0);
}
.plan__detail:not(.open) .plan__item {
  transition-delay: 0s;
}
.plan__detail.open .plan__item::before {
  transform: scale(1);
}

/* 
_____________
Таб с отзывами
_____________
*/
.reviews__head {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  padding: 1em;
  border-radius: var(--radius-max);
  background-color: var(--color-bg-grey);
}
.reviews__rating {
}
.reviews__count {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-max);
  font-weight: 500;
}
.reviews__stars {
  position: relative;
  display: block;
  height: 20px;
  width: 100px;
}
.reviews__stars::before {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  background-image: url("/media/gold-stars.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.reviews__star {
  position: absolute;
}

.review {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2em 0;
}
.review:not(:last-child) {
  margin-bottom: 10px;
  border-bottom: var(--border-grey);
}
.review__date {
  position: absolute;
  right: 0;
}
.review__author {
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-title-sm);
  font-weight: 600;
}
.review__eval {
  flex-basis: 100%;
  margin-bottom: 10px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-min);
  font-weight: 500;
  color: var(--color-text-grey);
}
.review__rating {
  position: relative;
  display: flex;
  align-items: center;
  /* flex-basis: 100%; */
  width: 100px;
  height: 20px;
  margin-bottom: 10px;
  background-image: url("/media/grey-stars.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.review__stars {
  position: relative;
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.review__stars::before {
  position: absolute;
  content: "";
  display: block;
  width: 100px;
  height: 100%;
  background-image: url("/media/icons/blue-stars.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
/* .review__star {
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.review__star_yellow {
  background-image: url("/media/icons/star.svg");
}
.review__star_white {
  background-image: url("/media/icons/star-w.svg");
} */
.review__comment {
  flex-basis: 100%;
  font-family: var(--font-family-nunito);
  font-size: var(--font-size-text-md);
  font-weight: 400;
}

/* 
_____________
Правый блок с кнопками и общей информацией
_____________
*/
.course {
  position: sticky;
  top: 100px;
  width: 30%;
  height: fit-content;
  padding: 1em;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-classic);
}

.course__info {
  display: flex;
  flex-wrap: wrap;
}
.course__price {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
  font-family: var(--font-family-montserrat);
}

.course__price::after {
  content: "₽";
}

.course__price_new {
  margin-right: 10px;
  font-size: var(--font-size-text-max);
  font-weight: 600;
}

.course__price_old {
  position: relative;
  top: -5px;
  margin-bottom: 5px;
  font-size: calc(var(--font-size-text-md) - 2px);
  color: var(--color-text-grey);
  text-decoration: line-through;
}

.course__discount {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-basis: 100%;
  padding: 0.2em 0.5em;
  margin-bottom: 20px;
  border-radius: var(--radius-max);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-xs);
  background-color: var(--color-bg-red);
  color: var(--color-text-red);
}

.course__discount::before {
  content: "Скидка";
}

.course__discount::after {
  content: "%";
}
.course__warning {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  padding: 0.3em 0.8em;
  border: var(--border-red);
  border-radius: var(--radius-max);
  font-size: var(--font-size-text-xs);
  color: var(--color-text-red);
  background-color: var(--color-bg-red);
}

.course__warning::before {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  background-image: url("/media/icons/clock.svg");
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 20px;
  color: var(--color-text-red);
  content: "";
}

.course__control {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 30px;
}

.course__btn {
  display: block;
  margin-bottom: 10px;
  padding: 0.8em 1em;
  border-radius: var(--radius-max);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-xs);
  font-weight: 500;
  background: var(--color-btn-blue);
  color: var(--color-text-white);
}

.course__title {
  display: block;
  margin-bottom: 10px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-xs);
  font-weight: 500;
}

.course__recommendations {
  margin-bottom: 20px;
}

.course__recommendation {
  display: flex;
  align-items: center;
  gap: 10px;
}

.course__recommendation::before {
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  border-radius: var(--radius-max);
  background-color: var(--color-bg-green);
  content: "";
}

.course__link {
  display: block;
  padding: 0.5em 0;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-xs);
  font-weight: 400;
}

.course__link:hover {
  color: var(--color-action-blue);
}

.course__conditions {
  padding: 2em 0;
  border-top: var(--border-grey);
}

.course__condition {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-xs);
}

.course__condition:not(:last-child) {
  margin-bottom: 8px;
}

.course__condition::before {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  content: "";
}

.course__condition_garant::before {
  background-image: url("/media/icons/shield.svg");
}

.course__condition_sertif::before {
  background-image: url("/media/icons/medal.svg");
}

.course__condition_support::before {
  background-image: url("/media/icons/shield.svg");
}
</style>