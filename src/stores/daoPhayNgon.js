const items = [
  {
    isTypical: false,
    code: "DPN_45HRC_3F",
    name: {
      vi: "Dao phay ngón 45HRC-3F - gia công nhôm",
      en: "End mill 45HRC-3F - aluminum machining"
    },
    imgSrc: "/img/dao_phay_ngon/55HRC_3F.avif",
    flutes: 3,
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, nhựa…",
      en: "High gloss, suitable for processing aluminum, plastic…"
    },
    material: "CarbideTungsten",
    coating: "Al",
    bladeDiameter: {
      min: 1,
      max: 20
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    overallLength: {
      min: 50,
      max: 150
    }
  },
  {
    isTypical: true,
    code: "DPN_55HRC_3F",
    name: {
      vi: "Dao phay ngón 55HRC-3F - gia công nhôm",
      en: "End mill 55HRC-3F - aluminum machining"
    },
    imgSrc: "/img/dao_phay_ngon/55HRC_3F.avif",
    flutes: 3,
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, nhựa…",
      en: "High gloss, suitable for processing aluminum, plastic…"
    },
    material: "CarbideTungsten",
    coating: "Al",
    bladeDiameter: {
      min: 1,
      max: 20
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    overallLength: {
      min: 50,
      max: 200
    }
  },
  {
    isTypical: false,
    code: "DPN_45HRC_2F",
    name: {
      vi: "Dao phay ngón 45HRC-2F",
      en: "End mill 45HRC-2F"
    },
    imgSrc: "/img/dao_phay_ngon/45HRC_2F.avif",
    flutes: 2,
    description: {
      vi: "Thích hợp gia công thép thông thường, gang…",
      en: "Suitable for processing common steel, cast iron…"
    },
    material: "CarbideTungsten",
    coating: "AlTiN",
    bladeDiameter: {
      min: 1,
      max: 20
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    overallLength: {
      min: 50,
      max: 150
    }
  },
  {
    isTypical: true,
    code: "DPN_45HRC_4F",
    name: {
      vi: "Dao phay ngón 45HRC-4F",
      en: "End mill 45HRC-4F"
    },
    imgSrc: "/img/dao_phay_ngon/45HRC_4F.avif",
    flutes: 4,
    description: {
      vi: "Thích hợp gia công thép thông thường, gang…",
      en: "Suitable for processing common steel, cast iron…"
    },
    material: "CarbideTungsten",
    coating: "AlTiN",
    bladeDiameter: {
      min: 1,
      max: 20
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    overallLength: {
      min: 50,
      max: 150
    }
  },
  {
    isTypical: false,
    code: "DPN_55HRC_2F",
    name: {
      vi: "Dao phay ngón 55HRC-2F",
      en: "End mill 55HRC-2F"
    },
    imgSrc: "/img/dao_phay_ngon/55HRC_2F.avif",
    flutes: 2,
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      en: "Suitable for processing iron, steel, copper, cast iron…"
    },
    material: "CarbideTungsten",
    coating: "TiSiN",
    bladeDiameter: {
      min: 0.1,
      max: 20
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    overallLength: {
      min: 50,
      max: 150
    }
  },
  {
    isTypical: true,
    code: "DPN_55HRC_4F",
    name: {
      vi: "Dao phay ngón 55HRC-4F",
      en: "End mill 55HRC-4F"
    },
    imgSrc: "/img/dao_phay_ngon/55HRC_4F.avif",
    flutes: 4,
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      en: "Suitable for processing iron, steel, copper, cast iron…"
    },
    material: "CarbideTungsten",
    coating: "TiSiN",
    bladeDiameter: {
      min: 1,
      max: 20
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    overallLength: {
      min: 50,
      max: 200
    }
  },
  {
    isTypical: false,
    code: "DPN_60HRC_4F",
    name: {
      vi: "Dao phay ngón 60HRC-4F",
      en: "End mill 60HRC-4F"
    },
    imgSrc: "/img/dao_phay_ngon/60HRC_4F.avif",
    flutes: 4,
    description: {
      vi: "Thích hợp gia công gang, thép cứng, thép không gỉ…",
      en: "Suitable for processing cast iron, hard steel, stainless steel…"
    },
    material: "CarbideTungsten",
    coating: "NACO",
    bladeDiameter: {
      min: 1,
      max: 12
    },
    handleDiameter: {
      min: 4,
      max: 12
    },
    overallLength: {
      min: 50,
      max: 100
    }
  },
  {
    isTypical: true,
    code: "DPN_65HRC_4F",
    name: {
      vi: "Dao phay ngón 65HRC-4F",
      en: "End mill 65HRC-4F"
    },
    imgSrc: "/img/dao_phay_ngon/65HRC_4F.avif",
    flutes: 4,
    description: {
      vi: "Thích hợp gia công gang, thép cứng, thép không gỉ…",
      en: "Suitable for processing cast iron, hard steel, stainless steel…"
    },
    material: "CarbideTungsten",
    coating: "NACO",
    bladeDiameter: {
      min: 1,
      max: 20
    },
    handleDiameter: {
      min: 4,
      max: 20
    },
    overallLength: {
      min: 50,
      max: 150
    }
  },
  {
    isTypical: false,
    code: "DPN_65HRC_hard_4F",
    name: {
      vi: "Dao phay ngón 65HRC-4F - tăng cứng",
      en: "End mill 65HRC-4F - harden"
    },
    imgSrc: "/img/dao_phay_ngon/65HRC_hard_4F.avif",
    flutes: 4,
    description: {
      vi: "Thích hợp gia công gang, thép cứng, thép không gỉ…",
      en: "Suitable for processing cast iron, hard steel, stainless steel…"
    },
    material: "CarbideTungsten",
    coating: "AlCrSiN",
    bladeDiameter: {
      min: 1,
      max: 12
    },
    handleDiameter: {
      min: 4,
      max: 12
    },
    overallLength: {
      min: 50,
      max: 100
    }
  }
];

export default items;
