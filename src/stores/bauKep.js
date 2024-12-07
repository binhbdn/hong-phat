import { listViewRMB } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const detailsView = [
  ["seri", "model"],
  [{ type: "i18n", value: "material" }, "hardness"],
  ["runout", "maxRPM", "overallLength"]
];

const descriptions = {
  vi: [
    {
      title: "description",
      data: ["Được làm từ thép hợp kim có độ cứng và độ bền cao.", "Tốc độ gia công hoàn hảo, dễ dàng thao tác trong quá trình sử dụng."]
    }
  ],
  cn: [
    {
      title: "description",
      data: ["由高强度合金钢制成，具有出色的硬度和耐用性。", "加工速度完美，操作简单方便。"]
    }
  ]
};

const items = [
  {
    category: "pBauKep",
    routeName: "pBauKepCT",
    isTypical: true,
    code: "BK_SUKEN_BT50_ER",
    images: [
      "/bau_kep_suken/BT50_ER40_100L.webp",
      "/bau_kep_suken/bt50/1.webp",
      "/bau_kep_suken/bt50/2.webp",
      "/bau_kep_suken/bt50/3.webp",
      "/bau_kep_suken/bt50/4.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        data: ["/bau_kep_suken/spec1.webp"]
      }
    ],
    name: {
      vi: "Bầu kẹp Suken BT50 loại ER16/20/25/32/40",
      cn: "刀柄 Suken BT50 ER16/20/25/32/40"
    },
    prices: {
      current: 0,
      min: 1790000,
      max: 1872000
    },
    description: {
      vi: "Dùng kẹp các loại mũi khoan, mũi doa, dao phay ngón và tapping các chi tiết trên máy phay",
      cn: "用于夹紧铣床上的钻头、铰刀、指铣刀和丝锥零件"
    },
    descriptions,
    seri: "BT50",
    specs: "ER16-40",
    brand: "Suken",
    origin: ["cn"],
    listView: listViewRMB,
    detailsView,
    // extra data
    model: "ER16/20/25/32/40",
    material: "AlloySteel",
    hardness: "58HRC-60HRC",
    runout: "0.003mm",
    maxRPM: "25.000rpm",
    overallLength: "100, 150, 200"
  },
  {
    category: "pBauKep",
    routeName: "pBauKepCT",
    isTypical: true,
    code: "BK_SUKEN_BT40_ER",
    images: [
      "/bau_kep_suken/BT40_ER16_70L.webp",
      "/bau_kep_suken/bt40/BT40_ER20_70L.webp",
      "/bau_kep_suken/bt40/BT40_ER20_70L_1.webp",
      "/bau_kep_suken/bt40/BT40_ER20_70L_2.webp",
      "/bau_kep_suken/bt40/BT40_ER25_100L.webp",
      "/bau_kep_suken/bt40/BT40_ER32_70L.webp",
      "/bau_kep_suken/bt40/BT40_ER32_100L.webp",
      "/bau_kep_suken/bt40/BT40_ER32_100L_1.webp"
      /*
      "/bau_kep_suken/bt40_er32/1.webp",
      "/bau_kep_suken/bt40_er32/2.webp",
      "/bau_kep_suken/bt40_er32/3.webp",
      "/bau_kep_suken/bt40_er32/4.webp",
      */
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        data: ["/bau_kep_suken/spec1.webp"]
      }
    ],
    name: {
      vi: "Bầu kẹp Suken BT40 loại ER16/20/25/32",
      cn: "刀柄 Suken BT40 ER16/20/25/32"
    },
    prices: {
      current: 793000,
      min: 0,
      max: 0
    },
    description: {
      vi: "Dùng kẹp các loại mũi khoan, mũi doa, dao phay ngón và tapping các chi tiết trên máy phay",
      cn: "用于夹紧铣床上的钻头、铰刀、指铣刀和丝锥零件"
    },
    descriptions,
    seri: "BT40",
    specs: "ER16-32",
    brand: "Suken",
    origin: ["cn"],
    listView: listViewRMB,
    detailsView,
    // extra data
    model: "ER16/20/25/32",
    material: "AlloySteel",
    hardness: "58HRC-60HRC",
    runout: "0.003mm",
    maxRPM: "25.000rpm",
    overallLength: "70, 100, 150"
  },
  {
    category: "pBauKep",
    routeName: "pBauKepCT",
    isTypical: false,
    code: "BK_SUKEN_BT30_ER",
    images: [
      "/bau_kep_suken/BT30_ER20_70L.webp",
      "/bau_kep_suken/bt30/BT30_ER16_100L.webp",
      "/bau_kep_suken/bt30/BT30_ER16_100L_1.webp",
      "/bau_kep_suken/bt30/BT30_ER20_70L_1.webp",
      "/bau_kep_suken/bt30/BT30_ER20_100L.webp",
      "/bau_kep_suken/bt30/BT30_ER25_70L.webp",
      "/bau_kep_suken/bt30/BT30_ER25_70L_1.webp",
      "/bau_kep_suken/bt30/BT30_ER32_100L.webp",
      "/bau_kep_suken/bt30/BT30_ER32_100L_1.webp",
      "/bau_kep_suken/bt30/BT30_ER32_100L_2.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        data: ["/bau_kep_suken/spec1.webp"]
      }
    ],
    name: {
      vi: "Bầu kẹp Suken BT30 loại ER16/20/25/32",
      cn: "刀柄 Suken BT30 ER16/20/25/32"
    },
    prices: {
      current: 0,
      min: 73000,
      max: 773000
    },
    description: {
      vi: "Dùng kẹp các loại mũi khoan, mũi doa, dao phay ngón và tapping các chi tiết trên máy phay",
      cn: "用于夹紧铣床上的钻头、铰刀、指铣刀和丝锥零件"
    },
    descriptions,
    seri: "BT30",
    specs: "ER16-32",
    brand: "Suken",
    origin: ["cn"],
    listView: listViewRMB,
    detailsView,
    // extra data
    model: "ER16/20/25/32",
    material: "AlloySteel",
    hardness: "58HRC-60HRC",
    runout: "0.003mm",
    maxRPM: "25.000rpm",
    overallLength: "70, 100"
  }
];

export default items;

export const bauKepItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
