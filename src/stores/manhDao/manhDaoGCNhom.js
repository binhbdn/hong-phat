import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const extraImagesDataWNMG = [
  "/manh_dao/gia_cong_nhom/WNMG/WNMG_080404.webp",
  "/manh_dao/gia_cong_nhom/WNMG/WNMG_080408.webp",
  "/manh_dao/gia_cong_nhom/WNMG/WNMG_080412.webp"
];

const extraImagesDataTCGT1 = [
  "/manh_dao/gia_cong_nhom/TCGT/TCGT_090202.webp",
  "/manh_dao/gia_cong_nhom/TCGT/TCGT_090204.webp",
  "/manh_dao/gia_cong_nhom/TCGT/TCGT_090208.webp"
];
const extraImagesDataTCGT2 = [
  "/manh_dao/gia_cong_nhom/TCGT/TCGT_110202.webp",
  "/manh_dao/gia_cong_nhom/TCGT/TCGT_110204.webp",
  "/manh_dao/gia_cong_nhom/TCGT/TCGT_110208.webp"
];
const extraImagesDataTCGT3 = [
  "/manh_dao/gia_cong_nhom/TCGT/TCGT_16T302.webp",
  "/manh_dao/gia_cong_nhom/TCGT/TCGT_16T304.webp",
  "/manh_dao/gia_cong_nhom/TCGT/TCGT_16T308.webp"
];
const extraImagesDataTCGT = [...extraImagesDataTCGT1, ...extraImagesDataTCGT2, ...extraImagesDataTCGT3];

const extraImagesDataWCKT = [
  "/manh_dao/gia_cong_nhom/WCKT/WCKT_030208.webp",
  "/manh_dao/gia_cong_nhom/WCKT/WCKT_040208.webp",
  "/manh_dao/gia_cong_nhom/WCKT/WCKT_050208.webp",
  "/manh_dao/gia_cong_nhom/WCKT/WCKT_06T308.webp",
  "/manh_dao/gia_cong_nhom/WCKT/WCKT_080412.webp"
];

const extraImagesDataVCGT1 = [
  "/manh_dao/gia_cong_nhom/VCGT/VCGT_110302.webp",
  "/manh_dao/gia_cong_nhom/VCGT/VCGT_110304.webp",
  "/manh_dao/gia_cong_nhom/VCGT/VCGT_110308.webp"
];
const extraImagesDataVCGT2 = [
  "/manh_dao/gia_cong_nhom/VCGT/VCGT_160402.webp",
  "/manh_dao/gia_cong_nhom/VCGT/VCGT_160404.webp",
  "/manh_dao/gia_cong_nhom/VCGT/VCGT_160408.webp",
  "/manh_dao/gia_cong_nhom/VCGT/VCGT_160412.webp"
];
const extraImagesDataVCGT = [...extraImagesDataVCGT1, ...extraImagesDataVCGT2];

const extraImagesDataTNMG = ["/manh_dao/gia_cong_nhom/TNMG/TNMG_160402.webp", "/manh_dao/gia_cong_nhom/TNMG/TNMG_160404.webp"];

const extraImagesDataSCGT1 = [
  "/manh_dao/gia_cong_nhom/SCGT/SCGT_09T302.webp",
  "/manh_dao/gia_cong_nhom/SCGT/SCGT_09T304.webp",
  "/manh_dao/gia_cong_nhom/SCGT/SCGT_09T308.webp"
];
const extraImagesDataSCGT2 = [
  "/manh_dao/gia_cong_nhom/SCGT/SCGT_120402.webp",
  "/manh_dao/gia_cong_nhom/SCGT/SCGT_120404.webp",
  "/manh_dao/gia_cong_nhom/SCGT/SCGT_120408.webp"
];
const extraImagesDataSCGT = [...extraImagesDataSCGT1, ...extraImagesDataSCGT2];

const extraImagesDataRCGT = [
  "/manh_dao/gia_cong_nhom/RCGT/RCGT_08T2.webp",
  "/manh_dao/gia_cong_nhom/RCGT/RCGT_10T3.webp",
  "/manh_dao/gia_cong_nhom/RCGT/RCGT_1204.webp"
];

const extraImagesDataDCGT1 = [
  "/manh_dao/gia_cong_nhom/DCGT/DCGT_070202.webp",
  "/manh_dao/gia_cong_nhom/DCGT/DCGT_070204.webp",
  "/manh_dao/gia_cong_nhom/DCGT/DCGT_070208.webp"
];
const extraImagesDataDCGT2 = [
  "/manh_dao/gia_cong_nhom/DCGT/DCGT_11T302.webp",
  "/manh_dao/gia_cong_nhom/DCGT/DCGT_11T304.webp",
  "/manh_dao/gia_cong_nhom/DCGT/DCGT_11T308.webp"
];
const extraImagesDataDCGT = [...extraImagesDataDCGT1, ...extraImagesDataDCGT2];

const extraImagesDataCNMG = [
  "/manh_dao/gia_cong_nhom/CNMG/CNMG_120402.webp",
  "/manh_dao/gia_cong_nhom/CNMG/CNMG_120404.webp",
  "/manh_dao/gia_cong_nhom/CNMG/CNMG_120408.webp"
];

const extraImagesDataVNMG = [
  "/manh_dao/gia_cong_nhom/VNMG/VNMG_160402.webp",
  "/manh_dao/gia_cong_nhom/VNMG/VNMG_160404.webp",
  "/manh_dao/gia_cong_nhom/VNMG/VNMG_160408.webp"
];

const extraImagesDataCCGT1 = ["/manh_dao/gia_cong_nhom/CCGT/CCGT_060202.webp", "/manh_dao/gia_cong_nhom/CCGT/CCGT_060204.webp"];
const extraImagesDataCCGT2 = [
  "/manh_dao/gia_cong_nhom/CCGT/CCGT_09T302.webp",
  "/manh_dao/gia_cong_nhom/CCGT/CCGT_09T304.webp",
  "/manh_dao/gia_cong_nhom/CCGT/CCGT_09T308.webp"
];
const extraImagesDataCCGT3 = [
  "/manh_dao/gia_cong_nhom/CCGT/CCGT_120402.webp",
  "/manh_dao/gia_cong_nhom/CCGT/CCGT_120404.webp",
  "/manh_dao/gia_cong_nhom/CCGT/CCGT_120408.webp"
];
const extraImagesDataCCGT = [...extraImagesDataCCGT1, ...extraImagesDataCCGT2, ...extraImagesDataCCGT3];

const description = {
  vi: "Chuyên gia công nhôm với độ bóng và độ chính xác cao",
  cn: "专用于加工铝，具有高光洁度和高精度。"
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
    routeName: "pManhDaoGCNhomCT",
    isTypical: true,
    code: "WNMG2",
    images: ["/manh_dao/gia_cong_nhom/WNMG/vt_1.webp", ...extraImagesDataWNMG],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=250",
        data: extraImagesDataWNMG
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip mã WNMG",
      cn: "10片装WNMG刀片"
    },
    prices: {
      current: 480000,
      min: 0,
      max: 0
    },
    description,
    descriptions,
    seri: "WNMG",
    specs: "0804",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["WNMG 080404", "WNMG 080408", "WNMG 080412"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCNhomCT",
    isTypical: true,
    code: "TCGT",
    images: ["/manh_dao/gia_cong_nhom/TCGT/vt_1.webp", ...extraImagesDataTCGT],
    extraImages: [
      {
        title: "specifications",
        subTitle: "TCGT 0902",
        preview: false,
        options: "?w=250",
        data: extraImagesDataTCGT1
      },
      {
        title: null,
        subTitle: "TCGT 1102",
        preview: false,
        options: "?w=250",
        data: extraImagesDataTCGT2
      },
      {
        title: null,
        subTitle: "TCGT 16T3",
        preview: false,
        options: "?w=250",
        data: extraImagesDataTCGT3
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip mã TCGT",
      cn: "10片装TCGT刀片"
    },
    prices: {
      current: 0,
      min: 200000,
      max: 290000
    },
    description,
    descriptions,
    seri: "TCGT",
    specs: "0902/1102/16T3",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["TCGT 090202", "TCGT 090204", "TCGT 090208", "TCGT 110202", "TCGT 110204", "TCGT 110208", "TCGT 16T302", "TCGT 16T304", "TCGT 16T308"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCNhomCT",
    isTypical: true,
    code: "WCKT",
    images: ["/manh_dao/gia_cong_nhom/WCKT/vt_1.webp", ...extraImagesDataWCKT],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=250",
        data: extraImagesDataWCKT
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip mã WCKT",
      cn: "10片装WCKT刀片"
    },
    prices: {
      current: 0,
      min: 330000,
      max: 570000
    },
    description,
    descriptions,
    seri: "WCKT",
    specs: "03/04/05/06/08",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["WCKT 030208", "WCKT 040208", "WCKT 050208", "WCKT 06T308", "WCKT 080412"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCNhomCT",
    isTypical: true,
    code: "VCGT",
    images: ["/manh_dao/gia_cong_nhom/VCGT/vt_1.webp", ...extraImagesDataVCGT],
    extraImages: [
      {
        title: "specifications",
        subTitle: "VCGT 1103",
        preview: false,
        options: "?w=250",
        data: extraImagesDataVCGT1
      },
      {
        title: null,
        subTitle: "VCGT 1604",
        preview: false,
        options: "?w=250",
        data: extraImagesDataVCGT2
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip mã VCGT",
      cn: "10片装VCGT刀片"
    },
    prices: {
      current: 0,
      min: 220000,
      max: 340000
    },
    description,
    descriptions,
    seri: "VCGT",
    specs: "1103/1604",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["VCGT 110302", "VCGT 110304", "VCGT 110308", "VCGT 160402", "VCGT 160404", "VCGT 160408", "VCGT 160412"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCNhomCT",
    isTypical: true,
    code: "TNMG",
    images: ["/manh_dao/gia_cong_nhom/TNMG/vt_1.webp", ...extraImagesDataTNMG],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=250",
        data: extraImagesDataTNMG
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip mã TNMG",
      cn: "10片装TNMG刀片"
    },
    prices: {
      current: 310000,
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
    specsList: ["TNMG 160402", "TNMG 160404"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCNhomCT",
    isTypical: false,
    code: "SPGT",
    images: ["/manh_dao/gia_cong_nhom/SPGT/1_vt.webp"],
    extraImages: null,
    name: {
      vi: "Hộp 10 mảnh chip mã SPGT",
      cn: "10片装SPGT刀片"
    },
    prices: {
      current: 0,
      min: 300000,
      max: 460000
    },
    description,
    descriptions,
    seri: "SPGT",
    specs: "05/06/07/09/11/14",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["SPGT 050204", "SPGT 060204", "SPGT 07T308", "SPGT 090408", "SPGT 110408", "SPGT 140512"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCNhomCT",
    isTypical: false,
    code: "SNMG2",
    images: [
      "/manh_dao/gia_cong_nhom/SNMG/1_vt.webp",
      "/manh_dao/gia_cong_nhom/SNMG/SNMG_120402.webp",
      "/manh_dao/gia_cong_nhom/SNMG/SNMG_120404.webp",
      "/manh_dao/gia_cong_nhom/SNMG/SNMG_120408.webp"
    ],
    extraImages: null,
    name: {
      vi: "Hộp 10 mảnh chip mã SNMG",
      cn: "10片装SNMG刀片"
    },
    prices: {
      current: 440000,
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
    specsList: ["SNMG 120402", "SNMG 120404", "SNMG 120408"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCNhomCT",
    isTypical: false,
    code: "SEHT",
    images: ["/manh_dao/gia_cong_nhom/SEHT/vt_1.webp", "/manh_dao/gia_cong_nhom/SEHT/SEHT_1204.webp"],
    extraImages: null,
    name: {
      vi: "Hộp 10 mảnh chip mã SEHT",
      cn: "10片装SEHT刀片"
    },
    prices: {
      current: 290000,
      min: 0,
      max: 0
    },
    description,
    descriptions,
    seri: "SEHT",
    specs: "1204",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["SEHT 1204"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCNhomCT",
    isTypical: false,
    code: "SCGT",
    images: ["/manh_dao/gia_cong_nhom/SCGT/vt_1.webp", ...extraImagesDataSCGT],
    extraImages: [
      {
        title: "specifications",
        subTitle: "SCGT 09T3",
        preview: false,
        options: "?w=250",
        data: extraImagesDataSCGT1
      },
      {
        title: null,
        subTitle: "SCGT 1204",
        preview: false,
        options: "?w=250",
        data: extraImagesDataSCGT2
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip mã SCGT",
      cn: "10片装SCGT刀片"
    },
    prices: {
      current: 0,
      min: 220000,
      max: 380000
    },
    description,
    descriptions,
    seri: "SCGT",
    specs: "09T3/1204",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["SCGT 09T302", "SCGT 09T304", "SCGT 09T308", "SCGT 120402", "SCGT 120404", "SCGT 120408"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCNhomCT",
    isTypical: false,
    code: "RCGT",
    images: ["/manh_dao/gia_cong_nhom/RCGT/vt_1.webp", ...extraImagesDataRCGT],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=250",
        data: extraImagesDataRCGT
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip mã RCGT",
      cn: "10片装RCGT刀片"
    },
    prices: {
      current: 0,
      min: 280000,
      max: 320000
    },
    description,
    descriptions,
    seri: "RCGT",
    specs: "08T2/10T3/1204",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["RCGT 08T2", "RCGT 10T3", "RCGT 1204"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCNhomCT",
    isTypical: false,
    code: "DCGT",
    images: ["/manh_dao/gia_cong_nhom/DCGT/vt_1.webp", ...extraImagesDataDCGT],
    extraImages: [
      {
        title: "specifications",
        subTitle: "DCGT 0702",
        preview: false,
        options: "?w=250",
        data: extraImagesDataDCGT1
      },
      {
        title: null,
        subTitle: "DCGT 11T3",
        preview: false,
        options: "?w=250",
        data: extraImagesDataDCGT2
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip mã DCGT",
      cn: "10片装DCGT刀片"
    },
    prices: {
      current: 220000,
      min: 0,
      max: 0
    },
    description,
    descriptions,
    seri: "DCGT",
    specs: "0702/11T3",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["DCGT 070202", "DCGT 070204", "DCGT 070208", "DCGT 11T302", "DCGT 11T304", "DCGT 11T308"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCNhomCT",
    isTypical: false,
    code: "CNMG2",
    images: ["/manh_dao/gia_cong_nhom/CNMG/vt_1.webp", ...extraImagesDataCNMG],
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
      vi: "Hộp 10 mảnh chip mã CNMG",
      cn: "10片装CNMG刀片"
    },
    prices: {
      current: 380000,
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
    specsList: ["CNMG 120402", "CNMG 120404", "CNMG 120408"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCNhomCT",
    isTypical: false,
    code: "VNMG",
    images: ["/manh_dao/gia_cong_nhom/VNMG/vt_1.webp", ...extraImagesDataVNMG],
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
      vi: "Hộp 10 mảnh chip mã VNMG",
      cn: "10片装VNMG刀片"
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
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["VNMG 160402", "VNMG 160404", "VNMG 160408"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCNhomCT",
    isTypical: false,
    code: "CCGT",
    images: ["/manh_dao/gia_cong_nhom/CCGT/vt_1.webp", ...extraImagesDataCCGT],
    extraImages: [
      {
        title: "specifications",
        subTitle: "CCGT 0602",
        preview: false,
        options: "?w=250",
        data: extraImagesDataCCGT1
      },
      {
        title: null,
        subTitle: "CCGT 09T3",
        preview: false,
        options: "?w=250",
        data: extraImagesDataCCGT2
      },
      {
        title: null,
        subTitle: "CCGT 1204",
        preview: false,
        options: "?w=250",
        data: extraImagesDataCCGT3
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip mã CCGT",
      cn: "10片装CCGT刀片"
    },
    prices: {
      current: 0,
      min: 200000,
      max: 340000
    },
    description,
    descriptions,
    seri: "CCGT",
    specs: "0602/09T3/1204",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["CCGT 060202", "CCGT 060204", "CCGT 09T302", "CCGT 09T304", "CCGT 09T308", "CCGT 120402", "CCGT 120404", "CCGT 120408"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCNhomCT",
    isTypical: false,
    code: "APKT",
    images: [
      "/manh_dao/gia_cong_nhom/APKT/vt_1.webp",
      "/manh_dao/gia_cong_nhom/APKT/spec.webp",
      "/manh_dao/gia_cong_nhom/APKT/vt_2.webp",
      "/manh_dao/gia_cong_nhom/APKT/vt_3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=500",
        data: ["/manh_dao/gia_cong_nhom/APKT/spec.webp"]
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip mã APKT",
      cn: "10片装APKT刀片"
    },
    prices: {
      current: 0,
      min: 210000,
      max: 310000
    },
    description,
    descriptions,
    seri: "APKT",
    specs: "1135/1604",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["APKT 1135-G2", "APKT 1604-G2", "APKT 1604-MA", "APKT 1604-MA3"]
  }
];

export default items;

export const manhDaoGCNhomItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
