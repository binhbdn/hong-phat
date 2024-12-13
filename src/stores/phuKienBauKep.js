import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const detailsView = [[{ type: "tag", value: "specsList" }]];

const items = [
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
    isTypical: false,
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
  }
];

export default items;

export const phuKienBauKepItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
