import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const extraImagesData1 = ["/manh_dao/tien_ranh_ren/16ER/spec_iso.webp", "/manh_dao/tien_ranh_ren/16ER/spec_ag.webp"];

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
    routeName: "pManhDaoTienRanhRenCT",
    isTypical: true,
    code: "16ER",
    images: [
      "/manh_dao/tien_ranh_ren/16ER/1_vt.webp",
      "/manh_dao/tien_ranh_ren/16ER/iso_vt.webp",
      "/manh_dao/tien_ranh_ren/16ER/ag_vt.webp",
      ...extraImagesData1
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        data: extraImagesData1
      }
    ],
    name: {
      vi: "Hộp 10 mảnh chip tiện rãnh 16ER",
      cn: "10片装16ER槽刀片"
    },
    prices: {
      current: 520000,
      min: 0,
      max: 0
    },
    description: description1,
    descriptions: descriptions1,
    seri: "16ER",
    specs: "ISO1.0-3.0/AG55-60",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoTienRanhRenCT",
    isTypical: false,
    code: "MGGN",
    images: ["/manh_dao/tien_ranh_ren/MGGN/1_vt.webp", "/manh_dao/tien_ranh_ren/MGGN/spec.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        data: ["/manh_dao/tien_ranh_ren/MGGN/spec.webp"]
      }
    ],
    name: {
      vi: "Hộp 10 mảnh dao tiện cắt đứt mã MGGN",
      cn: "10片装MGGN型切断切槽刀片"
    },
    prices: {
      current: 0,
      min: 340000,
      max: 380000
    },
    description: {
      vi: "Được sử dụng để tiện rãnh, tiện cắt đứt… trên máy tiện",
      cn: "用于车床上的切槽和切断加工"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: ["Được làm từ thép hợp kim, cạnh lưỡi sắc bén, sử dụng được 2 đầu.", "Có độ bền cao và cho bề mặt gia công bóng đẹp."]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["由合金钢制成，刀刃锋利，可双端使用。", "具有高耐用性，可获得光滑美观的加工表面。"]
        }
      ]
    },
    seri: "MGGN",
    specs: "R/L 2/3/4mm",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["MGGN200", "MGGN300", "MGGN400"]
  }
];

export default items;

export const manhDaoTienRanhRenItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
