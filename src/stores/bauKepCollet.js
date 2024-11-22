import { mapSearchProps } from "@/stores/search";

const items = [
  {
    category: "pBauKepCollet",
    routeName: "pBauKepColletCT",
    isTypical: true,
    code: "BK_SUKEN_BT40_ER",
    hardness: "58HRC-60HRC",
    name: {
      vi: "Bầu kẹp Suken BT40 loại ER16/20/25/32",
      en: "Collet chuck Suken BT40 ER16/20/25/32"
    },
    images: ["/bau_kep_suken/BT40_ER32_100L.webp"],
    prices: {
      current: 793000,
      min: 0,
      max: 0
    },
    description: {
      vi: "Dùng kẹp các loại mũi khoan, mũi doa, dao phay ngón và tapping các chi tiết trên máy phay",
      en: "Used to clamp drill bits, reamers, finger mills and tap parts on milling machines"
    },
    material: "AlloySteel",
    brand: "Suken",
    seri: "BT40",
    specifications: "ER16-32",
    runout: 0.003,
    maxRPM: 25000
  },
  {
    category: "pBauKepCollet",
    routeName: "pBauKepColletCT",
    isTypical: false,
    code: "BK_SUKEN_BT50_ER",
    hardness: "58HRC-60HRC",
    name: {
      vi: "Bầu kẹp Suken BT50 loại ER16/20/25/32/40",
      en: "Collet chuck Suken BT50 ER16/20/25/32/40"
    },
    images: ["/bau_kep_suken/BT50_ER40_100L.webp"],
    prices: {
      current: 0,
      min: 1790000,
      max: 1872000
    },
    description: {
      vi: "Dùng kẹp các loại mũi khoan, mũi doa, dao phay ngón và tapping các chi tiết trên máy phay",
      en: "Used to clamp drill bits, reamers, finger mills and tap parts on milling machines"
    },
    material: "AlloySteel",
    brand: "Suken",
    seri: "BT50",
    specifications: "ER16-40",
    runout: 0.003,
    maxRPM: 25000
  }
];

export default items;

export const bauKepColletItems = mapSearchProps(items);
