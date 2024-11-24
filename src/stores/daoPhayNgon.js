import { mapSearchProps } from "@/stores/search";
import { findItemByCode, findSpecDDLByCode } from "@/stores/daoPhay";

const items = [
  {
    category: "pDaoPhay",
    cutStyle: "csSquare",
    routeName: "pDaoPhayNgonCT",
    isTypical: false,
    code: "DPN_45HRC_3F",
    hardness: "45HRC",
    name: {
      vi: "45HRC - Dao phay ngón 3F - gia công nhôm",
      cn: "45HRC - End mill 3F - aluminum machining"
    },
    images: ["/dao_phay_ngon/55HRC_3F.webp", "/dao_phay_ngon/45hrc_3f/1.webp", "/dao_phay_ngon/45hrc_3f/2.webp"],
    flutes: 3,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 115000,
      max: 1412000
    },
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, nhựa…",
      cn: "High gloss, suitable for processing aluminum, plastic…"
    },
    material: "CarbideTungsten",
    processingMaterials: "N",
    coating: "Al",
    bladeDiameter: {
      min: 1,
      max: 20
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    cuttingLength: {
      min: 3.7,
      max: 70
    },
    overallLength: {
      min: 50,
      max: 150
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csSquare",
    routeName: "pDaoPhayNgonCT",
    isTypical: true,
    hardness: "55HRC",
    code: "DPN_55HRC_3F",
    name: {
      vi: "55HRC - Dao phay ngón 3F - gia công nhôm",
      cn: "55HRC - End mill 3F - aluminum machining"
    },
    images: ["/dao_phay_ngon/55HRC_3F.webp", "/dao_phay_ngon/55hrc_3f/1.webp", "/dao_phay_ngon/55hrc_3f/2.webp"],
    flutes: 3,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 47000,
      max: 1568000
    },
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, nhựa…",
      cn: "High gloss, suitable for processing aluminum, plastic…"
    },
    material: "CarbideTungsten",
    processingMaterials: "N",
    coating: "Al",
    bladeDiameter: {
      min: 1,
      max: 20
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    cuttingLength: {
      min: 3,
      max: 80
    },
    overallLength: {
      min: 50,
      max: 200
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csSquare",
    routeName: "pDaoPhayNgonCT",
    isTypical: false,
    code: "DPN_45HRC_2F",
    hardness: "45HRC",
    name: {
      vi: "45HRC - Dao phay ngón 2F",
      cn: "45HRC - End mill 2F"
    },
    images: ["/dao_phay_ngon/45HRC_2F.webp", "/dao_phay_ngon/45hrc_2f/1.webp", "/dao_phay_ngon/45hrc_2f/2.webp", "/dao_phay_ngon/45hrc_2f/3.webp"],
    flutes: 2,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 34000,
      max: 1562000
    },
    description: {
      vi: "Thích hợp gia công thép thông thường, gang…",
      cn: "Suitable for processing common steel, cast iron…"
    },
    material: "CarbideTungsten",
    processingMaterials: "PMK",
    coating: "AlTiN",
    bladeDiameter: {
      min: 1,
      max: 20
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    cuttingLength: {
      min: 3,
      max: 71
    },
    overallLength: {
      min: 50,
      max: 150
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csSquare",
    routeName: "pDaoPhayNgonCT",
    isTypical: true,
    code: "DPN_45HRC_4F",
    hardness: "45HRC",
    name: {
      vi: "45HRC - Dao phay ngón 4F",
      cn: "45HRC - End mill 4F"
    },
    images: ["/dao_phay_ngon/45HRC_4F.webp", "/dao_phay_ngon/45hrc_4f/1.webp", "/dao_phay_ngon/45hrc_4f/2.webp"],
    flutes: 4,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 34000,
      max: 1562000
    },
    description: {
      vi: "Thích hợp gia công thép thông thường, gang…",
      cn: "Suitable for processing common steel, cast iron…"
    },
    material: "CarbideTungsten",
    processingMaterials: "PMK",
    coating: "AlTiN",
    bladeDiameter: {
      min: 1,
      max: 20
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    cuttingLength: {
      min: 4,
      max: 71
    },
    overallLength: {
      min: 50,
      max: 150
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csSquare",
    routeName: "pDaoPhayNgonCT",
    isTypical: false,
    hardness: "55HRC",
    code: "DPN_55HRC_2F",
    name: {
      vi: "55HRC - Dao phay ngón 2F",
      cn: "55HRC - End mill 2F"
    },
    images: ["/dao_phay_ngon/55HRC_2F.webp", "/dao_phay_ngon/55hrc_2f/1.webp", "/dao_phay_ngon/55hrc_2f/2.webp"],
    flutes: 2,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 34000,
      max: 1853000
    },
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      cn: "Suitable for processing iron, steel, copper, cast iron…"
    },
    material: "CarbideTungsten",
    processingMaterials: "PMK",
    coating: "TiSiN",
    bladeDiameter: {
      min: 0.1,
      max: 20
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    cuttingLength: {
      min: 0.7,
      max: 80
    },
    overallLength: {
      min: 50,
      max: 150
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csSquare",
    routeName: "pDaoPhayNgonCT",
    isTypical: true,
    hardness: "55HRC",
    code: "DPN_55HRC_4F",
    name: {
      vi: "55HRC - Dao phay ngón 4F",
      cn: "55HRC - End mill 4F"
    },
    images: ["/dao_phay_ngon/55HRC_4F.webp", "/dao_phay_ngon/55hrc_4f/1.webp", "/dao_phay_ngon/55hrc_4f/2.webp"],
    flutes: 4,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 34000,
      max: 1853000
    },
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      cn: "Suitable for processing iron, steel, copper, cast iron…"
    },
    material: "CarbideTungsten",
    processingMaterials: "PMK",
    coating: "TiSiN",
    bladeDiameter: {
      min: 1,
      max: 20
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    cuttingLength: {
      min: 3,
      max: 80
    },
    overallLength: {
      min: 50,
      max: 200
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csSquare",
    routeName: "pDaoPhayNgonCT",
    isTypical: false,
    code: "DPN_60HRC_4F",
    hardness: "60HRC",
    name: {
      vi: "60HRC - Dao phay ngón 4F - gia công inox",
      cn: "60HRC - End mill 4F - inox machining"
    },
    images: ["/dao_phay_ngon/60HRC_4F.webp", "/dao_phay_ngon/60hrc_4f/1.webp", "/dao_phay_ngon/60hrc_4f/2.webp"],
    flutes: 4,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 900000,
      max: 6030000
    },
    description: {
      vi: "Thích hợp gia công gang, thép cứng, thép không gỉ…",
      cn: "Suitable for processing cast iron, hard steel, stainless steel…"
    },
    material: "CarbideTungsten",
    processingMaterials: "PMKH",
    coating: "NACO",
    bladeDiameter: {
      min: 1,
      max: 12
    },
    handleDiameter: {
      min: 4,
      max: 12
    },
    cuttingLength: {
      min: 3.5,
      max: 45.5
    },
    overallLength: {
      min: 50,
      max: 100
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csSquare",
    routeName: "pDaoPhayNgonCT",
    isTypical: true,
    code: "DPN_65HRC_4F",
    hardness: "65HRC",
    name: {
      vi: "65HRC - Dao phay ngón 4F",
      cn: "65HRC - End mill 4F"
    },
    images: ["/dao_phay_ngon/65HRC_4F.webp", "/dao_phay_ngon/65hrc_4f/1.webp", "/dao_phay_ngon/65hrc_4f/2.webp"],
    flutes: 4,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 1190000,
      max: 10430000
    },
    description: {
      vi: "Thích hợp gia công gang, thép cứng, thép không gỉ…",
      cn: "Suitable for processing cast iron, hard steel, stainless steel…"
    },
    material: "CarbideTungsten",
    processingMaterials: "PMKSH",
    coating: "NACO",
    bladeDiameter: {
      min: 1,
      max: 20
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    cuttingLength: {
      min: 3,
      max: 80
    },
    overallLength: {
      min: 50,
      max: 150
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csSquare",
    routeName: "pDaoPhayNgonCT",
    isTypical: false,
    code: "DPN_65HRC_4F_hard",
    hardness: "65HRC",
    name: {
      vi: "65HRC - Dao phay ngón 4F - tăng cứng",
      cn: "65HRC - End mill 4F - harden"
    },
    images: ["/dao_phay_ngon/65HRC_4F_hard.webp", "/dao_phay_ngon/65hrc_4f_hard/1.webp", "/dao_phay_ngon/65hrc_4f_hard/2.webp"],
    flutes: 4,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 1190000,
      max: 10430000
    },
    description: {
      vi: "Thích hợp gia công gang, thép cứng, thép không gỉ…",
      cn: "Suitable for processing cast iron, hard steel, stainless steel…"
    },
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
      max: 30
    },
    overallLength: {
      min: 50,
      max: 100
    }
  }
];

const specs = [
  {
    code: "DPN_45HRC_3F",
    data: [
      [1, 4, 3.7, 50],
      [1.5, 4, 5, 50],
      [2, 4, 6.7, 50],
      [2.5, 4, 8.4, 50],
      [3, 3, 8, 50],
      [3, 4, 9, 50],
      [3.5, 6, 9.2, 50],
      [4, 4, 12.3, 50],
      [5, 5, 15.7, 50],
      [5.5, 6, 17, 50],
      [5, 6, 15.8, 50],
      [6, 6, 11.8, 50],
      [7, 8, 18, 50],
      [8, 8, 24.3, 60],
      [3, 3, 11.5, 75],
      [4, 4, 16.7, 75],
      [5, 5, 20.3, 75],
      [5, 6, 20, 75],
      [6, 6, 25.8, 75],
      [8, 8, 34.4, 75],
      [9, 10, 23, 75],
      [10, 10, 30.6, 75],
      [11, 12, 28, 75],
      [12, 12, 35.7, 75],
      [3, 3, 16, 100],
      [4, 4, 20.7, 100],
      [5, 6, 25, 100],
      [6, 6, 30, 100],
      [8, 8, 35, 100],
      [10, 10, 40, 100],
      [12, 12, 45, 100],
      [14, 14, 40.5, 100],
      [16, 16, 45.7, 100],
      [18, 18, 45.4, 100],
      [20, 20, 46, 100],
      [6, 6, 35.2, 150],
      [8, 8, 40, 150],
      [10, 10, 50, 150],
      [12, 12, 50, 150],
      [14, 14, 60.4, 150],
      [16, 16, 70, 150]
    ]
  },
  {
    code: "DPN_55HRC_3F",
    data: [
      [1, 4, 3, 50],
      [1.5, 4, 5, 50],
      [2, 4, 6, 50],
      [2.5, 4, 8, 50],
      [3, 4, 9, 50],
      [3, 3, 9, 50],
      [4, 4, 12, 50],
      [5, 5, 15, 50],
      [1, 6, 4, 50],
      [2, 6, 6, 50],
      [3, 6, 9, 50],
      [4, 6, 13, 50],
      [5, 6, 15, 50],
      [6, 6, 18, 50],
      [7, 8, 21, 60],
      [8, 8, 24, 60],
      [3, 3, 12, 75],
      [4, 4, 16, 75],
      [5, 6, 20, 75],
      [6, 6, 25, 75],
      [8, 8, 30, 75],
      [9, 10, 28, 75],
      [10, 10, 30, 75],
      [11, 12, 33, 75],
      [12, 12, 35, 75],
      [3, 3, 14, 100],
      [4, 4, 21, 100],
      [5, 6, 25, 100],
      [6, 6, 30, 100],
      [8, 8, 35, 100],
      [10, 10, 40, 100],
      [12, 12, 45, 100],
      [14, 14, 40, 100],
      [16, 16, 45, 100],
      [18, 18, 45, 100],
      [20, 20, 45, 100],
      [6, 6, 40, 150],
      [8, 8, 40, 150],
      [10, 10, 50, 150],
      [12, 12, 55, 150],
      [14, 14, 60, 150],
      [16, 16, 70, 150],
      [18, 18, 70, 150],
      [20, 20, 70, 150],
      [18, 18, 80, 200],
      [20, 20, 80, 200]
    ]
  },
  {
    code: "DPN_45HRC_2F",
    data: [
      [1, 4, 3, 50],
      [1.5, 4, 5, 50],
      [2, 4, 5, 50],
      [2.5, 4, 9, 50],
      [3, 3, 9, 50],
      [3, 4, 9, 50],
      [3.5, 4, 9.5, 50],
      [4, 4, 10, 50],
      [1, 6, 3, 50],
      [1.5, 6, 5, 50],
      [2, 6, 6.5, 50],
      [2.5, 6, 7.5, 50],
      [3, 6, 8, 50],
      [3.5, 6, 9.5, 50],
      [4, 6, 11, 50],
      [4.5, 6, 13, 50],
      [5, 6, 13, 50],
      [5.5, 6, 14, 50],
      [6, 6, 15, 50],
      [7, 8, 18, 60],
      [8, 8, 26, 60],
      [3, 3, 8, 75],
      [4, 4, 16.5, 75],
      [5, 5, 20, 75],
      [5, 6, 20, 75],
      [6, 6, 15, 75],
      [7, 8, 25, 75],
      [8, 8, 25, 75],
      [9, 10, 23, 75],
      [10, 10, 25, 75],
      [11, 12, 28, 75],
      [12, 12, 30, 75],
      [3, 3, 13, 100],
      [4, 4, 16, 100],
      [5, 5, 25, 100],
      [6, 6, 30.5, 100],
      [8, 8, 26, 100],
      [10, 10, 40, 100],
      [12, 12, 46, 100],
      [13, 14, 40, 100],
      [14, 14, 35, 100],
      [15, 16, 40, 100],
      [16, 16, 40, 100],
      [18, 18, 40, 100],
      [20, 20, 40, 100],
      [8, 8, 40, 150],
      [10, 10, 50, 150],
      [12, 12, 50, 150],
      [16, 16, 71, 150],
      [18, 18, 60, 150],
      [20, 20, 71, 150]
    ]
  },
  {
    code: "DPN_45HRC_4F",
    data: [
      [1, 4, 4.5, 50],
      [1.5, 4, 4.8, 50],
      [2, 4, 6.5, 50],
      [2.5, 4, 6.5, 50],
      [3, 3, 9, 50],
      [3, 4, 9, 50],
      [3.5, 4, 9, 50],
      [4, 4, 10.5, 50],
      [1, 6, 4, 50],
      [1.5, 6, 4, 50],
      [2, 6, 7, 50],
      [2.5, 6, 8, 50],
      [3, 6, 8, 50],
      [3.5, 6, 9, 50],
      [4, 6, 11, 50],
      [4.5, 6, 13, 50],
      [5, 5, 14, 50],
      [5, 6, 14, 50],
      [6, 6, 16, 50],
      [7, 8, 18.5, 50],
      [8, 8, 21, 50],
      [3, 3, 13, 75],
      [3, 6, 13, 75],
      [4, 4, 17, 75],
      [5, 5, 21, 75],
      [5, 6, 21, 75],
      [6, 6, 25, 75],
      [7, 8, 26, 75],
      [8, 8, 26, 75],
      [9, 10, 24, 75],
      [10, 10, 26, 75],
      [11, 12, 28, 75],
      [12, 12, 31, 75],
      [3, 3, 13, 100],
      [4, 4, 21, 100],
      [5, 5, 16, 100],
      [6, 6, 31, 100],
      [8, 8, 36, 100],
      [10, 10, 40, 100],
      [12, 12, 46, 100],
      [13, 14, 42, 100],
      [14, 14, 41, 100],
      [15, 16, 40, 100],
      [16, 16, 45.5, 100],
      [18, 18, 45.5, 100],
      [20, 20, 45.5, 100],
      [6, 6, 35, 150],
      [8, 8, 40, 150],
      [10, 10, 50, 150],
      [12, 12, 50, 150],
      [16, 16, 70, 150],
      [18, 18, 71, 150],
      [20, 20, 71, 150]
    ]
  },
  {
    code: "DPN_55HRC_2F",
    data: [
      [0.1, 4, 0.7, 50],
      [0.2, 4, 0.8, 50],
      [0.3, 4, 1, 50],
      [0.4, 4, 1.2, 50],
      [0.5, 4, 1.3, 50],
      [0.6, 4, 1.5, 50],
      [0.7, 4, 1.6, 50],
      [0.8, 4, 1.8, 50],
      [0.9, 4, 1.9, 50],
      [1, 4, 3, 50],
      [1, 6, 3, 50],
      [1.5, 4, 4.5, 50],
      [2, 4, 6, 50],
      [2, 6, 6, 50],
      [2.5, 4, 7.5, 50],
      [3, 3, 8, 50],
      [3, 4, 9, 50],
      [4, 4, 11, 50],
      [4, 6, 11, 50],
      [4.5, 6, 13, 50],
      [5, 5, 14, 50],
      [5, 6, 13, 50],
      [5.5, 6, 14, 50],
      [6, 6, 16, 50],
      [8, 8, 21, 60],
      [3, 3, 9, 75],
      [3, 4, 9, 75],
      [4, 4, 16, 75],
      [5, 5, 20, 75],
      [6, 6, 25, 75],
      [8, 8, 25, 75],
      [9, 10, 23, 75],
      [10, 10, 25, 75],
      [11, 12, 25, 75],
      [12, 12, 30, 75],
      [3, 3, 12, 100],
      [4, 4, 20, 100],
      [5, 5, 25, 100],
      [6, 6, 30, 100],
      [8, 8, 30, 100],
      [10, 10, 40, 100],
      [12, 12, 45, 100],
      [14, 14, 40, 100],
      [16, 16, 45, 100],
      [18, 18, 45, 100],
      [20, 20, 45, 100],
      [6, 6, 35, 150],
      [8, 8, 40, 150],
      [10, 10, 55, 150],
      [12, 12, 55, 150],
      [14, 14, 60, 150],
      [16, 16, 70, 150],
      [18, 18, 70, 150],
      [20, 20, 80, 150]
    ]
  },
  {
    code: "DPN_55HRC_4F",
    data: [
      [1, 4, 3, 50],
      [1.5, 4, 4, 50],
      [2, 4, 6, 50],
      [2.5, 4, 8, 50],
      [3, 4, 9, 50],
      [3.5, 4, 10, 50],
      [4, 4, 12, 50],
      [1, 6, 3.5, 50],
      [1.5, 6, 5, 50],
      [2, 6, 6, 50],
      [2.5, 6, 6.5, 50],
      [3, 6, 8, 50],
      [3.5, 6, 9, 50],
      [4, 6, 13, 50],
      [5, 6, 13.5, 50],
      [5.5, 6, 13.5, 50],
      [6, 6, 16, 50],
      [7, 8, 17, 60],
      [8, 8, 20, 60],
      [3, 3, 12, 75],
      [4, 4, 16.5, 75],
      [5, 5, 20.5, 75],
      [6, 6, 25, 75],
      [8, 8, 25, 75],
      [8.5, 10, 21.5, 75],
      [9, 10, 23, 75],
      [9.5, 10, 24, 75],
      [10, 10, 26, 75],
      [11, 12, 29, 75],
      [12, 12, 31, 75],
      [4, 4, 22, 100],
      [6, 6, 30, 100],
      [8, 8, 35, 100],
      [10, 10, 40, 100],
      [12, 12, 45.5, 100],
      [13, 14, 40, 100],
      [14, 14, 40, 100],
      [16, 16, 45, 100],
      [18, 18, 45, 100],
      [20, 20, 45, 100],
      [6, 6, 40, 150],
      [8, 8, 40, 150],
      [10, 10, 50, 150],
      [12, 12, 55, 150],
      [14, 14, 60, 150],
      [16, 16, 70, 150],
      [18, 18, 70, 150],
      [20, 20, 70, 150],
      [8, 8, 70, 200],
      [10, 10, 70, 200],
      [12, 12, 70, 200],
      [16, 16, 70, 200],
      [18, 18, 80, 200]
    ]
  },
  {
    code: "DPN_60HRC_4F",
    data: [
      [1, 4, 3.5, 50],
      [1.5, 4, 4.4, 50],
      [2, 4, 6.5, 50],
      [2.5, 4, 7.2, 50],
      [3, 3, 8.3, 50],
      [3.5, 4, 10.6, 50],
      [4, 4, 11.5, 50],
      [5, 6, 13.6, 50],
      [6, 6, 15.4, 50],
      [8, 8, 20.5, 50],
      [4, 4, 15.5, 75],
      [5, 5, 20.4, 75],
      [8, 8, 25.6, 75],
      [10, 10, 25.7, 75],
      [12, 12, 30.5, 75],
      [4, 4, 16.4, 100],
      [5, 5, 25.5, 100],
      [6, 6, 25.7, 100],
      [8, 8, 32.8, 100],
      [10, 10, 40.9, 100],
      [12, 12, 45.5, 100]
    ]
  },
  {
    code: "DPN_65HRC_4F",
    data: [
      [1, 4, 3.5, 50],
      [1.5, 4, 5, 50],
      [2, 4, 6.5, 50],
      [2.5, 4, 8, 50],
      [3, 4, 8, 50],
      [3.5, 4, 11, 50],
      [4, 4, 11, 50],
      [1, 6, 3, 50],
      [1.5, 6, 4, 50],
      [2, 6, 5, 50],
      [2.5, 6, 6, 50],
      [3, 6, 8, 50],
      [3.5, 6, 10, 50],
      [4, 6, 11, 50],
      [5, 6, 13.5, 50],
      [6, 6, 15.5, 50],
      [7, 8, 18, 60],
      [8, 8, 20, 60],
      [4, 4, 17, 75],
      [6, 6, 25, 75],
      [7, 8, 25, 75],
      [8, 8, 26, 75],
      [10, 10, 26, 75],
      [12, 12, 31.5, 75],
      [4, 4, 25, 100],
      [6, 6, 30, 100],
      [8, 8, 31, 100],
      [10, 10, 41, 100],
      [12, 12, 46, 100],
      [14, 14, 35, 100],
      [16, 16, 40, 100],
      [18, 18, 40, 100],
      [20, 20, 40, 100],
      [8, 8, 40, 150],
      [10, 10, 50, 150],
      [12, 12, 50, 150],
      [16, 16, 70, 150],
      [18, 18, 80, 150],
      [20, 20, 80, 150]
    ]
  },
  {
    code: "DPN_65HRC_4F_hard",
    data: [
      [1, 4, 3, 50],
      [1.5, 4, 4, 50],
      [2, 4, 5, 50],
      [2.5, 4, 6, 50],
      [3, 4, 8, 50],
      [4, 4, 10, 50],
      [6, 6, 15, 50],
      [6, 6, 15, 75],
      [8, 8, 20, 75],
      [10, 10, 25, 75],
      [12, 12, 30, 75],
      [6, 6, 15, 100],
      [8, 8, 20, 100],
      [10, 10, 25, 100],
      [12, 12, 30, 100]
    ]
  }
];

export default items;

export const daoPhayNgonItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);

export const getSpecByCode = (code) => findSpecDDLByCode(specs, code);
