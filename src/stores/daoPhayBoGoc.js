import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";
import { findSpecDRDLByCode } from "@/stores/daoPhay";

const items = [
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayBoGocCT",
    isTypical: true,
    code: "DPBG_55HRC_4F",
    images: ["/dao_phay_bo_goc/55HRC_4F.webp", "/dao_phay_bo_goc/55hrc_4f/1.webp", "/dao_phay_bo_goc/55hrc_4f/2.webp"],
    name: {
      vi: "55HRC - Dao phay bo góc 4F",
      cn: "55HRC - 圆鼻刀 4F"
    },
    prices: {
      current: 0,
      min: 115000,
      max: 704000
    },
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      cn: "适用于加工铁、钢、铜、铸铁…"
    },
    descriptions: {
      vi: [
        "Thiết kế 4 me, phủ Titan Silic Nitride tăng độ cứng, chống mài mòn tốt.",
        "Dung sai cạnh chính xác, giảm thiểu sứt mẻ, phù hợp cho nhiều ứng dụng."
      ],
      cn: ["四刃设计，钛硅氮化物涂层提高硬度并具备良好的耐磨性。", "边缘精度高，减少崩刃，适用于多种应用场景。"]
    },
    seri: "55HRC",
    specs: "D1-D12",
    brand: null,
    origin: "cn",
    // extra data
    cutStyle: "csRoundedEdgeSquare",
    hardness: "55HRC",
    flutes: 4,
    helixAngle: 35,
    material: "CarbideTungsten",
    processingMaterials: "PMK",
    coating: "TiSiN",
    bladeDiameter: {
      min: 1,
      max: 12
    },
    handleDiameter: {
      min: 4,
      max: 12
    },
    cuttingLength: {
      min: 2,
      max: 30
    },
    overallLength: {
      min: 50,
      max: 100
    }
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayBoGocCT",
    isTypical: true,
    code: "DPBG_65HRC_4F",
    images: ["/dao_phay_bo_goc/65HRC_4F.webp", "/dao_phay_bo_goc/65hrc_4f/1.webp", "/dao_phay_bo_goc/65hrc_4f/2.webp"],
    name: {
      vi: "65HRC - Dao phay bo góc 4F",
      cn: "65HRC - 圆鼻刀 4F"
    },
    prices: {
      current: 0,
      min: 163000,
      max: 2910000
    },
    description: {
      vi: "Thích hợp gia công gang, thép cứng, thép không gỉ…",
      cn: "适用于加工铸铁、硬钢、不锈钢…"
    },
    descriptions: {
      vi: [
        "Thiết kế 4 me, phủ Titan Silic Nitride tăng độ cứng, chống mài mòn tốt.",
        "Dung sai cạnh chính xác, giảm thiểu sứt mẻ, phù hợp cho nhiều ứng dụng."
      ],
      cn: ["四刃设计，钛硅氮化物涂层提高硬度并具备良好的耐磨性。", "边缘精度高，减少崩刃，适用于多种应用场景。"]
    },
    seri: "65HRC",
    specs: "D1-D10",
    brand: null,
    origin: "cn",
    // extra data
    cutStyle: "csRoundedEdgeSquare",
    hardness: "65HRC",
    flutes: 4,
    helixAngle: 35,
    material: "CarbideTungsten",
    processingMaterials: "PMKSH",
    coating: "NACO",
    bladeDiameter: {
      min: 1,
      max: 10
    },
    handleDiameter: {
      min: 4,
      max: 10
    },
    cuttingLength: {
      min: 3.3,
      max: 30.5
    },
    overallLength: {
      min: 50,
      max: 150
    }
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayBoGocCT",
    isTypical: false,
    code: "DPBG_65HRC_4F_hard",
    images: ["/dao_phay_bo_goc/65HRC_4F_hard.webp"],
    name: {
      vi: "65HRC - Dao phay bo góc 4F - tăng cứng",
      cn: "65HRC - 圆鼻刀 4F - 硬化"
    },
    prices: {
      current: 0,
      min: 163000,
      max: 2910000
    },
    description: {
      vi: "Thích hợp gia công gang, thép cứng, thép không gỉ…",
      cn: "适用于加工铸铁、硬钢、不锈钢…"
    },
    descriptions: {
      vi: [
        "Thiết kế 4 me, phủ Titan Silic Nitride tăng độ cứng, chống mài mòn tốt.",
        "Dung sai cạnh chính xác, giảm thiểu sứt mẻ, phù hợp cho nhiều ứng dụng."
      ],
      cn: ["四刃设计，钛硅氮化物涂层提高硬度并具备良好的耐磨性。", "边缘精度高，减少崩刃，适用于多种应用场景。"]
    },
    seri: "65HRC",
    specs: "D1-D12",
    brand: null,
    origin: "cn",
    // extra data
    cutStyle: "csRoundedEdgeSquare",
    hardness: "65HRC",
    flutes: 4,
    helixAngle: 35,
    material: "CarbideTungsten",
    processingMaterials: "PMKSH",
    coating: "AlCrSiN",
    bladeDiameter: {
      min: 1,
      max: 12
    },
    handleDiameter: {
      min: 4,
      max: 12
    },
    cuttingLength: {
      min: 3,
      max: 18
    },
    overallLength: {
      min: 50,
      max: 100
    }
  }
];

const specs = [
  {
    code: "DPBG_55HRC_4F",
    data: [
      [1, 0.2, 4, 2, 50],
      [2, 0.2, 4, 4, 50],
      [3, 0.5, 4, 6, 50],
      [4, 0.2, 4, 8, 50],
      [4, 0.5, 4, 8, 50],
      [4, 1, 4, 8, 50],
      [5, 0.5, 5, 10, 50],
      [5, 1, 6, 10, 50],
      [6, 0.2, 6, 12, 50],
      [6, 0.5, 6, 12, 50],
      [6, 1, 6, 12, 50],
      [6, 2, 6, 12, 50],
      [8, 0.5, 8, 16, 50],
      [8, 1, 8, 16, 50],
      [8, 1.5, 8, 16, 50],
      [8, 2, 8, 16, 50],
      [8, 3, 8, 16, 50],
      [4, 0.5, 4, 10, 75],
      [4, 1, 4, 12, 75],
      [6, 0.5, 6, 15, 75],
      [6, 1, 6, 15, 75],
      [8, 1, 8, 20, 75],
      [10, 0.5, 10, 20, 75],
      [10, 1, 10, 20, 75],
      [10, 2, 10, 20, 75],
      [10, 2.5, 10, 20, 75],
      [10, 3, 10, 20, 75],
      [12, 0.5, 12, 24, 75],
      [12, 1, 12, 24, 75],
      [12, 2, 12, 24, 75],
      [12, 3, 12, 24, 75],
      [4, 0.5, 4, 12, 100],
      [8, 0.5, 8, 20, 100],
      [8, 1, 8, 20, 100],
      [10, 0.5, 10, 25, 100],
      [10, 1, 10, 25, 100],
      [12, 0.5, 12, 30, 100],
      [12, 1, 12, 30, 100]
    ]
  },
  {
    code: "DPBG_65HRC_4F",
    data: [
      [1, 0.2, 4, 3.3, 50],
      [3, 0.5, 4, 7, 50],
      [4, 0.5, 4, 8.5, 50],
      [5, 0.5, 6, 11, 50],
      [6, 0.2, 6, 13, 50],
      [6, 1, 6, 16, 75],
      [6, 0.5, 6, 15.5, 100],
      [5, 0.5, 5, 11, 50],
      [6, 0.5, 6, 12.7, 50],
      [4, 1, 4, 8.5, 50],
      [2, 0.1, 4, 5, 50],
      [8, 0.5, 8, 20, 75],
      [8, 1, 8, 20.4, 75],
      [10, 1, 10, 20.4, 75],
      [10, 0.5, 10, 20.4, 75],
      [10, 1, 10, 26, 100],
      [10, 1, 10, 30.5, 150]
    ]
  },
  {
    code: "DPBG_65HRC_4F_hard",
    data: [
      [1, 0.1, 4, 3, 50],
      [1, 0.2, 4, 3, 50],
      [1.5, 0.2, 4, 5, 50],
      [2, 0.5, 4, 5, 50],
      [2, 0.2, 4, 5, 50],
      [2, 0.1, 4, 5, 50],
      [3, 0.2, 4, 8, 50],
      [3, 0.5, 4, 8, 50],
      [3, 0.1, 4, 8, 50],
      [4, 0.5, 4, 10, 50],
      [4, 0.2, 4, 10, 50],
      [4, 1, 4, 10, 50],
      [6, 0.2, 6, 9, 50],
      [6, 0.5, 6, 9, 50],
      [6, 1, 6, 9, 50],
      [8, 1, 8, 12, 60],
      [8, 0.5, 8, 12, 60],
      [6, 0.5, 6, 9, 75],
      [6, 1, 6, 9, 75],
      [8, 1, 8, 12, 75],
      [8, 0.5, 8, 12, 75],
      [10, 0.5, 10, 15, 75],
      [10, 1, 10, 15, 75],
      [12, 0.5, 12, 18, 75],
      [12, 1, 12, 18, 75],
      [6, 0.5, 6, 9, 100],
      [8, 1, 8, 12, 100],
      [8, 0.5, 8, 12, 100],
      [10, 0.5, 10, 15, 100],
      [10, 1, 10, 15, 100],
      [12, 1, 12, 18, 100],
      [12, 0.5, 12, 18, 100]
    ]
  }
];

export default items;

export const daoPhayBoGocItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);

export const getSpecByCode = (code) => findSpecDRDLByCode(specs, code);
