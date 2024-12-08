import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pDauDoTamPhoi",
    routeName: "pDauDoTamPhoiCT",
    isTypical: true,
    code: "DDTP_4_1",
    images: ["/dau_do_tam_phoi/4mm/vt_1.webp", "/dau_do_tam_phoi/4mm/2.webp", "/dau_do_tam_phoi/4mm/vt_3.webp"],
    extraImages: null,
    name: {
      vi: "Đầu dò tâm cơ 4mm",
      cn: "4mm机械式中心探针"
    },
    prices: {
      current: 110000,
      min: 0,
      max: 0
    },
    description: {
      vi: "Dùng xác định gốc phôi gia công cho máy phay CNC hay máy phay cơ có lắp thước hiển thị số",
      cn: "用于确定数控铣床或带数显尺的普通铣床的工件原点"
    },
    descriptions: null,
    seri: "4mm",
    specs: "",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pDauDoTamPhoi",
    routeName: "pDauDoTamPhoiCT",
    isTypical: false,
    code: "DDTP_4_2",
    images: ["/dau_do_tam_phoi/4mm_sensor/vt_1.webp", "/dau_do_tam_phoi/4mm_sensor/vt_2.webp"],
    extraImages: null,
    name: {
      vi: "Đầu dò tâm cơ 4mm Sensor CE-420",
      cn: "4mm机械式中心探针 Sensor CE-420"
    },
    prices: {
      current: 135000,
      min: 0,
      max: 0
    },
    description: {
      vi: "Đầu dò tâm kim loại chống từ tính",
      cn: "防磁金属中心探针"
    },
    descriptions: null,
    seri: "4mm",
    specs: "",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  }
];

export default items;

export const dauDoTamPhoiItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
