import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const descriptions1 = {
  vi: [
    {
      title: "description",
      data: ["Được làm từ thép hợp kim có độ cứng và độ bền cao.", "Tốc độ gia công hoàn hảo, dễ dàng thao tác trong quá trình sử dụng."]
    }
  ],
  cn: [
    {
      title: "description",
      data: ["由高强度合金钢制成具有出色的硬度和耐用性。", "加工速度完美、操作简单方便。"]
    }
  ]
};

const descriptions2 = {
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
    code: "MCKN",
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
    code: "EMR",
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
      vi: "Cán dao tiện lỗ hợp kim EMR",
      cn: "EMR 合金内孔车刀杆"
    },
    prices: {
      current: 0,
      min: 468000,
      max: 895000
    },
    description: {
      vi: "Thường sử dụng để tiện thô, bán thô và tinh bên ngoài chi tiết",
      cn: "通常用于外圆的粗车、半精车和精车加工"
    },
    descriptions: descriptions2,
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
  }
  // TODO: add more 15 items
];

export default items;

export const canDaoGanManhItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
