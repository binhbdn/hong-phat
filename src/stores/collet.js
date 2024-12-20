import { listViewAiDB } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const descriptionSK = {
  vi: "Collet kẹp dao phay kiểu SK độ chính xác cao",
  cn: "SK型高精度铣刀筒夹"
};

const descriptionsSK = {
  vi: [
    {
      title: "description",
      data: [
        "Collet SK có lực kẹp lớn hơn collet ER rất nhiều.",
        "Được chế tạo từ thép hợp kim đặc biệt, qua xử lý nhiệt và mài chính xác, đảm bảo độ cứng và độ bền cao.",
        "Thiết kế tối ưu cho phép thay dao nhanh chóng và an toàn."
      ]
    }
  ],
  cn: [
    {
      title: "description",
      data: ["SK筒夹的夹持力比ER筒夹大得多。", "采用特殊合金钢制造，经过热处理和精密磨削，确保高硬度和耐久性。", "优化设计，可快速安全更换刀具。"]
    }
  ]
};

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
    code: "CMT",
    images: [
      "/collet/CMT/vt_1.webp",
      "/collet/CMT/vt_spec.webp",
      "/collet/CMT/vt_2.webp",
      "/collet/CMT/vt_3.webp",
      "/collet/CMT/vt_4.webp",
      "/collet/CMT/vt_5.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/collet/CMT/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Collet kẹp máy tiện D20/D25/D32/D40",
      cn: "车床筒夹 D20/D25/D32/D40"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: {
      vi: "Là dụng cụ xoay giảm tốc CNC",
      cn: "是CNC减速旋转工具"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Lắp với các dụng cụ cán thẳng như thanh dụng cụ, tiện đường kính trong, mũi khoan xoắn, mũi khoan chữ U và thanh nối dài.",
            "Tăng độ ổn định, tăng tốc độ nạp và số lượng cắt."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["适用于直柄工具、如刀具杆、内径车刀、麻花钻、U型钻和延长杆。", "提高稳定性，提高进给速度和切削量。"]
        }
      ]
    },
    seri: "CMT",
    specs: "D20/D25/D32/D40",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewAiDB,
    // extra data
    detailsView,
    accuracy: "0.02mm",
    innerDiameter: "D20/D25/D32/D40",
    colletInnerDiameter: "D20/D25/D32/D40",
    specsList: ["D20-T16", "D25-T16", "D25-T20", "D32-T16", "D32-T20", "D32-T25", "D40-T20", "D40-T25", "D40-T32"]
  },
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: true,
    code: "R8",
    images: ["/collet/R8/vt_1.webp", "/collet/R8/vt_spec_1.webp", "/collet/R8/vt_2.webp", "/collet/R8/3.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/collet/R8/vt_spec_1.webp"]
      }
    ],
    name: {
      vi: "Collet R8 - Thương hiệu Vân Tập",
      cn: "R8筒夹 - Vân Tập品牌"
    },
    prices: {
      current: 147000,
      min: 0,
      max: 0
    },
    description: {
      vi: "Thường dùng cho các loại máy gia công lỗ",
      cn: "通常用于各类孔加工机床"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Không có đầu kẹp riêng vì có thể được lắp trực tiếp vào côn của máy.",
            "Thường được dùng để kẹp dao phay, mũi khoan, mũi doa, mũi taro.",
            "Hạn chế sự rung lắc khi gia công và đảm bảo độ chính xác sản phẩm.",
            "Thiết kế tối ưu cho phép thay dao nhanh chóng và an toàn."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: [
            "无需单独的夹头，可直接安装在机器锥度上。",
            "通常用于夹持铣刀、钻头、铰刀和丝锥。",
            "减少加工时的振动，确保产品精度。",
            "优化设计，实现快速安全的刀具更换。"
          ]
        }
      ]
    },
    seri: "R8",
    specs: "D0.5-D20",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewAiDB,
    // extra data
    detailsView,
    accuracy: "0.02mm",
    innerDiameter: "D0.5-D20",
    colletInnerDiameter: "D0.5-D20",
    specsList: ["R8-0.5", "R8-3", "R8-4", "R8-5", "R8-6", "R8-8", "R8-10", "R8-12", "R8-14", "R8-16", "R8-18", "R8-20"]
  },
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: true,
    code: "SK16",
    images: ["/collet/SK16/vt_1.webp", "/collet/SK/spec.webp", "/collet/SK/vt_spec_1.webp", "/collet/SK/vt_2.webp", "/collet/SK/3.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/collet/SK/spec.webp"]
      }
    ],
    name: {
      vi: "Collet SK16 - Thương hiệu SUKEN, Vân Tập",
      cn: "SK16筒夹 - SUKEN、Vân Tập品牌"
    },
    prices: {
      current: 288000,
      min: 0,
      max: 0
    },
    description: descriptionSK,
    descriptions: descriptionsSK,
    seri: "SK16",
    specs: "D3-D16",
    brand: "SUKEN, Vân Tập",
    origin: ["tw", "cn"],
    listView: listViewAiDB,
    // extra data
    detailsView,
    accuracy: "0.005mm",
    innerDiameter: "D3-D16",
    colletInnerDiameter: "D3-D16",
    specsList: [
      "SK16-3",
      "SK16-4",
      "SK16-6",
      "SK16-8",
      "SK16-10",
      "SK16-12",
      "SK16-14",
      "SK16-16",
      "SK16-3-VT",
      "SK16-4-VT",
      "SK16-6-VT",
      "SK16-8-VT",
      "SK16-10-VT",
      "SK16-12-VT",
      "SK16-14-VT",
      "SK16-16-VT"
    ]
  },
  {
    category: "pCollet",
    routeName: "pColletCT",
    isTypical: false,
    code: "SK10",
    images: ["/collet/SK10/vt_1.webp", "/collet/SK/spec.webp", "/collet/SK/vt_spec_1.webp", "/collet/SK/vt_2.webp", "/collet/SK/3.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/collet/SK/spec.webp"]
      }
    ],
    name: {
      vi: "Collet SK10 - Thương hiệu SUKEN",
      cn: "SK10筒夹 - SUKEN品牌"
    },
    prices: {
      current: 288000,
      min: 0,
      max: 0
    },
    description: descriptionSK,
    descriptions: descriptionsSK,
    seri: "SK10",
    specs: "D3-D10",
    brand: "SUKEN",
    origin: ["tw"],
    listView: listViewAiDB,
    // extra data
    detailsView,
    accuracy: "0.005mm",
    innerDiameter: "D3-D10",
    colletInnerDiameter: "D3-D10",
    specsList: ["SK10-3", "SK10-4", "SK10-5", "SK10-6", "SK10-8", "SK10-10"]
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
