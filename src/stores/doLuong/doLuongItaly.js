import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pDoLuong",
    routeName: "pDoLuongItalyCT",
    isTypical: true,
    code: "DSQ_5510-0005",
    images: ["/do_luong/dasqua/5510_0005_1_vt.webp"],
    extraImages: null,
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
    descriptions: null,
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
    isTypical: false,
    code: "DSQ_4411-3210",
    images: ["/do_luong/dasqua/4411_3210_1_vt.webp"],
    extraImages: null,
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
    descriptions: null,
    seri: "DSQ",
    specs: "4411-3210",
    brand: "Dasqua",
    origin: ["it"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  }
];

export default items;

export const doLuongItalyItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
