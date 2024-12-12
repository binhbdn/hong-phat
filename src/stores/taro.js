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
    isTypical: false,
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
    descriptions: null,
    seri: "TARO",
    specs: "M3-M12",
    brand: "Shaozi",
    origin: ["tw"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["M6*1.0-OH3-HSSE", "M8*1.25-OH3-HSSE", "M10*1.5-H2-HSS", "M12*1.75-H2-HSS", "M3*0.5-H2-HSS", "M4*0.7-H2-HSS", "M5*0.8-H2-HSS"]
  }
];

export default items;

export const taroItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
