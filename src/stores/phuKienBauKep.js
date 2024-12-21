import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const detailsView = [[{ type: "tag", value: "specsList" }]];
const detailsViewBAS = [["bevelAngle", "accuracy"], [{ type: "tag", value: "specsList" }]];

const descriptionsDCVR = {
  vi: [
    {
      title: "description",
      data: [
        "Được làm từ thép hợp kim có độ bền cao, bề mặt được nhiệt luyện và mài bóng.",
        "Có các vít rút với lỗ khoan thông dọc trục, dùng khi gia công tưới nguội từ phía trong dụng cụ ra."
      ]
    }
  ],
  cn: [
    {
      title: "description",
      data: ["采用高强度合金钢制成，表面经过热处理和抛光。", "带有纵向通孔的拉钉，适用于工具内部冷却加工。"]
    }
  ]
};

const items = [
  {
    category: "pPhuKienBauKep",
    routeName: "pPhuKienBauKepCT",
    isTypical: true,
    code: "CVM",
    images: ["/phu_kien_bau_kep/chia_mo/vt_1.webp", "/phu_kien_bau_kep/chia_mo/vt_2.webp"],
    extraImages: null,
    name: {
      vi: "Chìa vặn mở bầu kẹp collet",
      cn: "筒夹扳手"
    },
    prices: {
      current: 0,
      min: 67000,
      max: 123000
    },
    description: {
      vi: "Dùng để tháo kẹp bầu kẹp collet ER11, ER16, ER20, ER25, ER32, APU (C25), C32",
      cn: "用于拆卸ER11、ER16、ER20、ER25、ER32、APU（C25）、C32筒夹"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: ["Thiết kế theo tiêu chuẩn DIN 6499.", "Cần chọn chìa vặn phù hợp với kích thước của collet ER."]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["按DIN 6499标准设计。", "需要选择与ER筒夹尺寸相匹配的扳手。"]
        }
      ]
    },
    seri: "CVM",
    specs: "ER/APU/C",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["ER11A", "ER16A", "ER20A", "ER25UM", "ER32UM", "C25", "C32"]
  },
  {
    category: "pPhuKienBauKep",
    routeName: "pPhuKienBauKepCT",
    isTypical: true,
    code: "DCVR1",
    images: ["/phu_kien_bau_kep/vit_rut/1/vt_1.webp", "/phu_kien_bau_kep/vit_rut/1/vt_spec.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/phu_kien_bau_kep/vit_rut/1/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Đuôi chuột vít rút BT50-90°",
      cn: "BT50-90°螺旋尾夹"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: {
      vi: "Sử dụng cho bầu kẹp BT50",
      cn: "适用于BT50夹头"
    },
    descriptions: descriptionsDCVR,
    seri: "DCVR1",
    specs: "BT50-90°",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: detailsViewBAS,
    // extra data
    bevelAngle: "90°",
    accuracy: "0.005mm",
    specsList: ["BT50-90°"]
  },
  {
    category: "pPhuKienBauKep",
    routeName: "pPhuKienBauKepCT",
    isTypical: false,
    code: "DCVR2",
    images: [
      "/phu_kien_bau_kep/vit_rut/2/vt_1.webp",
      "/phu_kien_bau_kep/vit_rut/2/spec.webp",
      "/phu_kien_bau_kep/vit_rut/2/spec_2.webp",
      "/phu_kien_bau_kep/vit_rut/2/spec_3.webp",
      "/phu_kien_bau_kep/vit_rut/2/BT50-45.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/phu_kien_bau_kep/vit_rut/2/spec.webp"]
      }
    ],
    name: {
      vi: "Đuôi chuột vít rút BT30-45°, BT40-45°, BT50-45°",
      cn: "BT30-45°、BT40-45°、BT50-45°螺旋尾夹"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: {
      vi: "Sử dụng cho bầu kẹp BT30, BT40, BT50",
      cn: "适用于BT30、BT40、BT50夹头"
    },
    descriptions: descriptionsDCVR,
    seri: "DCVR2",
    specs: "BT30/40/50-45°",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: detailsViewBAS,
    // extra data
    bevelAngle: "45°",
    accuracy: "0.005mm",
    specsList: ["BT30-45°", "BT40-45°", "BT50-45°"]
  },
  {
    category: "pPhuKienBauKep",
    routeName: "pPhuKienBauKepCT",
    isTypical: true,
    code: "ACL",
    images: [
      "/phu_kien_bau_kep/ao_collet/vt_ER-A-UM.webp",
      "/phu_kien_bau_kep/ao_collet/ER-M.webp",
      "/phu_kien_bau_kep/ao_collet/ER-A.webp",
      "/phu_kien_bau_kep/ao_collet/ER-UM.webp",
      "/phu_kien_bau_kep/ao_collet/ER-UM-A-M.webp",
      "/phu_kien_bau_kep/ao_collet/ER-M-A-UM.webp",
      "/phu_kien_bau_kep/ao_collet/spec.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/phu_kien_bau_kep/ao_collet/spec.webp"]
      }
    ],
    name: {
      vi: "Áo Collet cho đầu kẹp dao",
      cn: "筒夹套筒（夹头套筒）"
    },
    prices: {
      current: 0,
      min: 67000,
      max: 170000
    },
    description: {
      vi: "Là bộ phận chụp bên ngoài để giữ collet kẹp dao trên động cơ spindle",
      cn: "是用于固定主轴电机上刀具夹头的外部套筒"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Được làm bằng thép, độ bền và độ cứng cao, kết cấu chắc chắn.",
            "Được mài chính xác sau khi xử lý nhiệt, bền và tiện lợi khi sử dụng.",
            "Khả năng kẹp chính xác và bền bỉ theo thời gian."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["采用钢材制造，具有高强度和硬度，结构坚固。", "热处理后精密研磨，耐用且使用方便。", "夹持精度高且持久稳定。"]
        }
      ]
    },
    seri: "ER A/M/UM",
    specs: "ER11-ER40",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["ER11A", "ER11M", "ER16A", "ER16M", "ER20A", "ER20M", "ER25UM", "ER32UM", "ER40UM"]
  },
  {
    category: "pPhuKienBauKep",
    routeName: "pPhuKienBauKepCT",
    isTypical: true,
    code: "TMBK",
    images: ["/phu_kien_bau_kep/ga_thao_lap/vt_1.webp", "/phu_kien_bau_kep/ga_thao_lap/2.jpg"],
    extraImages: null,
    name: {
      vi: "Đồ gá tháo lắp bầu kẹp BT30-BT40-BT50, đầu kẹp dao BT, HSK",
      cn: "BT30-BT40-BT50刀柄夹头拆装夹具、适用于BT和HSK刀柄"
    },
    prices: {
      current: 0,
      min: 1107000,
      max: 2214000
    },
    description: {
      vi: "Dùng để tháo, lắp đài dao hoặc vít rút với bầu kẹp dao kiểu chuôi BT, HSK",
      cn: "用于拆装BT和HSK刀柄的刀座或拉钉"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Đồ gá hỗ trợ kẹp chặt dụng cụ và đài dao vào bầu kẹp.",
            "Giúp vặn chặt vít rút, đảm bảo an toàn và độ chính xác lâu dài.",
            "Hoạt động độc lập, nhanh chóng, phù hợp cho trung tâm gia công."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["该工具夹具帮助将工具和刀座牢固地夹入刀柄。", "有助于紧固拉钉、确保安全性和长时间的精确度。", "独立操作、快速高效、适用于加工中心。"]
        }
      ]
    },
    seri: "TMBK",
    specs: "BT30-BT40-BT50",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["BT30", "BT40", "BT50"]
  }
];

export default items;

export const phuKienBauKepItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
