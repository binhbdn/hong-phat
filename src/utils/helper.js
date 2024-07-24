import { ref } from "vue";
export const formatDate = (date) => {
  if (date) {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const hour = dateObj.getHours();
    const minute = dateObj.getMinutes();
    let formattedDate = "";
    formattedDate = `${day < 10 ? "0" : ""}${day}/${month < 10 ? "0" : ""}${month}/${year},  ${hour < 10 ? "0" : ""}${hour}:${minute < 10 ? "0" : ""}${minute}`;
    return formattedDate;
  }
};
//format number

export const formatNumber = (number) => {
  if (number <= 0) {
    return 0;
  }
  return new Intl.NumberFormat("de-DE").format(number);
};

export const convertPhone = (phone, convertToPhoneVN = false) => {
  if (convertToPhoneVN) {
    const strPhone = phone.slice(2);
    return `0${strPhone}`;
  }
  if (phone.startsWith("84")) return phone;
  const strPhone = phone.slice(1);
  return `84${strPhone}`;
};

export const numberToVnd = (input) => {
  const number = Number(input);
  if (typeof number !== "number") {
    return "invalid";
  }
  if (isNaN(number)) return "NaN";
  if (number % 1 !== 0) return "Số tiền phải tròn đơn vị đồng";
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "VND" }).format(number);
};

export const useDebounceFn = (fn, delay = 200) => {
  let timeoutId = null;
  const isPending = ref(false);

  const debouncedFn = (...args) => {
    isPending.value = true;
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
      isPending.value = false;
    }, delay);
  };

  const cancel = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      isPending.value = false;
      timeoutId = null;
    }
  };

  return { debouncedFn, cancel, isPending };
};
