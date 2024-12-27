import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const detailsView = [[{ type: "tag", value: "specsList" }]];

const items = [
  {
    category: "pTaro",
    routeName: "pTaroCT",
    isTypical: true,
    code: "TARO_BR",
    images: ["/taro/ban_ren/1.webp", "/taro/ban_ren/2.webp", "/taro/ban_ren/spec.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/taro/ban_ren/spec.webp"]
      }
    ],
    name: {
      vi: "Bàn ren taro",
      cn: "攻丝板"
    },
    prices: {
      current: 0,
      min: 47000,
      max: 60000
    },
    description: {
      vi: "Kích thước từ M3 đến M8",
      cn: "尺寸从M3到M8"
    },
    descriptions: {
      vi: [
        {
          title: "operation",
          data: [
            "Kẹp chặt trục (thường để trục ở vị trí thẳng đứng). Lắp bàn ren vào tay quay cho chặt.",
            "Tay thuận cầm lấy bàn ren tại ổ kẹp của tay quay đặt vào đầu trục, ấn nhẹ bàn ren xuống đầu trục và quay theo chiều vặn vào của ren cho bàn ren cắt vào trục khoảng 1 - 2 ren.",
            "Dùng hai tay nắm lấy hai tay quay của bàn ren để thục hiện công việc cắt ren, quay theo chiều vặn vào khoảng 1 vòng tròn thì trả ngược ra hơn phần mới vừa cắt để bẻ phoi.",
            "Sau khi cắt xong cây ta rô trước, thay cây kế tiếp cắt lại cho lỗ ren đạt yêu cầu của mối ghép."
          ]
        }
      ],
      cn: [
        {
          title: "operation",
          data: [
            "夹紧轴（通常保持轴在垂直位置）。将板牙牢固地安装在扳手上。",
            "用惯用手握住扳手上的板牙夹持处，将其放在轴端，轻轻向下按压板牙并按螺纹旋入方向旋转，使板牙切入轴约1-2圈螺纹。",
            "用双手握住板牙的两个扳手柄进行攻丝，每旋转一整圈就反向退回刚切削的部分以断屑。",
            "完成第一把板牙后，更换下一把继续加工，直到螺纹孔达到连接要求。"
          ]
        }
      ]
    },
    seri: "TARO_BR",
    specs: "M3-M8",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["M3", "M4", "M5", "M6", "M8"]
  },
  {
    category: "pTaro",
    routeName: "pTaroCT",
    isTypical: true,
    code: "TARO_H2_HSS",
    images: ["/taro/H2_HSS/vt_1.webp", "/taro/H2_HSS/vt_spec.webp", "/taro/H2_HSS/vt_2.webp", "/taro/H2_HSS/vt_3.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=450",
        data: ["/taro/H2_HSS/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Mũi taro thẳng màu trắng H2 HSS",
      cn: "白色直槽丝锥 H2 HSS"
    },
    prices: {
      current: 0,
      min: 43000,
      max: 511000
    },
    description: {
      vi: "Kích thước từ M3 đến M30",
      cn: "尺寸从M3到M30"
    },
    descriptions: null, // checked
    seri: "TARO",
    specs: "M3-M30",
    brand: "Shaozi",
    origin: ["tw"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: [
      "M3-H2-HSS",
      "M8-H2-HSS",
      "M10-H2-HSS",
      "M12-H2-HSS",
      "M14-H2-HSS",
      "M16-H2-HSS",
      "M18-H2-HSS",
      "M20-H2-HSS",
      "M22-H2-HSS",
      "M24-H2-HSS",
      "M27-H2-HSS",
      "M30-H2-HSS"
    ]
  },
  {
    category: "pTaro",
    routeName: "pTaroCT",
    isTypical: false,
    code: "TARO_H2",
    images: ["/taro/H2/vt_1.webp", "/taro/H2/vt_spec.webp", "/taro/H2/vt_2.webp", "/taro/H2/vt_3.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=450",
        data: ["/taro/H2/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Mũi taro thẳng màu trắng H2 HSS - cán dài",
      cn: "白色直槽丝锥 H2 HSS - 长柄"
    },
    prices: {
      current: 0,
      min: 86000,
      max: 348000
    },
    description: {
      vi: "Kích thước từ M3 đến M16",
      cn: "尺寸从M3到M16"
    },
    descriptions: null, // checked
    seri: "TARO",
    specs: "M3-M16",
    brand: "Shaozi",
    origin: ["tw"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: [
      "M3*100 H2",
      "M4*100 H2",
      "M5*100 H2",
      "M6*100 H2",
      "M6*125 H2",
      "M8*100 H2",
      "M8*150 H2",
      "M10*130 H2",
      "M10*150 H2",
      "M12*160 H2",
      "M14*160 H2",
      "M16*160 H2"
    ]
  },
  {
    category: "pTaro",
    routeName: "pTaroCT",
    isTypical: true,
    code: "TARO_MDD",
    images: ["/taro/mui_dut_doan/vt_1a.webp", "/taro/mui_dut_doan/vt_2.webp", "/taro/mui_dut_doan/vt_spec.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/taro/mui_dut_doan/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Mũi taro đứt đoạn phủ titan",
      cn: "钛涂层断屑丝锥"
    },
    prices: {
      current: 0,
      min: 82000,
      max: 190000
    },
    description: {
      vi: "Kích thước từ M3 đến M12",
      cn: "尺寸从M3到M12"
    },
    descriptions: null, // checked
    seri: "TARO",
    specs: "M3-M12",
    brand: "Shaozi",
    origin: ["tw"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["M6*1.0-OH3-HSSE", "M8*1.25-OH3-HSSE", "M10*1.5-H2-HSS", "M12*1.75-H2-HSS", "M3*0.5-H2-HSS", "M4*0.7-H2-HSS", "M5*0.8-H2-HSS"]
  }
  // TODO: add more 3 items
];

export default items;

export const taroItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
