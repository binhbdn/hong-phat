import { mapSearchProps } from "@/stores/search";
import { findItemByCode, findSpecDDLByCode } from "@/stores/daoPhay";

const items = [
  {
    category: "pDaoPhay",
    cutStyle: "csSquare",
    routeName: "pDaoPhayPhaThoCT",
    isTypical: false,
    code: "DPPT_55HRC_3F",
    hardness: "55HRC",
    name: {
      vi: "55HRC - Dao phay phá thô 3F - gia công nhôm",
      cn: "55HRC - 粗皮刀 3F - 铝加工"
    },
    images: ["/dao_phay_pha_tho/55HRC_3F.webp", "/dao_phay_pha_tho/55hrc_3f/1.webp"],
    flutes: 3,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 88000,
      max: 2072000
    },
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, hợp kim nhôm…",
      cn: "高光泽，适合加工铝、铝合金…"
    },
    material: "CarbideTungsten",
    processingMaterials: "N",
    coating: "Al",
    bladeDiameter: {
      min: 4,
      max: 20
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    cuttingLength: {
      min: 10,
      max: 45
    },
    overallLength: {
      min: 50,
      max: 100
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csSquare",
    routeName: "pDaoPhayPhaThoCT",
    isTypical: true,
    code: "DPPT_55HRC_4F",
    hardness: "55HRC",
    name: {
      vi: "55HRC - Dao phay phá thô 4F",
      cn: "55HRC - 粗皮刀 4F"
    },
    images: ["/dao_phay_pha_tho/55HRC_4F.webp", "/dao_phay_pha_tho/55hrc_4f/1.webp"],
    flutes: 4,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 88000,
      max: 2072000
    },
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      cn: "适用于加工铁、钢、铜、铸铁…"
    },
    material: "CarbideTungsten",
    processingMaterials: "PMKH",
    coating: "TiSiN",
    bladeDiameter: {
      min: 4,
      max: 20
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    cuttingLength: {
      min: 10,
      max: 45
    },
    overallLength: {
      min: 50,
      max: 100
    }
  }
];

const specs = [
  {
    code: "DPPT_55HRC_3F",
    data: [
      [4, 4, 10, 50],
      [6, 6, 16, 50],
      [8, 8, 20, 60],
      [10, 10, 25, 75],
      [12, 12, 30, 75],
      [14, 14, 45, 100],
      [16, 16, 45, 100],
      [18, 18, 45, 100],
      [20, 20, 45, 100]
    ]
  },
  {
    code: "DPPT_55HRC_4F",
    data: [
      [4, 4, 10, 50],
      [6, 6, 16, 50],
      [8, 8, 20, 60],
      [10, 10, 25, 75],
      [12, 12, 30, 75],
      [14, 14, 45, 100],
      [16, 16, 45, 100],
      [18, 18, 45, 100],
      [20, 20, 45, 100]
    ]
  }
];

export default items;

export const daoPhayPhaThoItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);

export const getSpecByCode = (code) => findSpecDDLByCode(specs, code);
