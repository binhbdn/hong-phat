import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const detailsView = [[{ type: "tag", value: "specsList" }]];
const detailsView1 = [["bladeDiameter", "length"], [{ type: "tag", value: "specsList" }]];

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
    isTypical: true,
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
          data: ["Lưỡi cắt phủ hợp kim.", "Khoan sắc, nhanh, mịn, độ bền cao.", "Cứng, giòn nên dễ gãy nếu khoan không cẩn thận, đúng cách."]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["刀刃涂有合金。", "钻头锋利、快速、光滑，且耐用性高。", "材质硬且脆，如不小心或操作不当易折断。"]
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
  },
  {
    category: "pGiaCongLo",
    routeName: "pGiaCongLoCT",
    isTypical: true,
    code: "MKCC",
    images: [
      "/gia_cong_lo/mui_khoan_chuoi_con/vt_1.webp",
      "/gia_cong_lo/mui_khoan_chuoi_con/vt_spec.webp",
      "/gia_cong_lo/mui_khoan_chuoi_con/2.webp",
      "/gia_cong_lo/mui_khoan_chuoi_con/3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/gia_cong_lo/mui_khoan_chuoi_con/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Mũi khoan chuôi côn",
      cn: "锥柄钻头"
    },
    prices: {
      current: 0,
      min: 28000,
      max: 67000
    },
    description: {
      vi: "Phù hợp cho các loại máy bàn , máy CNC, máy Khoan trung tâm và các máy trong cơ khí gia công",
      cn: "适用于台式钻床、数控机床、中心钻机及机械加工中的各种机床"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Vật liệu: Thép gió HSS.",
            "Đuôi mũi khoan được thiết kế hình trụ chóp, dẹp đầu tạo khấc gài chắc chắn.",
            "Có thể khoan được nhiều vật liệu với độ chính xác cao."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["材质：高速钢 HSS。", "钻头尾部设计为圆锥形、扁平端部带有牢固的卡槽。", "能够高精度钻孔多种材料。"]
        }
      ]
    },
    seri: "MKCC",
    specs: "D14-D50",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: detailsView1,
    // extra data
    bladeDiameter: "14-50mm",
    length: "189-369mm",
    specsList: [
      "D14",
      "D14.5",
      "D15",
      "D15.5",
      "D16",
      "D16.5",
      "D17",
      "D17.5",
      "D18",
      "D18.5",
      "D19",
      "D19.5",
      "D20",
      "D20.5",
      "D21",
      "D21.5",
      "D22",
      "D22.5",
      "D23",
      "D23.5",
      "D24",
      "D24.5",
      "D25",
      "D25.5",
      "D26",
      "D26.5",
      "D27",
      "D27.5",
      "D28",
      "D28.5",
      "D29",
      "D29.5",
      "D30",
      "D30.5",
      "D31",
      "D32",
      "D33",
      "D34",
      "D35",
      "D36",
      "D37",
      "D38",
      "D39",
      "D40",
      "D41",
      "D42",
      "D43",
      "D44",
      "D45",
      "D46",
      "D47",
      "D48",
      "D49",
      "D50"
    ]
  },
  {
    category: "pGiaCongLo",
    routeName: "pGiaCongLoCT",
    isTypical: true,
    code: "MKDT",
    images: [
      "/gia_cong_lo/mui_khoan_dinh_tam/vt_1.webp",
      "/gia_cong_lo/mui_khoan_dinh_tam/vt_spec_1.webp",
      "/gia_cong_lo/mui_khoan_dinh_tam/vt_spec_2.webp",
      "/gia_cong_lo/mui_khoan_dinh_tam/2.webp",
      "/gia_cong_lo/mui_khoan_dinh_tam/3.webp",
      "/gia_cong_lo/mui_khoan_dinh_tam/vt_4.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/gia_cong_lo/mui_khoan_dinh_tam/vt_spec_1.webp", "/gia_cong_lo/mui_khoan_dinh_tam/vt_spec_2.webp"]
      }
    ],
    name: {
      vi: "Mũi khoan định tâm 60°",
      cn: "60°中心钻头"
    },
    prices: {
      current: 0,
      min: 18000,
      max: 1640000
    },
    description: {
      vi: "Là phụ kiện không thể thiếu khi sử dụng máy tiện với vai tròn, dùng khoan lỗ chống tâm hoặc tạo lỗ khoan mồi",
      cn: "是使用带圆角车床时不可或缺的配件、用于钻孔定位或打预孔"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: ["Vật liệu: Thép gió HSS.", "Được thiết kế với góc cắt phù hợp, độ bền cao.", "Có thể khoan được nhiều vật liệu với độ chính xác cao."]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["材质：高速钢 HSS。", "设计有适当的切削角度、具有较高的耐用性。", "能够高精度钻孔多种材料。"]
        }
      ]
    },
    seri: "MKDT",
    specs: "A/B D1-D6",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: detailsView1,
    // extra data
    bladeDiameter: "1-6mm",
    length: "35-68mm",
    specsList: [
      "YELLOW A1",
      "YELLOW A1.5",
      "YELLOW A2",
      "YELLOW A2.5",
      "YELLOW A3",
      "YELLOW A3.15",
      "YELLOW A3.5",
      "YELLOW A4",
      "YELLOW A5",
      "YELLOW A6",

      "WHITE A1",
      "WHITE A1.5",
      "WHITE A2",
      "WHITE A2.5",
      "WHITE A3",
      "WHITE A3.15",
      "WHITE A4",
      "WHITE A5",
      "WHITE A6",

      "WHITE B1",
      "WHITE B1.5",
      "WHITE B2",
      "WHITE B2.5",
      "WHITE B3",
      "WHITE B3.15",
      "WHITE B4"
    ]
  },
  {
    category: "pGiaCongLo",
    routeName: "pGiaCongLoCT",
    isTypical: true,
    code: "MKTG",
    images: ["/gia_cong_lo/mui_khoan_thep_gio/vt_1.webp", "/gia_cong_lo/mui_khoan_thep_gio/vt_spec.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/gia_cong_lo/mui_khoan_thep_gio/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Mũi khoan thép gió phủ titan độ cứng cao",
      cn: "高硬度钛涂层高速钢钻头"
    },
    prices: {
      current: 0,
      min: 13000,
      max: 347000
    },
    description: {
      vi: "Được ứng dụng rộng rãi trong gia công kim loại, các loại gỗ và nhiều loại vật liệu khác",
      cn: "广泛应用于金属加工、各种木材及其他多种材料的加工"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Vật liệu: Thép gió HSS phủ titan.",
            "Lớp phủ titan được sử dụng phổ biến nhất làm tăng tuổi thọ vật liệu lên đến 300-400% so với loại không phủ, giúp tăng độ chịu nhiệt cho vật liệu.",
            "Tối ưu về khả năng chống mài mòn, độ dẻo dai và khả năng chống sứt mẻ, cho phép gia công hiệu quả cao."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: [
            "材料：钛涂层高速钢 HSS。",
            "钛涂层是最常用的涂层之一、可使材料的使用寿命提高300-400%、并增强材料的耐高温性能。",
            "具有出色的抗磨损性、韧性和抗裂性能、确保高效加工。"
          ]
        }
      ]
    },
    seri: "MKTG",
    specs: "D3.2-D8.5",
    brand: "JEFF/HSSE",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: detailsView1,
    // extra data
    bladeDiameter: "3.2-8.5mm",
    length: "64-117mm",
    specsList: [
      "D3.2-HSSE",
      "D3.3-HSSE",
      "D4.2-HSSE",
      "D4.3-HSSE",
      "D4.5-HSSE",
      "D8.5-HSSE",
      "D3.2-JEFF",
      "D3.3-JEFF",
      "D4.2-JEFF",
      "D4.3-JEFF",
      "D4.5-JEFF",
      "D5.5-JEFF",
      "D8.5-JEFF"
    ]
  }
];

export default items;

export const giaCongLoItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
