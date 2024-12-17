import { listViewAMB } from "@/stores/listViewOptions";
import { descriptionBauKepDaoPhayNgon, descriptionBauKepDaoPhayNgonMuiKhoan, descriptionsBauKep, detailsViewBauKep } from "@/stores/bauKep/helper";

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
  },
  {
    category: "pBauKep",
    routeName: "pBauKepCT",
    isTypical: true,
    code: "BK_VT_BT_SC32",
    images: [
      "/bau_kep_van_tap/bt_sc32/vt_1.webp",
      "/bau_kep_van_tap/bt_sc32/spec.webp",
      "/bau_kep_van_tap/bt_sc32/spec_1.webp",
      "/bau_kep_van_tap/bt_sc32/2.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/bau_kep_van_tap/bt_sc32/spec.webp", "/bau_kep_van_tap/bt_sc32/spec_1.webp"]
      }
    ],
    name: {
      vi: "Bầu kẹp collet trụ Vân Tập BT50-SC32, BT40-SC32, BT30-SC32",
      cn: "刀柄 Vân Tập BT50-SC32、BT40-SC32、BT30-SC32"
    },
    prices: {
      current: 0,
      min: 1581000,
      max: 2478000
    },
    description: descriptionBauKepDaoPhayNgonMuiKhoan,
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Sử dụng những vòng bi để khóa collet nên sẽ có độ chính xác rất cao và kẹp chặt.",
            "Tốc độ gia công hoàn hảo, dễ dàng thao tác trong quá trình sử dụng."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["使用轴承锁定筒夹，具有高精度和牢固夹持力。", "加工速度完美，操作简单方便。"]
        }
      ]
    },
    seri: "BT50/40/30",
    specs: "SC32",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewAMB,
    detailsView: detailsViewBauKep,
    // extra data
    model: "SC32",
    material: "AlloySteel",
    hardness: "56HRC-60HRC",
    accuracy: "0.008mm",
    maxRPM: "1.000rpm",
    overallLength: "90, 105, 110",
    specsList: ["BT50-SC32-110", "BT40-SC32-105", "BT30-SC32-90"]
  }
  // TODO: add more items
];

export default bauKepVanTapItems;
