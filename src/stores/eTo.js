import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const eToDescription = {
  vi: "Ê tô kẹp chính xác máy mài",
  cn: "用于磨床的精密虎钳"
};

const eToDescriptions = {
  vi: [
    {
      title: "application",
      data: ["Được sử dụng trong gia công cần độ chính xác cao, kẹp chi tiết nhỏ.", "Được sử dụng chủ yếu trên máy mài, máy EDM, và cả trên máy phay…"]
    },
    {
      title: "description",
      data: [
        "Được làm từ vật liệu nhập khẩu có Độ cứng cao 52HRC-56HRC và được mài chính xác cao.",
        "Độ vuông và độ song song của là: ±0.005/100mm.",
        "Có độ bền cao, giữ được độ chính xác lâu.",
        "Được kẹp lên bàn máy bằng mỏ kẹp, lực hút bàn từ,… Đôi khi kết hợp được kẹp trong các ê tô lớn hơn"
      ]
    }
  ],
  cn: [
    {
      title: "application",
      data: ["用于高精度加工和夹持小型工件。", "主要用于磨床、电火花机床和铣床等。"]
    },
    {
      title: "description",
      data: [
        "采用进口材料制造，硬度高达52HRC-56HRC，具有高精度研磨。",
        "垂直度和平行度：±0.005/100mm。",
        "具有高耐久性，长期保持精度。",
        "可通过夹具、磁力吸盘等固定在机床工作台上，有时也可以装在更大的虎钳中。"
      ]
    }
  ]
};

const items = [
  {
    category: "pETo",
    routeName: "pEToCT",
    isTypical: true,
    code: "QGG",
    images: ["/e_to_mam_cap/ETO_QGG_QKG_50_150.webp", "/e_to_mam_cap/ETO_QGG_spec.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: {
          vi: "Mã sản phẩm: QGG50, QGG63, QGG73, QGG80, QGG88, QGG100, QGG125, QGG150",
          cn: "产品代码: QGG50, QGG63, QGG73, QGG80, QGG88, QGG100, QGG125, QGG150"
        },
        data: ["/e_to_mam_cap/ETO_QGG_spec.webp"]
      }
    ],
    name: {
      vi: "Ê tô máy mài QGG",
      cn: "QGG 磨床虎钳"
    },
    prices: {
      current: 0,
      min: 1089000,
      max: 8301000
    },
    description: eToDescription,
    descriptions: eToDescriptions,
    seri: "QGG",
    specs: "50-150",
    brand: "Vân Tập",
    origin: "cn",
    listView: listViewCBO
    // extra data
  },
  {
    category: "pETo",
    routeName: "pEToCT",
    isTypical: true,
    code: "QKG",
    images: ["/e_to_mam_cap/ETO_QGG_QKG_50_150.webp", "/e_to_mam_cap/ETO_QKG_spec.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: {
          vi: "Mã sản phẩm: QKG50, QKG63, QKG73, QKG80, QKG88, QKG100, QKG125, QKG150",
          cn: "产品代码: QKG50, QKG63, QKG73, QKG80, QKG88, QKG100, QKG125, QKG150"
        },
        data: ["/e_to_mam_cap/ETO_QKG_spec.webp"]
      }
    ],
    name: {
      vi: "Ê tô máy mài QKG",
      cn: "QKG 磨床虎钳"
    },
    prices: {
      current: 0,
      min: 1683000,
      max: 7621000
    },
    description: eToDescription,
    descriptions: eToDescriptions,
    seri: "QKG",
    specs: "50-150",
    brand: "Vân Tập",
    origin: "cn",
    listView: listViewCBO
    // extra data
  }
];

export default items;

export const eToItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
