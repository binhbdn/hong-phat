import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const extraImagesData1 = ["/do_luong/china/01/DCD_1_2.webp", "/do_luong/china/01/DCD_1_3.webp"];

const descriptionPanme = {
  vi: "Dùng đo đường kính ngoài các đường dây kim loại, bề dày các tấm kim loại",
  cn: "用于测量金属线的外径和金属板的厚度"
};
const descriptionsPanmeVi = [
  "Thiết kế chuẩn, gọn nhẹ, dễ sử dụng.",
  "Trước khi đo cần kiểm tra xem panme có chính xác không.",
  "Không được dùng panme để đo khi vật đang quay.",
  "Không đo các mặt thô, bẩn. Phải lau sạch vật đo trước khi đo",
  "Không vặn trực tiếp ống vặn thước phụ để mỏ đo ép vào vật đo.",
  "Cần hạn chế việc lấy Panme ra khỏi vị trí đo mới đọc kích thước",
  "Cần tránh va chạm làm biến dạng mỏ neo."
];
const descriptionsPanmeCn = [
  "标准设计、轻巧方便使用。",
  "测量前需检查千分尺的准确性。",
  "不得在工件旋转时使用千分尺测量。",
  "不要测量粗糙、脏污的表面。测量前必须清洁工件。",
  "不要直接旋转副尺筒使测量头压在工件上。",
  "应避免从测量位置取下千分尺后再读取尺寸。",
  "需避免碰撞导致测量头变形。"
];

const descriptionsTCDT = {
  vi: [
    {
      title: "description",
      data: [
        "Chất liệu bằng thép hợp kim không gỉ, cho khả năng cầm nắm chắc chắn và độ bền cao.",
        "Màn hình LCD lớn sắc nét cho khả năng dễ đọc, tiết kiệm pin.",
        "Khả năng đo chính xác."
      ]
    }
  ],
  cn: [
    {
      title: "description",
      data: ["采用不锈合金钢材质、具有坚固的握持感和高耐用性。", "大尺寸LCD显示屏清晰易读、省电。", "测量精确。"]
    }
  ]
};

const detailsView = [[{ type: "tag", value: "specsList" }]];

const items = [
  {
    category: "pDoLuong",
    routeName: "pDoLuongChinaCT",
    isTypical: true,
    code: "DCD_1",
    images: ["/do_luong/china/01/DCD_1_1.webp", ...extraImagesData1],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=400",
        data: extraImagesData1
      }
    ],
    name: {
      vi: "Chân đế từ gắn đồng hồ so 150-390mm",
      cn: "磁性表座 150-390mm"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: {
      vi: "Dùng để cố định vị trí đồng hồ so",
      cn: "用于固定百分表位置"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Có thể di chuyển lên xuống, xoay dễ dàng theo các trục X-Y",
            "Có lực từ mạnh (ON/OFF), thuận tiện cho việc gá vào các vị trí trên thân máy",
            "Có trợ lực để xiết cố định các trục (loại thủy lực)"
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["可沿X-Y轴方向上下移动和旋转", "具有强大的磁力（ON/OFF）、便于在机身各位置安装", "具有液压辅助功能、可固定轴向"]
        }
      ]
    },
    seri: "DCD_1",
    specs: "150-390mm",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pDoLuong",
    routeName: "pDoLuongChinaCT",
    isTypical: false,
    code: "DCD_2",
    images: ["/do_luong/china/02/DCD_2_1.webp", "/do_luong/china/02/DCD_2_2_vt.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/do_luong/china/02/DCD_2_2_vt.webp"]
      }
    ],
    name: {
      vi: "Đế từ gắn đồng hồ so 160mm",
      cn: "磁性表座 160mm"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: {
      vi: "Dùng để cố định vị trí đồng hồ so",
      cn: "用于固定百分表位置"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: ["Có thể di chuyển lên xuống, xoay dễ dàng theo các trục X-Y", "Có lực từ mạnh (ON/OFF), thuận tiện cho việc gá vào các vị trí trên thân máy"]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["可沿X-Y轴方向上下移动和旋转", "具有强大的磁力（ON/OFF）、便于在机身各位置安装"]
        }
      ]
    },
    seri: "DCD_2",
    specs: "160mm",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pDoLuong",
    routeName: "pDoLuongChinaCT",
    isTypical: true,
    code: "DCD_3",
    images: ["/do_luong/china/03/vt_1.webp", "/do_luong/china/03/2.webp", "/do_luong/china/03/3.webp"],
    extraImages: null,
    name: {
      vi: "Đồng hồ cơ chống sốc 0.002mm",
      cn: "防震机械表 0.002mm"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: {
      vi: "Thiết kế độc đáo, trục chính và thân được làm từ thép không rỉ",
      cn: "独特设计、主轴和机身采用不锈钢制造"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: ["Độ chia 0.002mm.", "Tất cả các chi tiết của đồng hồ được sản xuất phù hợp với tiêu chuẩn DIN 878 và tiêu chuẩn DIN EN ISO 463."]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["分度值0.002mm。", "所有表件均按DIN 878和DIN EN ISO 463标准生产。"]
        }
      ]
    },
    seri: "DCD_3",
    specs: "0.002mm",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pDoLuong",
    routeName: "pDoLuongChinaCT",
    isTypical: false,
    code: "DCD_4",
    images: ["/do_luong/china/04/vt_1.webp", "/do_luong/china/04/2.webp", "/do_luong/china/04/3.webp"],
    extraImages: null,
    name: {
      vi: "Đồng hồ cơ tiêu chuẩn 0-1mm*0.001mm",
      cn: "标准机械表 0-1mm*0.001mm"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: {
      vi: "Thiết kế độc đáo, trục chính và thân được làm từ thép không rỉ",
      cn: "独特设计、主轴和机身采用不锈钢制造"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Khoảng đo 0-1mm, độ chia 0.001mm.",
            "Tất cả các chi tiết của đồng hồ được sản xuất phù hợp với tiêu chuẩn DIN 878 và tiêu chuẩn DIN EN ISO 463."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["测量范围0-1mm、分度值0.001mm。", "所有表件均按DIN 878和DIN EN ISO 463标准生产。"]
        }
      ]
    },
    seri: "DCD_4",
    specs: "0.001mm",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pDoLuong",
    routeName: "pDoLuongChinaCT",
    isTypical: true,
    code: "DCD_5",
    images: ["/do_luong/china/05/vt_1.webp", "/do_luong/china/05/2.webp", "/do_luong/china/05/3.webp"],
    extraImages: null,
    name: {
      vi: "Panme 0-25 0.01mm",
      cn: "外径千分尺 0-25 0.01mm"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: descriptionPanme,
    descriptions: {
      vi: [
        {
          title: "description",
          data: ["Khoảng đo 0-25mm, độ chia 0.01mm.", ...descriptionsPanmeVi]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["测量范围0-25mm、分度值0.01mm。", ...descriptionsPanmeCn]
        }
      ]
    },
    seri: "PANME",
    specs: "0-25 0.01mm",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pDoLuong",
    routeName: "pDoLuongChinaCT",
    isTypical: false,
    code: "DCD_6",
    images: ["/do_luong/china/06/1.webp", "/do_luong/china/06/2.webp"],
    extraImages: null,
    name: {
      vi: "Panme 75-100mm, 100-125mm",
      cn: "外径千分尺 75-100mm, 100-125mm"
    },
    prices: {
      current: 1328000,
      min: 0,
      max: 0
    },
    description: descriptionPanme,
    descriptions: {
      vi: [
        {
          title: "description",
          data: ["Khoảng đo 5-100mm, 100-125mm, độ chia 0.01mm.", ...descriptionsPanmeVi]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["测量范围75-100mm、100-125mm、分度值0.01mm。", ...descriptionsPanmeCn]
        }
      ]
    },
    seri: "PANME",
    specs: "75-100/100-125",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pDoLuong",
    routeName: "pDoLuongChinaCT",
    isTypical: true,
    code: "DCD_7",
    images: ["/do_luong/china/07/vt_1.webp", "/do_luong/china/07/2.webp", "/do_luong/china/07/3.webp"],
    extraImages: null,
    name: {
      vi: "Thước cặp cơ bằng thép",
      cn: "机械游标卡尺"
    },
    prices: {
      current: 0,
      min: 549000,
      max: 1116000
    },
    description: {
      vi: "Kích thước 0-150mm, 0-200mm, 0-300mm",
      cn: "尺寸范围 0-150mm、0-200mm、0-300mm"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Dùng đo đường kính ngoài, đường kính trong, độ sâu, chiều dài, chiều rộng và chiều cao.",
            "Chất liệu bằng thép không gỉ, được sản xuất phù hợp với tiêu chuẩn DIN862.",
            "Đo nhanh chóng, dễ thao tác và cho độ chính xác cao.",
            "Có thể đọc theo đơn vị mm hoặc inch."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["用于测量外径、内径、深度、长度、宽度和高度。", "采用不锈钢材质、按DIN862标准生产。", "测量快速、操作简便、精度高。", "可以用毫米或英寸读数。"]
        }
      ]
    },
    seri: "DCD_7",
    specs: "0-150/200/300",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["0-150", "0-200", "0-300"]
  },
  {
    category: "pDoLuong",
    routeName: "pDoLuongChinaCT",
    isTypical: true,
    code: "DCD_8",
    images: ["/do_luong/china/08/vt_1.webp", "/do_luong/china/08/2.webp", "/do_luong/china/08/3.webp"],
    extraImages: null,
    name: {
      vi: "Thước cặp điện tử",
      cn: "数显卡尺"
    },
    prices: {
      current: 0,
      min: 999000,
      max: 1535000
    },
    description: {
      vi: "Kích thước 0-150mm, 0-200mm, 0-300mm",
      cn: "尺寸范围 0-150mm、0-200mm、0-300mm"
    },
    descriptions: descriptionsTCDT,
    seri: "DCD_8",
    specs: "0-150/200/300",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["0-150", "0-200", "0-300"]
  },
  {
    category: "pDoLuong",
    routeName: "pDoLuongChinaCT",
    isTypical: false,
    code: "DCD_9",
    images: ["/do_luong/china/09/vt_1.webp"],
    extraImages: null,
    name: {
      vi: "Thước cặp điện tử IP54",
      cn: "IP54数显卡尺"
    },
    prices: {
      current: 0,
      min: 1756000,
      max: 1800000
    },
    description: {
      vi: "Kích thước 0-200mm, 0-300mm",
      cn: "尺寸范围 0-200mm、0-300mm"
    },
    descriptions: descriptionsTCDT,
    seri: "DCD_9",
    specs: "0-200/300",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["0-200", "0-300"]
  },
  {
    category: "pDoLuong",
    routeName: "pDoLuongChinaCT",
    isTypical: true,
    code: "DCD_10",
    images: ["/do_luong/china/10/vt_1.webp", "/do_luong/china/10/2.webp"],
    extraImages: null,
    name: {
      vi: "Thước đo góc 0-180°",
      cn: "量角器 0-180°"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: {
      vi: "Phù hợp đo độ nghiêng, đo độ dốc",
      cn: "适用于测量倾斜角度和坡度"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Thước được chế tạo bằng thép hợp kim cứng, có độ bền và tuổi thọ cao.",
            "Thước được gia công tỉ mỉ để giảm thiểu dung sai khi đo.",
            "Ốc cố định được thiết kế để không gây lồi ở mặt sau.",
            "Thước có kích thước nhỏ gọn, thuận tiện thao tác, dễ dàng mang theo và cất giữ."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: [
            "采用硬合金钢制造、具有高耐用性和长使用寿命。",
            "精密加工以最小化测量误差。",
            "固定螺丝设计不会在背面突出。",
            "尺寸小巧、操作方便、易于携带和存放。"
          ]
        }
      ]
    },
    seri: "DCD_10",
    specs: "0-180°",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pDoLuong",
    routeName: "pDoLuongChinaCT",
    isTypical: true,
    code: "DCD_11",
    images: ["/do_luong/china/11/1.webp", "/do_luong/china/11/2.webp"],
    extraImages: null,
    name: {
      vi: "Vòi tưới nguội gắn đế từ 12.7mm",
      cn: "磁性底座冷却喷嘴 12.7mm"
    },
    prices: {
      current: 736000,
      min: 0,
      max: 0
    },
    description: {
      vi: "Chuyên dùng cho máy cắt CNC với hai đường vào dầu và khí độc lập, đáp ứng chế độ tưới dạng xối và phun sương.",
      cn: "专用于CNC切削机床、具有独立的油路和气路、可满足喷淋和喷雾冷却模式。"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Công dụng: dòng nước tưới nguội làm hạ nhiệt độ phôi và lưỡi cắt sinh ra trong quá trình gia công, giúp cho dao và phôi được làm mát kịp thời tránh gây hư hỏng.",
            "Chiều dài ống tưới nguội 200mm.",
            "Có van gạt khóa đường hơi.",
            "Sử dụng với nước, hơi nước hoặc chất làm mát khác.",
            "Áp suất hoạt động khí: thường nhỏ hơn 8 Bar",
            "Áp suất tối đa: thường nhỏ hơn 12 Bar",
            "Nhiệt độ hoạt động: 20-60°C",
            "Nhiệt độ tối đa: 100°C"
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: [
            "用途：冷却液流可降低加工过程中工件和刀具产生的温度、及时冷却刀具和工件、避免损坏。",
            "冷却管长度200mm。",
            "配备气路控制阀。",
            "可使用水、蒸汽或其他冷却剂。",
            "气压工作压力：通常小于8巴",
            "最大压力：通常小于12巴",
            "工作温度：20-60°C",
            "最高温度：100°C"
          ]
        }
      ]
    },
    seri: "DCD_11",
    specs: "12.7mm",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pDoLuong",
    routeName: "pDoLuongChinaCT",
    isTypical: false,
    code: "DCD_12",
    images: ["/do_luong/china/12/1.webp"],
    extraImages: null,
    name: {
      vi: "Vòi tưới nguội làm mát",
      cn: "冷却喷嘴"
    },
    prices: {
      current: 0,
      min: 84000,
      max: 736000
    },
    description: {
      vi: "Chuyên dùng cho máy cắt CNC với hai đường vào dầu và khí độc lập, đáp ứng chế độ tưới dạng xối và phun sương.",
      cn: "专用于CNC切削机床、具有独立的油路和气路、可满足喷淋和喷雾冷却模式。"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Công dụng: dòng nước tưới nguội làm hạ nhiệt độ phôi và lưỡi cắt sinh ra trong quá trình gia công, giúp cho dao và phôi được làm mát kịp thời tránh gây hư hỏng.",
            "Vòi làm bằng nhựa, dài 300mm, đường kính trong của đầu vòi là 2mm.",
            "Có 2 đầu nối nhanh: cấp khí (D8mm) và cấp dầu (D4mm).",
            "Có 2 van tiết lưu: 1 van điều chỉnh lượng dầu phun và 1 van điều chỉnh tốc độ phun."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: [
            "用途：冷却液流可降低加工过程中工件和刀具产生的温度、及时冷却刀具和工件、避免损坏。",
            "喷嘴采用塑料材质、长300mm、喷嘴内径2mm。",
            "配备2个快速接头：供气（D8mm）和供油（D4mm）。",
            "配备2个节流阀：1个用于调节喷油量、1个用于调节喷射速度。"
          ]
        }
      ]
    },
    seri: "DCD_12",
    specs: "12.7mm",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  }
];

export default items;

export const doLuongChinaItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
