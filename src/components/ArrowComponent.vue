<script setup>

defineProps({
  itemTab: Object,
  isClicked: Boolean
})

</script>

<template>
  <svg :class="isClicked ? 'arrow_clicked' : 'arrow'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M7 10L12 15L17 10" stroke="#0D2A54" stroke-width="2"/>
  </svg>
</template>

<style lang="scss" scoped>
  .arrow {
    transition: .3s;
    transform: rotate(0deg);

    &_clicked {
      transition: .3s;
      transform: rotate(-180deg);
      path {
        stroke: $cl-blue-primary;
      }
    }
  }
</style>
