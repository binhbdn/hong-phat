<script setup>
import { ref, watch } from "vue";

const props = defineProps(["scrollToTop"]);
const emit = defineEmits(["update:scrollToTop"]);

const refPageBody = ref(null);

const onScrollToTop = () => {
  refPageBody.value.scrollTop = 0;
};

watch(
  () => props.scrollToTop,
  val => {
    if (val) {
      onScrollToTop();
      emit("update:scrollToTop", false);
    }
  }
);
</script>

<template>
  <div class="page-has-footer">
    <div ref="refPageBody" class="page-body overflow-y-scroll hide-scrollbar px-1 sm:px-3 pb-2 sm:pb-3">
      <slot />
    </div>

    <div class="page-footer w-full h-16 sm:h-[68px] sticky bottom-0 right-0 px-1.5 pt-2 sm:pt-3">
      <div class="h-14 page-footer-shadow flex flex-col justify-center rounded-t-2xl bg-white border-gray-400 p-2">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
