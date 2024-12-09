import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const detailsView = [[{ type: "tag", value: "specsList" }]];

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
    detailsView,
    // extra data
    specsList: [
      "APKT 160404 PCD",
      "APKT 1135 PCD",
      "CCGT 09T308 PCD",
      "CCGT 09T304 PCD",
      "CCMT 09T304 PCD",
      "CCMT 09T308 PCD",
      "CNMG 120408 PCD",
      "CNMG 120404 PCD",
      "DCMT 11T308 PCD ",
      "DCMT 11T304 PCD",
      "DCGT 11T304",
      "DCGT 11T308",
      "TNMG 160404 PCD",
      "TNMG 160408 PCD",
      "VCMT 160408 PCD",
      "VNMG 160404 PCD",
      "VNMG 160408 PCD",
      "WNMG 080404 PCD",
      "WNMG 080408 PCD"
    ]
  }
];

export default items;

export const manhDaoTaoBongNhomItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
