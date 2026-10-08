<template>
  <UPage />
</template>

<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  i18n: {
    paths: {
      es: '/',
    },
  },
})

useHead(() => ({
  title: t('home.meta.title'),
}))
</script>
