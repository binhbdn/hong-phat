import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pDoLuong",
    routeName: "pDoLuongItalyCT",
    isTypical: true,
    code: "DSQ_5510-0005",
    images: ["/do_luong/dasqua/01/5510_0005_1_vt.webp"],
    extraImages: [
      {
        title: null,
        subTitle: null,
        preview: false,
        options: "",
        data: ["/do_luong/dasqua/01/2.webp", "/do_luong/dasqua/01/3.webp"]
      }
    ],
    name: {
      vi: "Bộ đo đường kính trong phạm vi kết hợp",
      cn: "组合式内径测量仪"
    },
    prices: {
      current: 2485000,
      min: 0,
      max: 0
    },
    description: {
      vi: "Dải đo 35-160mm / 1.4-6“",
      cn: "测量范围35-160mm / 1.4-6“"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: ["Tay cầm cách nhiệt - chống trượt, que đo mạ crom.", "Đầu dò cacbua, dải đo rộng, dễ đọc."]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["隔热防滑手柄、镀铬测量杆。", "碳化物测头、测量范围宽、易读。"]
        }
      ]
    },
    seri: "DSQ",
    specs: "5510-0005",
    brand: "Dasqua",
    origin: ["it"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pDoLuong",
    routeName: "pDoLuongItalyCT",
    isTypical: true,
    code: "DSQ_4411-3210",
    images: ["/do_luong/dasqua/02/4411_3210_1_vt.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/do_luong/dasqua/02/spec.webp"]
      }
    ],
    name: {
      vi: "Bộ panme đo đường kính trong ba điểm 12-20mm",
      cn: "三点内径千分尺12-20mm"
    },
    prices: {
      current: 6206000,
      min: 0,
      max: 0
    },
    description: {
      vi: "Thích hợp để đo chính xác các lỗ mù, lỗ xuyên và lỗ sâu",
      cn: "适用于精确测量盲孔、通孔和深孔"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Đạt tiêu chuẩn ISO 3611 (DIN863).",
            "Được mạ crom cứng, được trang bị đồng hồ đo vòng hiệu đính.",
            "Que đo được xử lý nhiệt, được nối đất.",
            "Phạm vi đo lớn, mở rộng phạm vi đo bằng cách kết nối thanh nối dài và đầu dò với đầu vi sai."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: [
            "符合ISO 3611（DIN863）标准。",
            "硬铬电镀、配备校正环量规。",
            "测量杆经过热处理、已接地。",
            "测量范围大、通过连接延长杆和探头与差分头来扩展测量范围。"
          ]
        }
      ]
    },
    seri: "DSQ",
    specs: "4411-3210",
    brand: "Dasqua",
    origin: ["it"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pDoLuong",
    routeName: "pDoLuongItalyCT",
    isTypical: true,
    code: "DSQ_7122-0004",
    images: ["/do_luong/dasqua/03/1.webp"],
    extraImages: null,
    name: {
      vi: "Chân đế từ tính 60Kg",
      cn: "60公斤磁性表座"
    },
    prices: {
      current: 387000,
      min: 0,
      max: 0
    },
    description: {
      vi: "Thích hợp cho đồng hồ so, đồng hồ so kỹ thuật số và đồng hồ so đòn bẩy",
      cn: "适用于百分表、数显百分表和杠杆百分表"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Thiết kế rãnh chữ V ở dưới cùng của ghế đồng hồ thuận tiện cho việc lắp đặt trên các bộ phận cột.",
            "Có thể được định vị theo chiều ngang hoặc chiều dọc.",
            "Công tắc bật/tắt mượt mà và dễ sử dụng.",
            "Mạ crom, sử dụng nam châm chất lượng cao"
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["表座底部的V形槽便于安装在柱形部件上。", "可水平或垂直定位。", "开关平滑易用。", "镀铬处理、采用高品质磁铁"]
        }
      ]
    },
    seri: "DSQ",
    specs: "7122-0004",
    brand: "Dasqua",
    origin: ["it"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  }
  // TODO: add more 28 items
];

export default items;

export const doLuongItalyItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
