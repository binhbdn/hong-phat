import { listViewCBO, listViewCTL } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const description1 = {
  vi: "Dùng để đệm, căn chỉnh phôi",
  cn: "用于垫片和工件对准"
};

const description2 = {
  vi: "Áp dụng cho các phép đo có chiều dài khác nhau; hiệu chuẩn các máy đo, dụng cụ đo có độ chính xác cao",
  cn: "适用于不同长度的测量；校准高精度测量仪器和工具"
};

const descriptions1 = {
  vi: [
    {
      title: "description",
      data: ["Dung sai khoảng cánh giữa hai cạnh song song: 0.005mm.", "Các cạnh được vát mép cẩn thận, các mặt được mài bóng."]
    }
  ],
  cn: [
    {
      title: "description",
      data: ["两个平行边之间的间隙公差：0.005mm。", "边缘经过仔细倒角，表面经过精密磨削。"]
    }
  ]
};

const descriptions2 = {
  vi: [
    {
      title: "description",
      data: [
        "Đáp ứng theo tiêu chuẩn ISO 3650.",
        "Có 3 cấp độ:",
        "Cấp 0 sử dụng cho các trung tâm kiểm định.",
        "Cấp 1 sử dụng cho các phòng QC, kiểm định của các công ty.",
        "Cấp 2 sử dụng cho các việc kiểm chuẩn cho các xưởng cơ khí."
      ]
    }
  ],
  cn: [
    {
      title: "description",
      data: ["符合ISO 3650标准。", "分为3个等级：", "0级适用于检验中心。", "1级适用于公司QC和检验部门。", "2级适用于机械加工车间的校准工作。"]
    }
  ]
};

const detailsView1 = [
  ["material", "hardness"],
  ["length", "width", "thickness"]
];

const detailsView2 = [...detailsView1, ["overallDimension", "weight"]];

const items = [
  {
    category: "pBoCanDem",
    routeName: "pBoCanDemCT",
    isTypical: true,
    code: "BCD8.5_18",
    images: ["/bo_can_dem_can_mau_ga_kep/bo_can_dem_85_18.webp"],
    extraImages: null,
    name: {
      vi: "Bộ căn đệm song song 18 chi tiết - chiều dày 8.5mm",
      cn: "平行垫片套装18件 - 厚度8.5mm"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: description1,
    descriptions: descriptions1,
    seri: "8.5mm",
    specs: "(18 chi tiết)",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCTL,
    detailsView: detailsView1,
    // extra data
    hardness: "48HRC-53HRC",
    material: "S45C",
    length: 150,
    width: "14-44",
    thickness: 8.5
  },
  {
    category: "pBoCanDem",
    routeName: "pBoCanDemCT",
    isTypical: false,
    code: "BCD10_18",
    images: ["/bo_can_dem_can_mau_ga_kep/bo_can_dem_90_18.webp"],
    extraImages: null,
    name: {
      vi: "Bộ căn đệm song song 18 chi tiết - chiều dày 10mm",
      cn: "平行垫片套装18件 - 厚度10mm"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: description1,
    descriptions: descriptions1,
    seri: "10mm",
    specs: "(18 chi tiết)",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCTL,
    detailsView: detailsView2,
    // extra data
    hardness: "48HRC-53HRC",
    material: "S45C",
    length: 150,
    width: "14-44",
    thickness: 10,
    overallDimension: "290*228*80",
    weight: "5.8Kg"
  },
  {
    category: "pBoCanDem",
    routeName: "pBoCanDemCT",
    isTypical: false,
    code: "BCD10_28",
    images: ["/bo_can_dem_can_mau_ga_kep/bo_can_dem_100_28.webp"],
    extraImages: null,
    name: {
      vi: "Bộ căn đệm song song 28 chi tiết - chiều dày 10mm",
      cn: "平行垫片套装28件 - 厚度10mm"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: description1,
    descriptions: descriptions1,
    seri: "10mm",
    specs: "(28 chi tiết)",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCTL,
    detailsView: detailsView1,
    // extra data
    hardness: "48HRC-53HRC",
    material: "S45C",
    length: 150,
    width: "14-50",
    thickness: 10
  },
  {
    category: "pBoCanDem",
    routeName: "pBoCanDemCT",
    isTypical: true,
    code: "BCM_103",
    images: [
      "/bo_can_dem_can_mau_ga_kep/bo_can_mau/vt_103.webp",
      "/bo_can_dem_can_mau_ga_kep/bo_can_mau/vt_spec.webp",
      "/bo_can_dem_can_mau_ga_kep/bo_can_mau/vt_spec_2.webp",
      "/bo_can_dem_can_mau_ga_kep/bo_can_mau/vt_2.webp",
      "/bo_can_dem_can_mau_ga_kep/bo_can_mau/vt_3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=450",
        data: ["/bo_can_dem_can_mau_ga_kep/bo_can_mau/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Bộ căn mẫu 103 chi tiết",
      cn: "103件量块套装"
    },
    prices: {
      current: 9502000,
      min: 0,
      max: 0
    },
    description: description2,
    descriptions: descriptions2,
    seri: "BCM",
    specs: "(103 chi tiết)",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pBoCanDem",
    routeName: "pBoCanDemCT",
    isTypical: false,
    code: "BCM_47",
    images: [
      "/bo_can_dem_can_mau_ga_kep/bo_can_mau/vt_47.webp",
      "/bo_can_dem_can_mau_ga_kep/bo_can_mau/vt_spec.webp",
      "/bo_can_dem_can_mau_ga_kep/bo_can_mau/vt_spec_2.webp",
      "/bo_can_dem_can_mau_ga_kep/bo_can_mau/vt_2.webp",
      "/bo_can_dem_can_mau_ga_kep/bo_can_mau/vt_3.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=450",
        data: ["/bo_can_dem_can_mau_ga_kep/bo_can_mau/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Bộ căn mẫu 47 chi tiết",
      cn: "47件量块套装"
    },
    prices: {
      current: 5047000,
      min: 0,
      max: 0
    },
    description: description2,
    descriptions: descriptions2,
    seri: "BCM",
    specs: "(47 chi tiết)",
    brand: "",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pBoCanDem",
    routeName: "pBoCanDemCT",
    isTypical: true,
    code: "BGK_58",
    images: [
      "/bo_can_dem_can_mau_ga_kep/bo_ga_kep/vt_1.webp",
      "/bo_can_dem_can_mau_ga_kep/bo_ga_kep/vt_1a.webp",
      "/bo_can_dem_can_mau_ga_kep/bo_ga_kep/vt_spec.webp",
      "/bo_can_dem_can_mau_ga_kep/bo_ga_kep/vt_spec_2.webp",
      "/bo_can_dem_can_mau_ga_kep/bo_ga_kep/2.webp",
      "/bo_can_dem_can_mau_ga_kep/bo_ga_kep/vt_3.webp",
      "/bo_can_dem_can_mau_ga_kep/bo_ga_kep/vt_4.webp",
      "/bo_can_dem_can_mau_ga_kep/bo_ga_kep/vt_5.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=450",
        data: ["/bo_can_dem_can_mau_ga_kep/bo_ga_kep/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Bộ gá kẹp 58 chi tiết",
      cn: "58件夹具套装"
    },
    prices: {
      current: 0,
      min: 1050000,
      max: 1850000
    },
    description: {
      vi: "Dùng để kẹp chặt chi tiết gia công trên bàn máy",
      cn: "用于在工作台上夹紧工件"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Với nhiều loại bu lông có chiều dài khác nhau, đai ốc di chuyển linh hoạt nên có thể kẹp chặt đa dạng nhiều loại chi tiết lớn nhỏ.",
            "Các chi tiết được ô xi hóa màu đen, chịu được lực gia công lớn."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["具有不同长度的螺栓，螺母灵活移动，可夹紧各种大小的工件。", "部件经过黑色氧化处理，可承受较大的加工力。"]
        }
      ]
    },
    seri: "BGK",
    specs: "(58 chi tiết)",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  }
];

export default items;

export const boCanDemItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
