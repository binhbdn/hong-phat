import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const detailsView = [[{ type: "tag", value: "specsList" }]];

const items = [
  {
    category: "pDauKepLapChuoiCon",
    routeName: "pDauKepLapChuoiConCT",
    isTypical: true,
    code: "CCAC",
    images: [
      "/dau_kep_lap_chuoi_con/chuoi_con_ao_con/vt_ao_con.webp",
      "/dau_kep_lap_chuoi_con/chuoi_con_ao_con/2.webp",
      "/dau_kep_lap_chuoi_con/chuoi_con_ao_con/3.webp"
    ],
    extraImages: null,
    name: {
      vi: "Chuôi côn, áo côn",
      cn: "锥柄、锥套"
    },
    prices: {
      current: 0,
      min: 98000,
      max: 461000
    },
    description: {
      vi: "Dùng cho máy khoan bàn, máy khoan từ",
      cn: "适用于台式钻床、磁力钻床"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Chuôi côn và áo côn là hai phụ kiện không thể thiếu khi sử dụng máy khoan bàn, máy khoan từ.",
            "Chuôi côn là bộ phận trung gian để gắn đầu kẹp mũi khoan, đầu kẹp mũi taro vào trục chính máy khoan.",
            "Áo côn có cấu tạo hình ống, chuyên dùng để chuyển đổi độ côn từ cỡ lớn xuống cỡ nhỏ, giúp gắn mũi khoan côn dễ dàng hơn."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: [
            "锥柄和锥套是台式钻床、磁力钻床使用时不可或缺的两个配件。",
            "锥柄是用于将钻夹头、丝锥夹头安装到钻床主轴上的中间部件。",
            "锥套为管状结构，专门用于将主轴锥度从大规格转换为小规格，便于安装锥形钻头。"
          ]
        }
      ]
    },
    seri: "Chuôi côn - Áo côn",
    specs: "",
    brand: "KON",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: [
      "Chuôi côn MT2-B16",
      "Chuôi côn MT2-B18",
      "Chuôi côn MT3-B16",
      "Chuôi côn MT3-B18",
      "Chuôi côn MT4-B16",
      "Chuôi côn MT4-B18",
      "Chuôi côn MT5-B16",
      "Chuôi côn MT5-B18",
      "Áo côn 2-3",
      "Áo côn 3-4",
      "Áo côn 4-5"
    ]
  },
  {
    category: "pDauKepLapChuoiCon",
    routeName: "pDauKepLapChuoiConCT",
    isTypical: true,
    code: "DKMK",
    images: [
      "/dau_kep_lap_chuoi_con/dau_kep_mui_khoan/b16_18_22.webp",
      "/dau_kep_lap_chuoi_con/dau_kep_mui_khoan/vt_spec.webp",
      "/dau_kep_lap_chuoi_con/dau_kep_mui_khoan/vt_2.webp",
      "/dau_kep_lap_chuoi_con/dau_kep_mui_khoan/vt_3.webp",
      "/dau_kep_lap_chuoi_con/dau_kep_mui_khoan/vt_4.webp",
      "/dau_kep_lap_chuoi_con/dau_kep_mui_khoan/vt_5.webp"
    ],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        preview: false,
        options: "",
        data: ["/dau_kep_lap_chuoi_con/dau_kep_mui_khoan/vt_spec.webp"]
      }
    ],
    name: {
      vi: "Đầu kẹp mũi khoan B16, B18, B22",
      cn: "钻夹头 B16、B18、B22"
    },
    prices: {
      current: 0,
      min: 515000,
      max: 958000
    },
    description: {
      vi: "Đầu măng ranh 3 chấu chất lượng cao",
      cn: "高品质三爪卡盘"
    },
    descriptions: {
      vi: [
        {
          title: "description",
          data: [
            "Là phụ kiện chuyên dùng để kẹp mũi khoan xoắn, mũi khoan trụ.",
            "Được sản xuất từ thép cacbon rất chắc chắn, chịu nhiệt và ma sát tốt.",
            "Hỗ trợ khóa ”trái khế” giúp giữ chắc mũi khoan khi vận hành."
          ]
        }
      ],
      cn: [
        {
          title: "description",
          data: ["专用于夹持麻花钻和直柄钻头。", "采用高强度碳钢制造，具有良好的耐热性和耐磨性。", "配备星形锁紧装置，确保钻头在运行时牢固固定。"]
        }
      ]
    },
    seri: "DKMK",
    specs: "B16-B18-B22",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView,
    // extra data
    specsList: ["B16", "B18", "B22"]
  }
];

export default items;

export const dauKepLapChuoiConItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
