import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const detailsView = [[{ type: "tag", value: "specsList" }]];

const items = [
  {
    category: "pDuongKiemRen",
    routeName: "pDuongKiemRenCT",
    isTypical: true,
    code: "DKRN",
    images: ["/duong_kiem_ren/ngoai/vt_1.webp", "/duong_kiem_ren/ngoai/2.webp", "/duong_kiem_ren/ngoai/3.webp", "/duong_kiem_ren/ngoai/5.webp"],
    extraImages: null,
    name: {
      vi: "Dưỡng kiểm ren ngoài hệ met",
      cn: "外螺纹量规（公制）"
    },
    prices: {
      current: 0,
      min: 388000,
      max: 1515000
    },
    description: {
      vi: "Dùng để kiểm tra độ chính xác của ren sau khi tiện xong",
      cn: "用于检查车削后螺纹的精度"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: ["Được làm bằng loại thép đặc biệt cho độ bền cơ học cao và kéo dài tuổi thọ sử dụng.", "Được hiệu chuẩn 100%, đảm bảo chất lượng tốt."]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["采用特殊钢材制成，具有高机械强度和延长使用寿命。", "100%校准，确保良好品质。"]
        }
      ]
    },
    seri: "DKRN",
    specs: "T-Z M14-M30",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: [
      "M14*0.5 6g T",
      "M14*0.5 6g Z",
      "M14*0.75 6g T",
      "M14*0.75 6g Z",
      "M14*1 6g T",
      "M14*1 6g Z",

      "M15*1.5 6g Z",

      "M24*0.5 6g T",
      "M24*0.5 6g Z",
      "M24*0.75 6g T",
      "M24*0.75 6g Z",
      "M24*1 6g T",
      "M24*1 6g Z",
      "M24*1.5 6g T",
      "M24*1.5 6g Z",
      "M24*2 6g T",

      "M25*1.5 6g T",
      "M25*1.5 6g Z",
      "M25*2 6g T",
      "M25*2 6g Z",

      "M26*0.75 6g T",

      "M27*0.75 6g T",
      "M27*0.75 6g Z",
      "M27*1 6g T",
      "M27*1 6g Z",
      "M27*1.5 6g Z",

      "M28*0.5 6g T",
      "M28*0.5 6g Z",
      "M28*1 6g T",
      "M28*1 6g Z",
      "M28*1.25 6g T",
      "M28*1.25 6g Z",
      "M28*1.5 6g T",
      "M28*1.5 6g Z",

      "M29*1 6g T",
      "M29*1 6g Z",
      "M29*1.5 6g T",
      "M29*1.5 6g Z",

      "M30*0.5 6g T",
      "M30*0.5 6g Z",
      "M30*0.75 6g T",
      "M30*0.75 6g Z",
      "M30*1 6g T",
      "M30*1 6g Z",
      "M30*1.5 6g T",
      "M30*1.5 6g Z",
      "M30*2 6g T",
      "M30*2 6g Z",
      "M30*3 6g T",
      "M30*3 6g Z"
    ]
  },
  {
    category: "pDuongKiemRen",
    routeName: "pDuongKiemRenCT",
    isTypical: true,
    code: "DKRT",
    images: [
      "/duong_kiem_ren/trong/1.webp",
      "/duong_kiem_ren/trong/vt_2.webp",
      "/duong_kiem_ren/trong/vt_3.webp",
      "/duong_kiem_ren/trong/vt_4.webp",
      "/duong_kiem_ren/trong/vt_5.webp",
      "/duong_kiem_ren/trong/vt_6.webp"
    ],
    extraImages: null,
    name: {
      vi: "Dưỡng kiểm ren trong",
      cn: "内螺纹量规"
    },
    prices: {
      current: 0,
      min: 244000,
      max: 1010000
    },
    description: {
      vi: "Dùng để kiểm tra các bề mặt gia công ren, lỗ trục",
      cn: "用于检查螺纹加工表面和轴孔"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Được chế tạo với quy trình sản xuất và kiểm tra nghiêm ngặt.",
            "Sử dụng những máy đo tiểu chuẩn cao để kiểm tra sản phẩm trước khi xuất xưởng."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["采用严格的生产和检验流程制造。", "使用高标准测量设备在出厂前检验产品。"]
        }
      ]
    },
    seri: "DKRT",
    specs: "M19-M30",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: [
      "M19*1.5 6H",
      "M19*1.25 6H",
      "M19*1 6H",
      "M19*0.75 6H",
      "M19*0.5 6H",

      "M20*1.5 6H",
      "M20*0.75 6H",
      "M20*0.5 6H",

      "M22*2.5 6H",
      "M22*2 6H",
      "M22*1.5 6H",
      "M22*1 6H",
      "M22*0.75 6H",
      "M22*0.5 6H",

      "M23*1.5 6H",
      "M23*0.75 6H",
      "M23*0.5 6H",

      "M24*3 6H",
      "M24*1.5 6H",
      "M24*1.25 6H",

      "M25*1.5 6H",
      "M25*1.25 6H",
      "M25*1 6H",
      "M25*0.75 6H",
      "M25*0.5 6H",

      "M26*1 6H",
      "M26*0.75 6H",

      "M27*3 6H",
      "M27*2 6H",
      "M27*1.5 6H",
      "M27*1.25 6H",
      "M27*0.75 6H",
      "M27*0.5 6H",

      "M28*1.5 6H",
      "M28*1.25 6H",
      "M28*0.75 6H",
      "M28*0.5 6H",

      "M29*1.5 6H",
      "M29*1.25 6H",
      "M29*1 6H",

      "M30*3 6H",
      "M30*2 6H",
      "M30*1.25 6H",
      "M30*1 6H",
      "M30*0.5 6H"
    ]
  }
];

export default items;

export const duongKiemRenItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
