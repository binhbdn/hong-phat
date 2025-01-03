import { listViewAMB } from "@/stores/listViewOptions";
import { descriptionSK, descriptionsBTER, detailsViewBauKep } from "@/stores/bauKep/helper";

const bauKepSukenItems = [
  // 03 bầu kẹp Suken - Thứ tự theo mức độ phổ biến:
  {
    category: "pBauKep",
    routeName: "pBauKepCT",
    isTypical: true,
    code: "BK_SUKEN_BT50_ER",
    images: [
      "/bau_kep_suken/bt50/vt_0.webp",
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
        preview: true,
        options: "",
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
    description: descriptionSK,
    descriptions: descriptionsBTER,
    seri: "BT50",
    specs: "ER16/20/25/32/40",
    brand: "Suken",
    origin: ["cn"],
    listView: listViewAMB,
    detailsView: detailsViewBauKep,
    // extra data
    model: "ER16/20/25/32/40",
    material: "AlloySteel",
    hardness: "58HRC-60HRC",
    accuracy: "0.003mm",
    maxRPM: "25.000rpm",
    overallLength: "100, 150, 200",
    specsList: [
      "BT50-ER16-100",
      "BT50-ER16-150",
      "BT50-ER16-200",
      "BT50-ER20-100",
      "BT50-ER20-150",
      "BT50-ER20-200",
      "BT50-ER25-100",
      "BT50-ER25-150",
      "BT50-ER25-200",
      "BT50-ER32-100",
      "BT50-ER32-150",
      "BT50-ER32-200",
      "BT50-ER40-100",
      "BT50-ER40-150",
      "BT50-ER40-200"
    ]
  },
  {
    category: "pBauKep",
    routeName: "pBauKepCT",
    isTypical: false,
    code: "BK_SUKEN_BT40_ER",
    images: [
      "/bau_kep_suken/bt40/vt_0.webp",
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
        preview: true,
        options: "",
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
    description: descriptionSK,
    descriptions: descriptionsBTER,
    seri: "BT40",
    specs: "ER16/20/25/32",
    brand: "Suken",
    origin: ["cn"],
    listView: listViewAMB,
    detailsView: detailsViewBauKep,
    // extra data
    model: "ER16/20/25/32",
    material: "AlloySteel",
    hardness: "58HRC-60HRC",
    accuracy: "0.003mm",
    maxRPM: "25.000rpm",
    overallLength: "70, 100, 150",
    specsList: [
      "BT40-ER16-70",
      "BT40-ER16-100",
      "BT40-ER16-150",
      "BT40-ER20-70",
      "BT40-ER20-100",
      "BT40-ER20-150",
      "BT40-ER25-70",
      "BT40-ER25-100",
      "BT40-ER25-150",
      "BT40-ER32-70",
      "BT40-ER32-100",
      "BT40-ER32-150",
      "BT40-ER40-70",
      "BT40-ER40-100",
      "BT40-ER40-150"
    ]
  },
  {
    category: "pBauKep",
    routeName: "pBauKepCT",
    isTypical: false,
    code: "BK_SUKEN_BT30_ER",
    images: [
      "/bau_kep_suken/bt30/vt_0.webp",
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
        preview: true,
        options: "",
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
    description: descriptionSK,
    descriptions: descriptionsBTER,
    seri: "BT30",
    specs: "ER16/20/25/32",
    brand: "Suken",
    origin: ["cn"],
    listView: listViewAMB,
    detailsView: detailsViewBauKep,
    // extra data
    model: "ER16/20/25/32",
    material: "AlloySteel",
    hardness: "58HRC-60HRC",
    accuracy: "0.003mm",
    maxRPM: "25.000rpm",
    overallLength: "70, 100",
    specsList: ["BT30-ER16-70", "BT30-ER16-100", "BT30-ER20-70", "BT30-ER20-100", "BT30-ER25-70", "BT30-ER25-100", "BT30-ER32-70", "BT30-ER32-100"]
  }
];

export default bauKepSukenItems;
