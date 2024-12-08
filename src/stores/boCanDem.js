import { listViewCBO } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const items = [
  {
    category: "pBoCanDem",
    routeName: "pBoCanDemCT",
    isTypical: true,
    code: "BCD85_18",
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
    description: {
      vi: "Dùng để đệm, căn chỉnh phôi",
      cn: "用于垫片和工件对准"
    },
    descriptions: null,
    seri: "8.5mm",
    specs: "(18 chi tiết)",
    brand: "Vân Tập",
    origin: ["cn"],
    listView: listViewCBO,
    detailsView: null
    // extra data
  },
  {
    category: "pBoCanDem",
    routeName: "pBoCanDemCT",
    isTypical: false,
    code: "BCD90_18",
    images: ["/bo_can_dem_can_mau_ga_kep/bo_can_dem_90_18.webp"],
    extraImages: null,
    name: {
      vi: "Bộ căn đệm song song 18 chi tiết - chiều dày 9mm",
      cn: "平行垫片套装18件 - 厚度9mm"
    },
    prices: {
      current: null,
      min: 0,
      max: 0
    },
    description: {
      vi: "Dùng để đệm, căn chỉnh phôi",
      cn: "用于垫片和工件对准"
    },
    descriptions: null,
    seri: "9mm",
    specs: "(18 chi tiết)",
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
