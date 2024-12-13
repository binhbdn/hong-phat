import { listViewCTL } from "@/stores/listViewOptions";
import { mapSearchProps } from "@/stores/search";
import { findItemByCode } from "@/stores/products";

const description1 = {
  vi: "Dùng để đệm, căn chỉnh phôi",
  cn: "用于垫片和工件对准"
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
  }
];

export default items;

export const boCanDemItems = mapSearchProps(items);

export const getItemByCode = (code) => findItemByCode(items, code);
