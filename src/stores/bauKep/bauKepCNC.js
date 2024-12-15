import { listViewAMB } from "@/stores/listViewOptions";
import { descriptionsBauKep, detailsViewBauKep } from "@/stores/bauKep/helper";

// 01 bầu kẹp CNC:
const bauKepCNCItem = {
  category: "pBauKep",
  routeName: "pBauKepCT",
  isTypical: true,
  code: "BK_CNC_BT30_ER",
  images: ["/bau_kep_cnc/bt30/vt_0.webp", "/bau_kep_cnc/bt30/spec.webp", "/bau_kep_cnc/bt30/spec_1.webp", "/bau_kep_cnc/bt30/1.webp"],
  extraImages: [
    {
      title: "specifications",
      subTitle: null,
      preview: true,
      options: "",
      data: ["/bau_kep_cnc/bt30/spec.webp", "/bau_kep_cnc/bt30/spec_1.webp"]
    }
  ],
  name: {
    vi: "Bầu kẹp CNC BT30 loại ER25/32",
    cn: "刀柄 CNC BT30 ER25/32"
  },
  prices: {
    current: 738000,
    min: 0,
    max: 0
  },
  description: {
    vi: "Thường dùng để kẹp các loại dao phay ngón",
    cn: "通常用于夹持各种立铣刀"
  },
  descriptions: descriptionsBauKep,
  seri: "BT30",
  specs: "ER25/32",
  brand: "CNC",
  origin: ["cn"],
  listView: listViewAMB,
  detailsView: detailsViewBauKep,
  // extra data
  model: "ER25/32",
  material: "AlloySteel",
  hardness: "56HRC-58HRC",
  accuracy: "0.003mm",
  maxRPM: "25.000rpm",
  overallLength: "100"
};

export default bauKepCNCItem;
