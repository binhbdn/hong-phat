import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const detailsView = [[{ type: "tag", value: "specsList" }]];

const items = [
  {
    category: "pManhDao",
    routeName: "pManhDaoTaoBongNhomCT",
    isTypical: true,
    code: "PCD",
    images: ["/manh_dao/tao_bong_nhom/PCD_1_vt.webp", "/manh_dao/tao_bong_nhom/vt_spec.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: "APKT",
        preview: false,
        options: "",
        data: ["/manh_dao/tao_bong_nhom/APKT_113504.webp", "/manh_dao/tao_bong_nhom/APKT_160404.webp"]
      },
      {
        title: null,
        subTitle: "CCGT",
        preview: false,
        options: "",
        data: ["/manh_dao/tao_bong_nhom/CCGT_09T304.webp", "/manh_dao/tao_bong_nhom/CCGT_09T308.webp"]
      },
      {
        title: null,
        subTitle: "CCMT",
        preview: false,
        options: "",
        data: ["/manh_dao/tao_bong_nhom/CCMT_09T304.webp", "/manh_dao/tao_bong_nhom/CCMT_09T308.webp", "/manh_dao/tao_bong_nhom/CCMT_060204.webp"]
      },
      {
        title: null,
        subTitle: "CNMG",
        preview: false,
        options: "",
        data: ["/manh_dao/tao_bong_nhom/CNMG_120404.webp", "/manh_dao/tao_bong_nhom/CNMG_120408.webp"]
      },
      {
        title: null,
        subTitle: "DCGT",
        preview: false,
        options: "",
        data: ["/manh_dao/tao_bong_nhom/DCGT_11T304.webp", "/manh_dao/tao_bong_nhom/DCGT_11T308.webp"]
      },
      {
        title: null,
        subTitle: "DCMT",
        preview: false,
        options: "",
        data: ["/manh_dao/tao_bong_nhom/DCMT_11T304.webp", "/manh_dao/tao_bong_nhom/DCMT_11T308.webp"]
      },
      {
        title: null,
        subTitle: "TCGT",
        preview: false,
        options: "",
        data: ["/manh_dao/tao_bong_nhom/TCGT_110204.webp"]
      },
      {
        title: null,
        subTitle: "TNMG",
        preview: false,
        options: "",
        data: ["/manh_dao/tao_bong_nhom/TNMG_160404.webp", "/manh_dao/tao_bong_nhom/TNMG_160408.webp"]
      },
      {
        title: null,
        subTitle: "VCMT",
        preview: false,
        options: "",
        data: ["/manh_dao/tao_bong_nhom/VCMT_160404.webp", "/manh_dao/tao_bong_nhom/VCMT_160408.webp"]
      },
      {
        title: null,
        subTitle: "VNMG",
        preview: false,
        options: "",
        data: ["/manh_dao/tao_bong_nhom/VNMG_160404.webp", "/manh_dao/tao_bong_nhom/VNMG_160408.webp"]
      },
      {
        title: null,
        subTitle: "WNMG",
        preview: false,
        options: "",
        data: ["/manh_dao/tao_bong_nhom/WNMG_080404.webp", "/manh_dao/tao_bong_nhom/WNMG_080408.webp"]
      },
      {
        title: null,
        subTitle: "MGMN",
        preview: false,
        options: "",
        data: ["/manh_dao/tao_bong_nhom/MGMN_200.webp", "/manh_dao/tao_bong_nhom/MGMN_300.webp"]
      }
    ],
    name: {
      vi: "Mảnh dao tiện PCD",
      cn: "PCD车削刀片"
    },
    prices: {
      current: 135000,
      min: 0,
      max: 0
    },
    description: {
      vi: "Dùng để tiện nhôm, kim loại màu với độ bóng và độ chính xác cao",
      cn: "用于高精度和高光洁度铝材及有色金属车削加工"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Đạt tiêu chuẩn quốc tế ISO.",
            "Khả năng chống mài mòn cao, độ chính xác cao",
            "Cạnh dao sắc bén, phù hợp cắt tốc độ cao",
            "Có thể được sử dụng liên tục, giúp giảm chi phí gia công.",
            "Đa dạng mẫu mã, phù hợp nhiều ứng dụng."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["符合ISO国际标准。", "具有高耐磨性和高精度", "刀刃锋利，适合高速切削", "可连续使用，有助于降低加工成本。", "型号多样，适用于多种应用。"]
        }
      ]
    },
    seri: "PCD",
    specs: "",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: [
      "APKT 113504 PCD",
      "APKT 160404 PCD",

      "CCGT 09T304 PCD",
      "CCGT 09T308 PCD",

      "CCMT 09T304 PCD",
      "CCMT 09T308 PCD",
      "CCMT 060204 PCD",

      "CNMG 120404 PCD",
      "CNMG 120408 PCD",

      "DCGT 11T304 PCD",
      "DCGT 11T308 PCD",

      "DCMT 11T304 PCD",
      "DCMT 11T308 PCD ",

      "TCGT 110204 PCD ",

      "TNMG 160404 PCD",
      "TNMG 160408 PCD",

      "VCMT 160404 PCD",
      "VCMT 160408 PCD",

      "VNMG 160404 PCD",
      "VNMG 160408 PCD",

      "WNMG 080404 PCD",
      "WNMG 080408 PCD",

      "MGMN 200 PCD",
      "MGMN 300 PCD "
    ]
  }
];

export default items;

export const manhDaoTaoBongNhomItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
