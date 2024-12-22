import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const extraImagesData1 = ["/manh_dao/tien_ranh_ren/16ER/spec_iso.webp", "/manh_dao/tien_ranh_ren/16ER/spec_ag.webp"];

const description1 = {
  vi: "Sử dụng cho gia công tiện chạy tinh, tiện chạy thô, tiện chạy phá…",
  cn: "用于精车、粗车、半精车等车削加工"
};

const description2 = {
  vi: "Được sử dụng để tiện rãnh, tiện cắt đứt… trên máy tiện",
  cn: "用于车床上的切槽和切断加工"
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

const descriptions2 = {
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
};

const descriptions3 = {
  vi: [
    {
      title: "application",
      data: [
        "MGMN-H01: phù hợp gia công nhôm.",
        "MGMN-PC9030: phù hợp gia công vật liệu có độ cứng ≤ 30-45HRC.",
        "MGMN-NC3030: phù hợp gia công vật liệu có độ cứng ≤ 45HRC."
      ]
    },
    ...descriptions2.vi
  ],
  cn: [
    {
      title: "application",
      data: ["MGMN-H01: 适用于加工铝。", "MGMN-PC9030: 适用于加工硬度≤30-45HRC的材料。", "MGMN-NC3030: 适用于加工硬度≤45HRC的材料。"]
    },
    ...descriptions2.cn
  ]
};

const detailsView1 = [["dimension", "thickness"], [{ type: "tag", value: "seriList" }], [{ type: "tag", value: "specsList" }]];

const detailsView2 = [["thickness"], [{ type: "tag", value: "specsList" }]];

const detailsView3 = [["thickness"], [{ type: "tag", value: "seriList" }], [{ type: "tag", value: "specsList" }]];

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
        preview: false,
        options: "?w=500",
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
    detailsView: detailsView1,
    // extra data
    dimension: "16mm*16mm",
    thickness: "4mm",
    seriList: ["16ER-ISO", "16ER-AG55", "16ER-AG60"],
    specsList: ["16ER 0.5", "16ER 1.0", "16ER 1.5", "16ER 2.0", "16ER 3.0"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoTienRanhRenCT",
    isTypical: true,
    code: "MGGN",
    images: ["/manh_dao/tien_ranh_ren/MGGN/1_vt.webp", "/manh_dao/tien_ranh_ren/MGGN/spec.webp", "/manh_dao/tien_ranh_ren/MGMN/vt_spec_2.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=500",
        data: ["/manh_dao/tien_ranh_ren/MGGN/spec.webp"]
      }
    ],
    name: {
      vi: "Hộp 10 mảnh dao tiện cắt đứt mã MGGN R/L",
      cn: "10片装MGGN R/L型切断切槽刀片"
    },
    prices: {
      current: 0,
      min: 340000,
      max: 380000
    },
    description: description2,
    descriptions: descriptions2,
    seri: "MGGN",
    specs: "R/L 2-4mm",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: detailsView2,
    // extra data
    thickness: "2/3/4mm",
    specsList: ["MGGN200-R", "MGGN200-L", "MGGN300-R", "MGGN300-L", "MGGN400-R", "MGGN400-L"]
  },
  {
    category: "pManhDao",
    routeName: "pManhDaoTienRanhRenCT",
    isTypical: true,
    code: "MGMN",
    images: [
      "/manh_dao/tien_ranh_ren/MGMN/vt_1.webp",
      "/manh_dao/tien_ranh_ren/MGMN/spec.webp",
      "/manh_dao/tien_ranh_ren/MGMN/vt_spec_1.webp",
      "/manh_dao/tien_ranh_ren/MGMN/vt_spec_2.webp",
      "/manh_dao/tien_ranh_ren/MGMN/vt_H01.webp",
      "/manh_dao/tien_ranh_ren/MGMN/vt_PC9030.webp",
      "/manh_dao/tien_ranh_ren/MGMN/vt_NC3030.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=500",
        data: ["/manh_dao/tien_ranh_ren/MGMN/spec.webp"]
      }
    ],
    name: {
      vi: "Hộp 10 mảnh dao tiện cắt đứt mã MGMN G/M",
      cn: "10片装MGMN G/M型切断切槽刀片"
    },
    prices: {
      current: 0,
      min: 41000,
      max: 700000
    },
    description: description2,
    descriptions: descriptions3,
    seri: "MGMN",
    specs: "G/M 1.5-5mm",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: detailsView3,
    // extra data
    thickness: "1.5/2/2.5/3/4/5mm",
    seriList: ["MGMN-H01", "MGMN-PC9030", "MGMN-NC3030"],
    specsList: ["MGMN150-G", "MGMN200-G", "MGMN250-G", "MGMN300-M", "MGMN400-M", "MGMN500-M"]
  }
];

export default items;

export const manhDaoTienRanhRenItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
