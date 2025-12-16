<template>
  <div class="main-wrapper">
    <AppSprite />
    <TheHeader />

    <main class="page-content">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Растягиваем на всю высоту окна браузера */
}

.page-content {
  flex-grow: 1; /* Заставляет этот блок занимать всё свободное место */
  /* Теперь футер всегда будет прижат к низу, даже если контента нет */
}
</style>