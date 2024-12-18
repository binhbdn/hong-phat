import { ref, watch } from "vue";

export const hiddenLinkIds = ref(new Set());
let currentStyleSheet = null;
let watcherStop = null;
let interval = null;

export const setHiddenLinkIds = (ids) => {
  hiddenLinkIds.value = new Set(ids);
};

const findAndProcessLinks = () => {
  const links = document.querySelectorAll(".hidden-a a");

  if (links.length > 0) {
    const ids = [];
    links.forEach((link) => {
      link.style.display = "none !important";
      if (link.id) {
        ids.push(link.id);
      }
    });
    setHiddenLinkIds(ids);
    clearInterval(interval);
  }
  return links.length > 0;
};

const startFindingLinks = () => {
  let retryCount = 0;
  const maxRetries = 5;

  interval = setInterval(() => {
    const found = findAndProcessLinks();
    // window.console.log("retryCount:", retryCount);
    if (!found) {
      retryCount++;
      if (retryCount >= maxRetries) {
        clearInterval(interval);
        console.warn("Không tìm thấy links sau 5 lần thử");
      }
    }
  }, 500);
};

export const createStyleSheet = () => {
  const newStyleSheet = document.createElement("style");
  hiddenLinkIds.value.forEach((id) => {
    newStyleSheet.textContent += `.hidden-a #${id} { display: none !important; }\n`;
  });
  document.head.appendChild(newStyleSheet);

  if (currentStyleSheet) {
    currentStyleSheet.remove();
  }
  currentStyleSheet = newStyleSheet;
};

export const initHiddenLinks = () => {
  if (!watcherStop) {
    watcherStop = watch(hiddenLinkIds, createStyleSheet);
  }
  startFindingLinks();
};

export const stopHiddenLinks = () => {
  if (watcherStop) {
    watcherStop();
    watcherStop = null;
  }
  if (currentStyleSheet) {
    currentStyleSheet.remove();
    currentStyleSheet = null;
  }
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};
