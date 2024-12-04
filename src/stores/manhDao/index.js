import manhDaoGCGangList, { manhDaoGCGangItems } from "./manhDaoGCGang";
import manhDaoGCSauNhietList, { manhDaoGCSauNhietItems } from "./manhDaoGCSauNhiet";
import manhDaoTienRanhRenList, { manhDaoTienRanhRenItems } from "./manhDaoTienRanhRen";
import manhDaoGCNhomList, { manhDaoGCNhomItems } from "./manhDaoGCNhom";
import manhDaoGCSatThepInoxList, { manhDaoGCSatThepInoxItems } from "./manhDaoGCSatThepInox";
import manhDaoTaoBongNhomList, { manhDaoTaoBongNhomItems } from "./manhDaoTaoBongNhom";

// data for list view
export const manhDaoList = [
  ...manhDaoGCGangList,
  ...manhDaoGCSauNhietList,
  ...manhDaoTienRanhRenList,
  ...manhDaoGCNhomList,
  ...manhDaoGCSatThepInoxList,
  ...manhDaoTaoBongNhomList
];

// data for searching
export const manhDaoItems = [
  ...manhDaoGCGangItems,
  ...manhDaoGCSauNhietItems,
  ...manhDaoTienRanhRenItems,
  ...manhDaoGCNhomItems,
  ...manhDaoGCSatThepInoxItems,
  ...manhDaoTaoBongNhomItems
];
