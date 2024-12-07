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
      data: ["用于高精度加工和夹持小型工件。", "主要用于磨床、电火花机床和铣床等…"]
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

const detailsView = [[{ type: "tag", value: "specsList" }]];

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
        subTitle: null,
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
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["QGG_50", "QGG_63", "QGG_73", "QGG_80", "QGG_88", "QGG_100", "QGG_125", "QGG_150"]
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
        subTitle: null,
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
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["QKG_50", "QKG_63", "QKG_73", "QKG_80", "QKG_88", "QKG_100", "QKG_125", "QKG_150"]
  },
  {
    category: "pETo",
    routeName: "pEToCT",
    isTypical: true,
    code: "MC3C",
    images: ["/e_to_mam_cap/mam_cap/1.webp", "/e_to_mam_cap/mam_cap/vt_spec.webp", "/e_to_mam_cap/mam_cap/vt_3.webp", "/e_to_mam_cap/mam_cap/vt_4.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        data: ["/e_to_mam_cap/mam_cap/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Mâm cặp tự định tâm 3 chấu",
      cn: "三爪自定心卡盘"
    },
    prices: {
      current: 0,
      min: 2010000,
      max: 4440000
    },
    description: {
      vi: "Dùng cho máy tiện",
      cn: "用于车床"
    },
    descriptions: {
      vi: [
        {
          title: "application",
          data: [
            "Dùng để kẹp phôi trụ hay phôi ống khi gia công sản phẩm trên máy tiện.",
            "Có khả năng kẹp chặt sản phẩm khi gia công, độ đồng tâm cao giúp gia công sản phẩm chính xác."
          ]
        },
        {
          title: "description",
          data: [
            "Được làm từ thép hợp kim chất lượng cao, các bề mặt được mài nhẵn.",
            "Cấu tạo gồm thân, vỏ ngoài, đai ốc và các chấu kẹp liên động với nhau.",
            "Cơ cấu 3 chấu tự định tâm, điều khiển đơn giản bằng cách xoay vỏ ngoài.",
            "Các chấu kẹp chuyển động đồng thời khi điều khiển, tạo lực kẹp đều.",
            "Luôn được bảo quản trong môi trường có dầu để đảm bảo độ bền."
          ]
        }
      ],
      cn: [
        {
          title: "application",
          data: ["用于车床加工时夹持圆柱形或管状工件。", "具有高夹持力和高同心度，可实现精确加工。"]
        },
        {
          title: "description",
          data: [
            "采用优质合金钢制造，表面经过精密研磨。",
            "结构包括主体、外壳、螺母和联动夹爪。",
            "三爪自定心机构，通过旋转外壳实现简单控制。",
            "夹爪同步运动，提供均匀夹持力。",
            "需在含油环境中保存以确保耐久性。"
          ]
        }
      ]
    },
    seri: "MC3C",
    specs: "125-250",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["MC3C_125", "MC3C_160", "MC3C_200", "MC3C_250"]
  }
];

export default items;

export const eToItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
