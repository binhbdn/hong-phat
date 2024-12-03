import { daoPhayNgonItems } from "@/stores/daoPhay/daoPhayNgon";
import { daoPhayCauItems } from "@/stores/daoPhay/daoPhayCau";
import { daoPhayVatMepItems } from "@/stores/daoPhay/daoPhayVatMep";
import { daoPhayBoGocItems } from "@/stores/daoPhay/daoPhayBoGoc";
import { daoPhayRTrongItems } from "@/stores/daoPhay/daoPhayRTrong";
import { daoPhayPhaThoItems } from "@/stores/daoPhay/daoPhayPhaTho";

export const daoPhayItems = [
  ...daoPhayNgonItems,
  ...daoPhayCauItems,
  ...daoPhayVatMepItems,
  ...daoPhayBoGocItems,
  ...daoPhayRTrongItems,
  ...daoPhayPhaThoItems
];
