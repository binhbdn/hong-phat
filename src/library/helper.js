export const formatNumber = (number) => new Intl.NumberFormat("de-DE").format(number);

export const numberToVnd = (input) => {
  const number = Number(input);
  /*
  if (typeof number !== "number") return "invalid";
  if (isNaN(number)) return "NaN";
  if (number % 1 !== 0) return "Số tiền phải tròn đơn vị đồng";
  */
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "VND" }).format(number);
};

export const removeDiacriticsAndLowerCase = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
