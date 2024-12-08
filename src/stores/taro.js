import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pTaro",
    routeName: "pTaroCT",
    isTypical: true,
    code: "TARO_BR",
    images: ["/taro/ban_ren/1.webp", "/taro/ban_ren/2.webp", "/taro/ban_ren/spec.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        data: ["/taro/ban_ren/spec.webp"]
      }
    ],
    name: {
      vi: "Bàn ren taro",
      cn: "攻丝板"
    },
    prices: {
      current: 0,
      min: 47000,
      max: 60000
    },
    description: {
      vi: "Kích thước từ M3 đến M8",
      cn: "尺寸从M3到M8"
    },
    descriptions: null,
    seri: "TARO_BR",
    specs: "M3-M8",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pTaro",
    routeName: "pTaroCT",
    isTypical: false,
    code: "TARO_MDD",
    images: ["/taro/mui_dut_doan/vt_1a.webp", "/taro/mui_dut_doan/vt_2.webp", "/taro/mui_dut_doan/vt_spec.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        data: ["/taro/mui_dut_doan/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Mũi taro đứt đoạn phủ titan",
      cn: "钛涂层断屑丝锥"
    },
    prices: {
      current: 0,
      min: 82000,
      max: 190000
    },
    description: {
      vi: "Kích thước từ M3 đến M8",
      cn: "尺寸从M3到M8"
    },
    descriptions: null,
    seri: "TARO",
    specs: "M3-M12",
    brand: "Shaozi",
    origin: ["tw"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  }
];

export default items;

export const taroItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
