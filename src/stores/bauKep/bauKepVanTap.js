import { listViewAMB } from "@/stores/listViewOptions";
import { descriptionBauKepDaoPhayNgon, descriptionsBauKep, detailsViewBauKep } from "@/stores/bauKep/helper";

const bauKepVanTapItems = [
  // 09 bầu kẹp Vân Tập - Thứ tự theo mức độ phổ biến/phân loại:
  {
    category: "pBauKep",
    routeName: "pBauKepCT",
    isTypical: true,
    code: "BK_VT_BT50_ER",
    images: ["/bau_kep_van_tap/bt50_er/vt_1.webp", "/bau_kep_van_tap/bt50_er/spec.webp", "/bau_kep_van_tap/bt_er/spec_1.webp", "/bau_kep_van_tap/bt_er/2.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/bau_kep_van_tap/bt50_er/spec.webp", "/bau_kep_van_tap/bt_er/spec_1.webp"]
      }
    ],
    name: {
      vi: "Bầu kẹp Vân Tập BT50 loại ER16/20/25/32/40",
      cn: "刀柄 Vân Tập BT50 ER16/20/25/32/40"
    },
    prices: {
      current: 970000,
      min: 0,
      max: 0
    },
    description: descriptionBauKepDaoPhayNgon,
    descriptions: descriptionsBauKep,
    seri: "BT50",
    specs: "ER16/20/25/32/40",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewAMB,
    detailsView: detailsViewBauKep,
    // extra data
    model: "ER16/20/25/32/40",
    material: "AlloySteel",
    hardness: "56HRC",
    accuracy: "0.005mm",
    maxRPM: "1.000rpm",
    overallLength: "100, 150, 200",
    specsList: [
      "BT50-ER16-100",
      "BT50-ER16-150",
      "BT50-ER20-100",
      "BT50-ER20-150",
      "BT50-ER20-200",
      "BT50-ER25-100",
      "BT50-ER25-150",
      "BT50-ER32-100",
      "BT50-ER32-150",
      "BT50-ER32-200",
      "BT50-ER40-100",
      "BT50-ER40-150"
    ]
  },
  {
    category: "pBauKep",
    routeName: "pBauKepCT",
    isTypical: false,
    code: "BK_VT_BT40_ER",
    images: [
      "/bau_kep_van_tap/bt40_er/vt_1.webp",
      "/bau_kep_van_tap/bt_er/spec.webp",
      "/bau_kep_van_tap/bt_er/spec_1.webp",
      "/bau_kep_van_tap/bt_er/2.webp",
      "/bau_kep_van_tap/bt40_er/BT40-ER16-70.webp",
      "/bau_kep_van_tap/bt40_er/BT40-ER20-70.webp",
      "/bau_kep_van_tap/bt40_er/BT40-ER25-70.webp",
      "/bau_kep_van_tap/bt40_er/BT40-ER32-70.webp",
      "/bau_kep_van_tap/bt40_er/BT40-ER16-100.webp",
      "/bau_kep_van_tap/bt40_er/BT40-ER20-100.webp",
      "/bau_kep_van_tap/bt40_er/BT40-ER25-100.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/bau_kep_van_tap/bt_er/spec.webp", "/bau_kep_van_tap/bt_er/spec_1.webp"]
      }
    ],
    name: {
      vi: "Bầu kẹp Vân Tập BT40 loại ER16/20/25/32/40",
      cn: "刀柄 Vân Tập BT40 ER16/20/25/32/40"
    },
    prices: {
      current: 370000,
      min: 0,
      max: 0
    },
    description: descriptionBauKepDaoPhayNgon,
    descriptions: descriptionsBauKep,
    seri: "BT40",
    specs: "ER16/20/25/32/40",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewAMB,
    detailsView: detailsViewBauKep,
    // extra data
    model: "ER16/20/25/32/40",
    material: "AlloySteel",
    hardness: "56HRC",
    accuracy: "0.005mm",
    maxRPM: "1.000rpm",
    overallLength: "70, 80, 100",
    specsList: [
      "BT40-ER16-70",
      "BT40-ER16-100",
      "BT40-ER20-70",
      "BT40-ER20-100",
      "BT40-ER25-70",
      "BT40-ER25-100",
      "BT40-ER32-70",
      "BT40-ER32-100",
      "BT40-ER40-80",
      "BT40-ER40-100"
    ]
  },
  {
    category: "pBauKep",
    routeName: "pBauKepCT",
    isTypical: false,
    code: "BK_VT_BT30_ER",
    images: [
      "/bau_kep_van_tap/bt30_er/vt_1.webp",
      "/bau_kep_van_tap/bt_er/spec.webp",
      "/bau_kep_van_tap/bt_er/spec_1.webp",
      "/bau_kep_van_tap/bt_er/2.webp",
      "/bau_kep_van_tap/bt30_er/BT30-ER16-70.webp",
      "/bau_kep_van_tap/bt30_er/BT30-ER20-70.webp",
      "/bau_kep_van_tap/bt30_er/BT30-ER25-70.webp",
      "/bau_kep_van_tap/bt30_er/BT30-ER16-100.webp",
      "/bau_kep_van_tap/bt30_er/BT30-ER20-100.webp",
      "/bau_kep_van_tap/bt30_er/BT30-ER25-100.webp",
      "/bau_kep_van_tap/bt30_er/BT30-ER32-100.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/bau_kep_van_tap/bt_er/spec.webp", "/bau_kep_van_tap/bt_er/spec_1.webp"]
      }
    ],
    name: {
      vi: "Bầu kẹp Vân Tập BT30 loại ER16/20/25/32",
      cn: "刀柄 Vân Tập BT30 ER16/20/25/32"
    },
    prices: {
      current: 310000,
      min: 0,
      max: 0
    },
    description: descriptionBauKepDaoPhayNgon,
    descriptions: descriptionsBauKep,
    seri: "BT30",
    specs: "ER16/20/25/32",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewAMB,
    detailsView: detailsViewBauKep,
    // extra data
    model: "ER16/20/25/32",
    material: "AlloySteel",
    hardness: "56HRC",
    accuracy: "0.005mm",
    maxRPM: "1.000rpm",
    overallLength: "70, 100",
    specsList: ["BT30-ER16-70", "BT30-ER16-100", "BT30-ER20-70", "BT30-ER20-100", "BT30-ER25-70", "BT30-ER25-100", "BT30-ER32-70", "BT30-ER32-100"]
  }
  // TODO: add more items
];

export default bauKepVanTapItems;
