import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const extraImagesDataWNMG = [
  "/manh_dao/gia_cong_sau_nhiet/WNMG/WNMG_080404.webp",
  "/manh_dao/gia_cong_sau_nhiet/WNMG/WNMG_080408.webp",
  "/manh_dao/gia_cong_sau_nhiet/WNMG/WNMG_080412.webp"
];

const extraImagesDataCCMT = [
  "/manh_dao/gia_cong_sau_nhiet/CCMT/CCMT_09T304.webp",
  "/manh_dao/gia_cong_sau_nhiet/CCMT/CCMT_09T308.webp",
  "/manh_dao/gia_cong_sau_nhiet/CCMT/CCMT_120404.webp",
  "/manh_dao/gia_cong_sau_nhiet/CCMT/CCMT_120408.webp",
  "/manh_dao/gia_cong_sau_nhiet/CCMT/CCMT_060204.webp",
  "/manh_dao/gia_cong_sau_nhiet/CCMT/CCMT_060208.webp"
];

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
    routeName: "pManhDaoGCSauNhietCT",
    isTypical: true,
    code: "WNMG_BLUE",
    images: ["/manh_dao/gia_cong_sau_nhiet/WNMG/vt_1.webp", ...extraImagesDataWNMG],
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
      vi: "Hộp 10 mảnh chip mã WNMG - màu xanh",
      cn: "10片装WNMG刀片 - 蓝色"
    },
    prices: {
      current: 490000,
      min: 0,
      max: 0
    },
    description,
    descriptions,
    seri: "WNMG",
    specs: "0804-VA",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["WNMG 080404-VA", "WNMG 080408-VA", "WNMG 080412-VA"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSauNhietCT",
    isTypical: false,
    code: "CNMG_BLUE",
    images: ["/manh_dao/gia_cong_sau_nhiet/CNMG/1_vt.webp"],
    extraImages: null,
    name: {
      vi: "Hộp 10 mảnh chip mã CNMG - màu xanh",
      cn: "10片装CNMG刀片 - 蓝色"
    },
    prices: {
      current: 490000,
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
    specsList: ["CNMG 120404-BLUE", "CNMG 120408-BLUE"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSauNhietCT",
    isTypical: true,
    code: "CCMT_BLUE",
    images: ["/manh_dao/gia_cong_sau_nhiet/CCMT/1_vt.webp", ...extraImagesDataCCMT],
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
      vi: "Hộp 10 mảnh chip mã CCMT - màu xanh",
      cn: "10片装CCMT刀片 - 蓝色"
    },
    prices: {
      current: 0,
      min: 310000,
      max: 480000
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
    specsList: ["CCMT 09T304-BLUE", "CCMT 09T308-BLUE", "CCMT 120404-BLUE", "CCMT 120408-BLUE", "CCMT 060204-BLUE", "CCMT 060208-BLUE"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoGCSauNhietCT",
    isTypical: false,
    code: "RPMW_BLUE",
    images: ["/manh_dao/gia_cong_sau_nhiet/RPMW/vt_1.webp"],
    extraImages: null,
    name: {
      vi: "Hộp 10 mảnh chip mã RPMW - màu xanh",
      cn: "10片装RPMW刀片 - 蓝色"
    },
    prices: {
      current: 260000,
      min: 0,
      max: 0
    },
    description,
    descriptions,
    seri: "RPMW",
    specs: "1003",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["RPMW 1003-BLUE"]
  }
];

export default items;

export const manhDaoGCSauNhietItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
