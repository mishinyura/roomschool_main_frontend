<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <ClientOnly>
    <TheMessenger v-if="isOpenMessenger" @close="isOpenMessenger = false" />
  </ClientOnly>
</template>

<script>
import TheMessenger from "~/components/TheMessenger.vue";


export default {
  components: { TheMessenger },
  data() {
    return {
      isOpenMessenger: useState('messenger_state', () => false),
    };
  },
}
</script>