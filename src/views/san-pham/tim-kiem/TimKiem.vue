<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n-lite";
import { textSearch, textSearched, listSearched, textSearchTrim, first } from "@/stores/search";
import { removeDiacriticsAndLowerCase } from "@/library/helper";
import allProducts, { mapProducts } from "@/stores/allProducts";
import { imgServer } from "@/config";
import PageHasTitle from "@/components/PageHasTitle.vue";
import ProductsTable from "@/views/san-pham/tim-kiem/ProductsTable.vue";

const { current } = useI18n();

const suggestions = ref([]);

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
  if (first.value) {
    setTimeout(() => {
      first.value = 0;
    }, 200);
  }
};

const onSetSuggestions = ({ query }) => {
  const normalizedQuery = removeDiacriticsAndLowerCase(query);
  const suggestionsVal = mapProducts[current.value].filter(
    (item) => item.normalizedName.includes(normalizedQuery) || item.code.toLowerCase().includes(normalizedQuery)
  );
  if (suggestionsVal.length > 0) {
    suggestions.value = suggestionsVal;
  }
};

const onSelectSuggestion = ({ value }) => {
  textSearch.value = value.name;
  onSearch();
};
</script>

<template>
  <PageHasTitle>
    <div class="text-[13px]/5 sm:text-sm/[22px] text-gray-600">
      <div class="py-1">
        <InputGroup class="relative h-10 mx-auto">
          <!-- <InputText v-model="textSearch" :placeholder="$t('searchForProductName')" @keyup.enter="onSearch()" /> -->
          <AutoComplete
            v-model="textSearch"
            dataKey="code"
            scrollHeight="320px"
            :placeholder="$t('searchForProductName')"
            :delay="1000"
            :suggestions="suggestions"
            @complete="onSetSuggestions"
            @itemSelect="onSelectSuggestion"
          >
            <template #option="{ option }">
              <div class="flex items-stretch gap-x-3 text-gray-600 cursor-pointer">
                <div class="flex-shrink-0 w-14 h-14 border border-gray-400 rounded-md">
                  <img :src="`${imgServer}${option.image}?w=300&h=300`" class="rounded-md" />
                </div>
                <div class="flex flex-col justify-between">
                  <div class="font-bold text-gray-900 group-hover:text-primary line-clamp-2">
                    {{ option.name }}
                  </div>
                  <div class="font-medium leading-4 text-gray-500">
                    {{ option.code }}
                  </div>
                </div>
              </div>
            </template>
          </AutoComplete>
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
