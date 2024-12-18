import { listViewAiDB } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const detailsView = [["accuracy", "colletInnerDiameter"], [{ type: "tag", value: "specsList" }]];

const items = [
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: false,
    code: "ER40",
    images: ["/collet/ER40/vt_1.webp", "/collet/ER40/vt_spec.webp", "/collet/ER40/vt_spec_1.webp", "/collet/ER/vt_3.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/collet/ER40/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Collet ER40 - Đầu kẹp dao máy CNC",
      cn: "ER40筒夹 - 数控机床刀具夹头"
    },
    prices: {
      current: 134000,
      min: 0,
      max: 0
    },
    description: {
      vi: "Dùng cho đầu kẹp CNC ER40",
      cn: "用于ER40数控夹头"
    },
    descriptions: null,
    seri: "ER40",
    specs: "D3-D26",
    brand: "KON",
    origin: ["cn"],
    listView: listViewAiDB,
    // extra data
    detailsView,
    accuracy: "0.008mm",
    innerDiameter: "D3-D26",
    colletInnerDiameter: "D3-D26",
    specsList: [
      "ER40-3±0.008mm",
      "ER40-4±0.008mm",
      "ER40-5±0.008mm",
      "ER40-6±0.008mm",
      "ER40-7±0.008mm",
      "ER40-8±0.008mm",
      "ER40-9±0.008mm",
      "ER40-10±0.008mm",
      "ER40-11±0.008mm",
      "ER40-12±0.008mm",
      "ER40-13±0.008mm",
      "ER40-14±0.008mm",
      "ER40-15±0.008mm",
      "ER40-16±0.008mm",
      "ER40-17±0.008mm",
      "ER40-18±0.008mm",
      "ER40-19±0.008mm",
      "ER40-20±0.008mm",
      "ER40-21±0.008mm",
      "ER40-22±0.008mm",
      "ER40-23±0.008mm",
      "ER40-24±0.008mm",
      "ER40-25±0.008mm",
      "ER40-26±0.008mm"
    ]
  },
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: true,
    code: "ER32",
    images: [
      "/collet/ER32/vt_1.webp",
      "/collet/ER32/vt_spec.webp",
      "/collet/ER32/vt_spec_1.webp",
      // "/collet/ER32/vt_spec_2.webp",
      "/collet/ER32/vt_2.webp",
      "/collet/ER/vt_3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/collet/ER32/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Collet ER32 - Đầu kẹp dao máy CNC",
      cn: "ER32筒夹 - 数控机床刀具夹头"
    },
    prices: {
      current: 0,
      min: 92000,
      max: 150000
    },
    description: {
      vi: "Dùng cho đầu kẹp CNC ER32",
      cn: "用于ER32数控夹头"
    },
    descriptions: null,
    seri: "ER32",
    specs: "D1-D20",
    brand: "KON",
    origin: ["cn"],
    listView: listViewAiDB,
    // extra data
    detailsView,
    accuracy: "0.005/0.008mm",
    innerDiameter: "D1-D20",
    colletInnerDiameter: "D1-D20",
    specsList: [
      "ER32-1±0.008mm",
      "ER32-1.5±0.008mm",
      "ER32-2±0.008mm",
      "ER32-2.5±0.008mm",
      "ER32-3±0.005mm",
      "ER32-3±0.008mm",
      "ER32-3.175±0.005mm",
      "ER32-3.175±0.008mm",
      "ER32-4±0.005mm",
      "ER32-4±0.008mm",
      "ER32-5±0.005mm",
      "ER32-5±0.008mm",
      "ER32-6±0.005mm",
      "ER32-6±0.008mm",
      "ER32-7±0.005mm",
      "ER32-7±0.008mm",
      "ER32-8±0.005mm",
      "ER32-8±0.008mm",
      "ER32-9±0.005mm",
      "ER32-9±0.008mm",
      "ER32-10±0.005mm",
      "ER32-10±0.008mm",
      "ER32-11±0.005mm",
      "ER32-11±0.008mm",
      "ER32-12±0.005mm",
      "ER32-12±0.008mm",
      "ER32-12.7±0.005mm",
      "ER32-12.7±0.008mm",
      "ER32-13±0.005mm",
      "ER32-13±0.008mm",
      "ER32-14±0.005mm",
      "ER32-14±0.008mm",
      "ER32-15±0.005mm",
      "ER32-15±0.008mm",
      "ER32-16±0.005mm",
      "ER32-16±0.008mm",
      "ER32-17±0.005mm",
      "ER32-17±0.008mm",
      "ER32-18±0.005mm",
      "ER32-18±0.008mm",
      "ER32-19±0.005mm",
      "ER32-19±0.008mm",
      "ER32-20±0.005mm",
      "ER32-20±0.008mm"
    ]
  },
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: false,
    code: "ER16",
    images: [
      "/collet/ER16/vt_1.webp",
      "/collet/ER16/vt_spec.webp",
      "/collet/ER16/vt_spec_1.webp",
      "/collet/ER16/vt_spec_2.webp",
      "/collet/ER16/vt_2.webp",
      "/collet/ER/vt_3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/collet/ER16/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Collet ER16 - Đầu kẹp dao máy CNC",
      cn: "ER16筒夹 - 数控机床刀具夹头"
    },
    prices: {
      current: 0,
      min: 58000,
      max: 113000
    },
    description: {
      vi: "Dùng cho đầu kẹp CNC ER16",
      cn: "用于ER16数控夹头"
    },
    descriptions: null,
    seri: "ER16",
    specs: "D1-D10",
    brand: "KON",
    origin: ["cn"],
    listView: listViewAiDB,
    // extra data
    detailsView,
    accuracy: "0.005/0.008mm",
    innerDiameter: "D1-D10",
    colletInnerDiameter: "D1-D10",
    specsList: [
      "ER16-1±0.008mm",
      "ER16-1.5±0.008mm",
      "ER16-2±0.008mm",
      "ER16-2.5±0.008mm",
      "ER16-3±0.005mm",
      "ER16-3±0.008mm",
      "ER16-3.175±0.005mm",
      "ER16-3.175±0.008mm",
      "ER16-3.5±0.005mm",
      "ER16-3.5±0.008mm",
      "ER16-4±0.005mm",
      "ER16-4±0.008mm",
      "ER16-5±0.005mm",
      "ER16-5±0.008mm",
      "ER16-6±0.005mm",
      "ER16-6±0.008mm",
      "ER16-7±0.005mm",
      "ER16-7±0.008mm",
      "ER16-8±0.005mm",
      "ER16-8±0.008mm",
      "ER16-9±0.005mm",
      "ER16-9±0.008mm",
      "ER16-10±0.005mm",
      "ER16-10±0.008mm"
    ]
  },
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: false,
    code: "ER11",
    images: [
      "/collet/ER11/vt_1.webp",
      "/collet/ER11/vt_spec.webp",
      "/collet/ER11/vt_spec_1.webp",
      "/collet/ER11/vt_spec_2.webp",
      "/collet/ER11/vt_2.webp",
      "/collet/ER/vt_3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/collet/ER11/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Collet ER11 - Đầu kẹp dao máy CNC",
      cn: "ER11筒夹 - 数控机床刀具夹头"
    },
    prices: {
      current: 0,
      min: 58000,
      max: 113000
    },
    description: {
      vi: "Dùng cho đầu kẹp CNC ER11",
      cn: "用于ER11数控夹头"
    },
    descriptions: null,
    seri: "ER11",
    specs: "D1-D7",
    brand: "KON",
    origin: ["cn"],
    listView: listViewAiDB,
    // extra data
    detailsView,
    accuracy: "0.005/0.008mm",
    innerDiameter: "D1-D7",
    colletInnerDiameter: "D1-D7",
    specsList: [
      "ER11-1±0.008mm",
      "ER11-1.5±0.008mm",
      "ER11-2±0.008mm",
      "ER11-2.5±0.008mm",
      "ER11-3±0.005mm",
      "ER11-3±0.008mm",
      "ER11-3.175±0.005mm",
      "ER11-3.175±0.008mm",
      "ER11-3.5±0.005mm",
      "ER11-3.5±0.008mm",
      "ER11-4±0.005mm",
      "ER11-4±0.008mm",
      "ER11-4.5±0.005mm",
      "ER11-4.5±0.008mm",
      "ER11-5±0.005mm",
      "ER11-5±0.008mm",
      "ER11-5.5±0.005mm",
      "ER11-5.5±0.008mm",
      "ER11-6±0.005mm",
      "ER11-6±0.008mm",
      "ER11-6.5±0.005mm",
      "ER11-6.5±0.008mm",
      "ER11-7±0.005mm",
      "ER11-7±0.008mm"
    ]
  }
];

export default items;

export const colletItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
