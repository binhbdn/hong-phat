import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const extraImagesDataSEEN = ["/manh_dao/gia_cong_sat_thep_inox/SEEN/SEEN_1203.webp"];

const extraImagesDataSPMG = [
  "/manh_dao/gia_cong_sat_thep_inox/SPMG/SPMG_050204.webp",
  "/manh_dao/gia_cong_sat_thep_inox/SPMG/SPMG_060204.webp",
  "/manh_dao/gia_cong_sat_thep_inox/SPMG/SPMG_07T308.webp",
  "/manh_dao/gia_cong_sat_thep_inox/SPMG/SPMG_090408.webp",
  "/manh_dao/gia_cong_sat_thep_inox/SPMG/SPMG_110408.webp",
  "/manh_dao/gia_cong_sat_thep_inox/SPMG/SPMG_140512.webp"
];

const extraImagesDataCCMT = [
  "/manh_dao/gia_cong_sat_thep_inox/CCMT/CCMT_09T304.webp",
  "/manh_dao/gia_cong_sat_thep_inox/CCMT/CCMT_09T308.webp",
  "/manh_dao/gia_cong_sat_thep_inox/CCMT/CCMT_120404.webp",
  "/manh_dao/gia_cong_sat_thep_inox/CCMT/CCMT_120408.webp"
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
  }
];

export default items;

export const manhDaoGCSatThepInoxItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
