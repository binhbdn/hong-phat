import { listViewRDL } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";
import { detailsViewHFAvsRDLL, findSpecRDLByCode } from "@/stores/daoPhay";

const items = [
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayCauCT",
    isTypical: false,
    code: "DPC_45HRC_2F",
    images: ["/dao_phay_cau/45HRC_2F.webp", "/dao_phay_cau/45hrc_2f/1.webp", "/dao_phay_cau/45hrc_2f/2.webp"],
    name: {
      vi: "45HRC - Dao phay cầu 2F",
      cn: "45HRC - 球刀 2F"
    },
    prices: {
      current: 0,
      min: 65000,
      max: 1191000
    },
    description: {
      vi: "Thích hợp gia công thép thông thường, gang…",
      cn: "适用于加工普通钢、铸铁…"
    },
    descriptions: {
      vi: [
        "Thiết kế mũi bán cầu, chuyên gia công bề mặt cong và chi tiết 3D.",
        "Thiết kế 2 me, góc xoắn 35°, dải kích thước đa dạng.",
        "Vật liệu hợp kim nguyên khối, lớp phủ Nhôm Titan Nitride tăng độ cứng và giảm mài mòn."
      ],
      cn: ["半球刀头设计，专用于曲面加工和3D零件。", "双刃设计，35°螺旋角，多种尺寸选择。", "整体合金材料，铝钛氮化物涂层提高硬度并减少磨损。"]
    },
    seri: "45HRC",
    specs: "R0.5-R10",
    brand: null,
    origin: "cn",
    listView: listViewRDL,
    detailsView: detailsViewHFAvsRDLL,
    // extra data
    cutStyle: "csBall",
    hardness: "45HRC",
    flutes: 2,
    flutesF: "2F",
    helixAngle: "35°",
    material: "CarbideTungsten",
    processingMaterials: "PMK",
    coating: "AlTiN",
    bladeRadius: "R0.5-R10",
    handleDiameter: "D4-D20",
    cuttingLength: "2-30",
    overallLength: "50-150"
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayCauCT",
    isTypical: true,
    code: "DPC_55HRC_2F",
    images: ["/dao_phay_cau/55HRC_2F.webp", "/dao_phay_cau/55hrc_2f/1.webp", "/dao_phay_cau/55hrc_2f/2.webp"],
    name: {
      vi: "55HRC - Dao phay cầu 2F",
      cn: "55HRC - 球刀 2F"
    },
    prices: {
      current: 0,
      min: 98000,
      max: 1382000
    },
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      cn: "适用于加工铁、钢、铜、铸铁…"
    },
    descriptions: {
      vi: [
        "Thiết kế mũi bán cầu, chuyên gia công bề mặt cong và chi tiết 3D.",
        "Thiết kế 2 me, góc xoắn 35°, dải kích thước đa dạng.",
        "Vật liệu hợp kim nguyên khối, lớp phủ Titan Silic Nitride tăng độ cứng và giảm mài mòn."
      ],
      cn: ["半球刀头设计，专用于曲面加工和3D零件。", "双刃设计，35°螺旋角，多种尺寸选择。", "整体合金材料，钛硅氮化物涂层提高硬度并减少磨损。"]
    },
    seri: "55HRC",
    specs: "R0.1-R10",
    brand: null,
    origin: "cn",
    listView: listViewRDL,
    detailsView: detailsViewHFAvsRDLL,
    // extra data
    cutStyle: "csBall",
    hardness: "55HRC",
    flutes: 2,
    flutesF: "2F",
    helixAngle: "35°",
    material: "CarbideTungsten",
    processingMaterials: "PMK",
    coating: "TiSiN",
    bladeRadius: "R0.1-R10",
    handleDiameter: "D4-D20",
    cuttingLength: "1-40",
    overallLength: "50-150"
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayCauCT",
    isTypical: true,
    code: "DPC_65HRC_2F",
    images: ["/dao_phay_cau/65HRC_2F.webp", "/dao_phay_cau/65hrc_2f/1.webp", "/dao_phay_cau/65hrc_2f/2.webp"],
    name: {
      vi: "65HRC - Dao phay cầu 2F",
      cn: "65HRC - 球刀 2F"
    },
    prices: {
      current: 0,
      min: 142000,
      max: 1145000
    },
    description: {
      vi: "Thích hợp gia công thép, gang…",
      cn: "适用于加工钢、铸铁…"
    },
    descriptions: {
      vi: [
        "Thiết kế mũi bán cầu, chuyên gia công bề mặt cong và chi tiết 3D.",
        "Thiết kế 2 me, góc xoắn 35°, dải kích thước đa dạng.",
        "Vật liệu hợp kim nguyên khối, lớp phủ Nano tăng độ cứng và giảm mài mòn."
      ],
      cn: ["半球刀头设计，专用于曲面加工和3D零件。", "双刃设计，35°螺旋角，多种尺寸选择。", "整体合金材料，纳米复合涂层提高硬度并减少磨损。"]
    },
    seri: "65HRC",
    specs: "R0.5-R10",
    brand: null,
    origin: "cn",
    listView: listViewRDL,
    detailsView: detailsViewHFAvsRDLL,
    // extra data
    cutStyle: "csBall",
    hardness: "65HRC",
    flutes: 2,
    flutesF: "2F",
    helixAngle: "35°",
    material: "CarbideTungsten",
    processingMaterials: "PMKSH",
    coating: "NACO",
    bladeRadius: "R0.5-R10",
    handleDiameter: "D4-D20",
    cuttingLength: "2.5-30",
    overallLength: "50-150"
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayCauCT",
    isTypical: false,
    code: "DPC_65HRC_2F_hard",
    images: ["/dao_phay_cau/65HRC_2F_hard.webp", "/dao_phay_cau/65hrc_2f_hard/1.webp", "/dao_phay_cau/65hrc_2f_hard/2.webp"],
    name: {
      vi: "65HRC - Dao phay cầu 2F - tăng cứng",
      cn: "65HRC - 球刀 2F - 硬化"
    },
    prices: {
      current: 0,
      min: 142000,
      max: 1145000
    },
    description: {
      vi: "Thích hợp gia công gang, thép cứng, thép không gỉ…",
      cn: "适用于加工铸铁、硬钢、不锈钢…"
    },
    descriptions: {
      vi: [
        "Thiết kế mũi bán cầu, chuyên gia công bề mặt cong và chi tiết 3D.",
        "Thiết kế 2 me, góc xoắn 35°, dải kích thước đa dạng.",
        "Vật liệu hợp kim nguyên khối, lớp phủ Nhôm Chrome Silic Nitride tăng độ cứng và giảm mài mòn."
      ],
      cn: ["半球刀头设计，专用于曲面加工和3D零件。", "双刃设计，35°螺旋角，多种尺寸选择。", "整体合金材料，铝铬硅氮化物涂层提高硬度并减少磨损。"]
    },
    seri: "65HRC",
    specs: "R0.5-R6",
    brand: null,
    origin: "cn",
    listView: listViewRDL,
    detailsView: detailsViewHFAvsRDLL,
    // extra data
    cutStyle: "csBall",
    hardness: "65HRC",
    flutes: 2,
    flutesF: "2F",
    helixAngle: "35°",
    material: "CarbideTungsten",
    processingMaterials: "PMKSH",
    coating: "AlCrSiN",
    bladeRadius: "R0.5-R6",
    handleDiameter: "D4-D18",
    cuttingLength: "2-18",
    overallLength: "50-100"
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

export const getSpecByCode = (code) => findSpecRDLByCode(specs, code);
