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
      en: "45HRC - End mill 3F - aluminum machining"
    },
    images: ["/dao_phay_ngon/55HRC_3F.webp", "/dao_phay_ngon/55hrc_3f/1.webp", "/dao_phay_ngon/55hrc_3f/2.webp"],
    flutes: 3,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 115000,
      max: 1412000
    },
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, nhựa…",
      en: "High gloss, suitable for processing aluminum, plastic…"
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
      en: "55HRC - End mill 3F - aluminum machining"
    },
    images: ["/dao_phay_ngon/55HRC_3F.webp"],
    flutes: 3,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 47000,
      max: 1568000
    },
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, nhựa…",
      en: "High gloss, suitable for processing aluminum, plastic…"
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
      en: "45HRC - End mill 2F"
    },
    images: ["/dao_phay_ngon/45HRC_2F.webp"],
    flutes: 2,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 34000,
      max: 1562000
    },
    description: {
      vi: "Thích hợp gia công thép thông thường, gang…",
      en: "Suitable for processing common steel, cast iron…"
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
      en: "45HRC - End mill 4F"
    },
    images: ["/dao_phay_ngon/45HRC_4F.webp"],
    flutes: 4,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 34000,
      max: 1562000
    },
    description: {
      vi: "Thích hợp gia công thép thông thường, gang…",
      en: "Suitable for processing common steel, cast iron…"
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
      en: "55HRC - End mill 2F"
    },
    images: ["/dao_phay_ngon/55HRC_2F.webp"],
    flutes: 2,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 34000,
      max: 1853000
    },
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      en: "Suitable for processing iron, steel, copper, cast iron…"
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
      en: "55HRC - End mill 4F"
    },
    images: ["/dao_phay_ngon/55HRC_4F.webp"],
    flutes: 4,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 34000,
      max: 1853000
    },
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      en: "Suitable for processing iron, steel, copper, cast iron…"
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
      vi: "60HRC - Dao phay ngón 4F",
      en: "60HRC - End mill 4F"
    },
    images: ["/dao_phay_ngon/60HRC_4F.webp"],
    flutes: 4,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 900000,
      max: 6030000
    },
    description: {
      vi: "Thích hợp gia công gang, thép cứng, thép không gỉ…",
      en: "Suitable for processing cast iron, hard steel, stainless steel…"
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
      max: 30.5
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
      en: "65HRC - End mill 4F"
    },
    images: ["/dao_phay_ngon/65HRC_4F.webp"],
    flutes: 4,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 1190000,
      max: 10430000
    },
    description: {
      vi: "Thích hợp gia công gang, thép cứng, thép không gỉ…",
      en: "Suitable for processing cast iron, hard steel, stainless steel…"
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
      en: "65HRC - End mill 4F - harden"
    },
    images: ["/dao_phay_ngon/65HRC_4F_hard.webp"],
    flutes: 4,
    helixAngle: 35,
    prices: {
      current: 0,
      min: 1190000,
      max: 10430000
    },
    description: {
      vi: "Thích hợp gia công gang, thép cứng, thép không gỉ…",
      en: "Suitable for processing cast iron, hard steel, stainless steel…"
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
    data: []
  },
  {
    code: "DPN_45HRC_2F",
    data: []
  },
  {
    code: "DPN_45HRC_4F",
    data: []
  },
  {
    code: "DPN_55HRC_2F",
    data: []
  },
  {
    code: "DPN_55HRC_4F",
    data: []
  },
  {
    code: "DPN_60HRC_4F",
    data: []
  },
  {
    code: "DPN_65HRC_4F",
    data: []
  },
  {
    code: "DPN_65HRC_4F_hard",
    data: []
  }
];

export default items;

export const getItemByCode = (code) => items.find((item) => item.code === code);

export const getSpecByCode = (code) => {
  const spec = specs.find((item) => item.code === code);
  if (!spec) return [];

  const list = spec.data.map((item) => ({
    code: `D${item[0]}*D${item[1]}*${item[3]}`,
    bladeDiameter: item[0],
    handleDiameter: item[1],
    cuttingLength: item[2],
    overallLength: item[3]
  }));

  return list;
};
