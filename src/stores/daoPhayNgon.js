import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";
import { findSpecDDLByCode } from "@/stores/daoPhay";

const items = [
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayNgonCT",
    isTypical: false,
    code: "DPN_45HRC_3F",
    images: ["/dao_phay_ngon/55HRC_3F.webp", "/dao_phay_ngon/45hrc_3f/1.webp", "/dao_phay_ngon/45hrc_3f/2.webp"],
    name: {
      vi: "45HRC - Dao phay ngón 3F - gia công nhôm",
      cn: "45HRC - 铣刀（平刀）3F - 铝加工"
    },
    prices: {
      current: 0,
      min: 115000,
      max: 1412000
    },
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, nhựa…",
      cn: "高光泽，适合加工铝、塑料…"
    },
    descriptions: {
      vi: [
        "Dụng cụ gia công cơ khí chính xác, sử dụng phổ biến trên máy phay CNC.",
        "Vật liệu nhập khẩu, gia công tỉ mỉ, đảm bảo độ bền và độ bóng cao.",
        "Thiết kế 3 me giúp tối ưu tốc độ gia công, thoát phoi tốt và bề mặt cắt đẹp.",
        "Góc cắt 45° giúp tăng hiệu quả gia công, phù hợp với vật liệu nhôm và đồng.",
        "Khoảng cách giữa 3 lưỡi cắt không đều giúp tăng hiệu suất và giảm lực cắt."
      ],
      cn: [
        "精密机械加工工具，广泛用于数控铣床。",
        "进口材料，精细加工，确保高耐用性和高光洁度。",
        "三刃设计优化加工速度，排屑性能佳，切割面光滑。",
        "45°切削角提高加工效率，适用于铝材和铜材。",
        "三刃间距不均匀，有助于提高效率并降低切削阻力。"
      ]
    },
    seri: "45HRC",
    specs: "D1-D20",
    brand: null,
    origin: "cn",
    // extra data
    cutStyle: "csSquare",
    hardness: "45HRC",
    flutes: 3,
    helixAngle: 45,
    material: "CarbideTungsten",
    processingMaterials: "N",
    coating: "Al",
    bladeDiameter: "D1-D20",
    handleDiameter: "D4-D20",
    cuttingLength: "3.7-70",
    overallLength: "50-150"
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayNgonCT",
    isTypical: true,
    code: "DPN_55HRC_3F",
    images: ["/dao_phay_ngon/55HRC_3F.webp", "/dao_phay_ngon/55hrc_3f/1.webp", "/dao_phay_ngon/55hrc_3f/2.webp"],
    name: {
      vi: "55HRC - Dao phay ngón 3F - gia công nhôm",
      cn: "55HRC - 铣刀（平刀）3F - 铝加工"
    },
    prices: {
      current: 0,
      min: 47000,
      max: 1568000
    },
    description: {
      vi: "Độ bóng cao, thích hợp gia công nhôm, nhựa…",
      cn: "高光泽，适合加工铝、塑料…"
    },
    descriptions: {
      vi: [
        "Dụng cụ gia công cơ khí chính xác, sử dụng phổ biến trên máy phay CNC.",
        "Vật liệu nhập khẩu, gia công tỉ mỉ, đảm bảo độ bền và độ bóng cao.",
        "Thiết kế 3 me giúp tối ưu tốc độ gia công, thoát phoi tốt và bề mặt cắt đẹp.",
        "Góc cắt 55° giúp dao cứng vững hơn, phù hợp gia công nhôm và hợp kim.",
        "Khoảng cách giữa 3 lưỡi cắt không đều giúp tăng hiệu suất và giảm lực cắt."
      ],
      cn: [
        "精密机械加工工具，广泛用于数控铣床。",
        "进口材料，精细加工，确保高耐用性和高光洁度。",
        "三刃设计优化加工速度，排屑性能佳，切割面光滑。",
        "55°切削角使刀具更加坚固，适用于铝材和合金加工。",
        "三刃间距不均匀，有助于提高效率并降低切削阻力。"
      ]
    },
    seri: "55HRC",
    specs: "D1-D20",
    brand: null,
    origin: "cn",
    // extra data
    cutStyle: "csSquare",
    hardness: "55HRC",
    flutes: 3,
    helixAngle: 55,
    material: "CarbideTungsten",
    processingMaterials: "N",
    coating: "Al",
    bladeDiameter: "D1-D20",
    handleDiameter: "D4-D20",
    cuttingLength: "3-80",
    overallLength: "50-200"
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayNgonCT",
    isTypical: false,
    code: "DPN_45HRC_2F",
    images: ["/dao_phay_ngon/45HRC_2F.webp", "/dao_phay_ngon/45hrc_2f/1.webp", "/dao_phay_ngon/45hrc_2f/2.webp", "/dao_phay_ngon/45hrc_2f/3.webp"],
    name: {
      vi: "45HRC - Dao phay ngón 2F",
      cn: "45HRC - 铣刀（平刀）2F"
    },
    prices: {
      current: 0,
      min: 34000,
      max: 1562000
    },
    description: {
      vi: "Thích hợp gia công thép thông thường, gang…",
      cn: "适用于加工普通钢、铸铁…"
    },
    descriptions: {
      vi: [
        "Dụng cụ gia công cơ khí chính xác, sử dụng phổ biến trên máy phay CNC.",
        "Vật liệu nhập khẩu, gia công tỉ mỉ, đảm bảo độ bền và độ bóng cao.",
        "Thiết kế 2 me tối ưu tốc độ gia công, mang lại đường cắt hoàn hảo.",
        "Giải pháp lý tưởng cho gia công nhôm, đồng với hiệu suất vượt trội."
      ],
      cn: [
        "精密机械加工工具，广泛用于数控铣床。",
        "进口材料，精细加工，确保高耐用性和高光洁度。",
        "双刃设计优化加工速度，带来完美切割效果。",
        "加工铝材、铜材的理想解决方案，性能卓越。"
      ]
    },
    seri: "45HRC",
    specs: "D1-D20",
    brand: null,
    origin: "cn",
    // extra data
    cutStyle: "csSquare",
    hardness: "45HRC",
    flutes: 2,
    helixAngle: 35,
    material: "CarbideTungsten",
    processingMaterials: "PMK",
    coating: "AlTiN",
    bladeDiameter: "D1-D20",
    handleDiameter: "D4-D20",
    cuttingLength: "3-71",
    overallLength: "50-150"
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayNgonCT",
    isTypical: true,
    code: "DPN_45HRC_4F",
    images: ["/dao_phay_ngon/45HRC_4F.webp", "/dao_phay_ngon/45hrc_4f/1.webp", "/dao_phay_ngon/45hrc_4f/2.webp"],
    name: {
      vi: "45HRC - Dao phay ngón 4F",
      cn: "45HRC - 铣刀（平刀）4F"
    },
    prices: {
      current: 0,
      min: 34000,
      max: 1562000
    },
    description: {
      vi: "Thích hợp gia công thép thông thường, gang…",
      cn: "适用于加工普通钢、铸铁…"
    },
    descriptions: {
      vi: [
        "Dụng cụ gia công cơ khí chính xác, sử dụng phổ biến trên máy phay CNC.",
        "Vật liệu nhập khẩu, gia công tỉ mỉ, đảm bảo độ bền và độ bóng cao.",
        "Thiết kế 4 me tối ưu tốc độ gia công, mang lại đường cắt hoàn hảo.",
        "Giải pháp lý tưởng cho gia công nhôm, đồng với hiệu suất vượt trội."
      ],
      cn: [
        "精密机械加工工具，广泛用于数控铣床。",
        "进口材料，精细加工，确保高耐用性和高光洁度。",
        "四刃设计优化加工速度，带来完美切割效果。",
        "加工铝材、铜材的理想解决方案，性能卓越。"
      ]
    },
    seri: "45HRC",
    specs: "D1-D20",
    brand: null,
    origin: "cn",
    // extra data
    cutStyle: "csSquare",
    hardness: "45HRC",
    flutes: 4,
    helixAngle: 35,
    material: "CarbideTungsten",
    processingMaterials: "PMK",
    coating: "AlTiN",
    bladeDiameter: "D1-D20",
    handleDiameter: "D4-D20",
    cuttingLength: "4-71",
    overallLength: "50-150"
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayNgonCT",
    isTypical: false,
    code: "DPN_55HRC_2F",
    images: ["/dao_phay_ngon/55HRC_2F.webp", "/dao_phay_ngon/55hrc_2f/1.webp", "/dao_phay_ngon/55hrc_2f/2.webp"],
    name: {
      vi: "55HRC - Dao phay ngón 2F",
      cn: "55HRC - 铣刀（平刀）2F"
    },
    prices: {
      current: 0,
      min: 34000,
      max: 1853000
    },
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      cn: "适用于加工铁、钢、铜、铸铁…"
    },
    descriptions: {
      vi: [
        "Dụng cụ gia công cơ khí chính xác, sử dụng phổ biến trên máy phay CNC.",
        "Vật liệu nhập khẩu, gia công tỉ mỉ, đảm bảo độ bền và độ bóng cao.",
        "Thiết kế 2 me giúp tối ưu tốc độ gia công, đồng thời giữ đường cắt bóng đẹp.",
        "Khoảng cách giữa 2 lưỡi cắt không đều giúp tăng hiệu suất và giảm lực cắt."
      ],
      cn: [
        "精密机械加工工具，广泛用于数控铣床。",
        "进口材料，精细加工，确保高耐用性和高光洁度。",
        "双刃设计优化加工速度，同时保持切割面光滑。",
        "两刃间距不均匀，有助于提高效率并降低切削阻力。"
      ]
    },
    seri: "55HRC",
    specs: "D0.1-D20",
    brand: null,
    origin: "cn",
    // extra data
    cutStyle: "csSquare",
    hardness: "55HRC",
    flutes: 2,
    helixAngle: 35,
    material: "CarbideTungsten",
    processingMaterials: "PMK",
    coating: "TiSiN",
    bladeDiameter: "D0.1-D20",
    handleDiameter: "D4-D20",
    cuttingLength: "0.7-80",
    overallLength: "50-150"
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayNgonCT",
    isTypical: true,
    code: "DPN_55HRC_4F",
    images: ["/dao_phay_ngon/55HRC_4F.webp", "/dao_phay_ngon/55hrc_4f/1.webp", "/dao_phay_ngon/55hrc_4f/2.webp"],
    name: {
      vi: "55HRC - Dao phay ngón 4F",
      cn: "55HRC - 铣刀（平刀）4F"
    },
    prices: {
      current: 0,
      min: 34000,
      max: 1853000
    },
    description: {
      vi: "Thích hợp gia công sắt, thép, đồng, gang…",
      cn: "适用于加工铁、钢、铜、铸铁…"
    },
    descriptions: {
      vi: [
        "Dụng cụ gia công cơ khí chính xác, sử dụng phổ biến trên máy phay CNC.",
        "Vật liệu nhập khẩu, gia công tỉ mỉ, đảm bảo độ bền và độ bóng cao.",
        "Thiết kế 4 me giúp dao cứng vững hơn, mang lại bề mặt cắt đẹp.",
        "Khoảng cách giữa 4 lưỡi cắt không đều giúp tăng hiệu suất và giảm lực cắt."
      ],
      cn: [
        "精密机械加工工具，广泛用于数控铣床。",
        "进口材料，精细加工，确保高耐用性和高光洁度。",
        "四刃设计使刀具更坚固，并带来光滑的切割表面。",
        "四刃间距不均匀，有助于提高效率并降低切削阻力。"
      ]
    },
    seri: "55HRC",
    specs: "D1-D20",
    brand: null,
    origin: "cn",
    // extra data
    cutStyle: "csSquare",
    hardness: "55HRC",
    flutes: 4,
    helixAngle: 35,
    material: "CarbideTungsten",
    processingMaterials: "PMK",
    coating: "TiSiN",
    bladeDiameter: "D1-D20",
    handleDiameter: "D4-D20",
    cuttingLength: "3-80",
    overallLength: "50-200"
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayNgonCT",
    isTypical: false,
    code: "DPN_60HRC_4F",
    images: ["/dao_phay_ngon/60HRC_4F.webp", "/dao_phay_ngon/60hrc_4f/1.webp", "/dao_phay_ngon/60hrc_4f/2.webp"],
    name: {
      vi: "60HRC - Dao phay ngón 4F - gia công inox",
      cn: "60HRC - 铣刀（平刀）4F - 不锈钢加工"
    },
    prices: {
      current: 0,
      min: 900000,
      max: 6030000
    },
    description: {
      vi: "Thích hợp gia công gang, thép cứng, thép không gỉ…",
      cn: "适用于加工铸铁、硬钢、不锈钢…"
    },
    descriptions: {
      vi: [
        "Dụng cụ gia công cơ khí chính xác, sử dụng phổ biến trên máy phay CNC.",
        "Vật liệu nhập khẩu, gia công tỉ mỉ, đảm bảo độ bền và độ bóng cao.",
        "Thiết kế 4 me giúp tối ưu tốc độ gia công, mang lại đường cắt đẹp và hiệu quả.",
        "Giải pháp lý tưởng cho gia công inox với độ cứng cao và độ bền vượt trội."
      ],
      cn: [
        "精密机械加工工具，广泛用于数控铣床。",
        "进口材料，精细加工，确保高耐用性和高光洁度。",
        "四刃设计优化加工速度，带来光滑的切割面和高效的加工。",
        "理想的解决方案，用于不锈钢加工，具备较高的硬度和卓越的耐用性。"
      ]
    },
    seri: "60HRC",
    specs: "D1-D12",
    brand: null,
    origin: "cn",
    // extra data
    cutStyle: "csSquare",
    hardness: "60HRC",
    flutes: 4,
    helixAngle: 35,
    material: "CarbideTungsten",
    processingMaterials: "PMKH",
    coating: "NACO",
    bladeDiameter: "D1-D12",
    handleDiameter: "D4-D12",
    cuttingLength: "3.5-45.5",
    overallLength: "50-100"
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayNgonCT",
    isTypical: true,
    code: "DPN_65HRC_4F",
    images: ["/dao_phay_ngon/65HRC_4F.webp", "/dao_phay_ngon/65hrc_4f/1.webp", "/dao_phay_ngon/65hrc_4f/2.webp"],
    name: {
      vi: "65HRC - Dao phay ngón 4F",
      cn: "65HRC - 铣刀（平刀）4F"
    },
    prices: {
      current: 0,
      min: 1190000,
      max: 10430000
    },
    description: {
      vi: "Thích hợp gia công gang, thép cứng, thép không gỉ…",
      cn: "适用于加工铸铁、硬钢、不锈钢…"
    },
    descriptions: {
      vi: [
        "Dụng cụ gia công cơ khí chính xác, sử dụng phổ biến trên máy phay CNC.",
        "Vật liệu nhập khẩu, gia công tỉ mỉ, đảm bảo độ bền và độ bóng cao.",
        "Phủ Nano, tối ưu gia công thép sau nhiệt có độ cứng cao với giá thành hợp lý."
      ],
      cn: ["精密机械加工工具，广泛用于数控铣床。", "进口材料，精细加工，确保高耐用性和高光洁度。", "纳米涂层优化高硬度热处理钢材的加工，具备经济性和高效性。"]
    },
    seri: "65HRC",
    specs: "D1-D20",
    brand: null,
    origin: "cn",
    // extra data
    cutStyle: "csSquare",
    hardness: "65HRC",
    flutes: 4,
    helixAngle: 35,
    material: "CarbideTungsten",
    processingMaterials: "PMKSH",
    coating: "NACO",
    bladeDiameter: "D1-D20",
    handleDiameter: "D4-D20",
    cuttingLength: "3-80",
    overallLength: "50-150"
  },
  {
    category: "pDaoPhay",
    routeName: "pDaoPhayNgonCT",
    isTypical: false,
    code: "DPN_65HRC_4F_hard",
    images: ["/dao_phay_ngon/65HRC_4F_hard.webp", "/dao_phay_ngon/65hrc_4f_hard/1.webp", "/dao_phay_ngon/65hrc_4f_hard/2.webp"],
    name: {
      vi: "65HRC - Dao phay ngón 4F - tăng cứng",
      cn: "65HRC - 铣刀（平刀）4F - 硬化"
    },
    prices: {
      current: 0,
      min: 1190000,
      max: 10430000
    },
    description: {
      vi: "Thích hợp gia công gang, thép cứng, thép không gỉ…",
      cn: "适用于加工铸铁、硬钢、不锈钢…"
    },
    descriptions: {
      vi: [
        "Dụng cụ gia công cơ khí chính xác, sử dụng phổ biến trên máy phay CNC.",
        "Vật liệu nhập khẩu, gia công tỉ mỉ, đảm bảo độ bền và độ bóng cao.",
        "Phủ AlCrSiN, tối ưu gia công thép sau nhiệt có độ cứng cao với giá thành hợp lý."
      ],
      cn: [
        "精密机械加工工具，广泛用于数控铣床。",
        "进口材料，精细加工，确保高耐用性和高光洁度。",
        "AlCrSiN涂层优化高硬度热处理钢材的加工，具备经济性和高效性。"
      ]
    },
    seri: "65HRC",
    specs: "D1-D12",
    brand: null,
    origin: "cn",
    // extra data
    cutStyle: "csSquare",
    hardness: "65HRC",
    flutes: 4,
    helixAngle: 35,
    material: "CarbideTungsten",
    processingMaterials: "PMKSH",
    coating: "AlCrSiN",
    bladeDiameter: "D1-D12",
    handleDiameter: "D4-D12",
    cuttingLength: "3-30",
    overallLength: "50-100"
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
