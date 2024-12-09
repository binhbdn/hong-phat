import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pManhDao",
    routeName: "pManhDaoTaoBongNhomCT",
    isTypical: true,
    code: "PCD",
    images: ["/manh_dao/tao_bong_nhom/PCD_1_vt.webp"],
    extraImages: null,
    name: {
      vi: "Mảnh dao tiện PCD",
      cn: "PCD车削刀片"
    },
    prices: {
      current: 135000,
      min: 0,
      max: 0
    },
    description: {
      vi: "Dùng để tiện nhôm, kim loại màu với độ bóng và độ chính xác cao",
      cn: "用于高精度和高光洁度铝材及有色金属车削加工"
    },
    descriptions: null,
    seri: "PCD",
    specs: "",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  }
];

export default items;

export const manhDaoTaoBongNhomItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
