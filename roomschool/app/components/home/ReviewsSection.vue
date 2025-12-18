<template>
  <section class="main__section reviews">
    <div class="reviews__container">
      <div class="reviews__content">
        <div class="reviews__text">
          <h2 class="reviews__title">Реальные отзывы от реальных людей</h2>
          <p class="reviews__description">
            Мы собираем отзывы с различных платформ. Каждый отзыв проверен и
            имеет ссылку на источник для подтверждения подлинности.
          </p>
          <div class="reviews__stats">
            <span class="reviews__count reviews__count_avg"> 5 </span>
            <span class="reviews__count reviews__count_percent"> 100% </span>
          </div>
        </div>
        <div class="reviews__list">
          <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="40"
            :loop="true"
            effect="cube"
            :pagination="{ clickable: true }"
            class="reviews__slider"
          >
            <swiper-slide
              v-for="(review, index) in reviews"
              :key="index"
              class="reviews__slide"
            >
              <div class="reviews__block">
                <div class="reviews__rating">
                  <span v-for="i in review.rating" :key="i"></span>
                </div>
                <h4 class="reviews__course"> {{ review.evaluated }} </h4>
                <p class="reviews__review">
                  {{ review.comment }}
                </p>
                <div class="reviews__footer">
                  <span class="reviews__author"> {{ review.author }} </span>
                  <a :href="review.source" class="reviews__link"> Источник </a>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, EffectCube } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

import reviewsJson from "~/data/reviews.json";

export default {
  data() {
    return {
      modules: [Pagination, Autoplay, EffectCube],
      reviews: reviewsJson,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
/* 
_____________
Секция новостей и блога
_____________
*/
.reviews {
}

.reviews__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: var(--padding-tb-container-desktop)
    var(--padding-lr-container-desktop);
}

.reviews__content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.reviews__text {
  flex-basis: 50%;
}

.reviews__title {
  margin-bottom: var(--margin-bottom-title);
  font-size: var(--font-size-title-md);
}

.reviews__description {
  margin-bottom: var(--margin-bottom-description);
  font-size: var(--font-size-text-md);
}

.reviews__stats {
  display: flex;
  align-items: center;
  gap: 20px;
}

.reviews__count {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-title-lg);
  color: var(--color-text-blue);
}

.reviews__count::after {
  font-size: var(--font-size-text-xs);
  color: var(--color-text-grey);
}

.reviews__count_avg::after {
  content: "Средняя оценка";
}

.reviews__count_percent::after {
  content: "Рекомендуют";
}

.reviews__list {
  flex-basis: 50%;
  position: relative;
  padding-bottom: 40px;
}

.reviews__btn {
  top: initial;
  bottom: 0;
  width: 25px;
  height: 25px;
  border: var(--border-blue);
}

.reviews__btn_prev::after {
  width: 8px;
  height: 8px;
  border-left: var(--border-blue);
  border-bottom: var(--border-blue);
  transform: rotate(45deg);
  content: "";
}

.reviews__btn_next::after {
  width: 8px;
  height: 8px;
  border-right: var(--border-blue);
  border-bottom: var(--border-blue);
  transform: rotate(-45deg);
  content: "";
}

.reviews__slider {
  max-width: 600px;
}

.reviews__wrapper {
  display: flex;
  width: 100%;
}

.reviews__slide {
  display: flex;
  align-items: stretch;
  min-height: 350px;
  box-sizing: border-box;
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-grey);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.reviews__block {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 2em;
}

.reviews__rating {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.reviews__rating span {
  display: inline-block;
  width: 20px;
  height: 20px;
  mask-image: url("/media/icons/star.svg");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  background-color: #8ad1fd;
}

.reviews__course {
  align-self: self-start;
  display: inline-block;
  margin-bottom: 20px;
  padding: 0.4em 1em;
  border: var(--border-blue);
  border-radius: var(--radius-max);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-xs);
  background-color: var(--color-label-blue);
  color: var(--color-text-blue);
}

.reviews__review {
  flex-grow: 1;
  font-size: var(--font-size-text-lg);
}

.reviews__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  gap: 20px;
}

.reviews__author {
  display: inline-block;
  margin-right: auto;
}

.reviews__link {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0.2em 0.5em;
  border: var(--border-blue);
  border-radius: var(--radius-md);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-xs);
  color: var(--color-text-blue);
}

.reviews__link::before {
  content: "";
  width: 20px;
  height: 20px;
  mask-image: url("/media/icons/link.svg");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  background-color: var(--color-text-blue);
}

/* ============================== */
/* MEDIA 1400px (87.5rem) */
/* ============================== */
@media (max-width: 87.5rem) {
  .reviews__container {
    max-width: var(--max-width-container-laptop);
  }
}

/* ============================== */
/* MEDIA 1200px (75rem) */
/* ============================== */
@media (max-width: 75rem) {
  .reviews__container {
    max-width: var(--max-width-container-tablet);
    padding: var(--padding-tb-container-tablet)
      var(--padding-lr-container-tablet);
  }

  .reviews__title {
    font-size: var(--font-size-title-sm);
  }

  .reviews__description {
    font-size: var(--font-size-text-sm);
  }

  .reviews__slider {
    max-width: 400px;
  }
}

/* ============================== */
/* MEDIA 992px (62rem) */
/* ============================== */
@media (max-width: 62rem) {
  .reviews__container {
    max-width: var(--max-width-container-smartphone);
  }

  .reviews__slider {
    max-width: 400px;
  }
}

/* ============================== */
/* MEDIA 768px (48rem) */
/* ============================== */
@media (max-width: 48rem) {
  .reviews__container {
    max-width: var(--max-width-container-mobile);
    padding: var(--padding-tb-container-mobile)
      var(--padding-lr-container-mobile);
  }

  .reviews__content {
    flex-direction: column;
  }

  .reviews__text {
    text-align: center;
  }

  .reviews__title {
    font-size: var(--font-size-title-md);
  }

  .reviews__description {
    font-size: var(--font-size-text-md);
  }

  .reviews__stats {
    justify-content: center;
  }

  .reviews__count {
    align-items: center;
  }

  .reviews__slider {
    max-width: 500px;
  }

  .reviews__review {
    font-size: var(--font-size-text-sm);
  }
}

/* ============================== */
/* MEDIA 576px (36rem) */
/* ============================== */
@media (max-width: 36rem) {
  .reviews__slider {
    max-width: 320px;
  }

  .reviews__slide {
    padding: 1em;
  }

  .reviews__review {
    max-width: 300px;
    font-size: var(--font-size-text-xs);
  }
}
</style>