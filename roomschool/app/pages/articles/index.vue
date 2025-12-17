<template>
  <main class="main">
    <div class="main__section head">
      <div class="head__container">
        <h1 class="head__title">Все статьи</h1>
        <p class="head__description">
          Мы собираем лучшие статьи, которые помогут вам научиться и развиться
        </p>
      </div>
    </div>
    <div class="main__section filters">
      <div class="filters__container">
        <div class="filters__search">
          <form action="/" class="filters__form">
            <label class="filters__label">
              <input
                type="text"
                placeholder="Введите запрос для поиска курсов или статей"
              />
            </label>
            <button class="filters__btn filters__btn_classic">Найти</button>
          </form>
        </div>
      </div>
    </div>
    <div class="main__section articles">
      <div class="articles__container">
        <div class="articles__list">
          <TheArticle
            class="articles__item"
            v-for="(article, index) in articles"
            :key="index"
            :article="article"
          />
          <!-- <article class="articles__item article">
            <a href="#" class="article__link">
              <div class="article__image">
                <span class="article__label article__label_blue">Финансы</span>
                <img
                  src="/media/images/programs_individual.webp"
                  alt=""
                />
              </div>
              <div class="article__content">
                <h3 class="article__title">
                  Выводим онлийн образование на новый уровень
                </h3>
                <p class="article__description">
                  По данным исследования в России существует ряд глобальных
                  образовательных проблем, которые не решаются существующими
                  инструментами...
                </p>
              </div>
              <div class="article__author">
                <div class="article__img">
                  <img src="/media/images/i.webp" alt="" />
                </div>
                <div class="article__author-info">
                  <span class="article__name"> Юрий Мишин </span>
                  <span class="article__position"> Предприниматель </span>
                </div>
              </div>
            </a>
          </article>
          <article class="articles__item article">
            <a href="#" class="article__link">
              <div class="article__image">
                <span class="article__label article__label_green"
                  >Психология</span
                >
                <img src="/media/images/programs_main.webp" alt="" />
              </div>
              <div class="article__content">
                <h3 class="article__title">
                  Выводим онлийн образование на новый уровень
                </h3>
                <p class="article__description">
                  По данным исследования в России существует ряд глобальных
                  образовательных проблем, которе не решаются существующими
                  инструментами. Время требуют серьезных поправок...
                </p>
              </div>
              <div class="article__author">
                <div class="article__img">
                  <img src="/media/images/i.webp" alt="" />
                </div>
                <div class="article__author-info">
                  <span class="article__name"> Юрий Мишин </span>
                  <span class="article__position">
                    Преподаватель финансовой грамотности
                  </span>
                </div>
              </div>
            </a>
          </article>
          <article class="articles__item article">
            <a href="#" class="article__link">
              <div class="article__image">
                <span class="article__label article__label_purpure">Право</span>
                <img
                  src="/media/images/programs_national.webp"
                  alt=""
                />
              </div>
              <div class="article__content">
                <h3 class="article__title">
                  Выводим онлийн образование на новый уровень
                </h3>
                <p class="article__description">
                  По данным исследования в России существует ряд глобальных
                  образовательных проблем, которе не решаются существующими
                  инструментами. Время требуют серьезных поправок. По данным
                  исследования в России существует ряд глобальных
                  образовательных проблем, которе не решаются существующими
                  инструментами. Время требуют серьезных
                </p>
              </div>
              <div class="article__author">
                <div class="article__img">
                  <img src="/media/images/i.webp" alt="" />
                </div>
                <div class="article__author-info">
                  <span class="article__name"> Юрий Мишин </span>
                  <span class="article__position">
                    Преподаватель финансовой грамотности
                  </span>
                </div>
              </div>
            </a>
          </article> -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import articlesJson from "~/data/articles.json";

import TheArticle from "~/components/articles/TheArticle.vue";

export default {
  components: { TheArticle },
  data() {
    return {
      articles: articlesJson,
    };
  },
};
</script>

<style scoped>
.head {
  background: var(--color-bg-blue-purpure-linear-gradient);
}

.head__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: var(--max-width-container-desktop);
  padding: 150px var(--padding-lr-container-desktop)
    var(--padding-tb-container-desktop);
  margin: auto;
  text-align: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.head__title {
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-title-max);
  font-weight: 500;
}

.head__description {
  font-family: var(--font-family-nunito);
  font-size: var(--font-size-text-max);
  font-weight: 400;
}

.filters__container {
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: 20px var(--padding-lr-container-desktop);
}

.articles__container {
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: 20px var(--padding-lr-container-desktop);
}

/* 
_____________
Секция новостей и блога
_____________
*/
.articles {
  background-color: var(--color-bg-grey);
}

.articles__container {
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: var(--padding-tb-container-desktop)
    var(--padding-lr-container-desktop);
}

.articles__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: var(--margin-bottom-description);
}

.articles__title {
  max-width: 500px;
  margin-bottom: var(--margin-bottom-title);
}

.articles__description {
  max-width: 500px;
  font-size: var(--font-size-text-lg);
}

.articles__btn {
  font-family: var(--font-family-montserrat);
}

.articles__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--margin-cards);
}

/* 1400 px */
@media (max-width: 87.5rem) {
  .head__container {
    max-width: var(--max-width-container-laptop);
  }

  .filters__container {
    max-width: var(--max-width-container-laptop);
  }

  .articles__container {
    max-width: var(--max-width-container-laptop);
  }

  .comments__container {
    max-width: var(--max-width-container-laptop);
  }
}

/* 1200 px */
@media (max-width: 75rem) {
  .head__container {
    max-width: var(--max-width-container-tablet);
    padding: 130px var(--padding-lr-container-tablet)
      var(--padding-tb-container-tablet);
  }

  .filters__container {
    max-width: var(--max-width-container-tablet);
  }

  .articles__container {
    max-width: var(--max-width-container-tablet);
    padding: 20px var(--padding-lr-container-tablet)
      var(--padding-tb-container-tablet);
  }

  .comments__container {
    max-width: var(--max-width-container-tablet);
    padding: 0px var(--padding-lr-container-tablet)
      var(--padding-tb-container-tablet);
  }
}

/* 992 px */
@media (max-width: 62rem) {
  .head__container {
    max-width: var(--max-width-container-smartphone);
  }

  .filters__container {
    max-width: var(--max-width-container-smartphone);
  }

  .articles__container {
    max-width: var(--max-width-container-smartphone);
  }

  .comments__container {
    max-width: var(--max-width-container-smartphone);
  }
}

/* 768 px */
@media (max-width: 48rem) {
  .comment__text {
    max-width: initial;
  }
}

/* 576 px */
@media (max-width: 36rem) {
  .article__info {
    flex-direction: column;
    gap: 20px;
  }

  .comments__item {
    flex-direction: column;
    align-items: center;
  }

  .comment__img {
    width: 40px;
    height: 40px;
  }

  .comment__name {
    text-align: center;
  }

  .comment__date {
    text-align: center;
  }
}
</style>