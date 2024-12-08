import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pDauKepLapChuoiCon",
    routeName: "pDauKepLapChuoiConCT",
    isTypical: true,
    code: "CCAC",
    images: ["/dau_kep_lap_chuoi_con/chuoi_con_ao_con/vt_ao_con.webp"],
    extraImages: null,
    name: {
      vi: "Chuôi côn, áo côn",
      cn: "锥柄、锥套"
    },
    prices: {
      current: 0,
      min: 98000,
      max: 461000
    },
    description: {
      vi: "Dùng cho máy khoan bàn, máy khoan từ",
      cn: "适用于台式钻床、磁力钻床"
    },
    descriptions: null,
    seri: "Chuôi côn - Áo côn",
    specs: "",
    brand: "KON",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pDauKepLapChuoiCon",
    routeName: "pDauKepLapChuoiConCT",
    isTypical: true,
    code: "DKMK",
    images: ["/dau_kep_lap_chuoi_con/dau_kep_mui_khoan/b16_18_22.webp"],
    extraImages: null,
    name: {
      vi: "Đầu kẹp mũi khoan B16, B18, B22",
      cn: "钻夹头 B16、B18、B22"
    },
    prices: {
      current: 0,
      min: 515000,
      max: 958000
    },
    description: {
      vi: "Đầu măng ranh 3 chấu chất lượng cao",
      cn: "高品质三爪卡盘"
    },
    descriptions: null,
    seri: "DKMK",
    specs: "B16-B18-B22",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  }
];

export default items;

export const dauKepLapChuoiConItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
