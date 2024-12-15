import bauKepSukenItems from "@/stores/bauKep/bauKepSuken.js";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [...bauKepSukenItems];

export default items;

export const bauKepItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
