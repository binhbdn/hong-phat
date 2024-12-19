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
      "ER40-3-AA",
      "ER40-4-AA",
      "ER40-5-AA",
      "ER40-6-AA",
      "ER40-7-AA",
      "ER40-8-AA",
      "ER40-9-AA",
      "ER40-10-AA",
      "ER40-11-AA",
      "ER40-12-AA",
      "ER40-13-AA",
      "ER40-14-AA",
      "ER40-15-AA",
      "ER40-16-AA",
      "ER40-17-AA",
      "ER40-18-AA",
      "ER40-19-AA",
      "ER40-20-AA",
      "ER40-21-AA",
      "ER40-22-AA",
      "ER40-23-AA",
      "ER40-24-AA",
      "ER40-25-AA",
      "ER40-26-AA"
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
      "ER32-1-AA",
      "ER32-1.5-AA",
      "ER32-2-AA",
      "ER32-2.5-AA",
      "ER32-3-AA",
      "ER32-3.175-AA",
      "ER32-4-AA",
      "ER32-5-AA",
      "ER32-6-AA",
      "ER32-7-AA",
      "ER32-8-AA",
      "ER32-9-AA",
      "ER32-10-AA",
      "ER32-11-AA",
      "ER32-12-AA",
      "ER32-12.7-AA",
      "ER32-13-AA",
      "ER32-14-AA",
      "ER32-15-AA",
      "ER32-16-AA",
      "ER32-17-AA",
      "ER32-18-AA",
      "ER32-19-AA",
      "ER32-20-AA",
      "ER32-3-UP",
      "ER32-3.175-UP",
      "ER32-4-UP",
      "ER32-5-UP",
      "ER32-6-UP",
      "ER32-7-UP",
      "ER32-8-UP",
      "ER32-9-UP",
      "ER32-10-UP",
      "ER32-11-UP",
      "ER32-12-UP",
      "ER32-12.7-UP",
      "ER32-13-UP",
      "ER32-14-UP",
      "ER32-15-UP",
      "ER32-16-UP",
      "ER32-17-UP",
      "ER32-18-UP",
      "ER32-19-UP",
      "ER32-20-UP"
    ]
  },
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: false,
    code: "ER25",
    images: [
      "/collet/ER25/vt_1.webp",
      "/collet/ER25/vt_spec.webp",
      "/collet/ER25/vt_spec_1.webp",
      "/collet/ER25/vt_spec_2.webp",
      "/collet/ER/vt_2.webp",
      "/collet/ER/vt_3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/collet/ER25/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Collet ER25 - Đầu kẹp dao máy CNC",
      cn: "ER25筒夹 - 数控机床刀具夹头"
    },
    prices: {
      current: 0,
      min: 67000,
      max: 127000
    },
    description: {
      vi: "Dùng cho đầu kẹp CNC ER25",
      cn: "用于ER25数控夹头"
    },
    descriptions: null,
    seri: "ER25",
    specs: "D1-D16",
    brand: "KON",
    origin: ["cn"],
    listView: listViewAiDB,
    // extra data
    detailsView,
    accuracy: "0.005/0.008mm",
    innerDiameter: "D1-D16",
    colletInnerDiameter: "D1-D16",
    specsList: [
      "ER25-1-AA",
      "ER25-1.5-AA",
      "ER25-2-AA",
      "ER25-2.5-AA",
      "ER25-3-AA",
      "ER25-3.175-AA",
      "ER25-3.5-AA",
      "ER25-4-AA",
      "ER25-5-AA",
      "ER25-6-AA",
      "ER25-7-AA",
      "ER25-8-AA",
      "ER25-9-AA",
      "ER25-10-AA",
      "ER25-11-AA",
      "ER25-12-AA",
      "ER25-12.7-AA",
      "ER25-13-AA",
      "ER25-14-AA",
      "ER25-15-AA",
      "ER25-16-AA",
      "ER25-3-UP",
      "ER25-3.175-UP",
      "ER25-3.5-UP",
      "ER25-4-UP",
      "ER25-5-UP",
      "ER25-6-UP",
      "ER25-7-UP",
      "ER25-8-UP",
      "ER25-9-UP",
      "ER25-10-UP",
      "ER25-11-UP",
      "ER25-12-UP",
      "ER25-12.7-UP",
      "ER25-13-UP",
      "ER25-14-UP",
      "ER25-15-UP",
      "ER25-16-UP"
    ]
  },
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: false,
    code: "ER20",
    images: [
      "/collet/ER20/vt_1.webp",
      "/collet/ER20/vt_spec.webp",
      "/collet/ER20/vt_spec_1.webp",
      "/collet/ER20/vt_spec_2.webp",
      "/collet/ER20/vt_2.webp",
      "/collet/ER/vt_3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/collet/ER20/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Collet ER20 - Đầu kẹp dao máy CNC",
      cn: "ER20筒夹 - 数控机床刀具夹头"
    },
    prices: {
      current: 0,
      min: 58000,
      max: 113000
    },
    description: {
      vi: "Dùng cho đầu kẹp CNC ER20",
      cn: "用于ER20数控夹头"
    },
    descriptions: null,
    seri: "ER20",
    specs: "D1-D13",
    brand: "KON",
    origin: ["cn"],
    listView: listViewAiDB,
    // extra data
    detailsView,
    accuracy: "0.005/0.008mm",
    innerDiameter: "D1-D13",
    colletInnerDiameter: "D1-D13",
    specsList: [
      "ER20-1-AA",
      "ER20-1.5-AA",
      "ER20-2-AA",
      "ER20-2.5-AA",
      "ER20-3-AA",
      "ER20-3.175-AA",
      "ER20-3.5-AA",
      "ER20-4-AA",
      "ER20-5-AA",
      "ER20-6-AA",
      "ER20-7-AA",
      "ER20-8-AA",
      "ER20-9-AA",
      "ER20-10-AA",
      "ER20-11-AA",
      "ER20-12-AA",
      "ER20-12.7-AA",
      "ER20-13-AA",
      "ER20-3-UP",
      "ER20-3.175-UP",
      "ER20-3.5-UP",
      "ER20-4-UP",
      "ER20-5-UP",
      "ER20-6-UP",
      "ER20-7-UP",
      "ER20-8-UP",
      "ER20-9-UP",
      "ER20-10-UP",
      "ER20-11-UP",
      "ER20-12-UP",
      "ER20-12.7-UP",
      "ER20-13-UP"
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
      "ER16-1-AA",
      "ER16-1.5-AA",
      "ER16-2-AA",
      "ER16-2.5-AA",
      "ER16-3-AA",
      "ER16-3.175-AA",
      "ER16-3.5-AA",
      "ER16-4-AA",
      "ER16-5-AA",
      "ER16-6-AA",
      "ER16-7-AA",
      "ER16-8-AA",
      "ER16-9-AA",
      "ER16-10-AA",
      "ER16-3-UP",
      "ER16-3.175-UP",
      "ER16-3.5-UP",
      "ER16-4-UP",
      "ER16-5-UP",
      "ER16-6-UP",
      "ER16-7-UP",
      "ER16-8-UP",
      "ER16-9-UP",
      "ER16-10-UP"
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
      "ER11-1-AA",
      "ER11-1.5-AA",
      "ER11-2-AA",
      "ER11-2.5-AA",
      "ER11-3-AA",
      "ER11-3.175-AA",
      "ER11-3.5-AA",
      "ER11-4-AA",
      "ER11-4.5-AA",
      "ER11-5-AA",
      "ER11-5.5-AA",
      "ER11-6-AA",
      "ER11-6.5-AA",
      "ER11-7-AA",
      "ER11-3-UP",
      "ER11-3.175-UP",
      "ER11-3.5-UP",
      "ER11-4-UP",
      "ER11-4.5-UP",
      "ER11-5-UP",
      "ER11-5.5-UP",
      "ER11-6-UP",
      "ER11-6.5-UP",
      "ER11-7-UP"
    ]
  },
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: true,
    code: "SC32",
    images: ["/collet/SC32/vt_1.webp", "/collet/SC32/vt_spec.webp", "/collet/SC32/vt_spec_1.webp", "/collet/SC32/vt_2.webp", "/collet/SC32/3.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/collet/SC32/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Collet trụ SC32 dùng cho bầu kẹp BT30-40-50 SC32",
      cn: "SC32筒夹 适用于BT30-40-50 SC32刀柄"
    },
    prices: {
      current: 110000,
      min: 0,
      max: 0
    },
    description: {
      vi: "Collet thẳng, hàng chất lượng cao",
      cn: "直筒夹，高品质产品"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: ["Là loại collet thẳng (kẹp lò xo) rất phổ biến, được đa số nhà sản xuất tin dùng.", "Hiệu suất ổn định, độ chính xác cao."]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["这是一种广泛使用的直筒夹（弹簧夹），深受大多数制造商信赖。", "性能稳定，精度高。"]
        }
      ]
    },
    seri: "SC32",
    specs: "D3-D25",
    brand: "",
    origin: ["cn"],
    listView: listViewAiDB,
    // extra data
    detailsView,
    accuracy: "0.01mm",
    innerDiameter: "D3-D25",
    colletInnerDiameter: "D3-D25",
    specsList: [
      "SC32-3",
      "SC32-4",
      "SC32-5",
      "SC32-6",
      "SC32-7",
      "SC32-8",
      "SC32-9",
      "SC32-10",
      "SC32-11",
      "SC32-12",
      "SC32-13",
      "SC32-14",
      "SC32-15",
      "SC32-16",
      "SC32-17",
      "SC32-18",
      "SC32-19",
      "SC32-20",
      "SC32-21",
      "SC32-22",
      "SC32-23",
      "SC32-24",
      "SC32-25"
    ]
  }
];

export default items;

export const colletItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
