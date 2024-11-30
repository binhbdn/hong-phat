import { listViewDDL } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";
import { detailsViewHFAAvsDDLL, detailsViewHFAAvsDDL, findSpecDDLAByCode, findSpecDLAByCode } from "@/stores/daoPhay";

const items = [
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayVatMepCT",
    isTypical: false,
    code: "DPVM_55HRC_2F",
    images: ["/dao_phay_vat_mep/55HRC_2F.webp", "/dao_phay_vat_mep/55hrc_2f/1.webp"],
    name: {
      vi: "55HRC - Dao phay vát mép 2F 90°",
      cn: "55HRC - 倒角刀（定心钻）2F 90°"
    },
    prices: {
      current: 0,
      min: 98000,
      max: 287000
    },
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      cn: "适用于加工铁、钢、铜、铸铁…"
    },
    descriptions: {
      vi: ["Thiết kế 2 me, góc lưỡi cắt 90°, phù hợp vát mép lỗ và mép cạnh.", "Chất liệu hợp kim, thích hợp gia công sắt, thép, đồng, gang…"],
      cn: ["双刃设计，90°刀刃角，适合孔口倒角及边缘加工。", "合金材质，适合加工铁、钢、铜、铸铁材料。"]
    },
    seri: "55HRC",
    specs: "D1-D12",
    brand: null,
    origin: "cn",
    listView: listViewDDL,
    detailsView: detailsViewHFAAvsDDLL,
    // extra data
    cutStyle: "csChamfer",
    hardness: "55HRC",
    flutes: 2,
    flutesF: "2F",
    helixAngle: "45°",
    noseAngle: "90°",
    material: "CarbideTungsten",
    processingMaterials: "PMK",
    coating: "TiSiN",
    bladeDiameter: "D1-D12",
    handleDiameter: "D4-D12",
    cuttingLength: "2-22",
    overallLength: "50-75"
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayVatMepCT",
    isTypical: true,
    code: "DPVM_55HRC_3F",
    images: ["/dao_phay_vat_mep/55HRC_3F.webp", "/dao_phay_vat_mep/55hrc_3f/1.webp"],
    name: {
      vi: "55HRC - Dao phay vát mép 3F 90°",
      cn: "55HRC - 倒角刀（定心钻）3F 90°"
    },
    prices: {
      current: 0,
      min: 98000,
      max: 287000
    },
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      cn: "适用于加工铁、钢、铜、铸铁…"
    },
    descriptions: {
      vi: ["Thiết kế 3 me, góc lưỡi cắt 90°, phù hợp vát mép lỗ và mép cạnh.", "Chất liệu hợp kim, thích hợp gia công sắt, thép, đồng, gang…"],
      cn: ["三刃设计，90°刀刃角，适合孔口倒角及边缘加工。", "合金材质，适合加工铁、钢、铜、铸铁材料。"]
    },
    seri: "55HRC",
    specs: "D3-D12",
    brand: null,
    origin: "cn",
    listView: listViewDDL,
    detailsView: detailsViewHFAAvsDDLL,
    // extra data
    cutStyle: "csChamfer",
    hardness: "55HRC",
    flutes: 3,
    flutesF: "3F",
    helixAngle: "45°",
    noseAngle: "90°",
    material: "CarbideTungsten",
    processingMaterials: "PMK",
    coating: "AlTiN",
    bladeDiameter: "D3-D12",
    handleDiameter: "D3-D12",
    cuttingLength: "9-18",
    overallLength: "50-60"
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayVatMepCT",
    isTypical: true,
    code: "DPVM_55HRC_2F_Al",
    images: ["/dao_phay_vat_mep/55HRC_2F_Al.webp", "/dao_phay_vat_mep/55hrc_2f_al/1.webp", "/dao_phay_vat_mep/55hrc_2f_al/2.webp"],
    name: {
      vi: "55HRC - Dao phay vát mép 2F 90° - gia công nhôm",
      cn: "55HRC - 倒角刀（定心钻）2F 90° - 铝加工"
    },
    prices: {
      current: 0,
      min: 34000,
      max: 1562000
    },
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, hợp kim nhôm…",
      cn: "高光泽，适合加工铝、铝合金…"
    },
    descriptions: {
      vi: ["Thiết kế 2 me, góc lưỡi cắt 90°, phù hợp vát mép lỗ và mép cạnh.", "Chất liệu hợp kim, thích hợp gia công nhôm, hợp kim nhôm…"],
      cn: ["双刃设计，90°刀刃角，适合孔口倒角及边缘加工。", "合金材质，适合加工铝材及铝合金材料。"]
    },
    seri: "55HRC",
    specs: "D1-D12",
    brand: null,
    origin: "cn",
    listView: listViewDDL,
    detailsView: detailsViewHFAAvsDDLL,
    // extra data
    cutStyle: "csChamfer",
    hardness: "55HRC",
    flutes: 2,
    flutesF: "2F",
    helixAngle: "45°",
    noseAngle: "90°",
    material: "CarbideTungsten",
    processingMaterials: "N",
    coating: "Al",
    bladeDiameter: "D1-D12",
    handleDiameter: "D4-D12",
    cuttingLength: "2-22",
    overallLength: "50-75"
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayVatMepCT",
    isTypical: false,
    code: "DPVM_55HRC_3F_Al",
    images: ["/dao_phay_vat_mep/55HRC_3F_Al.webp", "/dao_phay_vat_mep/55hrc_3f_al/1.webp"],
    name: {
      vi: "55HRC - Dao phay vát mép 3F 90° - gia công nhôm",
      cn: "55HRC - 倒角刀（定心钻）3F 90° - 铝加工"
    },
    prices: {
      current: 0,
      min: 34000,
      max: 1562000
    },
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, hợp kim nhôm…",
      cn: "高光泽，适合加工铝、铝合金…"
    },
    descriptions: {
      vi: ["Thiết kế 3 me, góc lưỡi cắt 90°, phù hợp vát mép lỗ và mép cạnh.", "Chất liệu hợp kim, thích hợp gia công nhôm, hợp kim nhôm…"],
      cn: ["三刃设计，90°刀刃角，适合孔口倒角及边缘加工。", "合金材质，适合加工铝材及铝合金材料。"]
    },
    seri: "55HRC",
    specs: "D3-D12",
    brand: null,
    origin: "cn",
    listView: listViewDDL,
    detailsView: detailsViewHFAAvsDDLL,
    // extra data
    cutStyle: "csChamfer",
    hardness: "55HRC",
    flutes: 3,
    flutesF: "3F",
    helixAngle: "45°",
    noseAngle: "90°",
    material: "CarbideTungsten",
    processingMaterials: "N",
    coating: "Al",
    bladeDiameter: "D3-D12",
    handleDiameter: "D3-D12",
    cuttingLength: "9-18",
    overallLength: "50-60"
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayVatMepHinhNamCT",
    isTypical: false,
    code: "DPVM_55HRC_1F_CS",
    images: ["/dao_phay_vat_mep/55HRC_1F_CS.webp"],
    name: {
      vi: "55HRC - Dao phay vát mép 1F 90° - hình nấm",
      cn: "55HRC - 倒角刀（定心钻）1F 90° - 蘑菇形状"
    },
    prices: {
      current: 0,
      min: 125000,
      max: 515000
    },
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, hợp kim nhôm…",
      cn: "高光泽，适合加工铝、铝合金…"
    },
    descriptions: {
      vi: ["Thiết kế 1 me, hình nấm, góc lưỡi cắt 90°, phù hợp vát mép lỗ và mép cạnh.", "Chất liệu hợp kim, thích hợp gia công nhôm, hợp kim nhôm…"],
      cn: ["单刃设计，蘑菇形，90°刀刃角，适合孔口倒角及边缘加工。", "合金材质，适合加工铝及铝合金材料。"]
    },
    seri: "55HRC",
    specs: "D8.3-D35",
    brand: null,
    origin: "cn",
    listView: listViewDDL,
    detailsView: detailsViewHFAAvsDDL,
    // extra data
    cutStyle: "csChamfer",
    hardness: "55HRC",
    flutes: 1,
    flutesF: "1F",
    helixAngle: "45°",
    noseAngle: "90°",
    material: "HSS",
    processingMaterials: "N",
    coating: "Al",
    bladeDiameter: "D8.3-D35",
    handleDiameter: "D6-D12",
    cuttingLength: null,
    overallLength: "50-82"
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayVatMepHinhNamCT",
    isTypical: false,
    code: "DPVM_55HRC_3F_CS",
    images: ["/dao_phay_vat_mep/55HRC_3F_CS.webp"],
    name: {
      vi: "55HRC - Dao phay vát mép 3F 90° - hình nấm",
      cn: "55HRC - 倒角刀（定心钻）3F 90° - 蘑菇形状"
    },
    prices: {
      current: 0,
      min: 125000,
      max: 515000
    },
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, hợp kim nhôm…",
      cn: "高光泽，适合加工铝、铝合金…"
    },
    descriptions: {
      vi: ["Thiết kế 3 me, hình nấm, góc lưỡi cắt 90°, phù hợp vát mép lỗ và mép cạnh.", "Chất liệu hợp kim, thích hợp gia công nhôm, hợp kim nhôm…"],
      cn: ["三刃设计，蘑菇形，90°刀刃角，适合孔口倒角及边缘加工。", "合金材质，适合加工铝及铝合金材料。"]
    },
    seri: "55HRC",
    specs: "D8.3-D35",
    brand: null,
    origin: "cn",
    listView: listViewDDL,
    detailsView: detailsViewHFAAvsDDL,
    // extra data
    cutStyle: "csChamfer",
    hardness: "55HRC",
    flutes: 3,
    flutesF: "3F",
    helixAngle: "45°",
    noseAngle: "90°",
    material: "HSS",
    processingMaterials: "N",
    coating: "Al",
    bladeDiameter: "D8.3-D35",
    handleDiameter: "D6-D12",
    cuttingLength: null,
    overallLength: "50-82"
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
