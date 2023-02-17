<script setup>
import {ref} from 'vue'
import ArrowComponent from "./ArrowComponent.vue";
import AccordionTab from "./AccordionTab.vue";

const props = defineProps({
  itemData: Object,
  index: Number
})

const isOpen = ref(false)
const test = ref(null)

const startAnimation = (el) => {
  el.style.height = el.scrollHeight + "px";
}
const endAnimation = (el) => {
  el.style.height = "";
}
</script>

<template>
  <div class="accordion" :class="isOpen ? 'accordion_open' : ''">
    <div class="accordion__head" :class="isOpen ? 'accordion__head_open' : ''" @click="isOpen = !isOpen">
      <p class="typography_body1">{{ props.itemData.head }}</p>
      <ArrowComponent :isClicked="isOpen"/>
    </div>
    <transition name="accordion"
                @enter="startAnimation"
                @after-enter="endAnimation"
                @before-leave="startAnimation"
                @after-leave="endAnimation">
      <AccordionTab :itemTab="props.itemData.list"
                    :isClicked="isOpen"/>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
  .accordion {
    padding: 16px;
    transition: .3s ease;
    background-color: $cl-background;

    @include media-lg {
      padding: 24px;
    }

    &_open {
      background-color: $cl-background-tab;
    }

    &:not(:last-child) {
      border-bottom: 1px solid $cl-gray;
    }

    &__head {
      display: flex;
      justify-content: space-between;

      &:hover {
        cursor: pointer;
      }

      &_open {
        margin-bottom: 8px;

        p {
          color: $cl-blue-primary;
        }
      }
    }
  }
  .accordion-enter-from {
    opacity: 0;
    transition: 0.3s ease;
    height: 0;
  }
  .accordion-enter-active,
  .accordion-leave-active {
    will-change: height, opacity;
    transition: height 0.3s ease, opacity 0.3s ease;
    overflow: hidden;

  }

  .accordion-enter,
  .accordion-leave-to {
    height: 0 !important;
    opacity: 0;
  }
</style>
