import { listViewADL } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const description1 = {
  vi: "Đầu dò tâm cơ chống từ tính",
  cn: "防磁机械式中心探针"
};

const descriptions1 = {
  vi: [
    {
      title: "description",
      data: ["Bề mặt phủ lớp titan kháng từ.", "Có thể xác định chính xác vị trí tâm của phôi đang được gia công.", "Lò xo có thể thay thế, chống mài mòn tốt."]
    }
  ],
  cn: [
    {
      title: "description",
      data: ["表面涂有防磁钛层。", "可以精确定位加工工件的中心位置。", "弹簧可更换，具有良好的耐磨性。"]
    }
  ]
};

const detailsView = [
  ["rpm", "accuracy"],
  ["diameter", "length"]
];

const items = [
  {
    category: "pDauDoTamPhoi",
    routeName: "pDauDoTamPhoiCT",
    isTypical: true,
    code: "DDTP_4_1",
    images: ["/dau_do_tam_phoi/4mm/vt_1.webp", "/dau_do_tam_phoi/4mm/2.webp", "/dau_do_tam_phoi/4mm/vt_3.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/dau_do_tam_phoi/4mm/vt_3.webp"]
      }
    ],
    name: {
      vi: "Đầu dò tâm cơ 4mm",
      cn: "4mm机械式中心探针"
    },
    prices: {
      current: 110000,
      min: 0,
      max: 0
    },
    description: description1,
    descriptions: descriptions1,
    seri: "4mm",
    specs: "",
    brand: "",
    origin: ["cn"],
    listView: listViewADL,
    detailsView,
    // extra data
    rpm: "400-600rpm",
    accuracy: "±0.005mm",
    diameter: "10mm/4mm",
    length: "90mm"
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
    description: description1,
    descriptions: descriptions1,
    seri: "4mm",
    specs: "",
    brand: "",
    origin: ["cn"],
    listView: listViewADL,
    detailsView,
    // extra data
    rpm: "400-600rpm",
    accuracy: "0.01-0.03mm",
    diameter: "10mm/4mm",
    length: "87mm"
  }
  // TODO: add more 3 items
];

export default items;

export const dauDoTamPhoiItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
