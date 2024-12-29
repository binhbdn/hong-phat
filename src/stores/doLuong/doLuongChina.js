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
  "标准设计，轻巧方便使用。",
  "测量前需检查千分尺的准确性。",
  "不得在工件旋转时使用千分尺测量。",
  "不要测量粗糙、脏污的表面。测量前必须清洁工件。",
  "不要直接旋转副尺筒使测量头压在工件上。",
  "应避免从测量位置取下千分尺后再读取尺寸。",
  "需避免碰撞导致测量头变形。"
];

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
          data: ["可沿X-Y轴方向上下移动和旋转", "具有强大的磁力（ON/OFF），便于在机身各位置安装", "具有液压辅助功能，可固定轴向"]
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
          data: ["可沿X-Y轴方向上下移动和旋转", "具有强大的磁力（ON/OFF），便于在机身各位置安装"]
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
  }
  // TODO: add more 5 items
];

export default items;

export const doLuongChinaItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
