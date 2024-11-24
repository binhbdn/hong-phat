import { mapSearchProps } from "@/stores/search";
import { findItemByCode, findSpecDDLAByCode, findSpecDLAByCode } from "@/stores/daoPhay";

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
    images: ["/dao_phay_vat_mep/55HRC_2F.webp", "/dao_phay_vat_mep/55hrc_2f/1.webp"],
    flutes: 2,
    helixAngle: 45,
    noseAngle: 90,
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
      max: 22
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
    images: ["/dao_phay_vat_mep/55HRC_3F.webp", "/dao_phay_vat_mep/55hrc_3f/1.webp"],
    flutes: 3,
    helixAngle: 45,
    noseAngle: 90,
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
    processingMaterials: "PMK",
    coating: "AlTiN",
    bladeDiameter: {
      min: 3,
      max: 12
    },
    handleDiameter: {
      min: 3,
      max: 12
    },
    cuttingLength: {
      min: 9,
      max: 18
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
    images: ["/dao_phay_vat_mep/55HRC_2F_Al.webp", "/dao_phay_vat_mep/55hrc_2f_al/1.webp", "/dao_phay_vat_mep/55hrc_2f_al/2.webp"],
    flutes: 2,
    helixAngle: 45,
    noseAngle: 90,
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
    processingMaterials: "N",
    coating: "Al",
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
      max: 22
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
    images: ["/dao_phay_vat_mep/55HRC_3F_Al.webp", "/dao_phay_vat_mep/55hrc_3f_al/1.webp"],
    flutes: 3,
    helixAngle: 45,
    noseAngle: 90,
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
    processingMaterials: "N",
    coating: "Al",
    bladeDiameter: {
      min: 3,
      max: 12
    },
    handleDiameter: {
      min: 3,
      max: 12
    },
    cuttingLength: {
      min: 9,
      max: 18
    },
    overallLength: {
      min: 50,
      max: 60
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csChamfer",
    routeName: "pDaoPhayVatMepHinhNamCT",
    isTypical: false,
    code: "DPVM_55HRC_1F_CS",
    hardness: "55HRC",
    name: {
      vi: "55HRC - Dao phay vát mép 1F 90° - hình nấm",
      en: "55HRC - Chamfer end mill 1F 90° - mushroom shape"
    },
    images: ["/dao_phay_vat_mep/55HRC_1F_CS.webp"],
    flutes: 1,
    helixAngle: 45,
    noseAngle: 90,
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
    processingMaterials: "N",
    coating: "Al",
    bladeDiameter: {
      min: 8.3,
      max: 35
    },
    handleDiameter: {
      min: 6,
      max: 12
    },
    cuttingLength: null,
    overallLength: {
      min: 50,
      max: 82
    }
  },
  {
    category: "pDaoPhay",
    cutStyle: "csChamfer",
    routeName: "pDaoPhayVatMepHinhNamCT",
    isTypical: false,
    code: "DPVM_55HRC_3F_CS",
    hardness: "55HRC",
    name: {
      vi: "55HRC - Dao phay vát mép 3F 90° - hình nấm",
      en: "55HRC - Chamfer end mill 3F 90° - mushroom shape"
    },
    images: ["/dao_phay_vat_mep/55HRC_3F_CS.webp"],
    flutes: 3,
    helixAngle: 45,
    noseAngle: 90,
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
    processingMaterials: "N",
    coating: "Al",
    bladeDiameter: {
      min: 8.3,
      max: 35
    },
    handleDiameter: {
      min: 6,
      max: 12
    },
    cuttingLength: null,
    overallLength: {
      min: 50,
      max: 82
    }
  }
];

const specData2F = [
  [1, 4, 2, 50, 90],
  [1.5, 4, 4, 50, 90],
  [2, 4, 4, 50, 90],
  [2.5, 4, 6, 50, 90],
  [3, 4, 7, 50, 90],
  [4, 4, 7, 50, 90],
  [6, 6, 16, 50, 90],
  [8, 8, 18, 60, 90],
  [10, 10, 20, 75, 90],
  [12, 12, 22, 75, 90]
];

const specData3F = [
  [3, 3, 9, 50, 90],
  [4, 4, 7, 50, 90],
  [6, 6, 10, 50, 90],
  [8, 8, 12, 60, 90],
  [10, 10, 14, 60, 90],
  [12, 12, 18, 60, 90]
];

const specDataCS1F3F = [
  [8.3, 6, 50, 90],
  [10.4, 6, 50, 90],
  [12.4, 8, 56, 90],
  [16.5, 8, 60, 90],
  [20.5, 10, 63, 90],
  [25, 10, 67, 90],
  [30, 12, 71, 90],
  [35, 12, 82, 90]
];

const specs = [
  {
    code: "DPVM_55HRC_2F",
    data: specData2F
  },
  {
    code: "DPVM_55HRC_3F",
    data: specData3F
  },
  {
    code: "DPVM_55HRC_2F_Al",
    data: specData2F
  },
  {
    code: "DPVM_55HRC_3F_Al",
    data: specData3F
  },
  {
    code: "DPVM_55HRC_1F_CS",
    data: specDataCS1F3F
  },
  {
    code: "DPVM_55HRC_3F_CS",
    data: specDataCS1F3F
  }
];

export default items;

export const daoPhayVatMepItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);

export const getSpecByCode = (code) => findSpecDDLAByCode(specs, code);

export const getSpecDLAByCode = (code) => findSpecDLAByCode(specs, code);
