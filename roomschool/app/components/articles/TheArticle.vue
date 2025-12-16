<template>
  <article
    class="article">
    <a :href="'/articles/' + article.slug" class="article__link">
      <div class="article__image">
        <span class="article__label article__label_blue">
          {{ article.data.category }}
        </span>
        <img
          v-if="article.data.image"
          :src="'/media/articles/' + article.data.image"
          alt=""
        />
      </div>
      <div class="article__content">
        <h3 class="article__title">
          {{ article.data.title }}
        </h3>
        <p class="article__description">
          {{ article.data.descriptions.short }}
        </p>
      </div>
      <div class="article__author">
        <div class="article__img">
          <img
            v-if="article.data.author.image"
            :src="'/media/articles/' + article.data.author.image"
            alt=""
          />
        </div>
        <div class="article__author-info">
          <span class="article__name"> {{ article.data.author.name }} </span>
          <span class="article__position">
            {{ article.data.author.post }}
          </span>
        </div>
      </div>
    </a>
  </article>
</template>


<script>
export default {
    props: {
        article: {
            type: Object,
            required: true,
        },
    },
};
</script>


<style scoped>
.article {
  border-radius: var(--radius-lg);
  overflow: hidden;
  background-color: var(--color-card-white);
  transition: box-shadow 0.2s;
}

.article:hover {
  box-shadow: var(--shadow-classic);
}

.article__link {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.article__image {
  position: relative;
  flex-basis: 17em;
  overflow: hidden;
  background-image: url("/media/images/no-photo.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.article__label {
  position: absolute;
  left: 20px;
  top: 20px;
  padding: 0.3em 0.8em;
  border-radius: var(--radius-max);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-sm);
  z-index: 1;
}

.article__label_blue {
  background-color: var(--color-label-blue-transparent);
  color: var(--color-text-black);
}

.article__label_green {
  background-color: var(--color-label-green-transparent);
  color: var(--color-text-black);
}

.article__label_purpure {
  background-color: var(--color-label-purpure-transparent);
  color: var(--color-text-black);
}

.article__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.2s;
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
  content: "";
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
  transition: color 0.2s;
}

.article__title::after {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-top: 1px solid var(--color-text-black);
  border-right: 1px solid var(--color-text-black);
  transform: rotate(45deg);
  content: "";
  transition: transform 0.2s, border-color 0.2s;
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

.article__position {
  display: block;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-min);
  color: var(--color-text-grey);
}
</style>