import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pGiaCongLo",
    routeName: "pGiaCongLoCT",
    isTypical: true,
    code: "MCTCD",
    images: ["/gia_cong_lo/mui_chong_tam_co_dinh/vt_1.webp", "/gia_cong_lo/mui_chong_tam_co_dinh/vt_spec.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/gia_cong_lo/mui_chong_tam_co_dinh/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Mũi chống tâm cố định",
      cn: "固定顶尖"
    },
    prices: {
      current: 0,
      min: 231000,
      max: 886000
    },
    description: {
      vi: "Dùng cho máy tiện",
      cn: "用于车床"
    },
    descriptions: null,
    seri: "MCTCD",
    specs: "T10-T18",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pGiaCongLo",
    routeName: "pGiaCongLoCT",
    isTypical: false,
    code: "MCTQ",
    images: ["/gia_cong_lo/mui_chong_tam_quay/vt_1.webp", "/gia_cong_lo/mui_chong_tam_quay/vt_2.webp"],
    extraImages: null,
    name: {
      vi: "Mũi chống tâm quay",
      cn: "旋转顶尖"
    },
    prices: {
      current: 0,
      min: 1138000,
      max: 1944000
    },
    description: {
      vi: "Được dùng khi cắt với tốc độ cắt cao",
      cn: "用于高速切削"
    },
    descriptions: null,
    seri: "MCTQ",
    specs: "MT3-MT5",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  }
];

export default items;

export const giaCongLoItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
