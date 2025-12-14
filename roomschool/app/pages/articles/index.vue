<template>
  <main class="main">
    <div class="main__section head">
      <div class="head__container">
        <h1 class="head__title">Все статьи</h1>
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
          <article class="articles__item article">
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
          </article>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.head {
    background: var(--color-bg-blue-purpure-linear-gradient);
}

.head__container {
    display: flex;
    align-items: center;
    max-width: var(--max-width-container-desktop);
    margin: auto;
    padding: 130px var(--padding-lr-container-desktop) var(--padding-tb-container-desktop);
}

.filters__container{
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
    padding: var(--padding-tb-container-desktop) var(--padding-lr-container-desktop);
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

.article {
    border-radius: var(--radius-lg);
    overflow: hidden;
    background-color: var(--color-card-white);
    transition: box-shadow .2s;
}

.article:hover{
    box-shadow: var(--shadow-classic);
}

.article__link{
    display: flex;
    flex-direction: column;
    flex: 1;
}

.article__image {
    position: relative;
    flex-basis: 17em;
    overflow: hidden;
    background-image: url('/media/images/no-photo.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.article__label{
    position: absolute;
    left: 20px;
    top: 20px;
    padding: 0.3em 0.8em;
    border-radius: var(--radius-max);
    font-family: var(--font-family-montserrat);
    font-size: var(--font-size-text-sm);
    z-index: 1;
}

.article__label_blue{
    background-color: var(--color-label-blue-transparent);
    color: var(--color-text-black);
}

.article__label_green{
    background-color: var(--color-label-green-transparent);
    color: var(--color-text-black);
}

.article__label_purpure{
    background-color: var(--color-label-purpure-transparent);
    color: var(--color-text-black);
}

.article__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform .2s;
}

.article:hover .article__image img {
    transform: scale(1.05);
}

.article__content {
    position: relative;
    flex-grow: 1;
    padding: var(--padding-cards);
    border-bottom: var(--border-grey);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.article__content::before {
    position: absolute;
    top: -12px;
    right: 0px;
    left: 0;
    height: 25px;
    border-radius: 100%;
    background-color: var(--color-card-white);
    content: '';
}

.article__title {
    position: relative;
    z-index: 1;
    display: -webkit-box;
    margin-bottom: 20px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: var(--font-family-montserrat);
    font-size: var(--font-size-title-sm);
    font-weight: 500;
    transition: color .2s;
}

.article__title::after {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-top: 1px solid var(--color-text-black);
    border-right: 1px solid var(--color-text-black);
    transform: rotate(45deg);
    content: '';
    transition: transform .2s, border-color .2s;
}

.article:hover:hover .article__title {
    color: var(--color-text-blue);
}

.article:hover:hover .article__title::after {
    transform: translateX(2px) scale(0.9) rotate(45deg);
    border-color: var(--color-text-blue);
}

.article__description {
    position: relative;
    z-index: 1;
    display: -webkit-box;
    margin-bottom: 20px;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: var(--font-family-nunito);
    font-size: var(--font-size-text-sm);
}

.article__author {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: auto;
    padding: 1em var(--padding-cards);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.article__img {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    border: var(--border-black);
    border-radius: 200px;
    overflow: hidden;
    background-image: url('/media/images/no-user-photo.webp');
    background-size: cover;
    background-position: center;
}

.article__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.article__name {
    display: block;
    margin-bottom: 5px;
    font-family: var(--font-family-montserrat);
    font-size: var(--font-size-text-sm);
    font-weight: 500;
}

.article__position {
    display: block;
    font-family: var(--font-family-montserrat);
    font-size: var(--font-size-text-min);
    color: var(--color-text-grey);
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
        padding: 130px var(--padding-lr-container-tablet) var(--padding-tb-container-tablet);
    }

    .filters__container {
        max-width: var(--max-width-container-tablet);
    }

    .articles__container {
        max-width: var(--max-width-container-tablet);
        padding: 20px var(--padding-lr-container-tablet) var(--padding-tb-container-tablet);
    }

    .comments__container {
        max-width: var(--max-width-container-tablet);
        padding: 0px var(--padding-lr-container-tablet) var(--padding-tb-container-tablet);
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