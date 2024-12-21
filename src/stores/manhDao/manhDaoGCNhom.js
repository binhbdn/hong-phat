import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const description1 = {
  vi: "Chuyên gia công nhôm với độ bóng và độ chính xác cao",
  cn: ""
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
    routeName: "pManhDaoGCNhomCT",
    isTypical: true,
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
      cn: ""
    },
    prices: {
      current: 440000,
      min: 0,
      max: 0
    },
    description: description1,
    descriptions: descriptions1,
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
    code: "SPGT",
    images: ["/manh_dao/gia_cong_nhom/SPGT/1_vt.webp"],
    extraImages: null,
    name: {
      vi: "Hộp 10 mảnh chip tiện mã SPGT",
      cn: ""
    },
    prices: {
      current: 0,
      min: 300000,
      max: 460000
    },
    description: description1,
    descriptions: descriptions1,
    seri: "SPGT",
    specs: "05/06/07/09/11/14",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["SPGT 050204", "SPGT 060204", "SPGT 07T308", "SPGT 090408", "SPGT 110408", "SPGT 140512"]
  }
];

export default items;

export const manhDaoGCNhomItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
