import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pDuongKiemRen",
    routeName: "pDuongKiemRenCT",
    isTypical: true,
    code: "DKRN",
    images: ["/duong_kiem_ren/ngoai/vt_1.webp"],
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
    descriptions: null,
    seri: "DKRN",
    specs: "T-Z M14-M30",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pDuongKiemRen",
    routeName: "pDuongKiemRenCT",
    isTypical: true,
    code: "DKRT",
    images: ["/duong_kiem_ren/trong/1.webp"],
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
    descriptions: null,
    seri: "DKRT",
    specs: "M19-M30",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  }
];

export default items;

export const duongKiemRenItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
