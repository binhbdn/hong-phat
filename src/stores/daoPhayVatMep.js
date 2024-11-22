import { mapSearchProps } from "@/stores/search";

const items = [
  {
    category: "pDaoPhay",
    cutStyle: "csChamfer",
    routeName: "pDaoPhayVatMepCT",
    isTypical: false,
    code: "DPVM_55HRC_2F",
    hardness: "55HRC",
    name: {
      vi: "55HRC - Dao phay vát mép 2F 90°",
      en: "55HRC - Chamfer end mill 2F 90°"
    },
    images: ["/dao_phay_vat_mep/55HRC_2F.webp"],
    flutes: 2,
    prices: {
      current: 0,
      min: 98000,
      max: 287000
    },
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      en: "Suitable for processing iron, steel, copper, cast iron…"
    },
    material: "CarbideTungsten",
    coating: "TiSiN",
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
      max: 75
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csChamfer",
    routeName: "pDaoPhayVatMepCT",
    isTypical: true,
    code: "DPVM_55HRC_3F",
    hardness: "55HRC",
    name: {
      vi: "55HRC - Dao phay vát mép 3F 90°",
      en: "55HRC - Chamfer end mill 3F 90°"
    },
    images: ["/dao_phay_vat_mep/55HRC_3F.webp"],
    flutes: 3,
    prices: {
      current: 0,
      min: 98000,
      max: 287000
    },
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      en: "Suitable for processing iron, steel, copper, cast iron…"
    },
    material: "CarbideTungsten",
    coating: "AlTiN",
    bladeDiameter: {
      min: 3,
      max: 12
    },
    handleDiameter: {
      min: 3,
      max: 12
    },
    overallLength: {
      min: 50,
      max: 60
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csChamfer",
    routeName: "pDaoPhayVatMepCT",
    isTypical: true,
    code: "DPVM_55HRC_2F_Al",
    hardness: "55HRC",
    name: {
      vi: "55HRC - Dao phay vát mép 2F 90° - gia công nhôm",
      en: "55HRC - Chamfer end mill 2F 90° - aluminum machining"
    },
    images: ["/dao_phay_vat_mep/55HRC_2F_Al.webp"],
    flutes: 2,
    prices: {
      current: 0,
      min: 34000,
      max: 1562000
    },
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, hợp kim nhôm…",
      en: "High gloss, suitable for processing aluminum, aluminum alloy…"
    },
    material: "CarbideTungsten",
    coating: "Al",
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
      max: 75
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csChamfer",
    routeName: "pDaoPhayVatMepCT",
    isTypical: false,
    code: "DPVM_55HRC_3F_Al",
    hardness: "55HRC",
    name: {
      vi: "55HRC - Dao phay vát mép 3F 90° - gia công nhôm",
      en: "55HRC - Chamfer end mill 3F 90° - aluminum machining"
    },
    images: ["/dao_phay_vat_mep/55HRC_3F_Al.webp"],
    flutes: 3,
    prices: {
      current: 0,
      min: 34000,
      max: 1562000
    },
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, hợp kim nhôm…",
      en: "High gloss, suitable for processing aluminum, aluminum alloy…"
    },
    material: "CarbideTungsten",
    coating: "Al",
    bladeDiameter: {
      min: 3,
      max: 12
    },
    handleDiameter: {
      min: 3,
      max: 12
    },
    overallLength: {
      min: 50,
      max: 60
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csChamfer",
    routeName: "pDaoPhayVatMepCT",
    isTypical: false,
    code: "DPVM_55HRC_1F_CS",
    hardness: "55HRC",
    name: {
      vi: "55HRC - Dao phay vát mép 1F 90° - hình nấm",
      en: "55HRC - Chamfer end mill 1F 90° - mushroom shape"
    },
    images: ["/dao_phay_vat_mep/55HRC_1F_CS.webp"],
    flutes: 1,
    prices: {
      current: 0,
      min: 125000,
      max: 515000
    },
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, hợp kim nhôm…",
      en: "High gloss, suitable for processing aluminum, aluminum alloy…"
    },
    material: "HSS",
    coating: "Al",
    bladeDiameter: {
      min: 8.3,
      max: 35
    },
    handleDiameter: {
      min: 6,
      max: 12
    },
    overallLength: {
      min: 50,
      max: 82
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csChamfer",
    routeName: "pDaoPhayVatMepCT",
    isTypical: false,
    code: "DPVM_55HRC_3F_CS",
    hardness: "55HRC",
    name: {
      vi: "55HRC - Dao phay vát mép 3F 90° - hình nấm",
      en: "55HRC - Chamfer end mill 3F 90° - mushroom shape"
    },
    images: ["/dao_phay_vat_mep/55HRC_3F_CS.webp"],
    flutes: 3,
    prices: {
      current: 0,
      min: 125000,
      max: 515000
    },
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, hợp kim nhôm…",
      en: "High gloss, suitable for processing aluminum, aluminum alloy…"
    },
    material: "HSS",
    coating: "Al",
    bladeDiameter: {
      min: 8.3,
      max: 35
    },
    handleDiameter: {
      min: 6,
      max: 12
    },
    overallLength: {
      min: 50,
      max: 82
    }
  }
];

export default items;

export const daoPhayVatMepItems = mapSearchProps(items);
