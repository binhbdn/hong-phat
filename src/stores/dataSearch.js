import { daoPhayItems } from "@/stores/daoPhay";
import { bauKepItems } from "@/stores/bauKep";
import { colletItems } from "@/stores/collet";
import { phuKienBauKepItems } from "@/stores/phuKienBauKep";
import { manhDaoItems } from "@/stores/manhDao";
import { canDaoGanManhItems } from "@/stores/canDaoGanManh";
import { taroItems } from "@/stores/taro";
import { duongKiemRenItems } from "@/stores/duongKiemRen";
import { eToItems } from "@/stores/eTo";
import { giaCongLoItems } from "@/stores/giaCongLo";
import { boCanDemItems } from "@/stores/boCanDem";
import { dauDoTamPhoiItems } from "@/stores/dauDoTamPhoi";
import { gotBaviaItems } from "@/stores/gotBavia";
import { doLuongItems } from "@/stores/doLuong";
import { dauKepLapChuoiConItems } from "@/stores/dauKepLapChuoiCon";

export const allProducts = [
  ...daoPhayItems,
  ...bauKepItems,
  ...colletItems,
  ...phuKienBauKepItems,
  ...manhDaoItems,
  ...canDaoGanManhItems,
  ...taroItems,
  ...duongKiemRenItems,
  ...eToItems,
  ...giaCongLoItems,
  ...boCanDemItems,
  ...dauDoTamPhoiItems,
  ...gotBaviaItems,
  ...doLuongItems,
  ...dauKepLapChuoiConItems
];

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

/* Hàm kiểm tra code trùng lặp
function checkDuplicateCode() {
  const codeMap = new Map();
  const duplicates = [];

  allProducts.forEach((product) => {
    if (codeMap.has(product.code)) {
      duplicates.push(product.code);
    } else {
      codeMap.set(product.code, true);
    }
  });

  if (duplicates.length > 0) {
    window.console.log("Các code bị trùng:", duplicates);
  } else {
    window.console.log("Không có code trùng");
  }
}

checkDuplicateCode();
*/
