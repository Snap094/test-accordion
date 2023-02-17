<script setup>
import AccordionComponent from "./AccordionComponent.vue";
import {ACCORDION_DATA} from "../use/constants.js";
import {computed, h, ref, useSlots} from "vue";

const emits = defineEmits([
    'updated'
])

const props = defineProps({
  openedIndexItem: {
    default: 0
  }
})

const slots = useSlots();

const openedIndexItem = computed({
  get() {
    return props.openedIndexItem
  },
  set(newIndexItem) {
    return emits('updated', newIndexItem)
  }
})

const render = () => {
  return h("div", {}, slots.default ? slots.default() : null);
};

console.log(slots.default())
</script>

<template>
  <div class="accordion-wrap">
    <component v-for="(item, index) of slots.default()"
               :key="index"
               :isOpen="openedIndexItem === index"
               :is="item"
               @opened="openedIndexItem = index"
               @closed="openedIndexItem = null"
    >
    </component>
<!--      <AccordionComponent :itemData="item"-->
<!--                          :index="index"-->
<!--                          :isOpen="openedItemIndex === index"-->
<!--                          @closed="openedItemIndex = null"-->
<!--                          @opened="openedItemIndex = index"-->
<!--                          v-for="(item, index) of ACCORDION_DATA"-->
<!--                          :key="index"/>-->

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
