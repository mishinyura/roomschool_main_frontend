<template>
  <main class="main">
    <section class="main__section hero">
      <div class="hero__container">
        <h1 class="hero__title">О нас</h1>
        <p class="hero__descr">
          Мы создаем будущее образования, объединяя передовые технологии и
          проверенные педагогические методики для развития навыков XXI века.
        </p>
      </div>
    </section>
    <section class="main__section mission">
      <div class="mission__container">
        <div class="mission__content">
          <h2 class="mission__title">Наша миссия</h2>
          <p class="mission__description">
            RoomSchool зародилась в 2023 году с целью сделать качественное
            образование доступным для каждого. Мы верим, что обучение должно
            быть увлекательным, персонализированным и ориентированным на
            практические навыки
          </p>
          <p class="mission__description">
            В 2024 году наша команда состоящая из опытных педагогов, методистов
            и технологических экспертов, приступила к реализации проекта еще в
            стенах МФТИ. Эксперты работают над созданием лучших образовательных
            продуктов. Мы используем искусственный интеллект для адаптации
            учебных программ под индивидуальные потребности каждого студента
          </p>
          <a href="#" class="mission__btn mission__btn_neon">
            Начать обучение
          </a>
        </div>
        <div class="mission__image">
          <img src="/media/images/us_office.png" alt="" />
        </div>
      </div>
    </section>
    <section class="main__section vision">
      <div class="vision__container">
        <div class="vision__head">
          <h2 class="vision__title">Наша философия</h2>
          <p class="vision__description">
            Мы строим школу, в&nbsp;которой технологии раскрывают таланты,
            а&nbsp;не&nbsp;заменяют живое общение
          </p>
        </div>
        <div class="vision__list">
          <div class="vision__item vision__item_focus">
            <h3 class="vision__subtitle">Уникальность каждого ребенка</h3>
            <p class="vision__text">
              Мы верим, что нет «средних» учеников. Искусственный интеллект
              помогает нам найти ключ к&nbsp;талантам каждого ребенка, адаптируя
              темп и&nbsp;формат обучения под его личность,
              а&nbsp;не&nbsp;наоборот.
            </p>
          </div>
          <div class="vision__item vision__item_care">
            <h3 class="vision__subtitle">Психологический комфорт</h3>
            <p class="vision__text">
              Для нас ментальное здоровье важнее оценок. Мы создаем пространство
              без стресса и&nbsp;давления, где ошибки&nbsp;— это не&nbsp;повод
              для критики, а&nbsp;необходимый шаг к&nbsp;открытиям.
            </p>
          </div>
          <div class="vision__item vision__item_evolution">
            <h3 class="vision__subtitle">Технологии на&nbsp;службе человека</h3>
            <p class="vision__text">
              Мы не&nbsp;боимся будущего, мы его создаем. Мы убеждены, что
              грамотное владение нейросетями и&nbsp;современными
              инструментами&nbsp;— это базовая грамотность XXI&nbsp;века.
            </p>
          </div>
          <div class="vision__item vision__item_community">
            <h3 class="vision__subtitle">Сила окружения</h3>
            <p class="vision__text">
              Ценности формируются в&nbsp;диалоге. Мы объединяем детей
              в&nbsp;безопасное комьюнити, где царит взаимное уважение,
              поддержка и&nbsp;культура экологичного общения.
            </p>
          </div>
          <div class="vision__item vision__item_reliability">
            <h3 class="vision__subtitle">Честное партнерство</h3>
            <p class="vision__text">
              Мы строим отношения с&nbsp;родителями на&nbsp;доверии
              и&nbsp;прозрачности. Вы&nbsp;— главные союзники
              в&nbsp;образовательном пути ребенка, и&nbsp;мы всегда открыты
              к&nbsp;диалогу.
            </p>
          </div>
          <div class="vision__item vision__item_expert">
            <h3 class="vision__subtitle">Учитель как наставник</h3>
            <p class="vision__text">
              Мы убеждены, что знания лучше всего передаются через вдохновение.
              Наши педагоги&nbsp;— это ролевые модели, которые не&nbsp;просто
              дают материал, но&nbsp;и&nbsp;зажигают искру интереса.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="main__section history">
      <div class="history__container">
        <h2 class="history__title">Наша история</h2>
        <ul class="history__list">
          <li class="history__item" data-date="2023">
            <h3 class="history__subtitle">Основание школы</h3>
            <p class="history__subdescr">
              Формирование идеи проекта и юридическая регистрация
            </p>
          </li>
          <li class="history__item" data-date="2024">
            <h3 class="history__subtitle">Разработка</h3>
            <p class="history__subdescr">
              Разработка платформы и&nbsp;системы обучения
            </p>
          </li>
          <li class="history__item" data-date="2025">
            <h3 class="history__subtitle">Внедрение AI</h3>
            <p class="history__subdescr">
              Интеграция искусственного интеллекта для персонализации обучения и
              автоматической проверки заданий
            </p>
          </li>
          <li class="history__item" data-date="2026">
            <h3 class="history__subtitle">Первые шаги к людям</h3>
            <p class="history__subdescr">
              Демонстрация результатов, продвижение и начало работы с первыми
              ученика и их родителями
            </p>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
  background: var(--color-bg-blue-purpure-linear-gradient);
}

.hero__container {
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: var(--padding-tb-container-desktop)
    var(--padding-lr-container-desktop);
  text-align: center;
}

.hero__title {
  margin: 0 auto var(--margin-bottom-title);
}

.hero__descr {
  max-width: 80%;
  margin: auto;
}

/* 
_____________
Наша миссия
_____________
*/
.mission__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: var(--padding-tb-container-desktop)
    var(--padding-lr-container-desktop);
}

.mission__content {
  flex-basis: 50%;
}

.mission__title {
  margin-bottom: var(--margin-bottom-title);
}

.mission__description {
  margin-bottom: var(--margin-bottom-description);
}

.mission__image {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 50%;
}

.mission__image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
}

/* 
_____________
Наша философия
_____________
*/
.vision {
  background-color: var(--color-bg-grey);
}
.vision__container {
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: var(--padding-tb-container-desktop)
    var(--padding-lr-container-desktop);
}
.vision__head {
  margin-bottom: var(--margin-bottom-description);
  text-align: center;
}
.vision__title {
  margin: 0 auto var(--margin-bottom-title);
}

.vision__description {
  max-width: 80%;
  margin: auto;
}

.vision__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: var(--margin-cards);
}

.vision__item {
  padding: var(--padding-cards);
  border: var(--border-blue);
  border-radius: var(--radius-lg);
  background-color: var(--color-card-white);
}

.vision__item::before {
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  background: var(--color-icon-lenear-gradient-blue-purpure);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
}

.vision__item_focus::before {
  mask-image: url("/media/icons/circles.svg");
}

.vision__item_care::before {
  mask-image: url("/media/icons/like.svg");
}

.vision__item_evolution::before {
  mask-image: url("/media/icons/chart.svg");
}

.vision__item_community::before {
  mask-image: url("/media/icons/group.svg");
}

.vision__item_reliability::before {
  mask-image: url("/media/icons/shield.svg");
}

.vision__item_expert::before {
  mask-image: url("/media/icons/medal.svg");
}

.vision__subtitle {
  margin-bottom: var(--margin-bottom-title);
  font-size: var(--font-size-title-md);
}

.vision__text {
  font-size: var(--font-size-text-md);
}

/* 
_____________
Наша история
_____________
*/
.history__container {
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: var(--padding-tb-container-desktop)
    var(--padding-lr-container-desktop);
}

.history__title {
  margin: 0 auto var(--margin-bottom-title);
  text-align: center;
}

.history__item {
  position: relative;
  padding-left: 80px;
}

.history__item:not(:last-child) {
  margin-bottom: var(--margin-cards);
}

.history__item::before {
  position: absolute;
  left: 0;
  content: attr(data-date);
  display: block;
  font-size: var(--font-size-title-md);
  margin-bottom: var(--margin-bottom-title);
  color: var(--color-text-blue);
}

.history__item::after {
  position: absolute;
  top: 12px;
  left: 60px;
  content: "";
  width: 10px;
  height: 2px;
  background-color: var(--color-text-blue);
}

.history__subtitle {
  margin-bottom: var(--margin-bottom-title);
  font-size: var(--font-size-title-sm);
  font-weight: 400;
}
.history__subdescr {
  font-size: var(--font-size-text-sm);
  /* color: var(--color-text-grey); */
  font-weight: 300;
}

/* 1400 px */
@media (max-width: 87.5rem) {
  .hero__container {
    max-width: var(--max-width-container-laptop);
  }

  .mission__container {
    max-width: var(--max-width-container-laptop);
  }

  .vision__container {
    max-width: var(--max-width-container-laptop);
  }

  .history__container {
    max-width: var(--max-width-container-laptop);
  }
}

/* 1200 px */
@media (max-width: 75rem) {
  .hero__container {
    max-width: var(--max-width-container-tablet);
    padding: var(--padding-tb-container-tablet)
      var(--padding-lr-container-tablet);
  }

  .mission__container {
    max-width: var(--max-width-container-tablet);
    padding: var(--padding-tb-container-tablet)
      var(--padding-lr-container-tablet);
  }

  .vision__container {
    max-width: var(--max-width-container-tablet);
    padding: var(--padding-tb-container-tablet)
      var(--padding-lr-container-tablet);
  }

  .history__container {
    max-width: var(--max-width-container-tablet);
    padding: var(--padding-tb-container-tablet)
      var(--padding-lr-container-tablet);
  }
}

/* 992 px */
@media (max-width: 62rem) {
  .hero__container {
    max-width: var(--max-width-container-smartphone);
  }

  .mission__container {
    max-width: var(--max-width-container-smartphone);
  }

  .vision__container {
    max-width: var(--max-width-container-smartphone);
  }

  .history__container {
    max-width: var(--max-width-container-smartphone);
  }
}

/* 768 px */
@media (max-width: 48rem) {
  .hero__container {
    max-width: var(--max-width-container-mobile);
    padding: var(--padding-tb-container-mobile)
      var(--padding-lr-container-mobile);
  }

  .mission__container {
    max-width: var(--max-width-container-mobile);
    padding: var(--padding-tb-container-mobile)
      var(--padding-lr-container-mobile);
  }

  .vision__container {
    max-width: var(--max-width-container-mobile);
    padding: var(--padding-tb-container-mobile)
      var(--padding-lr-container-mobile);
  }

  .history__container {
    max-width: var(--max-width-container-mobile);
    padding: var(--padding-tb-container-mobile)
      var(--padding-lr-container-mobile);
  }
}

/* 576 px */
@media (max-width: 36rem) {
  .hero__container {
    max-width: 100%;
  }

  .mission__container {
    max-width: 100%;
  }

  .vision__container {
    max-width: 100%;
  }

  .history__container {
    max-width: 100%;
  }
}
</style>