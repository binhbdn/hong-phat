import { daoPhayNgonItems } from "@/stores/daoPhayNgon";
import { daoPhayCauItems } from "@/stores/daoPhayCau";
import { daoPhayVatMepItems } from "@/stores/daoPhayVatMep";
import { daoPhayBoGocItems } from "@/stores/daoPhayBoGoc";
import { daoPhayRTrongItems } from "@/stores/daoPhayRTrong";
import { daoPhayPhaThoItems } from "@/stores/daoPhayPhaTho";
import { bauKepColletItems } from "@/stores/bauKepCollet";

const allProducts = [
  ...daoPhayNgonItems,
  ...daoPhayCauItems,
  ...daoPhayVatMepItems,
  ...daoPhayBoGocItems,
  ...daoPhayRTrongItems,
  ...daoPhayPhaThoItems,
  ...bauKepColletItems
];

export default allProducts;

const mapAllProducts = {
  vi: [],
  cn: []
};

allProducts.forEach((item) => {
  mapAllProducts.vi.push({
    code: item.code,
    image: item.image,
    name: item.name.vi,
    normalizedName: item.normalizedName.vi
  });
  mapAllProducts.cn.push({
    code: item.code,
    image: item.image,
    name: item.name.cn,
    normalizedName: item.normalizedName.cn
  });
});

export const mapProducts = mapAllProducts;
