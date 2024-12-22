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
  }
];

export default items;

export const manhDaoGCNhomItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
