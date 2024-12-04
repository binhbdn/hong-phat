import daoPhayNgonList, { daoPhayNgonItems } from "./daoPhayNgon";
import daoPhayCauList, { daoPhayCauItems } from "./daoPhayCau";
import daoPhayVatMepList, { daoPhayVatMepItems } from "./daoPhayVatMep";
import daoPhayBoGocList, { daoPhayBoGocItems } from "./daoPhayBoGoc";
import daoPhayRTrongList, { daoPhayRTrongItems } from "./daoPhayRTrong";
import daoPhayPhaThoList, { daoPhayPhaThoItems } from "./daoPhayPhaTho";

// data for list view
export const daoPhayList = [...daoPhayNgonList, ...daoPhayCauList, ...daoPhayVatMepList, ...daoPhayBoGocList, ...daoPhayRTrongList, ...daoPhayPhaThoList];

// data for searching
export const daoPhayItems = [
  ...daoPhayNgonItems,
  ...daoPhayCauItems,
  ...daoPhayVatMepItems,
  ...daoPhayBoGocItems,
  ...daoPhayRTrongItems,
  ...daoPhayPhaThoItems
];
