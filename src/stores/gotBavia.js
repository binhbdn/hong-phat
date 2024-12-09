import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const detailsView = [[{ type: "tag", value: "options" }]];

const extraImagesData1 = ["/bavia/can_dao/NB_1000.webp", "/bavia/can_dao/RB_1000.webp", "/bavia/can_dao/EO_2000.webp"];

const extraImagesData2 = ["/bavia/luoi_dao/BS1010.webp", "/bavia/luoi_dao/BS1018.webp", "/bavia/luoi_dao/BS2010.webp", "/bavia/luoi_dao/BK3010.webp"];

const items = [
  {
    category: "pGotBavia",
    routeName: "pGotBaviaCT",
    isTypical: true,
    code: "CD_BAVIA",
    images: ["/bavia/vt_dao_va_can_dao.webp", ...extraImagesData1],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        data: extraImagesData1
      }
    ],
    name: {
      vi: "Cán dao gọt bavia",
      cn: "去毛刺刀柄"
    },
    prices: {
      current: 0,
      min: 89000,
      max: 220000
    },
    description: {
      vi: "Dụng cụ cầm tay chuyên dụng để lắp lưỡi dao gọt bavia, thiết kế chắc chắn và an toàn",
      cn: "用于安装去毛刺刀片的专用手持工具，设计牢固安全"
    },
    descriptions: {
      vi: [
        {
          title: "application",
          data: ["Dùng để mài những phần kim loại còn thừa, cạnh sắc…", "Được sử dụng rộng rãi trong các xưởng sản xuất, công trình xây dựng…"]
        },
        {
          title: "description",
          data: [
            "Thiết kế nhỏ gọn, dễ dàng di chuyển, tiết kiệm thời gian và sức lao động.",
            "Có khả năng cách điện và cách nhiệt cao, đem đến sự an toàn tuyệt đối cho người sử dụng.",
            "Tay cầm có độ nhám cao giúp không bị trơn trượt khi làm việc.",
            "Chất lượng tốt, độ bền cao và được bảo hành theo quy định của hãng."
          ]
        }
      ],
      cn: [
        {
          title: "application",
          data: ["用于打磨多余的金属、锐边等…", "广泛应用于生产车间、建筑工地等…"]
        },
        {
          title: "description",
          data: [
            "设计紧凑轻便，易于携带，节省时间和劳动力。",
            "具有优良的绝缘和隔热性能，为使用者提供绝对安全保障。",
            "手柄表面粗糙度高，防止作业时打滑。",
            "产品质量优良，耐用性强，享有厂家保修服务。"
          ]
        }
      ]
    },
    seri: "CD_BAVIA",
    specs: "VT/NG",
    brand: "Vân Tập, Noga",
    origin: ["cn", "jp"],
    listView: listViewCBO,
    detailsView,
    // extra data
    options: ["VT_NB1000", "VT_RB1000", "NOGA_E02000", "NOGA_NB1000", "NOGA_RB1000"]
  },
  {
    category: "pGotBavia",
    routeName: "pGotBaviaCT",
    isTypical: true,
    code: "LD_BAVIA",
    images: ["/bavia/vt_dao_va_can_dao.webp", ...extraImagesData2],
    extraImages: [
      {
        title: "specifications",
        subTitle: null,
        data: extraImagesData2
      }
    ],
    name: {
      vi: "Lưỡi dao gọt bavia",
      cn: "去毛刺刀片"
    },
    prices: {
      current: 0,
      min: 170000,
      max: 477000
    },
    description: {
      vi: "Lưỡi dao chuyên dụng để gọt bavia, mài nhẵn các cạnh sắc trên bề mặt kim loại",
      cn: "专用去毛刺刀片，用于打磨金属表面的锐边"
    },
    descriptions: {
      vi: [
        {
          title: "application",
          data: [
            "Dùng để mài những phần kim loại thừa, cạnh sắc từ quá trình đột dập, cắt gọt.",
            "Xử lý bavia cho các sản phẩm đột dập, giúp bề mặt nhẵn và đồng đều."
          ]
        },
        {
          title: "description",
          data: [
            "Thiết kế hiện đại với độ bền cao và khả năng chống ăn mòn tốt.",
            "Lưỡi dao sắc bén giúp xử lý bavia hiệu quả và nhanh chóng.",
            "Chất lượng tốt, giá cả hợp lý và được bảo hành theo quy định."
          ]
        }
      ],
      cn: [
        {
          title: "application",
          data: ["用于打磨冲压、切削加工中产生的多余金属和锐边。", "处理冲压产品的毛刺，使表面平滑均匀。"]
        },
        {
          title: "description",
          data: ["采用现代化设计，具有高耐用性和优良的防腐性能。", "刀片锋利，可快速高效地处理毛刺。", "质量优良，价格合理，享有保修服务。"]
        }
      ]
    },
    seri: "LD_BAVIA",
    specs: "VT/NG/SQ",
    brand: "Vân Tập, Noga, Sanqi",
    origin: ["cn", "jp"],
    listView: listViewCBO,
    detailsView,
    // extra data
    options: [
      "VT_BS1010 x 10pcs",
      "VT_BS2010 x 10pcs",
      "VT_BK3010 x 10pcs",
      "NOGA_BS1010 x 10pcs",
      "NOGA_BS1018 x 10pcs",
      "NOGA_BK3010 x 10pcs",
      "SANQI_BS1010 x 10pcs",
      "SANQI_BS1018 x 10pcs",
      "SANQI_BK3010 x 10pcs"
    ]
  }
];

export default items;

export const gotBaviaItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
