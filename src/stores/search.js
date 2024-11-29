import { ref, computed } from "vue";
import { numberToVnd, removeDiacriticsAndLowerCase } from "@/library/helper";

const getFormattedPrice = (prices) => {
  if (prices.current) return numberToVnd(prices.current);
  if (prices.current === null) return null;
  return `${numberToVnd(prices.min)} - ${numberToVnd(prices.max)}`;
};

export const mapSearchProps = (items) =>
  items.map((item) => ({
    code: item.code,
    image: item.images[0],
    routeName: item.routeName,
    name: item.name,
    normalizedName: {
      vi: removeDiacriticsAndLowerCase(item.name.vi),
      cn: removeDiacriticsAndLowerCase(item.name.cn)
    },
    formattedPrice: getFormattedPrice(item.prices)
  }));

export const textSearch = ref("");

export const textSearched = ref("");

export const listSearched = ref([]);

export const textSearchTrim = computed(() => textSearch.value.trim());

export const first = ref(0);
