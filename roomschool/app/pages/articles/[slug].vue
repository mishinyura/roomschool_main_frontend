<template>
  <main class="main">
    <section class="main__section head">
      <div class="head__container">
        <h1 class="head__title">{{ article.data.title }}</h1>
      </div>
    </section>
    <section class="main__section article">
      <div class="article__container">
        <div class="article__info">
          <div class="article__author">
            <div class="article__img">
              <img
                v-if="article.data.author.image"
                :src="'/media/articles/' + article.data.author.image"
                alt="avatar"
              />
            </div>
            <div class="article__text">
              <span class="article__name">
                {{ article.data.author.name }}
              </span>
              <span class="article__post">
                {{ article.data.author.post }}
              </span>
            </div>
          </div>
          <div class="article__data">
            <span class="article__date"> 12 декабря 2022 </span>
            <span class="article__time">
              {{ article.data.duration }} минут чтения
            </span>
          </div>
        </div>
        <div
          class="article__content description_md"
          v-html="renderedDescription"
        ></div>
        <div class="article__btns">
          <button
            class="articles__btn articles__btn_like"
            tabindex="0"
          ></button>
          <a
            href="/frontend/roomschool/pages/article-detail/index.html?text=Текст&url=https://example.com"
            class="articles__btn articles__btn_share"
            tabindex="0"
          >
          </a>
        </div>
      </div>
    </section>
    <section class="main__section comments">
      <div class="comments__container">
        <h2 class="comments__title" data-count="45">Комментарии</h2>
        <form action="/" class="comments__form">
          <textarea
            name=""
            id=""
            class="comments__textarea"
            placeholder="Комментарий..."
            tabindex="0"
          ></textarea>
          <button class="comments__btn comments__btn_classic" tabindex="0">
            Опубликовать
          </button>
        </form>
        <div class="comments__list">
          <article
            class="comments__item comment"
            v-for="(comment, index) in article.comments"
            :key="index"
          >
            <div class="comment__img">
              <img v-if="comment.image" :src="'/media/images/' + comment.image" alt="avatar" />
            </div>
            <div class="comment__content">
              <span class="comment__name"> {{ comment.author }} </span>
              <span class="comment__date"> 2 дня назад </span>
              <p class="comment__text"> {{ comment.text }}
              </p>
              <!-- <button class="comment__like">Нравится</button> -->
            </div>
          </article>
        </div>
        <!-- <p class="comments__null">
                    Станьте первым, кто оставит комментарий...
                </p> -->
      </div>
    </section>
  </main>
</template>

<script>
import articlesJson from "~/data/articles.json";

import MarkdownIt from "markdown-it";

export default {
  data() {
    return {
      article: articlesJson.find(
        (article) => article.slug === this.$route.params.slug
      ),
    };
  },
  computed: {
    renderedDescription() {
      const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
      });
      return md.render(this.article.data.descriptions.full);
    },
  },
};
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
  padding: 130px var(--padding-lr-container-desktop)
    var(--padding-tb-container-desktop);
}

.article__container {
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: 20px var(--padding-lr-container-desktop);
}

.article__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 1em 0;
  border-bottom: var(--border-grey);
}

.article__author {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
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
  background-image: url("/media/images/no-user-photo.webp");
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

.article__post {
  display: block;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-min);
  color: var(--color-text-grey);
}
.article__data {
  display: flex;
  align-items: center;
  gap: 10px;
}
.article__date {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-min);
  color: var(--color-text-grey);
}
.article__date::before {
  content: "";
  width: 15px;
  height: 15px;
  mask-image: url("/media/icons/schedule.svg");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  background-color: var(--color-text-grey);
}
.article__time {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-min);
  color: var(--color-text-grey);
}
.article__time::before {
  content: "";
  width: 15px;
  height: 15px;
  mask-image: url("/media/icons/clock.svg");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  background-color: var(--color-text-grey);
}

.article__btns {
  display: flex;
  align-items: center;
  gap: 10px;
}
.articles__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0.5em;
  outline: none;
  border: var(--border-grey);
  border-radius: var(--radius-lg);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-sm);
  color: var(--color-text-black);
  background-color: var(--color-btn-grey-transparent);
  transition: background-color 0.1s;
  cursor: var(--cursor-point);
}
.articles__btn:hover {
  background-color: var(--color-btn-grey);
}
.articles__btn_like::before {
  content: "";
  width: 20px;
  height: 20px;
  mask-image: url("/media/icons/like.svg");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  background-color: var(--color-text-black);
}
.articles__btn_share::before {
  content: "";
  width: 20px;
  height: 20px;
  mask-image: url("/media/icons/share.svg");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  background-color: var(--color-text-black);
}

/*
Секция с комментариями
*/
.comments__container {
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: 0 var(--padding-lr-container-desktop)
    var(--padding-tb-container-desktop);
}
.comments__title {
  margin-bottom: 20px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-lg);
  font-weight: 500;
}
.comments__title::after {
  content: "(" attr(data-count) ")";
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-lg);
  color: var(--color-text-black);
}
.comments__form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
.comments__textarea {
  display: block;
  min-height: 100px;
  padding: 1em;
  outline: none;
  border: var(--border-grey);
  border-radius: var(--radius-lg);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-sm);
}
.comments__btn {
  align-self: flex-end;
}
/*
Комментарии к статье
*/
.comment {
  display: flex;
  gap: 15px;
  padding: var(--padding-cards);
  border-radius: var(--radius-lg);
  background-color: var(--color-card-grey);
}
.comment:not(:last-child) {
  margin-bottom: var(--margin-cards);
}
.article__content {
  margin-bottom: 20px;
  padding: 1em 0;
  border-bottom: var(--border-grey);
}
.comment__img {
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

.comment__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.comment__name {
  display: block;
  margin-bottom: 5px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-title-sm);
  font-weight: 500;
}

.comment__date {
  display: block;
  margin-bottom: 15px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-sm);
  color: var(--color-text-grey);
}

.comment__text {
  max-width: 90%;
  margin-bottom: 20px;
  font-family: var(--font-family-nunito);
  font-size: var(--font-size-text-md);
  color: var(--color-text-black);
}
.comment__like {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-right: 10px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-sm);
  color: var(--color-text-grey);
}
.comment__like::before {
  content: "";
  width: 15px;
  height: 15px;
  mask-image: url("/media/icons/like.svg");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  background-color: var(--color-text-grey);
}
.comment__reply {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-sm);
  color: var(--color-text-grey);
}
.comment__reply::before {
  content: "";
  width: 15px;
  height: 15px;
  mask-image: url("/media/icons/chat.svg");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  background-color: var(--color-text-grey);
}
.comments__null {
  padding: 2em;
  text-align: center;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-md);
  color: var(--color-text-grey);
}

/* 1400 px */
@media (max-width: 87.5rem) {
  .head__container {
    max-width: var(--max-width-container-laptop);
  }
  .article__container {
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
  .article__container {
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
  .article__container {
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