import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const extraImagesDataWNMG = [
  "/manh_dao/gia_cong_gang/WNMG/WNMG_080404.webp",
  "/manh_dao/gia_cong_gang/WNMG/WNMG_080408.webp",
  "/manh_dao/gia_cong_gang/WNMG/WNMG_080412.webp"
];

const extraImagesDataCNMG = [
  "/manh_dao/gia_cong_gang/CNMG/CNMG_120404.webp",
  "/manh_dao/gia_cong_gang/CNMG/CNMG_120408.webp",
  "/manh_dao/gia_cong_gang/CNMG/CNMG_120412.webp"
];

const extraImagesDataSNMG = ["/manh_dao/gia_cong_gang/SNMG/SNMG_120404.webp", "/manh_dao/gia_cong_gang/SNMG/SNMG_120408.webp"];

const extraImagesDataCCMT1 = ["/manh_dao/gia_cong_gang/CCMT/CCMT_09T304.webp", "/manh_dao/gia_cong_gang/CCMT/CCMT_09T308.webp"];
const extraImagesDataCCMT2 = ["/manh_dao/gia_cong_gang/CCMT/CCMT_120404.webp", "/manh_dao/gia_cong_gang/CCMT/CCMT_120408.webp"];
const extraImagesDataCCMT3 = ["/manh_dao/gia_cong_gang/CCMT/CCMT_060204.webp"];
const extraImagesDataCCMT = [...extraImagesDataCCMT1, ...extraImagesDataCCMT2, ...extraImagesDataCCMT3];

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
    routeName: "pManhDaoGCGangCT",
    isTypical: true,
    code: "WNMG1",
    images: ["/manh_dao/gia_cong_gang/WNMG/vt_1.webp", ...extraImagesDataWNMG],
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
      vi: "Hộp 10 mảnh chip CNC mã WNMG - MA/hai màu",
      cn: "10片装WNMG - MA系列CNC刀片 - 双色"
    },
    prices: {
      current: 0,
      min: 480000,
      max: 520000
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
    specsList: ["WNMG 080404-MA", "WNMG 080408-MA", "WNMG 080404-2", "WNMG 080408-2", "WNMG 080412-2"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCGangCT",
    isTypical: false,
    code: "CNMG",
    images: ["/manh_dao/gia_cong_gang/CNMG/vt_1.webp", ...extraImagesDataCNMG],
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
      vi: "Hộp 10 mảnh chip CNC mã CNMG - MA/hai màu",
      cn: "10片装CNMG - MA系列CNC刀片 - 双色"
    },
    prices: {
      current: 0,
      min: 480000,
      max: 520000
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
    specsList: ["CNMG 120404-MA", "CNMG 120408-MA", "CNMG 120404-2", "CNMG 120408-2", "CNMG 120412-2"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCGangCT",
    isTypical: false,
    code: "SNMG1",
    images: ["/manh_dao/gia_cong_gang/SNMG/vt_1.webp", ...extraImagesDataSNMG],
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
      vi: "Hộp 10 mảnh chip CNC mã SNMG",
      cn: "10片装SNMG系列CNC刀片"
    },
    prices: {
      current: 520000,
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
    specsList: ["SNMG 120404", "SNMG 120408"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCGangCT",
    isTypical: true,
    code: "CCMT_2C",
    images: ["/manh_dao/gia_cong_gang/CCMT/1_vt.webp", ...extraImagesDataCCMT],
    extraImages: [
      {
        title: "specifications",
        subTitle: "CCMT 09T3",
        preview: false,
        options: "?w=250",
        data: extraImagesDataCCMT1
      },
      {
        title: null,
        subTitle: "CCMT 1204",
        preview: false,
        options: "?w=250",
        data: extraImagesDataCCMT2
      },
      {
        title: null,
        subTitle: "CCMT 0602",
        preview: false,
        options: "?w=250",
        data: extraImagesDataCCMT3
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip mã CCMT - hai màu",
      cn: "10片装CCMT刀片 - 双色"
    },
    prices: {
      current: 470000,
      min: 0,
      max: 0
    },
    description,
    descriptions,
    seri: "CCMT",
    specs: "09T3/1204/0602",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["CCMT 09T304-2", "CCMT 09T308-2", "CCMT 120404-2", "CCMT 120408-2", "CCMT 060204-2"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCGangCT",
    isTypical: false,
    code: "TNMG_2C",
    images: ["/manh_dao/gia_cong_gang/TNMG/1_vt.webp"],
    extraImages: null,
    name: {
      vi: "Hộp 10 mảnh chip mã TNMG - hai màu",
      cn: "10片装TNMG刀片 - 双色"
    },
    prices: {
      current: 480000,
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
    specsList: ["TNMG 160404-2", "TNMG 160408-2"]
  }
];

export default items;

export const manhDaoGCGangItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
