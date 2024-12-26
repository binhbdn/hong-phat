import { listViewADB, listViewADL } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const descriptionTDT = {
  vi: "Thường được sử dụng trong quá trình lấy gốc phôi gia công phay",
  cn: ""
};

const descriptionTC = {
  vi: "Đầu dò tâm cơ chống từ tính",
  cn: "通常用于铣削加工中寻找工件基准点"
};

const descriptionsTDT = {
  vi: [
    {
      title: "description",
      data: [
        "Khi chạm bề mặt chi tiết, thì đầu cảm biến phát ra tiếng kêu “bíp” cộng với phát ra ánh sáng màu đỏ.",
        "Thuận tiện khi đo chiều sâu lỗ hoặc bề mặt mà người sử dụng không nhìn thấy đèn sáng nhưng vẫn nghe thấy tiếng kêu “bíp”.",
        "Sử dụng 1 cục pin UM-5#(SP)/1.5V. Có bán sẵn ở các văn phòng phẩm."
      ]
    }
  ],
  cn: [
    {
      title: "description",
      data: [
        "当接触工件表面时，传感器头会发出“哔”的声音，同时亮起红光。",
        "适用于测量孔深或用户看不到灯光但能听到“哔”声的表面。",
        "使用一节UM-5#(SP)/1.5V电池，办公用品商店有售。"
      ]
    }
  ]
};

const descriptionsTC = {
  vi: [
    {
      title: "description",
      data: ["Bề mặt phủ lớp titan kháng từ.", "Có thể xác định chính xác vị trí tâm của phôi đang được gia công.", "Lò xo có thể thay thế, chống mài mòn tốt."]
    }
  ],
  cn: [
    {
      title: "description",
      data: ["表面涂有防磁钛层。", "可以精确定位加工工件的中心位置。", "弹簧可更换，具有良好的耐磨性。"]
    }
  ]
};

const detailsView1 = [["accuracy", "diameter"]];

const detailsView2 = [
  ["rpm", "accuracy"],
  ["diameter", "length"]
];

const items = [
  {
    category: "pDauDoTamPhoi",
    routeName: "pDauDoTamPhoiCT",
    isTypical: false,
    code: "DDTP_20",
    images: ["/dau_do_tam_phoi/20mm_dien_tu/vt_1.webp", "/dau_do_tam_phoi/20mm_dien_tu/2.webp"],
    extraImages: null,
    name: {
      vi: "Đầu dò tâm điện tử 20mm có đèn báo",
      cn: "20mm电子中心探针带指示灯"
    },
    prices: {
      current: 310000,
      min: 0,
      max: 0
    },
    description: descriptionTDT,
    descriptions: descriptionsTDT,
    seri: "20mm",
    specs: "",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewADB,
    detailsView: detailsView1,
    // extra data
    accuracy: "±0.003mm",
    diameter: "20mm"
  },
  {
    category: "pDauDoTamPhoi",
    routeName: "pDauDoTamPhoiCT",
    isTypical: true,
    code: "DDTP_16",
    images: ["/dau_do_tam_phoi/16mm_dien_tu/vt_1.webp"],
    extraImages: null,
    name: {
      vi: "Đầu dò tâm điện tử 16mm có đèn báo",
      cn: "16mm电子中心探针带指示灯"
    },
    prices: {
      current: 360000,
      min: 0,
      max: 0
    },
    description: descriptionTDT,
    descriptions: descriptionsTDT,
    seri: "16mm",
    specs: "",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewADB,
    detailsView: detailsView1,
    // extra data
    accuracy: "±0.003mm",
    diameter: "16mm"
  },
  {
    category: "pDauDoTamPhoi",
    routeName: "pDauDoTamPhoiCT",
    isTypical: true,
    code: "DDTP_10",
    images: ["/dau_do_tam_phoi/10mm_gom_su/1.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "?w=400",
        data: ["/dau_do_tam_phoi/10mm_gom_su/2.webp"]
      }
    ],
    name: {
      vi: "Đầu dò tâm gốm sứ 10mm",
      cn: "10mm陶瓷对心器"
    },
    prices: {
      current: 665000,
      min: 0,
      max: 0
    },
    description: {
      vi: "Đầu dò tâm gốm sứ chống từ tính",
      cn: "陶瓷对心器抗磁性"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: ["Đầu sứ trắng kháng từ.", "Sử sụng đơn giản, nhanh chóng và chính xác."]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["白色陶瓷头抗磁性。", "使用简单快捷且精确。"]
        }
      ]
    },
    seri: "10mm",
    specs: "",
    brand: "",
    origin: ["cn"],
    listView: listViewADL,
    detailsView: detailsView2,
    // extra data
    rpm: "400-600rpm",
    accuracy: "±0.002mm",
    diameter: "10mm",
    length: "85mm"
  },
  {
    category: "pDauDoTamPhoi",
    routeName: "pDauDoTamPhoiCT",
    isTypical: true,
    code: "DDTP_4_1",
    images: ["/dau_do_tam_phoi/4mm_sensor/vt_1.webp", "/dau_do_tam_phoi/4mm_sensor/vt_2.webp"],
    extraImages: null,
    name: {
      vi: "Đầu dò tâm cơ 4mm Sensor CE-420",
      cn: "4mm机械式中心探针 Sensor CE-420"
    },
    prices: {
      current: 135000,
      min: 0,
      max: 0
    },
    description: descriptionTC,
    descriptions: descriptionsTC,
    seri: "4mm",
    specs: "",
    brand: "",
    origin: ["cn"],
    listView: listViewADL,
    detailsView: detailsView2,
    // extra data
    rpm: "400-600rpm",
    accuracy: "0.01-0.03mm",
    diameter: "10mm/4mm",
    length: "87mm"
  },
  {
    category: "pDauDoTamPhoi",
    routeName: "pDauDoTamPhoiCT",
    isTypical: false,
    code: "DDTP_4_2",
    images: ["/dau_do_tam_phoi/4mm/vt_1.webp", "/dau_do_tam_phoi/4mm/2.webp", "/dau_do_tam_phoi/4mm/vt_3.webp"],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/dau_do_tam_phoi/4mm/vt_3.webp"]
      }
    ],
    name: {
      vi: "Đầu dò tâm cơ 4mm",
      cn: "4mm机械式中心探针"
    },
    prices: {
      current: 110000,
      min: 0,
      max: 0
    },
    description: descriptionTC,
    descriptions: descriptionsTC,
    seri: "4mm",
    specs: "",
    brand: "",
    origin: ["cn"],
    listView: listViewADL,
    detailsView: detailsView2,
    // extra data
    rpm: "400-600rpm",
    accuracy: "±0.005mm",
    diameter: "10mm/4mm",
    length: "90mm"
  }
];

export default items;

export const dauDoTamPhoiItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
