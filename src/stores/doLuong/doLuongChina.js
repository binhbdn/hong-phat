import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const extraImagesData1 = ["/do_luong/china/01/DCD_1_2.webp", "/do_luong/china/01/DCD_1_3.webp"];

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
  }
  // TODO: add more 10 items
];

export default items;

export const doLuongChinaItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
