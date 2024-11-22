import { daoPhayNgonItems } from "@/stores/daoPhayNgon";
import { daoPhayCauItems } from "@/stores/daoPhayCau";
import { daoPhayVatMepItems } from "@/stores/daoPhayVatMep";
import { daoPhayBoGocItems } from "@/stores/daoPhayBoGoc";
import { daoPhayRTrongItems } from "@/stores/daoPhayRTrong";
import { daoPhayPhaThoItems } from "@/stores/daoPhayPhaTho";
import { bauKepColletItems } from "@/stores/bauKepCollet";

const allProducts = [
  ...daoPhayNgonItems,
  ...daoPhayCauItems,
  ...daoPhayVatMepItems,
  ...daoPhayBoGocItems,
  ...daoPhayRTrongItems,
  ...daoPhayPhaThoItems,
  ...bauKepColletItems
];

export default allProducts;
