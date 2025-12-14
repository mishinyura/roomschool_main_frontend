<template>
    <main class="main">
        <section class="main__section head">
            <div class="head__container">
                <h1 class="head__title">
                    Рынок образования в России на 2025 год
                </h1>
            </div>
        </section>
        <section class="main__section article">
            <div class="article__container">
                <div class="article__info">
                    <div class="article__author">
                        <div class="article__img">
                            <img src="/media/images/i.webp" alt="avatar">
                        </div>
                        <div class="article__text">
                            <span class="article__name">
                                Иван Иванович
                            </span>
                            <span class="article__post">
                                Маркетолог
                            </span>
                        </div>
                    </div>
                    <div class="article__data">
                        <span class="article__date">
                            12 декабря 2022
                        </span>
                        <span class="article__time">
                            8 минут чтения
                        </span>
                    </div>
                </div>
                <div class="article__content description_md">
                    <p>В этой статье мы подробно разберем архитектуру, основные алгоритмы и практические приемы для
                        создания надежного и удобного валидатора и нормализатора CSS на Python. Цель - получить
                        инструмент, который:</p>
                    <ul>
                        <li>проверяет корректность CSS;</li>
                        <li>устраняет тривиальные ошибки и опечатки;</li>
                        <li>объединяет дублирующиеся свойства;</li>
                        <li>переставляет свойства в заданном порядке;</li>
                        <li>форматирует финальный CSS в чистый, предсказуемый вид.</li>
                    </ul>
                    <h2>Почему собственный инструмент, если уже есть существующие?</h2>
                    <p>Существуют готовые инструменты вроде форматтеров и линтеров для CSS. Но при специфичных
                        требованиях - например, собственный порядок свойств, особая логика слияния дубликатов или
                        интеграция с проприетарной системой сборки - проще и разумнее написать легковесный кастомный
                        инструмент. Такой инструмент легче тестировать, расширять и встраивать в пайплайн.</p>

                    <h2>Основные требования и сценарии использования</h2>
                    <p>Прежде чем кодить, сформулируем четкие требования:</p>
                    <ol>
                        <li>Парсинг CSS-файлов с поддержкой селекторов, вложенных правил типа <code>@media</code>,
                            комментариев и нестрогих ошибок (пропуски точек с запятой, лишние запятые).</li>
                        <li>Нормализация: удаление лишних пробелов, добавление недостающих точек с запятой, удаление
                            пустых правил.</li>
                        <li>Слияние дублирующихся свойств в одном правиле - при этом правило о конфликте значений:
                            последнее значение побеждает, или можно применить пользовательскую стратегию.</li>
                        <li>Сортировка свойств в каждом правиле по пользовательскому порядку; свойства, не указанные в
                            порядке, добавлять в конце в исходном порядке.</li>
                        <li>Валидация: базовые ошибки синтаксиса, невалидные имена свойств, недопустимые значения - по
                            набору известных правил.</li>
                        <li>Форматирование: человекочитаемый вывод с опциональным компактным режимом.</li>
                    </ol>

                    <h2>Архитектура проекта</h2>
                    <p>Рекомендуемая структура проекта следующая. Обратите внимание - это схема, в реальном репозитории
                        файлы будут лежать в отдельных модулях:</p>
                    <ul>
                        <li><strong>parser</strong> - парсер CSS в AST-подобную структуру;</li>
                        <li><strong>normalizer</strong> - исправления синтаксических и стилистических ошибок;</li>
                        <li><strong>sorter</strong> - сортировка свойств по заданному порядку;</li>
                        <li><strong>merger</strong> - логика объединения дубликатов;</li>
                        <li><strong>validator</strong> - проверка на допустимость свойств и значений;</li>
                        <li><strong>formatter</strong> - генерация финального CSS текстом;</li>
                        <li><strong>cli</strong> - интерфейс командной строки и конфигурация.</li>
                    </ul>

                    <h2>Формат внутреннего представления</h2>
                    <p>Удобно парсить CSS в структуру на уровне правил. Пример структуры для одного файла:</p>
                    <pre><code>{
  "rules": [
    {
      "type": "rule",
      "selector": ".btn, .link",
      "declarations": [
        {"property": "display", "value": "inline-block", "important": false, "raw": "display:inline-block"},
        {"property": "padding", "value": "8px 12px", "important": false, "raw": "padding:8px 12px"}
      ]
    },
    {
      "type": "at-rule",
      "name": "@media",
      "params": "(max-width: 600px)",
      "rules": [ /* вложенные правила */ ]
    }
  ]
}</code></pre>
                    <p>Такой формат поддерживает вложенные правила и позволяет применять алгоритмы к набору деклараций в
                        каждом правиле.</p>

                    <h2>Парсер - простые варианты и когда подключать библиотеку</h2>
                    <p>Если задача не требует полного стандарта CSS Level 3/4, можно написать аккуратный регексный
                        парсер, который покрывает большинство практических случаев. Но для надежности на больших кодовых
                        базах лучше использовать проверенную библиотеку, например <code>tinycss2</code>. Ниже -
                        упрощенный пример парсера без внешних зависимостей, который работает с базовыми правилами и
                        простыми <code>@media</code>.</p>

                    <h3>Упрощенный парсер - пример</h3>
                    <pre><code>import re

class SimpleCSSParser:
    RULE_RE = re.compile(r'([^{]+)\{([^}]+)\}', re.S)

    def parse(self, text):
        rules = []
        for m in self.RULE_RE.finditer(text):
            selector = m.group(1).strip()
            body = m.group(2).strip()
            declarations = self._parse_declarations(body)
            rules.append({
                "type": "rule",
                "selector": selector,
                "declarations": declarations
            })
        return {"rules": rules}

    def _parse_declarations(self, body):
        decls = []
        parts = [p.strip() for p in body.split(';') if p.strip()]
        for p in parts:
            if ':' not in p:
                # недостающая двоеточие - пропускаем или логгируем
                continue
            prop, val = p.split(':', 1)
            decls.append({"property": prop.strip(), "value": val.strip(), "important": False})
        return decls</code></pre>

                    <p>Недостатки такого подхода - слабая поддержка комментариев, вложенных блоков, сложных выражений в
                        значениях. Если в проекте много нестандартного CSS, лучше использовать библиотеку.</p>

                    <h2>Нормализация синтаксиса</h2>
                    <p>Нормализатор выполняет следующие задачи:</p>
                    <ul>
                        <li>Удаляет и нормализует комментарии;</li>
                        <li>Добавляет недостающие точки с запятой внутри правил;</li>
                        <li>Удаляет пустые декларации и правила без деклараций;</li>
                        <li>Приводит имена свойств к нижнему регистру (если это требуется).</li>
                    </ul>

                    <h3>Пример правил нормализации</h3>
                    <pre><code>class Normalizer:
    def normalize_declarations(self, declarations):
        out = []
        for d in declarations:
            prop = d.get("property", "").strip().lower()
            val = d.get("value", "").strip()
            if not prop or not val:
                continue
            # убираем лишние точки с запятой и пробелы в значениях
            val = val.rstrip(';').strip()
            out.append({"property": prop, "value": val, "important": d.get("important", False)})
        return out</code></pre>

                    <h2>Слияние дубликатов - стратегии</h2>
                    <p>При слиянии дубликатов важно определить стратегию. Варианты:</p>
                    <ul>
                        <li><strong>Последнее значение побеждает</strong> - простая и интуитивная стратегия, часто
                            достаточная.</li>
                        <li><strong>Объединение значений</strong> - для свойств, где допустимо несколько значений
                            (например, <code>font-family</code>), можно объединять, избегая дублирования.</li>
                        <li><strong>Специальные правила</strong> - для shorthand свойств (например, <code>margin</code>)
                            и их составляющих (margin-left, margin-top) нужны дополнительные правила разборки и сборки.
                        </li>
                    </ul>

                    <h3>Пример слияния</h3>
                    <pre><code>class Merger:
    def merge_declarations(self, declarations, strategy="last-wins"):
        result = {}
        order = []
        for d in declarations:
            prop = d["property"]
            val = d["value"]
            if prop in result and strategy == "merge-values":
                # Например, объединять списки через запятую
                if val not in result[prop]:
                    result[prop] = result[prop] + ", " + val
            else:
                result[prop] = val
            if prop not in order:
                order.append(prop)
        # вернуть список в порядке первого появления, значения обновлены согласно стратегии
        return [{"property": p, "value": result[p]} for p in order]</code></pre>

                    <h2>Сортировка свойств по заданному порядку</h2>
                    <p>Пользователь задает список приоритетов. Свойства, указанные в этом списке, должны идти первыми в
                        указанном порядке. Все прочие свойства добавляются после, в исходном порядке или в
                        отсортированном по алфавиту виде - по требованию.</p>

                    <h3>Пример сортировщика</h3>
                    <pre><code>class Sorter:
    def __init__(self, priority_order):
        # priority_order - список строк с именами свойств
        self.priority = priority_order

    def sort(self, declarations):
        priority_map = {p: i for i, p in enumerate(self.priority)}
        # stable sort - сначала по приоритету, потом по исходному индексу
        decorated = []
        for idx, d in enumerate(declarations):
            pr = priority_map.get(d["property"], 10**6)
            decorated.append((pr, idx, d))
        decorated.sort(key=lambda x: (x[0], x[1]))
        return [d for _, _, d in decorated]</code></pre>

                    <h2>Валидация - базовые проверки</h2>
                    <p>Валидатор может выполнять разные уровни проверки:</p>
                    <ul>
                        <li>Синтаксическая - корректность пар скобок, наличие двоеточий и точек с запятой;</li>
                        <li>Семантическая - проверка, существует ли свойство в списке известных CSS свойств;</li>
                        <li>Проверка значений - например, <code>display</code> принимает определенный набор значений;
                        </li>
                        <li>Проверка на дублирование и конфликтные объявления.</li>
                    </ul>

                    <h3>Пример простого валидатора</h3>
                    <pre><code>
                        KNOWN_PROPERTIES = {
                            "display", "position", "top", "left", 
                            "right", "bottom", "margin", "padding", "color", "background"
                        }

class Validator:
    def validate_rule(self, rule):
        errors = []
        for d in rule.get("declarations", []):
            prop = d["property"]
            val = d["value"]
            if prop not in KNOWN_PROPERTIES:
                errors.append(f"Неизвестное свойство: {prop} в селекторе {rule.get('selector')}")
            if not val:
                errors.append(f"Пустое значение для {prop} в селекторе {rule.get('selector')}")
        return errors</code></pre>

                    <p>В реальном инструменте набор известных свойств и правила валидации стоит вынести в отдельные
                        конфиг-файлы или использовать официальные списки из спецификаций.</p>

                    <h2>Форматирование вывода</h2>
                    <p>Форматтер собирает структуру обратно в текст. Желательно иметь опции: "pretty" - человекочитаемый
                        с отступами, и "compact" - минимизированный.</p>

                    <h3>Пример форматтера</h3>
                </div>
                <div class="article__btns">
                    <button class="articles__btn articles__btn_like" tabindex="0">

                    </button>
                    <a href="/frontend/roomschool/pages/article-detail/index.html?text=Текст&url=https://example.com"
                        class="articles__btn articles__btn_share" tabindex="0">

                    </a>
                </div>
            </div>
        </section>
        <section class="main__section comments">
            <div class="comments__container">
                <h2 class="comments__title" data-count="45">
                    Комментарии
                </h2>
                <form action="/" class="comments__form">
                    <textarea name="" id="" class="comments__textarea" placeholder="Комментарий..."
                        tabindex="0"></textarea>
                    <button class="comments__btn comments__btn_classic" tabindex="0">
                        Опубликовать
                    </button>
                </form>
                <div class="comments__list">
                    <article class="comments__item comment">
                        <div class="comment__img">
                            <img src="/media/images/i.webp" alt="avatar">
                        </div>
                        <div class="comment__content">
                            <span class="comment__name">
                                Иван Иванович
                            </span>
                            <span class="comment__date">
                                2 дня назад
                            </span>
                            <p class="comment__text">
                                Полностью поддерживаю. Нам тоже кажется, что выдумать что то новое не
                                имеет никакого смысла. Только трата энергии вместе с деньгами
                            </p>
                            <button class="comment__like">
                                Нравится
                            </button>
                        </div>
                    </article>
                    <article class="comments__item comment">
                        <div class="comment__img">
                            <img src="/media/images/i.webp" alt="avatar">
                        </div>
                        <div class="comment__content">
                            <span class="comment__name">
                                Гость
                            </span>
                            <span class="comment__date">
                                2 дня назад
                            </span>
                            <p class="comment__text">
                                Полностью поддерживаю. Нам тоже кажется, что выдумать что то новое не
                                имеет никакого смысла. Только трата энергии вместе с деньгами
                            </p>
                            <button class="comment__like">
                                Нравится
                            </button>
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

.article__post {
    display: block;
    font-family: var(--font-family-montserrat);
    font-size: var(--font-size-text-min);
    color: var(--color-text-grey);
}
.article__data{
    display: flex;
    align-items: center;
    gap: 10px;
}
.article__date{
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-family-montserrat);
    font-size: var(--font-size-text-min);
    color: var(--color-text-grey);
}
.article__date::before{
    content: '';
    width: 15px;
    height: 15px;
    mask-image: url('/media/icons/schedule.svg');
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    background-color: var(--color-text-grey);
}
.article__time{
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-family-montserrat);
    font-size: var(--font-size-text-min);
    color: var(--color-text-grey);
}
.article__time::before{
    content: '';
    width: 15px;
    height: 15px;
    mask-image: url('/media/icons/clock.svg');
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    background-color: var(--color-text-grey);
}

.article__btns{
    display: flex;
    align-items: center;
    gap: 10px;
}
.articles__btn{
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
    transition: background-color .1s;
    cursor: var(--cursor-point);
}
.articles__btn:hover {
    background-color: var(--color-btn-grey);
}
.articles__btn_like::before{
    content: '';
    width: 20px;
    height: 20px;
    mask-image: url('/media/icons/like.svg');
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    background-color: var(--color-text-black);
}
.articles__btn_share::before{
    content: '';
    width: 20px;
    height: 20px;
    mask-image: url('/media/icons/share.svg');
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    background-color: var(--color-text-black);
}

/*
Секция с комментариями
*/
.comments__container{
    max-width: var(--max-width-container-desktop);
    margin: auto;
    padding: 0 var(--padding-lr-container-desktop) var(--padding-tb-container-desktop);
}
.comments__title{
    margin-bottom: 20px;
    font-family: var(--font-family-montserrat);
    font-size: var(--font-size-text-lg);
    font-weight: 500;
}
.comments__title::after{
    content: "(" attr(data-count) ")";
    font-family: var(--font-family-montserrat);
    font-size: var(--font-size-text-lg);
    color: var(--color-text-black);
}
.comments__form{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
}
.comments__textarea{
    display: block;
    min-height: 100px;
    padding: 1em;
    outline: none;
    border: var(--border-grey);
    border-radius: var(--radius-lg);
    font-family: var(--font-family-montserrat);
    font-size: var(--font-size-text-sm);
}
.comments__btn{
    align-self: flex-end;
}
/*
Комментарии к статье
*/
.comment{
    display: flex;
    gap: 15px;
    padding: var(--padding-cards);
    border-radius: var(--radius-lg);
    background-color: var(--color-card-grey);
}
.comment:not(:last-child) {
    margin-bottom: var(--margin-cards);
}
.article__content{
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
    background-image: url('/media/images/no-user-photo.webp');
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

.comment__date{
    display: block;
    margin-bottom: 15px;
    font-family: var(--font-family-montserrat);
    font-size: var(--font-size-text-sm);
    color: var(--color-text-grey);
}

.comment__text{
    max-width: 90%;
    margin-bottom: 20px;
    font-family: var(--font-family-nunito);
    font-size: var(--font-size-text-md);
    color: var(--color-text-black);
}
.comment__like{
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-right: 10px;
    font-family: var(--font-family-montserrat);
    font-size: var(--font-size-text-sm);
    color: var(--color-text-grey);
}
.comment__like::before{
    content: '';
    width: 15px;
    height: 15px;
    mask-image: url('/media/icons/like.svg');
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    background-color: var(--color-text-grey);
}
.comment__reply{
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-family-montserrat);
    font-size: var(--font-size-text-sm);
    color: var(--color-text-grey);
}
.comment__reply::before{
    content: '';
    width: 15px;
    height: 15px;
    mask-image: url('/media/icons/chat.svg');
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    background-color: var(--color-text-grey);
}
.comments__null{
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
  .article__container{
    max-width: var(--max-width-container-laptop);
  }
  .comments__container{
    max-width: var(--max-width-container-laptop);
  }

}

/* 1200 px */
@media (max-width: 75rem) {
  .head__container {
    max-width: var(--max-width-container-tablet);
    padding: 130px var(--padding-lr-container-tablet) var(--padding-tb-container-tablet);
  }
  .article__container{
    max-width: var(--max-width-container-tablet);
    padding: 20px var(--padding-lr-container-tablet) var(--padding-tb-container-tablet);
  }
  .comments__container{
    max-width: var(--max-width-container-tablet);
    padding: 0px var(--padding-lr-container-tablet) var(--padding-tb-container-tablet);
  }

}

/* 992 px */
@media (max-width: 62rem) {
  .head__container {
    max-width: var(--max-width-container-smartphone);
  }
  .article__container{
    max-width: var(--max-width-container-smartphone);
  }
  .comments__container{
    max-width: var(--max-width-container-smartphone);
  }
}

/* 768 px */
@media (max-width: 48rem) {
    .comment__text{
        max-width: initial;
    }
}

/* 576 px */
@media (max-width: 36rem) {
    .article__info{
        flex-direction: column;
        gap: 20px;
    }
    .comments__item {
        flex-direction: column;
        align-items: center;
    }
    .comment__img{
        width: 40px;
        height: 40px;
    }
    .comment__name{
        text-align: center;
    }
    .comment__date{
        text-align: center;
    }
}
</style>