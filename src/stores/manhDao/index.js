import { manhDaoGCGangItems } from "./manhDaoGCGang";
import { manhDaoGCSauNhietItems } from "./manhDaoGCSauNhiet";
import { manhDaoTienRanhRenItems } from "./manhDaoTienRanhRen";
import { manhDaoGCNhomItems } from "./manhDaoGCNhom";
import { manhDaoGCSatThepInoxItems } from "./manhDaoGCSatThepInox";
import { manhDaoTaoBongNhomItems } from "./manhDaoTaoBongNhom";

export const manhDaoItems = [
  ...manhDaoGCGangItems,
  ...manhDaoGCSauNhietItems,
  ...manhDaoTienRanhRenItems,
  ...manhDaoGCNhomItems,
  ...manhDaoGCSatThepInoxItems,
  ...manhDaoTaoBongNhomItems
];
