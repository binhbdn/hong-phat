import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const detailsView = [[{ type: "tag", value: "specsList" }]];
const detailsView1 = [["bladeDiameter","length"],[{ type: "tag", value: "specsList" }]];

const items = [
  {
    category: "pGiaCongLo",
    routeName: "pGiaCongLoCT",
    isTypical: true,
    code: "MCTCD",
    images: ["/gia_cong_lo/mui_chong_tam_co_dinh/vt_1.webp", "/gia_cong_lo/mui_chong_tam_co_dinh/vt_spec.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/gia_cong_lo/mui_chong_tam_co_dinh/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Mũi chống tâm cố định",
      cn: "固定顶尖"
    },
    prices: {
      current: 0,
      min: 231000,
      max: 886000
    },
    description: {
      vi: "Dùng cho máy tiện",
      cn: "用于车床"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Mũi chống tâm cố định: không quay cùng chi tiết.",
            "Thông thường được sử dụng khi cắt với tốc độ thấp (n < 120 vòng/phút) vì ma sát làm chúng bị nóng và mũi mòn nhanh."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["固定顶尖：不随工件一起旋转。", "通常用于低速切削（n < 120转/分钟），因为摩擦会导致其发热和顶尖快速磨损。"]
        }
      ]
    },
    seri: "MCTCD",
    specs: "MT2-MT5",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["MT2", "MT3", "MT4", "MT5"]
  },
  {
    category: "pGiaCongLo",
    routeName: "pGiaCongLoCT",
    isTypical: false,
    code: "MCTQ",
    images: ["/gia_cong_lo/mui_chong_tam_quay/vt_1.webp", "/gia_cong_lo/mui_chong_tam_quay/vt_2.webp"],
    extraImages: null,
    name: {
      vi: "Mũi chống tâm quay",
      cn: "旋转顶尖"
    },
    prices: {
      current: 0,
      min: 1138000,
      max: 1944000
    },
    description: {
      vi: "Được dùng khi cắt với tốc độ cao",
      cn: "用于高速切削"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Mũi chống tâm quay: quay cùng chi tiết khi gia công.",
            "Được dùng khi cắt với tốc độ cao, khi tải trọng cắt lớn và phải thay bi cầu bằng bi đũa."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["旋转顶尖：加工时随工件一起旋转。", "用于高速切削、大切削负荷时，需要将球轴承更换为滚针轴承。"]
        }
      ]
    },
    seri: "MCTQ",
    specs: "MT3-MT5",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["MT3", "MT4", "MT5"]
  },
  {
    category: "pGiaCongLo",
    routeName: "pGiaCongLoCT",
    isTypical: true,
    code: "MDH7",
    images: ["/gia_cong_lo/mui_doa/vt_1.webp", "/gia_cong_lo/mui_doa/vt_spec.webp", "/gia_cong_lo/mui_doa/vt_2.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "?w=450",
        data: ["/gia_cong_lo/mui_doa/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Mũi doa 3H7-10H7",
      cn: "3H7-10H7铰刀"
    },
    prices: {
      current: 0,
      min: 56000,
      max: 128000
    },
    description: {
      vi: "Dùng để dưỡng trục thử lỗ H7",
      cn: "用于检验H7孔的轴规"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Mũi doa là mũi khoan lỗ để gia công các lỗ ghép chính xác đến IT5 với độ bóng bề mặt cao.",
            "Dùng cho máy khoan, máy phay, máy doa",
            "Được chế tạo bằng thép gió, có lưỡi cắt làm bằng hợp kim cứng hoặc kim cương đa tinh thể."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["铰刀是一种用于加工高精度到IT5的配合孔的钻头、表面光洁度高。", "适用于钻床、铣床、铰床。", "由高速钢制成，切削刃由硬质合金或多晶金刚石制成。"]
        }
      ]
    },
    seri: "MDH7",
    specs: "3H7-10H7",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["3H7", "4H7", "5H7", "6H7", "7H7", "8H7", "9H7", "10H7"]
  },
  {
    category: "pGiaCongLo",
    routeName: "pGiaCongLoCT",
    isTypical: true,
    code: "MKT",
    images: [
      "/gia_cong_lo/mui_khoan_trang/vt_1.webp",
      "/gia_cong_lo/mui_khoan_trang/vt_spec.webp",
      "/gia_cong_lo/mui_khoan_trang/vt_2.webp",
      "/gia_cong_lo/mui_khoan_trang/vt_3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/gia_cong_lo/mui_khoan_trang/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Mũi khoan bo mạch CNC hãng Union Tool",
      cn: "Union Tool品牌CNC电路板钻头"
    },
    prices: {
      current: 0,
      min: 280000,
      max: 730000
    },
    description: {
      vi: "Quy cách đóng gói: 10 mũi/1 hộp",
      cn: "包装规格：10支/盒"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Lưỡi cắt phủ hợp kim.",
            "Khoan sắc, nhanh, mịn, độ bền cao.",
            "Cứng, giòn nên dễ gãy nếu khoan không cẩn thận, đúng cách.",
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: [
            "刀刃涂有合金。",
            "钻头锋利、快速、光滑，且耐用性高。",
            "材质硬且脆，如不小心或操作不当易折断。",
          ]
        }
      ]
    },
    seri: "MKT",
    specs: "D0.2-D6.0",
    brand: "Union Tool",
    origin: ["jp"],
    listView: listViewCBO,
    detailsView: detailsView1,
    // extra data
    bladeDiameter: "0.2-6.0mm",
    length: "38mm",
    specsList: ["D0.2-D0.9", "D1.0-D1.9", "D2.0-D2.9", "D3.0-D3.9", "D4.0-D4.9", "D5.0-D5.9", "D6.0"]
  }
  // TODO: add more 3 items
];

export default items;

export const giaCongLoItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
