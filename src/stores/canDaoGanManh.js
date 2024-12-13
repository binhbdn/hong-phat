import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const descriptions1 = {
  vi: [
    {
      title: "description",
      data: ["Được làm từ thép hợp kim có độ cứng và độ bền cao.", "Tốc độ gia công hoàn hảo, dễ dàng thao tác trong quá trình sử dụng."]
    }
  ],
  cn: [
    {
      title: "description",
      data: ["由高强度合金钢制成，具有出色的硬度和耐用性。", "加工速度完美，操作简单方便。"]
    }
  ]
};

const detailsView = [[{ type: "tag", value: "specsList" }]];

const items = [
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: true,
    code: "MGEH",
    images: ["/can_dao_gan_manh/tien_ranh/MGEH/vt_1.webp", "/can_dao_gan_manh/tien_ranh/MGEH/spec.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/tien_ranh/MGEH/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao cắt MGEH",
      cn: "MGEH 车刀杆"
    },
    prices: {
      current: 0,
      min: 164000,
      max: 485000
    },
    description: {
      vi: "Sử dụng cho gia công tiện rãnh bên ngoài chi tiết",
      cn: "用于外圆沟槽车削加工"
    },
    descriptions: descriptions1,
    seri: "MGEH",
    specs: "R/L 12-25",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: [
      "MGEHR1212-3",
      "MGEHR1212-4",
      "MGEHL2020-3",
      "MGEHR2020-4",
      "MGEHR2020-5",
      "MGEHL2525-3",
      "MGEHR3232-3",
      "MGEHR2020-4-300",
      "MGEHR2525-3-300",
      "MGEHR2525-4-300",
      "MGEHR1616-3C",
      "MGEHR1616-4C",
      "MGEHR2020-3C",
      "MGEHR2020-2C",
      "MGEHR2525-3C",
      "MGEHR1616-4",
      "MGEHR3232-5",
      "MGEHR2525-4-T30",
      "MGEHR2525-3-T30"
    ]
  },
  {
    category: "pCanDaoGanManh",
    routeName: "pCanDaoGanManhCT",
    isTypical: false,
    code: "MCKN",
    images: ["/can_dao_gan_manh/moc_lo/vt_1.webp", "/can_dao_gan_manh/moc_lo/spec.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: true,
        options: "",
        data: ["/can_dao_gan_manh/moc_lo/spec.webp"]
      }
    ],
    name: {
      vi: "Cán dao móc lỗ MCKN",
      cn: "MCKN 内孔车刀杆"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: {
      vi: "Dùng để cắt gọt kim loại, gia công lỗ, tiện ren",
      cn: "用于金属切削、内孔加工和螺纹车削"
    },
    descriptions: descriptions1,
    seri: "MCKN",
    specs: "R/L 20-40",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["S20R-MCKNR/L12", "S25S-MCKNR/L12", "S32T-MCKNR/L12", "S40T-MCKNR/L12"]
  }
];

export default items;

export const canDaoGanManhItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
