import doLuongItalyList, { doLuongItalyItems } from "./doLuongItaly";
import doLuongChinaList, { doLuongChinaItems } from "./doLuongChina";

// data for list view
export const doLuongList = [...doLuongItalyList, ...doLuongChinaList];

// data for searching
export const doLuongItems = [...doLuongItalyItems, ...doLuongChinaItems];
