import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const extraImagesDataSEEN = ["/manh_dao/gia_cong_sat_thep_inox/SEEN/SEEN_1203.webp"];

const extraImagesDataTPGH1 = ["/manh_dao/gia_cong_sat_thep_inox/TPGH/TPGH_060102.webp", "/manh_dao/gia_cong_sat_thep_inox/TPGH/TPGH_060104.webp"];
const extraImagesDataTPGH2 = ["/manh_dao/gia_cong_sat_thep_inox/TPGH/TPGH_080202.webp", "/manh_dao/gia_cong_sat_thep_inox/TPGH/TPGH_080204.webp"];
const extraImagesDataTPGH3 = ["/manh_dao/gia_cong_sat_thep_inox/TPGH/TPGH_090202.webp", "/manh_dao/gia_cong_sat_thep_inox/TPGH/TPGH_090204.webp"];
const extraImagesDataTPGH4 = ["/manh_dao/gia_cong_sat_thep_inox/TPGH/TPGH_110302.webp", "/manh_dao/gia_cong_sat_thep_inox/TPGH/TPGH_110304.webp"];
const extraImagesDataTPGH = [...extraImagesDataTPGH1, ...extraImagesDataTPGH2, ...extraImagesDataTPGH3, ...extraImagesDataTPGH4];

const extraImagesDataAPMT = ["/manh_dao/gia_cong_sat_thep_inox/APMT/APMT_1135.webp", "/manh_dao/gia_cong_sat_thep_inox/APMT/APMT_1604.webp"];

const extraImagesDataVCMT = [
  "/manh_dao/gia_cong_sat_thep_inox/VCMT/VCMT_110304.webp",
  "/manh_dao/gia_cong_sat_thep_inox/VCMT/VCMT_160404.webp",
  "/manh_dao/gia_cong_sat_thep_inox/VCMT/VCMT_160408.webp"
];

const extraImagesDataTPGT1 = ["/manh_dao/gia_cong_sat_thep_inox/TPGT/TPGT_060102.webp", "/manh_dao/gia_cong_sat_thep_inox/TPGT/TPGT_060104.webp"];
const extraImagesDataTPGT2 = ["/manh_dao/gia_cong_sat_thep_inox/TPGT/TPGT_080202.webp", "/manh_dao/gia_cong_sat_thep_inox/TPGT/TPGT_080204.webp"];
const extraImagesDataTPGT3 = ["/manh_dao/gia_cong_sat_thep_inox/TPGT/TPGT_090202.webp", "/manh_dao/gia_cong_sat_thep_inox/TPGT/TPGT_090204.webp"];
const extraImagesDataTPGT4 = ["/manh_dao/gia_cong_sat_thep_inox/TPGT/TPGT_110302.webp", "/manh_dao/gia_cong_sat_thep_inox/TPGT/TPGT_110304.webp"];
const extraImagesDataTPGT = [...extraImagesDataTPGT1, ...extraImagesDataTPGT2, ...extraImagesDataTPGT3, ...extraImagesDataTPGT4];

const extraImagesDataTCMT1 = ["/manh_dao/gia_cong_sat_thep_inox/TCMT/TCMT_110204.webp", "/manh_dao/gia_cong_sat_thep_inox/TCMT/TCMT_110208.webp"];
const extraImagesDataTCMT2 = ["/manh_dao/gia_cong_sat_thep_inox/TCMT/TCMT_16T304.webp", "/manh_dao/gia_cong_sat_thep_inox/TCMT/TCMT_16T308.webp"];
const extraImagesDataTCMT = [...extraImagesDataTCMT1, ...extraImagesDataTCMT2];

const extraImagesDataSPMG = [
  "/manh_dao/gia_cong_sat_thep_inox/SPMG/SPMG_050204.webp",
  "/manh_dao/gia_cong_sat_thep_inox/SPMG/SPMG_060204.webp",
  "/manh_dao/gia_cong_sat_thep_inox/SPMG/SPMG_07T308.webp",
  "/manh_dao/gia_cong_sat_thep_inox/SPMG/SPMG_090408.webp",
  "/manh_dao/gia_cong_sat_thep_inox/SPMG/SPMG_110408.webp",
  "/manh_dao/gia_cong_sat_thep_inox/SPMG/SPMG_140512.webp"
];

const extraImagesDataSNMG = [
  "/manh_dao/gia_cong_sat_thep_inox/SNMG/SNMG_120404.webp",
  "/manh_dao/gia_cong_sat_thep_inox/SNMG/SNMG_120408.webp",
  "/manh_dao/gia_cong_sat_thep_inox/SNMG/SNMG_120412.webp"
];

const extraImagesDataCCMT = [
  "/manh_dao/gia_cong_sat_thep_inox/CCMT/CCMT_09T304.webp",
  "/manh_dao/gia_cong_sat_thep_inox/CCMT/CCMT_09T308.webp",
  "/manh_dao/gia_cong_sat_thep_inox/CCMT/CCMT_120404.webp",
  "/manh_dao/gia_cong_sat_thep_inox/CCMT/CCMT_120408.webp"
];

const extraImagesDataVNMG = ["/manh_dao/gia_cong_sat_thep_inox/VNMG/VNMG_160404.webp", "/manh_dao/gia_cong_sat_thep_inox/VNMG/VNMG_160408.webp"];

const extraImagesDataCNMG = ["/manh_dao/gia_cong_sat_thep_inox/CNMG/CNMG_120404.webp", "/manh_dao/gia_cong_sat_thep_inox/CNMG/CNMG_120408.webp"];

const description = {
  vi: "Sử dụng cho gia công tiện chạy tinh, tiện chạy thô, tiện chạy phá…",
  cn: "用于精车、粗车、半精车等车削加工"
};

const descriptions = {
  vi: [
    {
      title: "description",
      data: [
        "Gia công bền bỉ với lượng cắt lớn và chịu được lực va đập lớn.",
        "Kiểm soát phôi tốt khi gia công, chống mài mòn, kéo dài tuổi thọ dao tiện.",
        "Có độ chính xác cao và cho bề mặt gia công bóng đẹp."
      ]
    }
  ],
  cn: [
    {
      title: "description",
      data: ["具有大切削量和高抗冲击力的持久加工能力。", "加工时具有良好的切屑控制，耐磨损，延长车刀使用寿命。", "具有高精度，可获得光滑美观的加工表面。"]
    }
  ]
};

const detailsView = [[{ type: "tag", value: "specsList" }]];

const items = [
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: true,
    code: "SEEN",
    images: ["/manh_dao/gia_cong_sat_thep_inox/SEEN/vt_1.webp", ...extraImagesDataSEEN],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=250",
        data: extraImagesDataSEEN
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip tiện mã SEEN - gốm sứ",
      cn: "10片装SEEN车削刀片 - 陶瓷"
    },
    prices: {
      current: 270000,
      min: 0,
      max: 0
    },
    description: {
      vi: "Chuyên dùng để gia công vật liệu thép khuôn",
      cn: "专用于加工模具钢材料"
    },
    descriptions,
    seri: "SEEN",
    specs: "1203",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["SEEN 1203"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: true,
    code: "TPGH1",
    images: ["/manh_dao/gia_cong_sat_thep_inox/TPGH/vt_1.webp", ...extraImagesDataTPGH],
    extraImages: [
      {
        title: "specifications",
        subTitle: "TPGH 0601",
        preview: false,
        options: "?w=250",
        data: extraImagesDataTPGH1
      },
      {
        title: null,
        subTitle: "TPGH 0802",
        preview: false,
        options: "?w=250",
        data: extraImagesDataTPGH2
      },
      {
        title: null,
        subTitle: "TPGH 0902",
        preview: false,
        options: "?w=250",
        data: extraImagesDataTPGH3
      },
      {
        title: null,
        subTitle: "TPGH 1103",
        preview: false,
        options: "?w=250",
        data: extraImagesDataTPGH4
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip tiện mã TPGH - hợp kim",
      cn: "10片装TPGH车削刀片 - 合金"
    },
    prices: {
      current: 360000,
      min: 0,
      max: 0
    },
    description,
    descriptions,
    seri: "TPGH",
    specs: "06/08/09/11",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["TPGH 060102", "TPGH 060104", "TPGH 080202", "TPGH 080204", "TPGH 090202", "TPGH 090204", "TPGH 110302", "TPGH 110304"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: true,
    code: "APMT",
    images: ["/manh_dao/gia_cong_sat_thep_inox/APMT/vt_1.webp", ...extraImagesDataAPMT],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=250",
        data: extraImagesDataAPMT
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip tiện mã APMT - màu đồng",
      cn: "10片装APMT车削刀片 - 金铜色"
    },
    prices: {
      current: 0,
      min: 380000,
      max: 530000
    },
    description,
    descriptions,
    seri: "APMT",
    specs: "1135/1604",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["APMT 1135", "APMT 1604"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: true,
    code: "VCMT",
    images: ["/manh_dao/gia_cong_sat_thep_inox/VCMT/vt_1.webp", ...extraImagesDataVCMT],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=250",
        data: extraImagesDataVCMT
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip tiện mã VCMT - màu tím",
      cn: "10片装VCMT车削刀片 - 紫色"
    },
    prices: {
      current: 0,
      min: 220000,
      max: 340000
    },
    description,
    descriptions,
    seri: "VCMT",
    specs: "1103/1604",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["VCMT 110302", "VCMT 110304", "VCMT 110308", "VCMT 160402", "VCMT 160404", "VCMT 160408"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: true,
    code: "TPGT",
    images: ["/manh_dao/gia_cong_sat_thep_inox/TPGT/vt_1.webp", ...extraImagesDataTPGT],
    extraImages: [
      {
        title: "specifications",
        subTitle: "TPGT 0601",
        preview: false,
        options: "?w=250",
        data: extraImagesDataTPGT1
      },
      {
        title: null,
        subTitle: "TPGT 0802",
        preview: false,
        options: "?w=250",
        data: extraImagesDataTPGT2
      },
      {
        title: null,
        subTitle: "TPGT 0902",
        preview: false,
        options: "?w=250",
        data: extraImagesDataTPGT3
      },
      {
        title: null,
        subTitle: "TPGT 1103",
        preview: false,
        options: "?w=250",
        data: extraImagesDataTPGT4
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip tiện mã TPGT - gốm sứ",
      cn: "10片装TPGT车削刀片 - 陶瓷"
    },
    prices: {
      current: 460000,
      min: 0,
      max: 0
    },
    description,
    descriptions,
    seri: "TPGT",
    specs: "06/08/09/11",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["TPGT 060102", "TPGT 060104", "TPGT 080202", "TPGT 080204", "TPGT 090202", "TPGT 090204", "TPGT 110302", "TPGT 110304"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: false,
    code: "TPGH2",
    images: ["/manh_dao/gia_cong_sat_thep_inox/TPGH2/vt_1.webp"],
    extraImages: null,
    name: {
      vi: "Hộp 10 mảnh chip tiện mã TPGH - gốm sứ",
      cn: "10片装TPGH车削刀片 - 陶瓷"
    },
    prices: {
      current: 400000,
      min: 0,
      max: 0
    },
    description,
    descriptions,
    seri: "TPGH",
    specs: "08/09/11",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["TPGH 080202", "TPGH 080204", "TPGH 090202", "TPGH 090204", "TPGH 110304"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: false,
    code: "TNMG2",
    images: ["/manh_dao/gia_cong_sat_thep_inox/TNMG2/vt_1.webp"],
    extraImages: null,
    name: {
      vi: "Hộp 10 mảnh chip tiện mã TNMG - gốm sứ",
      cn: "10片装TNMG车削刀片 - 陶瓷"
    },
    prices: {
      current: 380000,
      min: 0,
      max: 0
    },
    description,
    descriptions,
    seri: "TNMG",
    specs: "1604-R/L",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["TNMG 160402R-2G", "TNMG 160402L-2G", "TNMG 160404R-2G", "TNMG 160404L-2G"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: false,
    code: "TCMT",
    images: ["/manh_dao/gia_cong_sat_thep_inox/TCMT/vt_1.webp", ...extraImagesDataTCMT],
    extraImages: [
      {
        title: "specifications",
        subTitle: "TCMT 1102",
        preview: false,
        options: "?w=250",
        data: extraImagesDataTCMT1
      },
      {
        title: null,
        subTitle: "TCMT 16T3",
        preview: false,
        options: "?w=250",
        data: extraImagesDataTCMT2
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip tiện mã TCMT",
      cn: "10片装TCMT车削刀片"
    },
    prices: {
      current: 0,
      min: 270000,
      max: 430000
    },
    description,
    descriptions,
    seri: "TCMT",
    specs: "1102/16T3",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["TCMT 110204", "TCMT 110208", "TCMT 16T304", "TCMT 16T308"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: false,
    code: "SPMG",
    images: ["/manh_dao/gia_cong_sat_thep_inox/SPMG/1_vt.webp", ...extraImagesDataSPMG],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=250",
        data: extraImagesDataSPMG
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip tiện mã SPMG",
      cn: "10片装SPMG车削刀片"
    },
    prices: {
      current: 0,
      min: 330000,
      max: 680000
    },
    description,
    descriptions,
    seri: "SPMG",
    specs: "05/06/07/09/11/14",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["SPMG 050204", "SPMG 060204", "SPMG 07T308", "SPMG 090408", "SPMG 110408", "SPMG 140512"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: false,
    code: "SNMG",
    images: ["/manh_dao/gia_cong_sat_thep_inox/SNMG/vt_1.webp", ...extraImagesDataSNMG],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=250",
        data: extraImagesDataSNMG
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip tiện mã SNMG - màu tím",
      cn: "10片装SNMG车削刀片 - 紫色"
    },
    prices: {
      current: 480000,
      min: 0,
      max: 0
    },
    description,
    descriptions,
    seri: "SNMG",
    specs: "1204",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["SNMG 120404", "SNMG 120408", "SNMG 120412"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: false,
    code: "CCMT_PC",
    images: [
      "/manh_dao/gia_cong_sat_thep_inox/CCMT/1_vt.webp",
      ...extraImagesDataCCMT,
      "/manh_dao/gia_cong_sat_thep_inox/CCMT/CCMT_09T304_08.webp",
      "/manh_dao/gia_cong_sat_thep_inox/CCMT/CCMT_120404_08.webp",
      "/manh_dao/gia_cong_sat_thep_inox/CCMT/CCMT_060204_08.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=250",
        data: extraImagesDataCCMT
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip mã CCMT - màu tím",
      cn: "10片装CCMT刀片 - 紫色"
    },
    prices: {
      current: 0,
      min: 270000,
      max: 480000
    },
    description,
    descriptions,
    seri: "CCMT",
    specs: "0602/09T3/1204",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["CCMT 060204", "CCMT 060208", "CCMT 09T304", "CCMT 09T308", "CCMT 120404", "CCMT 120408"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: false,
    code: "TNGG",
    images: ["/manh_dao/gia_cong_sat_thep_inox/TNGG/vt_1.webp"],
    extraImages: null,
    name: {
      vi: "Hộp 10 mảnh chip tiện mã TNGG - gốm sứ",
      cn: "10片装TNGG车削刀片 - 陶瓷"
    },
    prices: {
      current: 0,
      min: 420000,
      max: 460000
    },
    description,
    descriptions,
    seri: "TNGG",
    specs: "1604-R/L-F/S",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: [
      "TNGG 160402 L-F",
      "TNGG 160402 R-F",
      "TNGG 160404 L-F",
      "TNGG 160404 R-F",
      "TNGG 160402 R-S PR930",
      "TNGG 160402 L-S PR930",
      "TNGG 160404 L-S PR930"
    ]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: false,
    code: "TNMG3",
    images: ["/manh_dao/gia_cong_sat_thep_inox/TNMG3/vt_1.webp"],
    extraImages: null,
    name: {
      vi: "Hộp 10 mảnh chip tiện mã TNMG - cắt lỗ hợp kim",
      cn: "10片装TNMG车削刀片 - 切孔合金"
    },
    prices: {
      current: 460000,
      min: 0,
      max: 0
    },
    description,
    descriptions,
    seri: "TNMG",
    specs: "1604-R/L-C",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["TNMG 160402R-C", "TNMG 160402L-C", "TNMG 160404L-C", "TNMG 160404R-C"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: false,
    code: "VNMG2",
    images: ["/manh_dao/gia_cong_sat_thep_inox/VNMG/vt_1.webp", ...extraImagesDataVNMG],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=250",
        data: extraImagesDataVNMG
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip tiện mã VNMG",
      cn: "10片装VNMG车削刀片"
    },
    prices: {
      current: 530000,
      min: 0,
      max: 0
    },
    description,
    descriptions,
    seri: "VNMG",
    specs: "1604",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["VNMG 160404", "VNMG 160408"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: false,
    code: "CNMG",
    images: ["/manh_dao/gia_cong_sat_thep_inox/CNMG/vt_1.webp", ...extraImagesDataCNMG],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=250",
        data: extraImagesDataCNMG
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip tiện mã CNMG",
      cn: "10片装CNMG车削刀片"
    },
    prices: {
      current: 480000,
      min: 0,
      max: 0
    },
    description,
    descriptions,
    seri: "CNMG",
    specs: "1204",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["CNMG 120404", "CNMG 120408"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSatThepInoxCT",
    isTypical: false,
    code: "TNMG",
    images: ["/manh_dao/gia_cong_sat_thep_inox/TNMG/vt_1.webp"],
    extraImages: null,
    name: {
      vi: "Hộp 10 mảnh chip tiện mã TNMG - màu tím",
      cn: "10片装TNMG车削刀片 - 紫色"
    },
    prices: {
      current: 430000,
      min: 0,
      max: 0
    },
    description,
    descriptions,
    seri: "TNMG",
    specs: "1604",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["TNMG 160404", "TNMG 160408"]
  }
  // TODO: add more items
];

export default items;

export const manhDaoGCSatThepInoxItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
