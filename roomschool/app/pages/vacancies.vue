<template>
  <main class="main">
    <section class="main__section head">
      <div class="head__container">
        <h1 class="head__title">Вакансии</h1>
      </div>
    </section>
    <section class="main__section vacancies">
      <div class="vacancies__container">
        <div class="vacancies__item">
          <div class="vacancies__info">
            <h2 class="vacancies__title">Спикер</h2>
            <ul class="vacancies__conditions">
              <li class="vacancies__condition vacancies__condition_location">
                Удаленно
              </li>
              <li class="vacancies__condition vacancies__condition_busyness">
                Полная занятость
              </li>
              <li class="vacancies__condition vacancies__condition_experience">
                Без опыта
              </li>
            </ul>
            <p class="vacancies__description">
              Требуется спикер для записи готовых образовательных
              видеоматериалов по заготовленному сценарию профильных методистов
            </p>
          </div>
          <div class="vacancies__control">
            <p class="vacancies__salary">От 70 000 ₽</p>
            <button class="vacancies__btn vacancies__btn_classic">
              Откликнуться
            </button>
          </div>
        </div>
        <div class="vacancies__item">
          <div class="vacancies__info">
            <h2 class="vacancies__title">Frontend разработчик (Vue + Nuxt)</h2>
            <ul class="vacancies__conditions">
              <li class="vacancies__condition vacancies__condition_location">
                Удаленно
              </li>
              <li class="vacancies__condition vacancies__condition_busyness">
                Полная занятость
              </li>
              <li class="vacancies__condition vacancies__condition_experience">
                Опыт 1 год
              </li>
            </ul>
            <p class="vacancies__description">
              Требуется frontend разработчик для развития образовательной
              платформы. Работа с Vue, Nuxt, современными инструментами.
            </p>
          </div>
          <div class="vacancies__control">
            <p class="vacancies__salary">От 100 000 ₽</p>
            <button class="vacancies__btn vacancies__btn_classic">
              Откликнуться
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.head {
  background: var(--color-bg-blue-purpure-linear-gradient);
}
.head__container {
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: 150px var(--padding-lr-container-desktop)
    var(--padding-tb-container-desktop);
}
.vacancies__container {
  max-width: var(--max-width-container-desktop);
  margin: auto;
  padding: var(--padding-tb-container-desktop)
    var(--padding-lr-container-desktop);
}
.vacancies__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 2em;
  border: var(--border-grey);
  border-radius: 10px;
}
.vacancies__item:not(:last-child) {
  margin-bottom: 20px;
}
.vacancies__info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.vacancies__title {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: var(--color-text-black);
}
.vacancies__conditions {
  display: flex;
  gap: 10px;
  list-style: none;
}
.vacancies__condition {
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-xs);
  font-weight: 500;
  color: var(--color-text-grey);
}
.vacancies__condition::before {
  content: "";
  width: 15px;
  height: 15px;
  background-color: var(--color-text-grey);
  mask-size: cover;
  mask-position: center;
  mask-repeat: no-repeat;
}
.vacancies__condition_location::before {
  mask-image: url("media/icons/location.svg");
}
.vacancies__condition_busyness::before {
  mask-image: url("media/icons/clock.svg");
}
.vacancies__condition_experience::before {
  mask-image: url("media/icons/briefcase.svg");
}
.vacancies__description {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: var(--color-text-black);
}
.vacancies__control {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}
.vacancies__salary {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: var(--color-text-black);
}
</style>