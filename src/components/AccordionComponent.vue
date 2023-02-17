<script setup>
import ArrowComponent from "./ArrowComponent.vue";

const emits = defineEmits([
    'opened', 'closed'
])

const props = defineProps({
  itemData: Object,
  isOpen: Boolean
})

const onClick = () => {
  if (props.isOpen) {
    emits('closed')
  } else {
    emits('opened')
  }
}

const startAnimation = (el) => {
  el.style.height = el.scrollHeight + "px";
}
const endAnimation = (el) => {
  el.style.height = "";
}
</script>

<template>
  <div class="accordion" :class="props.isOpen ? 'accordion_open' : ''">
    <div class="accordion__head" :class="props.isOpen ? 'accordion__head_open' : ''" @click="onClick">
      <p class="typography_body1">
        <slot name="header"></slot>
      </p>
      <ArrowComponent :isClicked="props.isOpen"/>
    </div>
    <transition name="accordion"
                @enter="startAnimation"
                @after-enter="endAnimation"
                @before-leave="startAnimation"
                @after-leave="endAnimation">
      <div v-show="props.isOpen">
        <slot name="body"></slot>
      </div>
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
