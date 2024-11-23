import { mapSearchProps } from "@/stores/search";
import { findItemByCode, findSpecTypeRByCode } from "@/stores/daoPhay";

const items = [
  {
    category: "pDaoPhay",
    cutStyle: "csCornerRounding",
    routeName: "pDaoPhayRTrongCT",
    isTypical: true,
    code: "DPRT_55HRC_4F",
    hardness: "55HRC",
    name: {
      vi: "55HRC - Dao phay R trong 4F",
      en: "55HRC - Corner rounding end mill 4F"
    },
    images: ["/dao_phay_r_trong/55HRC_4F.webp", "/dao_phay_r_trong/55hrc_4f/1.webp", "/dao_phay_r_trong/55hrc_4f/2.webp"],
    flutes: 4,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 107000,
      max: 800000
    },
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      en: "Suitable for processing iron, steel, copper, cast iron…"
    },
    material: "CarbideTungsten",
    processingMaterials: "PMK",
    coating: "TiSiN",
    bladeRadius: {
      min: 0.5,
      max: 5
    },
    bladeDiameter: {
      min: 2,
      max: 3
    },
    handleDiameter: {
      min: 4,
      max: 12
    },
    cuttingLength: {
      min: 4,
      max: 12
    },
    overallLength: {
      min: 50,
      max: 75
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csCornerRounding",
    routeName: "pDaoPhayRTrongCT",
    isTypical: false,
    code: "DPRT_55HRC_4F_Al",
    hardness: "55HRC",
    name: {
      vi: "55HRC - Dao phay R trong 4F - gia công nhôm",
      en: "55HRC - Corner rounding end mill 4F - aluminum machining"
    },
    images: ["/dao_phay_r_trong/55HRC_4F_Al.webp"],
    flutes: 4,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 107000,
      max: 800000
    },
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, nhựa…",
      en: "High gloss, suitable for processing aluminum, plastic…"
    },
    material: "CarbideTungsten",
    processingMaterials: "N",
    coating: "Al",
    bladeRadius: {
      min: 0.5,
      max: 5
    },
    bladeDiameter: {
      min: 2,
      max: 3
    },
    handleDiameter: {
      min: 4,
      max: 12
    },
    cuttingLength: {
      min: 4,
      max: 12
    },
    overallLength: {
      min: 50,
      max: 75
    }
  }
];

const specs = [
  {
    code: "DPRT_55HRC_4F",
    data: [
      [0.5, 4, 4, 50],
      [1, 4, 4, 50],
      [1.5, 6, 6, 50],
      [2, 6, 6, 50],
      [2.5, 8, 8, 60],
      [3, 8, 8, 60],
      [4, 10, 10, 75],
      [5, 12, 12, 75]
    ]
  },
  {
    code: "DPRT_55HRC_4F_Al",
    data: [
      [0.5, 4, 4, 50],
      [1, 4, 4, 50],
      [1.5, 6, 6, 50],
      [2, 6, 6, 50],
      [2.5, 8, 8, 60],
      [3, 8, 8, 60],
      [4, 10, 10, 75],
      [5, 12, 12, 75]
    ]
  }
];

export default items;

export const daoPhayRTrongItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);

export const getSpecByCode = (code) => findSpecTypeRByCode(specs, code);
