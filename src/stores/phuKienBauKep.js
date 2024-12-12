import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pPhuKienBauKep",
    routeName: "pPhuKienBauKepCT",
    isTypical: true,
    code: "ABK",
    images: ["/phu_kien_bau_kep/ao_collet/vt_1.webp", "/phu_kien_bau_kep/ao_collet/spec.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/phu_kien_bau_kep/ao_collet/spec.webp"]
      }
    ],
    name: {
      vi: "Áo Collet cho đầu kẹp dao",
      cn: "筒夹套筒（夹头套筒）"
    },
    prices: {
      current: 0,
      min: 67000,
      max: 170000
    },
    description: {
      vi: "Là bộ phận chụp bên ngoài để giữ collet kẹp dao trên động cơ spindle",
      cn: "是用于固定主轴电机上刀具夹头的外部套筒"
    },
    descriptions: null,
    seri: "ER A-UM",
    specs: "ER16-ER40",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pPhuKienBauKep",
    routeName: "pPhuKienBauKepCT",
    isTypical: false,
    code: "CVM",
    images: ["/phu_kien_bau_kep/chia_mo/vt_1.webp"],
    extraImages: null,
    name: {
      vi: "Chìa vặn mở bầu kẹp collet",
      cn: "筒夹扳手"
    },
    prices: {
      current: 0,
      min: 67000,
      max: 123000
    },
    description: {
      vi: "Dùng để tháo kẹp bầu kẹp collet ER11, ER16, ER20, ER25, ER32, APU ( C25), C32",
      cn: "用于拆卸ER11、ER16、ER20、ER25、ER32、APU（C25）、C32筒夹"
    },
    descriptions: null,
    seri: "ER/APU/C32",
    specs: "",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  }
];

export default items;

export const phuKienBauKepItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
