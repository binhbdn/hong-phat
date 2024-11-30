<script setup>
import ProductDetails from "@/components/ProductDetails.vue";
import ProcessingMaterials from "@/components/ProcessingMaterials.vue";

defineProps(["item"]);
</script>

<template>
  <ProductDetails :item="item">
    <template #extraRows="{ data }">
      <div class="hp-pagedetails-rows">
        <div class="hp-pagedetails-row">
          <span> {{ $t("material") }}: </span>
          <span class="hp-pagedetails-bold"> {{ $t(data.material) }} </span>
        </div>
        <div class="hp-pagedetails-row">
          <span> {{ $t("coating") }}: </span>
          <span class="hp-pagedetails-bold"> {{ $t(data.coating) }} </span>
        </div>
        <div class="flex justify-between items-center gap-x-2 xl:gap-x-5 px-2">
          <span> {{ $t("processingMaterials") }}: </span>
          <ProcessingMaterials :codes="data.processingMaterials" />
        </div>
        <div class="flex justify-between items-center gap-x-2 xl:gap-x-5 hover:bg-white px-2 mt-1">
          <span> {{ $t("cutStyle") }}: </span>
          <img :src="`/svg/cut_style/${data.cutStyle}.svg`" />
        </div>
      </div>
    </template>
  </ProductDetails>
</template>
