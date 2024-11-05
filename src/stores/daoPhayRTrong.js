const items = [
  {
    isTypical: true,
    code: "DPRT_55HRC_4F",
    name: {
      vi: "Dao phay R trong 55HRC-4F",
      en: "Corner rounding end mill 55HRC-4F"
    },
    imgSrc: "/img/dao_phay_r_trong/55HRC_4F.avif",
    flutes: 4,
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      en: "Suitable for processing iron, steel, copper, cast iron…"
    },
    material: "CarbideTungsten",
    coating: "TiSiN",
    bladeDiameter: {
      min: 2,
      max: 3
    },
    handleDiameter: {
      min: 4,
      max: 12
    },
    overallLength: {
      min: 50,
      max: 75
    }
  },
  {
    isTypical: false,
    code: "DPRT_55HRC_4F_Al",
    name: {
      vi: "Dao phay R trong 55HRC-4F-Al - gia công nhôm",
      en: "Corner rounding end mill 55HRC-4F-Al - aluminum machining"
    },
    imgSrc: "/img/dao_phay_r_trong/55HRC_4F_Al.avif",
    flutes: 4,
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, nhựa…",
      en: "High gloss, suitable for processing aluminum, plastic…"
    },
    material: "CarbideTungsten",
    coating: "Al",
    bladeDiameter: {
      min: 2,
      max: 3
    },
    handleDiameter: {
      min: 4,
      max: 12
    },
    overallLength: {
      min: 50,
      max: 75
    }
  }
];

export default items;
