import { mapSearchProps } from "@/stores/search";
import { findItemByCode, findSpecTypeRByCode } from "@/stores/daoPhay";

const items = [
  {
    category: "pDaoPhay",
    cutStyle: "csBall",
    routeName: "pDaoPhayCauCT",
    isTypical: false,
    code: "DPC_45HRC_2F",
    hardness: "45HRC",
    name: {
      vi: "45HRC - Dao phay cầu 2F",
      en: "45HRC - Ball end mill 2F"
    },
    images: ["/dao_phay_cau/45HRC_2F.webp", "/dao_phay_cau/45hrc_2f/1.webp", "/dao_phay_cau/45hrc_2f/2.webp"],
    flutes: 2,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 65000,
      max: 1191000
    },
    description: {
      vi: "Thích hợp gia công thép thông thường, gang…",
      en: "Suitable for processing common steel, cast iron…"
    },
    material: "CarbideTungsten",
    processingMaterials: "PMK",
    coating: "AlTiN",
    bladeRadius: {
      min: 0.5,
      max: 10
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    cuttingLength: {
      min: 2,
      max: 30
    },
    overallLength: {
      min: 50,
      max: 150
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csBall",
    routeName: "pDaoPhayCauCT",
    isTypical: true,
    code: "DPC_55HRC_2F",
    hardness: "55HRC",
    name: {
      vi: "55HRC - Dao phay cầu 2F",
      en: "55HRC - Ball end mill 2F"
    },
    images: ["/dao_phay_cau/55HRC_2F.webp", "/dao_phay_cau/55hrc_2f/1.webp", "/dao_phay_cau/55hrc_2f/2.webp"],
    flutes: 2,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 98000,
      max: 1382000
    },
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      en: "Suitable for processing iron, steel, copper, cast iron…"
    },
    material: "CarbideTungsten",
    processingMaterials: "PMK",
    coating: "TiSiN",
    bladeRadius: {
      min: 0.1,
      max: 10
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    cuttingLength: {
      min: 1,
      max: 40
    },
    overallLength: {
      min: 50,
      max: 150
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csBall",
    routeName: "pDaoPhayCauCT",
    isTypical: true,
    code: "DPC_65HRC_2F",
    hardness: "65HRC",
    name: {
      vi: "65HRC - Dao phay cầu 2F",
      en: "65HRC - Ball end mill 2F"
    },
    images: ["/dao_phay_cau/65HRC_2F.webp", "/dao_phay_cau/65hrc_2f/1.webp", "/dao_phay_cau/65hrc_2f/2.webp"],
    flutes: 2,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 142000,
      max: 1145000
    },
    description: {
      vi: "Thích hợp gia công thép, gang…",
      en: "Suitable for processing steel, cast iron…"
    },
    material: "CarbideTungsten",
    processingMaterials: "PMKSH",
    coating: "NACO",
    bladeRadius: {
      min: 0.5,
      max: 10
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    cuttingLength: {
      min: 2.5,
      max: 30
    },
    overallLength: {
      min: 50,
      max: 150
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csBall",
    routeName: "pDaoPhayCauCT",
    isTypical: false,
    code: "DPC_65HRC_2F_hard",
    hardness: "65HRC",
    name: {
      vi: "65HRC - Dao phay cầu 2F - tăng cứng",
      en: "65HRC - Ball end mill 2F - harden"
    },
    images: ["/dao_phay_cau/65HRC_2F_hard.webp", "/dao_phay_cau/65hrc_2f_hard/1.webp", "/dao_phay_cau/65hrc_2f_hard/2.webp"],
    flutes: 2,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 142000,
      max: 1145000
    },
    description: {
      vi: "Thích hợp gia công gang, thép cứng, thép không gỉ…",
      en: "Suitable for processing cast iron, hard steel, stainless steel…"
    },
    material: "CarbideTungsten",
    processingMaterials: "PMKSH",
    coating: "AlCrSiN",
    bladeRadius: {
      min: 0.5,
      max: 6
    },
    handleDiameter: {
      min: 4,
      max: 18
    },
    cuttingLength: {
      min: 2,
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
    code: "DPC_45HRC_2F",
    data: [
      [0.5, 4, 2, 50],
      [0.75, 4, 3, 50],
      [1, 4, 4, 50],
      [1.25, 4, 5.5, 50],
      [1.5, 4, 7, 50],
      [1.75, 4, 8, 50],
      [2, 4, 8, 50],
      [2.5, 5, 10.5, 50],
      [0.5, 6, 2, 50],
      [0.75, 6, 3, 50],
      [1, 6, 4, 50],
      [1.5, 6, 6, 50],
      [2, 6, 8, 50],
      [2.5, 6, 11, 50],
      [3, 6, 12, 50],
      [5, 6, 3, 50],
      [4, 8, 17, 60],
      [0.5, 4, 2, 75],
      [0.75, 4, 3, 75],
      [0.5, 6, 2.5, 75],
      [0.75, 6, 3, 75],
      [1, 6, 4, 75],
      [1.5, 6, 6.5, 75],
      [2, 6, 8.5, 75],
      [2.5, 6, 11, 75],
      [3, 6, 12, 75],
      [4, 8, 16.5, 75],
      [5, 10, 20, 75],
      [6, 12, 24, 75],
      [2, 4, 8, 100],
      [1, 6, 4, 100],
      [3, 6, 12, 100],
      [4, 8, 16, 100],
      [5, 10, 20, 100],
      [6, 12, 24, 100],
      [7, 14, 29, 100],
      [8, 16, 30, 100],
      [9, 18, 37, 100],
      [10, 20, 42, 100],
      [5, 10, 21, 150],
      [8, 16, 30, 150],
      [10, 20, 30, 150]
    ]
  },
  {
    code: "DPC_55HRC_2F",
    data: [
      [0.1, 4, 1, 50],
      [0.2, 4, 1, 50],
      [0.3, 4, 1, 50],
      [0.4, 4, 2, 50],
      [0.5, 4, 4, 50],
      [0.6, 4, 2.6, 50],
      [0.75, 4, 4, 50],
      [0.8, 4, 4, 50],
      [0.9, 4, 4, 50],
      [1, 4, 4, 50],
      [1.25, 4, 5, 50],
      [1.5, 3, 6, 50],
      [1.5, 4, 6, 50],
      [1.75, 4, 7, 50],
      [2, 4, 8, 50],
      [2.5, 5, 10, 50],
      [2.5, 6, 10, 50],
      [3, 6, 12, 50],
      [4, 8, 16, 75],
      [5, 10, 20, 75],
      [6, 12, 24, 75],
      [1.5, 6, 6, 75],
      [2, 6, 8, 75],
      [2.5, 5, 10, 75],
      [2.5, 6, 10, 75],
      [3, 6, 12, 75],
      [4, 8, 16, 75],
      [2, 4, 8, 100],
      [2.5, 5, 10, 100],
      [3, 6, 12, 100],
      [4, 8, 16, 100],
      [5, 10, 20, 100],
      [6, 12, 24, 100],
      [8, 16, 30, 100],
      [10, 20, 40, 100],
      [4, 8, 16, 150],
      [6, 12, 24, 150],
      [8, 16, 30, 150]
    ]
  },
  {
    code: "DPC_65HRC_2F",
    data: [
      [0.5, 4, 2.5, 50],
      [0.75, 4, 3.5, 50],
      [1, 4, 4.5, 50],
      [1.25, 4, 6, 50],
      [1.5, 4, 6.5, 50],
      [1.75, 4, 7.5, 50],
      [2, 4, 9, 50],
      [0.5, 6, 2, 50],
      [0.75, 6, 3, 50],
      [1, 6, 4, 50],
      [1.5, 6, 6, 50],
      [2, 6, 8, 50],
      [2.5, 6, 10, 50],
      [3, 6, 13, 50],
      [4, 8, 17, 60],
      [0.5, 4, 2, 75],
      [0.75, 4, 3, 75],
      [1, 4, 4, 75],
      [1.5, 4, 6, 75],
      [2, 4, 8, 75],
      [0.5, 6, 2, 75],
      [0.75, 6, 3, 75],
      [1, 6, 4, 75],
      [1.5, 6, 6, 75],
      [2, 6, 8, 75],
      [2.5, 6, 10, 75],
      [3, 6, 12, 75],
      [4, 8, 17, 75],
      [5, 10, 21, 75],
      [6, 12, 25, 75],
      [1.5, 3, 7, 100],
      [2, 4, 8, 100],
      [3, 6, 13, 100],
      [4, 8, 16, 100],
      [5, 10, 21, 100],
      [6, 12, 25, 100],
      [8, 16, 30, 100],
      [10, 20, 30, 100],
      [8, 16, 30, 150],
      [10, 20, 30, 150]
    ]
  },
  {
    code: "DPC_65HRC_2F_hard",
    data: [
      [0.5, 4, 2, 50],
      [0.75, 4, 3, 50],
      [1, 4, 4, 50],
      [1.5, 4, 6, 50],
      [2, 4, 6, 50],
      [3, 6, 9, 50],
      [4, 18, 16, 60],
      [3, 6, 9, 75],
      [4, 8, 12, 75],
      [5, 10, 15, 75],
      [6, 12, 18, 75],
      [3, 6, 9, 100],
      [4, 8, 12, 100],
      [5, 10, 15, 100],
      [6, 12, 18, 100]
    ]
  }
];

export default items;

export const daoPhayCauItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);

export const getSpecByCode = (code) => findSpecTypeRByCode(specs, code);
