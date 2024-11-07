export const numberToVnd = (input) => {
  const number = Number(input);
  /*
  if (typeof number !== "number") return "invalid";
  if (isNaN(number)) return "NaN";
  if (number % 1 !== 0) return "Số tiền phải tròn đơn vị đồng";
  */
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "VND" }).format(number);
};
