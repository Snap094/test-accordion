import {ref} from "vue";

export function useAccordion () {

    const activeAccordionItem = ref(null)

    const accordionUpdated = (index) => {
        activeAccordionItem.value = index
    }
  return { activeAccordionItem, accordionUpdated }
}