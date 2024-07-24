export const toastMessage = () => {
  const success = (title, message) => window.$toast.add({ severity: "success", summary: title, detail: message, life: 3000 });

  const error = (title, message) => window.$toast.add({ severity: "error", summary: title, detail: message, life: 3000 });

  const warn = (title, message) => window.$toast.add({ severity: "warn", summary: title, detail: message, life: 3000 });

  return {
    success,
    error,
    warn
  };
};
