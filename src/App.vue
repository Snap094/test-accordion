<script setup>
import AccordionWrap from "./components/AccordionWrap.vue";
import AccordionComponent from "./components/AccordionComponent.vue"
import {ACCORDION_DATA} from "./use/constants.js";
import {ref} from "vue";
import AccordionTab from "./components/AccordionTab.vue";

const activeAccordionItem = ref(null)

const accordionUpdated = (index) => {
  activeAccordionItem.value = index
}

</script>

<template>
  <div class="container">
    <AccordionWrap @updated="accordionUpdated" :opened-index-item="activeAccordionItem">
        <AccordionComponent>
          <template #header>{{ ACCORDION_DATA[0].head }}</template>
          <template #body>
            <AccordionTab :item-tab="ACCORDION_DATA[0].list"/>
          </template>
        </AccordionComponent>
      <AccordionComponent>
        <template #header>{{ ACCORDION_DATA[1].head }}</template>
        <template #body>
          <AccordionTab :item-tab="ACCORDION_DATA[1].list"/>
        </template>
      </AccordionComponent>
      <AccordionComponent>
        <template #header>{{ ACCORDION_DATA[2].head }}</template>
        <template #body>
          <AccordionTab :item-tab="ACCORDION_DATA[2].list"/>
        </template>
      </AccordionComponent>
      <AccordionComponent>
        <template #header>{{ ACCORDION_DATA[3].head }}</template>
        <template #body>
          <AccordionTab :item-tab="ACCORDION_DATA[3].list"/>
        </template>
      </AccordionComponent>
      <AccordionComponent>
        <template #header>{{ ACCORDION_DATA[4].head }}</template>
        <template #body>
          <AccordionTab :item-tab="ACCORDION_DATA[4].list"/>
        </template>
      </AccordionComponent>
      <AccordionComponent>
        <template #header>{{ ACCORDION_DATA[5].head }}</template>
        <template #body>
          <AccordionTab :item-tab="ACCORDION_DATA[5].list"/>
        </template>
      </AccordionComponent>
    </AccordionWrap>
  </div>
</template>

<style scoped>

</style>
