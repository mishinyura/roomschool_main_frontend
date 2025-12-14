<template>
  <main class="main">
    <Title>{{ pageTitle }}</Title>
    <Mata name="description" :content="metaDescription"/>
    <section class="main__section hero">
      <div class="hero__container">
        <div class="hero__content">
          <span class="hero__label">
            🚀 Инновационная образовательная платформа
          </span>
          <h1 class="hero__title">
            Детская онлайн школа<span> с AI-поддержкой</span>
          </h1>
          <p class="hero__descr">
            Пространство для развития, открытий и уверенного будущего! Здесь
            каждый ребенок получает не только знания, но и внимание к
            индивидуальным целям.
          </p>
          <button class="hero__btn hero__btn_neon" tabindex="0">
            Начать обучение
          </button>
          <button class="hero__btn hero__btn_neoninv" tabindex="0">
            Узнать больше
          </button>
        </div>
      </div>
    </section>
    <CoursesSection />
    <ArticlesSection />
    <ReviewsSection />
  </main>
</template>

<script>
import CoursesSection from '../components/home/CoursesSection.vue'
import ArticlesSection from '../components/home/ArticlesSection.vue'
import ReviewsSection from '../components/home/ReviewsSection.vue'

export default {
  data() {
    return {
      pageTitle: 'RoomSchool - Детская онлайн школа с AI-поддержкой',
      metaDescription: 'Детская онлайн школа с AI-поддержкой'
    }
  },
  components: {
    CoursesSection,
    ArticlesSection,
    ReviewsSection
  }
}
</script>


<style scoped>

/* 
_____________
Приветственная секция
class hero
_____________
*/
.hero {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background:
    url('/media/images/AI5.webp'),
    url('/media/images/paint-shape.webp'),
    var(--color-bg-blue-purpure-linear-gradient);
  background-size: 40%, 40%, 100%;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: 85% center, 70% 80%, center;
}

.hero__container {
  display: flex;
  align-items: center;
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: 130px var(--padding-lr-container-desktop) var(--padding-tb-container-desktop);
}

.hero__content {
  max-width: 50%;
  padding: calc(var(--padding-cards) + 2.5em);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-black-transparent);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.hero__label {
  display: inline-block;
  margin-bottom: 10px;
  padding: 0.5em 1em;
  border: var(--border-blue);
  border-radius: var(--radius-max);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-min);
  font-weight: 400;
  color: var(--color-text-blue);
}

.hero__title {
  position: relative;
  margin-bottom: var(--margin-bottom-title);
  color: var(--color-text-white);
  z-index: 1;
}

.hero__title span {
  color: var(--color-text-blue);
}

.hero__descr {
  position: relative;
  margin-bottom: var(--margin-bottom-description);
  font-weight: 300;
  color: var(--color-text-white);
  z-index: 1;
}


.hero__btn_neon {
  margin-right: var(--margin-cards);
}

/* ============================== */
/* MEDIA 1400px (87.5rem) */
/* ============================== */
@media (max-width: 87.5rem) {
  .hero__container {
    max-width: var(--max-width-container-laptop);
  }

  .hero__title {
    font-size: var(--font-size-title-lg);
  }

  .hero__descr {
    font-size: var(--font-size-text-lg);
  }
}

/* ============================== */
/* MEDIA 1200px (75rem) */
/* ============================== */
@media (max-width: 75rem) {
  .hero__container {
    max-width: var(--max-width-container-tablet);
    padding: 130px var(--padding-lr-container-tablet) var(--padding-tb-container-tablet);
  }
}

/* ============================== */
/* MEDIA 992px (62rem) */
/* ============================== */
@media (max-width: 62rem) {
  .hero {
    background-size: 80%, 50%, 100%;
    background-position: 85% center, center 15%, center;
  }

  .hero__container {
    justify-content: center;
    max-width: var(--max-width-container-smartphone);
  }

  .hero__content {
    max-width: initial;
    backdrop-filter: blur(5px) saturate(120%);
    -webkit-backdrop-filter: blur(5px) saturate(120%);
  }

  .hero__label {
    margin-bottom: 20px;
  }

  .hero__title {
    margin-bottom: 30px;
    font-size: var(--font-size-title-md);
  }

  .hero__descr {
    margin-bottom: 50px;
  }
}

/* ============================== */
/* MEDIA 768px (48rem) */
/* ============================== */
@media (max-width: 48rem) {
  .hero__container {
    max-width: var(--max-width-container-mobile);
    padding: 100px var(--padding-lr-container-mobile) var(--padding-tb-container-mobile);
  }

  .hero__content {
    padding: var(--padding-cards);
    text-align: center;
  }
}

/* ============================== */
/* MEDIA 576px (36rem) */
/* ============================== */
@media (max-width: 36rem) {
  .hero {
    align-items: flex-start;
    background-size: 100%;
    background-position: center 92%, center 15%, center;
  }

  .hero__container {
    max-width: 100%;
    margin: 0;
  }

  .hero__title {
    text-align: center;
    font-size: var(--font-size-title-sm);
  }

  .hero__descr {
    text-align: center;
    font-size: var(--font-size-text-sm);
  }

  .hero__btn {
    display: block;
    width: 100%;
  }

  .hero__btn_classic {
    margin-right: 0;
    margin-bottom: var(--margin-cards);
  }
}
</style>