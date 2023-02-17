<script setup>

defineProps({
  itemTab: Array,
})

</script>

<template>
  <ul class="accordion-tab">
    <li class="accordion-tab__item typography_body2" v-for="(item, index) in itemTab" :key="index">{{ item }}</li>
  </ul>
</template>

<style lang="scss" scoped>
  .accordion-tab {
    position: relative;

    &__item {
      display: flex;

      &:not(:last-child) {
        margin-bottom: 8px;
      }

      &:before {
        content: '';
        position: relative;
        top: 6px;
        width: 8px;
        height: 8px;
        margin-right: 8px;
        border-radius: 50%;
        border: 2px solid $cl-blue-primary;
        display: flex;
        flex-shrink: 0;
      }
    }
  }
</style>
