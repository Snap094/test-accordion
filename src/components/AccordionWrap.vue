<script setup>
import AccordionComponent from "./AccordionComponent.vue";
import {ACCORDION_DATA} from "../use/constants.js";

</script>

<template>
  <div class="accordion-wrap">
      <AccordionComponent :itemData="item" :index="index" v-for="(item, index) of ACCORDION_DATA" :key="index"/>
    </div>
</template>

<style lang="scss" scoped>
  .accordion-wrap {
    margin: 0 auto;
    max-width: 600px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 4px 17px rgba(0, 0, 0, 0.14), 0px 4px 22px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    overflow: hidden;
  }
</style>
