<template>
  <section class="main__section blog">
    <div class="blog__container">
      <div class="blog__head">
        <div class="blog__text">
          <h2 class="blog__title">Полезные статьи</h2>
          <p class="blog__description">
            Мы собираем множество полезной информации совершенно бесплатно
          </p>
        </div>
        <a href="#" class="blog__btn blog__btn_neon"> Посмотреть все </a>
      </div>
      <div class="blog__list posts">
        <article class="posts__item">
          <div class="posts__image">
            <img src="/media/images/programs_individual.webp" alt="" />
          </div>
          <div class="posts__content">
            <h3 class="posts__title">
              <a href="/articles/vivodim-obrazovanie-na-novi-uroven" class="posts__link">
                Выводим онлийн образование на новый уровень
              </a>
            </h3>
            <p class="posts__description">
              По данным исследования в России существует ряд глобальных
              образовательных проблем, которые не решаются существующими
              инструментами...
            </p>
          </div>
          <div class="posts__author">
            <div class="posts__img">
              <img src="/media/images/i.webp" alt="" />
            </div>
            <div class="posts__author-info">
              <span class="posts__name"> Юрий Мишин </span>
              <span class="posts__position"> Предприниматель </span>
            </div>
          </div>
        </article>
        <article class="posts__item">
          <div class="posts__image">
            <img src="/media/images/programs_main.webp" alt="" />
          </div>
          <div class="posts__content">
            <h3 class="posts__title">
              <a href="/articles/vivodim-obrazovanie-na-novi-uroven" class="posts__link">
                Выводим онлийн образование на новый уровень
              </a>
            </h3>
            <p class="posts__description">
              По данным исследования в России существует ряд глобальных
              образовательных проблем, которе не решаются существующими
              инструментами. Время требуют серьезных поправок...
            </p>
          </div>
          <div class="posts__author">
            <div class="posts__img">
              <img src="/media/images/i.webp" alt="" />
            </div>
            <div class="posts__author-info">
              <span class="posts__name"> Юрий Мишин </span>
              <span class="posts__position">
                Преподаватель финансовой грамотности
              </span>
            </div>
          </div>
        </article>
        <article class="posts__item">
          <div class="posts__image">
            <img src="/media/images/programs_national.webp" alt="" />
          </div>
          <div class="posts__content">
            <h3 class="posts__title">
              <a href="/articles/vivodim-obrazovanie-na-novi-uroven" class="posts__link">
                Выводим онлийн образование на новый уровень
              </a>
            </h3>
            <p class="posts__description">
              По данным исследования в России существует ряд глобальных
              образовательных проблем, которе не решаются существующими
              инструментами. Время требуют серьезных поправок. По данным
              исследования в России существует ряд глобальных образовательных
              проблем, которе не решаются существующими инструментами. Время
            </p>
          </div>
          <div class="posts__author">
            <div class="posts__img">
              <img src="/media/images/i.webp" alt="" />
            </div>
            <div class="posts__author-info">
              <span class="posts__name"> Юрий Мишин </span>
              <span class="posts__position">
                Преподаватель финансовой грамотности
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* 
_____________
Секция новостей и блога
_____________
*/
.blog {
  background-color: var(--color-bg-grey);
}

.blog__container {
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: var(--padding-tb-container-desktop)
    var(--padding-lr-container-desktop);
}

.blog__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: var(--margin-bottom-description);
}

.blog__title {
  max-width: 500px;
  margin-bottom: var(--margin-bottom-title);
}

.blog__description {
  max-width: 500px;
  font-size: var(--font-size-text-lg);
}

.blog__btn {
  font-family: var(--font-family-montserrat);
}

.posts {
  display: flex;
  gap: var(--margin-cards);
}

.posts__item {
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background-color: var(--color-card-white);
}

.posts__image {
  flex-basis: 17em;
  overflow: hidden;
  background-image: url("/media/images/no-photo.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.posts__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.posts__content {
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

.posts__content::before {
  position: absolute;
  top: -12px;
  right: 0px;
  left: 0;
  height: 25px;
  border-radius: 100%;
  background-color: var(--color-card-white);
  content: "";
}

.posts__link {
  position: relative;
  z-index: 1;
  display: block;
  margin-bottom: 20px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-title-sm);
  font-weight: 500;
  transition: color 0.2s;
}

.posts__link::after {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-top: 1px solid var(--color-text-black);
  border-right: 1px solid var(--color-text-black);
  transform: rotate(45deg);
  content: "";
  transition: transform 0.2s, border-color 0.2s;
}

.posts__link:hover {
  color: var(--color-text-blue);
}

.posts__link:hover::after {
  transform: translateX(2px) scale(0.9) rotate(45deg);
  border-color: var(--color-text-blue);
}

.posts__description {
  position: relative;
  z-index: 1;
  display: -webkit-box;
  margin-bottom: 20px;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: var(--font-family-nunito);
  font-size: var(--font-size-text-sm);
}

.posts__author {
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

.posts__img {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border: var(--border-black);
  border-radius: 200px;
  overflow: hidden;
  background-image: url("/media/images/no-user-photo.webp");
  background-size: cover;
  background-position: center;
}

.posts__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.posts__name {
  display: block;
  margin-bottom: 5px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-sm);
  font-weight: 500;
}

.posts__position {
  display: block;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-min);
  color: var(--color-text-grey);
}

/* ============================== */
/* MEDIA 1400px (87.5rem) */
/* ============================== */
@media (max-width: 87.5rem) {
  .blog__container {
    max-width: var(--max-width-container-laptop);
  }
}

/* ============================== */
/* MEDIA 1200px (75rem) */
/* ============================== */
@media (max-width: 75rem) {
  .blog__container {
    max-width: var(--max-width-container-tablet);
    padding: var(--padding-tb-container-tablet)
      var(--padding-lr-container-tablet);
  }

  .blog__title {
    font-size: var(--font-size-title-md);
  }

  .blog__description {
    font-size: var(--font-size-text-md);
  }
}

/* ============================== */
/* MEDIA 992px (62rem) */
/* ============================== */
@media (max-width: 62rem) {
  .blog__container {
    max-width: var(--max-width-container-smartphone);
  }

  .posts {
    flex-direction: column;
  }

  .posts__image {
    flex-basis: 14em;
  }
  .posts__img {
    width: 40px;
    height: 40px;
  }
}

/* ============================== */
/* MEDIA 768px (48rem) */
/* ============================== */
@media (max-width: 48rem) {
  .blog__container {
    max-width: var(--max-width-container-mobile);
    padding: var(--padding-tb-container-mobile)
      var(--padding-lr-container-mobile);
  }

  .blog__head {
    flex-direction: column;
    gap: 0;
  }

  .blog__title {
    text-align: center;
  }

  .blog__description {
    margin-bottom: var(--margin-bottom-description);
    text-align: center;
  }
}

/* ============================== */
/* MEDIA 576px (36rem) */
/* ============================== */
@media (max-width: 36rem) {
  .blog__head {
    flex-direction: column;
    margin-bottom: calc(var(--margin-bottom-description) - 10px);
  }

  .blog__title {
    text-align: center;
  }

  .blog__btn {
    box-sizing: border-box;
    width: 100%;
  }

  .posts__link {
    font-size: var(--font-size-title-xs);
  }

  .posts__description {
    font-size: var(--font-size-text-xs);
  }
}
</style>