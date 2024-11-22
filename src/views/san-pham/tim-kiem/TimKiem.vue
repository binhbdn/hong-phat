<script setup>
import { useI18n } from "vue-i18n-lite";
import { textSearch, textSearched, listSearched, textSearchTrim } from "@/stores/search";
import { removeDiacriticsAndLowerCase } from "@/library/helper";
import allProducts from "@/stores/allProducts";
import PageHasTitle from "@/components/PageHasTitle.vue";
import ProductsTable from "@/views/san-pham/tim-kiem/ProductsTable.vue";

const { current } = useI18n();

const getSearchResults = () => {
  const normalizedTextSearch = removeDiacriticsAndLowerCase(textSearchTrim.value);
  return allProducts.filter((item) => item.normalizedName[current.value].includes(normalizedTextSearch));
};

const onSearch = () => {
  if (!textSearchTrim.value) {
    textSearch.value = "";
    return;
  }

  if (textSearchTrim.value === textSearched.value) {
    textSearch.value = textSearchTrim.value;
    return;
  }

  listSearched.value = getSearchResults();
  textSearch.value = textSearchTrim.value;
  textSearched.value = textSearchTrim.value;
};
</script>

<template>
  <PageHasTitle>
    <div class="text-[13px]/5 sm:text-sm/[22px] text-gray-600">
      <div class="py-1">
        <InputGroup class="relative h-10 mx-auto">
          <InputText v-model="textSearch" :placeholder="$t('searchForProductName')" @keyup.enter="onSearch()" />
          <PrimeButton
            v-show="textSearchTrim"
            text
            icon="pi pi-times"
            severity="secondary"
            class="absolute top-2 right-11 sm:right-[84px] z-10"
            style="width: 24px; height: 24px"
            @click="textSearch = ''"
          />
          <PrimeButton icon="pi pi-search" class="w-10 sm:w-20" :disabled="!textSearchTrim" @click="onSearch()" />
        </InputGroup>
      </div>

      <div v-show="textSearched" class="bg-white rounded-lg shadow-lg p-2 sm:p-3 mt-5">
        <div>
          {{ $t("searchResultsWithKeyword") }}
          <strong> "{{ textSearched }}" </strong>
        </div>
        <ProductsTable class="mt-4" :items="listSearched" />
      </div>
    </div>
  </PageHasTitle>
</template>
