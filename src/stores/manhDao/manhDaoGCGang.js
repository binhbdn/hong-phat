import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const extraImagesData1 = [
  "/manh_dao/gia_cong_gang/1/CCMT_09T304.webp",
  "/manh_dao/gia_cong_gang/1/CCMT_09T308.webp",
  "/manh_dao/gia_cong_gang/1/CCMT_120404.webp",
  "/manh_dao/gia_cong_gang/1/CCMT_120408.webp",
  "/manh_dao/gia_cong_gang/1/CCMT_060204.webp"
];

const description1 = {
  vi: "Sử dụng cho gia công tiện chạy tinh, tiện chạy thô, tiện chạy phá…",
  cn: "用于精车、粗车、半精车等车削加工"
};

const descriptions1 = {
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
    code: "CCMT_2C",
    images: ["/manh_dao/gia_cong_gang/1/1_vt.webp", ...extraImagesData1],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        data: extraImagesData1
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
    description: description1,
    descriptions: descriptions1,
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
    images: ["/manh_dao/gia_cong_gang/2/1_vt.webp"],
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
    description: description1,
    descriptions: descriptions1,
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
