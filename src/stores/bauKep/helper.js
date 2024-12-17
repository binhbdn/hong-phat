export const descriptionBauKepCommon = {
  vi: "Dùng kẹp các loại mũi khoan, mũi doa, dao phay ngón và tapping các chi tiết trên máy phay",
  cn: "用于夹紧铣床上的钻头、铰刀、指铣刀和丝锥零件"
};

export const descriptionBauKepDaoPhayNgon = {
  vi: "Thường dùng để kẹp các loại dao phay ngón",
  cn: "通常用于夹持各种立铣刀"
};

export const descriptionBauKepDaoPhayNgonMuiKhoan = {
  vi: "Thường dùng để kẹp các loại dao phay ngón, mũi khoan",
  cn: "通常用于夹持各种立铣刀、钻头"
};

export const descriptionsBauKep = {
  vi: [
    {
      title: "description",
      data: ["Được làm từ thép hợp kim có độ cứng và độ bền cao.", "Tốc độ gia công hoàn hảo, dễ dàng thao tác trong quá trình sử dụng."]
    }
  ],
  cn: [
    {
      title: "description",
      data: ["由高强度合金钢制成，具有出色的硬度和耐用性。", "加工速度完美，操作简单方便。"]
    }
  ]
};

export const detailsViewBauKep = [
  ["seri", "model"],
  [{ type: "i18n", value: "material" }, "hardness"],
  ["accuracy", "maxRPM", "overallLength"],
  [{ type: "tag", value: "specsList" }]
];
