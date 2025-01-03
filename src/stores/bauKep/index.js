import bauKepSukenItems from "@/stores/bauKep/bauKepSuken";
import bauKepVanTapItems from "@/stores/bauKep/bauKepVanTap";
import bauKepCNCItem from "@/stores/bauKep/bauKepCNC";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [...bauKepSukenItems, ...bauKepVanTapItems, bauKepCNCItem];

export default items;

export const bauKepItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
