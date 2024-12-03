import { daoPhayItems } from "@/stores/daoPhay";
import { bauKepItems } from "@/stores/bauKep";
import { colletItems } from "@/stores/collet";
import { phuKienBauKepItems } from "@/stores/phuKienBauKep";
import { manhDaoItems } from "@/stores/manhDao";

const allProducts = [...daoPhayItems, ...bauKepItems, ...colletItems, ...phuKienBauKepItems, ...manhDaoItems];

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
