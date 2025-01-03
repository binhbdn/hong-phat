import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const description1 = {
  vi: "Thường sử dụng để tiện thô, bán thô và tinh bên ngoài chi tiết",
  cn: "通常用于外圆的粗车、半精车和精车加工"
};

const descriptions1 = {
  vi: [
    {
      title: "description",
      data: [
        "Được làm từ thép hợp kim có độ cứng và độ bền cao",
        "Tốc độ cắt hoàn hảo, dễ dàng thao tác tháo lắp, có tích hợp vít giữ giúp siết chặt mảnh chip khi gia công."
      ]
    }
  ],
  cn: [
    {
      title: "description",
      data: ["由高强度合金钢制成具有高硬度和耐用性。", "切削速度完美、易于拆装、集成固定螺丝帮助在加工时紧固刀片。"]
    }
  ]
};

const detailsView = [[{ type: "tag", value: "specsList" }]];

const items = [
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: true,
    code: "TAP_BAP",
    images: ["/can_dao_gan_manh/dai_phay/vt_1.webp"],
    extraImages: null,
    name: {
      vi: "Đài phay TAP/BAP 400R gắn mảnh chip 1604",
      cn: "TAP/BAP 400R铣床配1604刀片"
    },
    prices: {
      current: 0,
      min: 505000,
      max: 720000
    },
    description: {
      vi: "Thường được dùng để gia công thô, gia công mặt phẳng",
      cn: "通常用于粗加工和平面加工"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Là loại dao có lưỡi nằm ở mặt đầu và trục dao vuông góc với bề mặt gia công.",
            "Được gắn mảnh hợp kim và có thể thay thế khi bị hao mòn.",
            "Được làm từ thép hợp kim có độ cứng và độ bền cao",
            "Tốc độ cắt hoàn hảo, dễ dàng thao tác tháo lắp, có tích hợp vít giữ giúp siết chặt mảnh chip khi gia công."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: [
            "刀具的刀刃位于端面刀轴垂直于加工表面。",
            "配备可更换的合金刀片磨损时可更换。",
            "由高强度合金钢制成具有高硬度和耐用性。",
            "切削速度完美、易于拆装、集成固定螺丝帮助在加工时紧固刀片。"
          ]
        }
      ]
    },
    seri: "TAP/BAP",
    specs: "400R",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["TAP 400R-63-22-4T", "BAP 400R-80-22-6T", "BAP 400R-80-27-6T"]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: true,
    code: "MCKN1",
    images: ["/can_dao_gan_manh/moc_lo/vt_1.webp", "/can_dao_gan_manh/moc_lo/spec.webp", "/can_dao_gan_manh/moc_lo/2.webp", "/can_dao_gan_manh/moc_lo/3.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/moc_lo/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao móc lỗ MCKN",
      cn: "MCKN 内孔车刀杆"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: {
      vi: "Dùng để cắt gọt kim loại, gia công lỗ, tiện ren",
      cn: "用于金属切削、内孔加工和螺纹车削"
    },
    descriptions: descriptions1,
    seri: "MCKN",
    specs: "R/L 20-40",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["S20R-MCKNR/L12", "S25S-MCKNR/L12", "S32T-MCKNR/L12", "S40T-MCKNR/L12"]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: true,
    code: "EMR1",
    images: [
      "/can_dao_gan_manh/tien_lo/vt_1.webp",
      "/can_dao_gan_manh/tien_lo/spec.webp",
      "/can_dao_gan_manh/tien_lo/2.webp",
      "/can_dao_gan_manh/tien_lo/3.webp",
      "/can_dao_gan_manh/tien_lo/4.webp",
      "/can_dao_gan_manh/tien_lo/5.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_lo/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao tiện lỗ hợp kim EMR - Hãng Suken",
      cn: "速肯EMR系列合金内孔车刀杆"
    },
    prices: {
      current: 0,
      min: 468000,
      max: 895000
    },
    description: description1,
    descriptions: descriptions1,
    seri: "EMR",
    specs: "4/5/6R-C15/C32",
    brand: "Suken",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: [
      "EMR 4R16-15-200L",
      "EMR 4R17-C16-200L",
      "EMR 4R21-C20-160L",
      "EMR 5R50-22",
      "EMR 5R63-22",
      "EMR 6R50-22",
      "EMR 6R63-22",
      "EMRT 5R25-24-160L",
      "EMRT 5R25-C25-160L",
      "EMR 5R30-C25-250L"
    ]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: true,
    code: "MGEH",
    images: [
      "/can_dao_gan_manh/tien_ranh/MGEH/vt_1.webp",
      "/can_dao_gan_manh/tien_ranh/MGEH/spec.webp",
      "/can_dao_gan_manh/tien_ranh/MGEH/2.webp",
      "/can_dao_gan_manh/tien_ranh/MGEH/3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_ranh/MGEH/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao cắt MGEH",
      cn: "MGEH 车刀杆"
    },
    prices: {
      current: 0,
      min: 164000,
      max: 485000
    },
    description: {
      vi: "Sử dụng cho gia công tiện rãnh bên ngoài chi tiết",
      cn: "用于外圆沟槽车削加工"
    },
    descriptions: descriptions1,
    seri: "MGEH",
    specs: "R/L 12-25",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: [
      "MGEHR1212-3",
      "MGEHR1212-4",
      "MGEHL2020-3",
      "MGEHR2020-4",
      "MGEHR2020-5",
      "MGEHL2525-3",
      "MGEHR3232-3",
      "MGEHR2020-4-300",
      "MGEHR2525-3-300",
      "MGEHR2525-4-300",
      "MGEHR1616-3C",
      "MGEHR1616-4C",
      "MGEHR2020-3C",
      "MGEHR2020-2C",
      "MGEHR2525-3C",
      "MGEHR1616-4",
      "MGEHR3232-5",
      "MGEHR2525-4-T30",
      "MGEHR2525-3-T30"
    ]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: false,
    code: "MGIVR",
    images: [
      "/can_dao_gan_manh/tien_ranh/MGIVR/vt_1.webp",
      "/can_dao_gan_manh/tien_ranh/MGIVR/spec.webp",
      "/can_dao_gan_manh/tien_ranh/MGIVR/2.webp",
      "/can_dao_gan_manh/tien_ranh/MGIVR/3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_ranh/MGIVR/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao móc lỗ MGIVR",
      cn: "MGIVR 内孔车刀杆"
    },
    prices: {
      current: 0,
      min: 227000,
      max: 754000
    },
    description: {
      vi: "Sử dụng cho gia công tiện rãnh bên trong chi tiết",
      cn: "用于内圆沟槽车削加工"
    },
    descriptions: descriptions1,
    seri: "MGIVR",
    specs: "R/L 20-37",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: [
      "MGIVR 2016-2",
      "MGIVR 2016-3",
      "MGIVR 2520-2",
      "MGIVR 2520-3",
      "MGIVR 2520-4",
      "MGIVR 3125-3T7",
      "MGIVR 3125-4T7",
      "MGIVR 3732-4",
      "MGIVR 3732-5"
    ]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: true,
    code: "SER_SEL",
    images: [
      "/can_dao_gan_manh/tien_ren/SE/vt_1.webp",
      "/can_dao_gan_manh/tien_ren/SE/spec.webp",
      "/can_dao_gan_manh/tien_ren/SE/2.webp",
      "/can_dao_gan_manh/tien_ren/SE/3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_ren/SE/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao tiện rãnh SER/SEL",
      cn: "SER/SEL 沟槽车削刀杆"
    },
    prices: {
      current: 0,
      min: 194000,
      max: 270000
    },
    description: {
      vi: "Sử dụng cho gia công tiện rãnh bên ngoài chi tiết",
      cn: "用于外圆沟槽车削加工"
    },
    descriptions: descriptions1,
    seri: "SER/SEL",
    specs: "12-25",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["SER 1212K11", "SER 1212H16", "SER 2020K16", "SER 2525M16", "SEL 1616H16", "SEL 2020K16", "SEL 2525M16"]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: false,
    code: "SNR",
    images: ["/can_dao_gan_manh/tien_ren/SNR/vt_1.webp", "/can_dao_gan_manh/tien_ren/SNR/spec.webp", "/can_dao_gan_manh/tien_ren/SNR/2.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_ren/SNR/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao tiện ren trong SNR",
      cn: "SNR 内螺纹车刀杆"
    },
    prices: {
      current: 0,
      min: 151000,
      max: 194000
    },
    description: {
      vi: "Sử dụng cho gia công thô, tiện, gọt khoét",
      cn: "用于粗加工、车削、镗削加工"
    },
    descriptions: descriptions1,
    seri: "SNR",
    specs: "08-14",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["SNR 0008K08", "SNR 0010K11", "SNR 0014M16"]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: true,
    code: "SCLC",
    images: [
      "/can_dao_gan_manh/tien_tron/vt_1.webp",
      "/can_dao_gan_manh/tien_tron/spec.webp",
      "/can_dao_gan_manh/tien_tron/2.webp",
      "/can_dao_gan_manh/tien_tron/3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_tron/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao tiện SCLC góc 95°",
      cn: "SCLC 95° 车刀杆"
    },
    prices: {
      current: 0,
      min: 161000,
      max: 172000
    },
    description: description1,
    descriptions: descriptions1,
    seri: "SCLC",
    specs: "R/L 16/20",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["SCLC R1616H06", "SCLC R1616H09", "SCLC L1616H09", "SCLC R2020K09", "SCLC L2020K09"]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: true,
    code: "MDQN",
    images: [
      "/can_dao_gan_manh/tien_vuong/MDQN/vt_1.webp",
      "/can_dao_gan_manh/tien_vuong/MDQN/spec.webp",
      "/can_dao_gan_manh/tien_vuong/MDQN/2.webp",
      "/can_dao_gan_manh/tien_vuong/MDQN/3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_vuong/MDQN/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao tiện MDQN",
      cn: "MDQN 车刀杆"
    },
    prices: {
      current: 221000,
      min: 0,
      max: 0
    },
    description: description1,
    descriptions: descriptions1,
    seri: "MDQN",
    specs: "R/L 2020K15",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["MDQN R2020K15", "MDQN L2020K15"]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: false,
    code: "MCKN2",
    images: [
      "/can_dao_gan_manh/tien_vuong/MCKN/vt_1.webp",
      "/can_dao_gan_manh/tien_vuong/MCKN/spec.webp",
      "/can_dao_gan_manh/tien_vuong/MCKN/2.webp",
      "/can_dao_gan_manh/tien_vuong/MCKN/3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_vuong/MCKN/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao tiện MCKN",
      cn: "MCKN 车刀杆"
    },
    prices: {
      current: 0,
      min: 194000,
      max: 248000
    },
    description: description1,
    descriptions: descriptions1,
    seri: "MCKN",
    specs: "R/L 16/20/25",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["MCKN R1616H12", "MCKN L1616H12", "MCKN R2020K12", "MCKN L2020K12", "MCKN L2525M12"]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: false,
    code: "MCGN",
    images: [
      "/can_dao_gan_manh/tien_vuong/MCGN/vt_1.webp",
      "/can_dao_gan_manh/tien_vuong/MCGN/spec.webp",
      "/can_dao_gan_manh/tien_vuong/MCGN/2.webp",
      "/can_dao_gan_manh/tien_vuong/MCGN/3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_vuong/MCGN/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao tiện MCGN",
      cn: "MCGN 车刀杆"
    },
    prices: {
      current: 0,
      min: 194000,
      max: 248000
    },
    description: description1,
    descriptions: descriptions1,
    seri: "MCGN",
    specs: "R/L 20/25",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["MCGN R2020K12", "MCGN R2525M12"]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: false,
    code: "EMR2",
    images: [
      "/can_dao_gan_manh/tien_vuong/EMR/vt_1.webp",
      "/can_dao_gan_manh/tien_vuong/EMR/spec.webp",
      "/can_dao_gan_manh/tien_vuong/EMR/2.webp",
      "/can_dao_gan_manh/tien_vuong/EMR/3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_vuong/EMR/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao tiện lỗ hợp kim EMR - Hãng Vân Tập",
      cn: "Vân Tập EMR系列合金内孔车刀杆"
    },
    prices: {
      current: 0,
      min: 691000,
      max: 957000
    },
    description: description1,
    descriptions: descriptions1,
    seri: "EMR",
    specs: "4/5/6R-C15/C32",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["EMR 6R30-25-160L", "EMR 6R30-25-200L", "EMR 6R32-32-160L"]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: false,
    code: "MDJN",
    images: [
      "/can_dao_gan_manh/tien_vuong/MDJN/vt_1.webp",
      "/can_dao_gan_manh/tien_vuong/MDJN/spec.webp",
      "/can_dao_gan_manh/tien_vuong/MDJN/2.webp",
      "/can_dao_gan_manh/tien_vuong/MDJN/3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_vuong/MDJN/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao tiện MDJN",
      cn: "MDJN 车刀杆"
    },
    prices: {
      current: 0,
      min: 221000,
      max: 282000
    },
    description: description1,
    descriptions: descriptions1,
    seri: "MDJN",
    specs: "R/L 20/25",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["MDJN R2020K15", "MDJN L2020K15", "MDJN R2525M15", "MDJN L2525M15"]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: false,
    code: "MSBN",
    images: [
      "/can_dao_gan_manh/tien_vuong/MSBN/vt_1.webp",
      "/can_dao_gan_manh/tien_vuong/MSBN/spec.webp",
      "/can_dao_gan_manh/tien_vuong/MSBN/2.webp",
      "/can_dao_gan_manh/tien_vuong/MSBN/3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_vuong/MSBN/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao tiện MSBN",
      cn: "MSBN 车刀杆"
    },
    prices: {
      current: 194000,
      min: 0,
      max: 0
    },
    description: description1,
    descriptions: descriptions1,
    seri: "MSBN",
    specs: "R/L 16/20",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["MSBN R1616H12", "MSBN L1616H12", "MSBN L2020K12"]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: false,
    code: "MSDN",
    images: [
      "/can_dao_gan_manh/tien_vuong/MSDNN/vt_1.webp",
      "/can_dao_gan_manh/tien_vuong/MSDNN/spec.webp",
      "/can_dao_gan_manh/tien_vuong/MSDNN/2.webp",
      "/can_dao_gan_manh/tien_vuong/MSDNN/3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_vuong/MSDNN/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao tiện MSDNN",
      cn: "MSDNN 车刀杆"
    },
    prices: {
      current: 194000,
      min: 0,
      max: 0
    },
    description: description1,
    descriptions: descriptions1,
    seri: "MSDN",
    specs: "N1616-45°",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["MSDNN 1616H12"]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: false,
    code: "MSKN",
    images: [
      "/can_dao_gan_manh/tien_vuong/MSKN/vt_1.webp",
      "/can_dao_gan_manh/tien_vuong/MSKN/spec.webp",
      "/can_dao_gan_manh/tien_vuong/MSKN/2.webp",
      "/can_dao_gan_manh/tien_vuong/MSKN/3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_vuong/MSKN/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao tiện MSKN",
      cn: "MSKN 车刀杆"
    },
    prices: {
      current: 0,
      min: 194000,
      max: 248000
    },
    description: description1,
    descriptions: descriptions1,
    seri: "MSKN",
    specs: "R 16/25",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["MSKN R1616H12", "MSKN R2525M12"]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: false,
    code: "MSSN",
    images: [
      "/can_dao_gan_manh/tien_vuong/MSSN/vt_1.webp",
      "/can_dao_gan_manh/tien_vuong/MSSN/spec.webp",
      "/can_dao_gan_manh/tien_vuong/MSSN/2.webp",
      "/can_dao_gan_manh/tien_vuong/MSSN/3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_vuong/MSSN/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao tiện MSSN",
      cn: "MSSN 车刀杆"
    },
    prices: {
      current: 0,
      min: 194000,
      max: 248000
    },
    description: description1,
    descriptions: descriptions1,
    seri: "MSSN",
    specs: "R/L 16/20/25",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["MSSN R1616H12", "MSSN R2020K12", "MSSN L2020K12", "MSSN L2525M12"]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: false,
    code: "MTQN",
    images: [
      "/can_dao_gan_manh/tien_vuong/MTQN/vt_1.webp",
      "/can_dao_gan_manh/tien_vuong/MTQN/spec.webp",
      "/can_dao_gan_manh/tien_vuong/MTQN/2.webp",
      "/can_dao_gan_manh/tien_vuong/MTQN/3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_vuong/MTQN/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao tiện MTQN",
      cn: "MTQN 车刀杆"
    },
    prices: {
      current: 0,
      min: 194000,
      max: 248000
    },
    description: description1,
    descriptions: descriptions1,
    seri: "MTQN",
    specs: "R/L 16/20",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["MTQN R1616H16", "MTQN R2020K16", "MTQN L2020K16", "MTQN R2525M16", "MTQN L2525M16"]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: false,
    code: "MTFN",
    images: [
      "/can_dao_gan_manh/tien_vuong/MTFN/vt_1.webp",
      "/can_dao_gan_manh/tien_vuong/MTFN/spec.webp",
      // "/can_dao_gan_manh/tien_vuong/MTFN/2.webp",
      "/can_dao_gan_manh/tien_vuong/MTFN/3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_vuong/MTFN/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao tiện MTFN",
      cn: "MTFN 车刀杆"
    },
    prices: {
      current: 0,
      min: 194000,
      max: 248000
    },
    description: description1,
    descriptions: descriptions1,
    seri: "MTFN",
    specs: "R/L 16/20/25",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["MTFN R1616H16", "MTFN L1616H16", "MTFN R2020K16", "MTFN R2525M16", "MTFN L2525M16"]
  }
];

export default items;

export const canDaoGanManhItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
