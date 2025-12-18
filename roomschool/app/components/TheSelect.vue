<template>
  <div class="select">
    <label class="select__wrapper">
      <input
        @mousedown="onMouseDown"
        @focus="onFocus"
        @click="onClick"
        tabindex="0"
        :class="select__input"
        :name="name"
        :type="type"
        :data-validate="select"
        :value="
          !selected ? '' : options.find((item) => item.value === selected).label
        "
        readonly
        :placeholder="placeholder"
      />
    </label>
    <ul :class="['select__list', isOpen ? 'open' : '']">
      <li
        @keydown.enter="selectItem(item.value)"
        @click="selectItem(item.value)"
        class="select__item"
        :data-value="item.value"
        v-for="item in options"
        :key="item.value"
        tabindex="0"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: [
        { value: "telegram", label: "Telegram" },
        { value: "phone", label: "По телефону" },
        { value: "whatsapp", label: "What's app" },
      ],
    },
    activeOption: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isOpen: false,
      selected: null,
      skipFocusOpen: false,
    };
  },
  methods: {
    onMouseDown() {
      this.isClickMode = true;
    },

    onFocus() {
      if (this.isClickMode) {
        this.isClickMode = false;
        return;
      }

      this.isOpen = true;
    },

    onClick() {
      this.isOpen = !this.isOpen;
    },

    selectItem(item) {
      this.selected = item;
      this.isOpen = false;
      this.$emit("select", item.value);
    },
  },
};
</script>

<style scoped>
.select {
  position: relative;
  margin-bottom: 10px;
}
.select__wrapper {
  position: relative;
  z-index: 10;
  display: block;
  border-radius: 50px;
  box-shadow: transparent 0px 0px 5px 0px, transparent 0px 0px 20px 0px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-md);
  background: linear-gradient(
    135deg,
    rgb(218, 232, 247) 0%,
    rgb(214, 229, 247) 100%
  );
  transition: box-shadow 0.1s;
}
.select__wrapper:hover {
  box-shadow: rgba(79, 156, 232, 0.7019607843) 0px 0px 5px 0px,
    rgba(79, 156, 232, 0.7019607843) 0px 0px 20px 0px;
}
.select__wrapper input {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 1em;
  border-radius: 50px;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-md);
  background-color: transparent;
  color: var(--color-text-black);
  cursor: pointer;
  
}
.select__list {
  position: absolute;
  top: 120%;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: #fff;
  border-radius: var(--radius-max);
  box-shadow: 0 20px 15px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.1s, visibility 0.1s, top 0.1s;
}
.select__list.open {
  top: 100%;
  opacity: 1;
  visibility: visible;
}
.select__item {
  padding: 0.5em 1em;
  border: none;
  outline: none;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-text-sm);
  cursor: pointer;
}
.select__item:hover {
  background-color: var(--color-action-blue);
  color: var(--color-text-white);
}
.select__item:focus-within {
  background-color: var(--color-action-blue);
  color: var(--color-text-white);
}
</style>
