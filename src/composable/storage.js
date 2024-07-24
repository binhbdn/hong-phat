class Storage {
  get(key) {
    try {
      const value = window.localStorage.getItem(key) ?? "";
      return value;
    } catch (error) {
      return null;
    }
  }
  set(key, value) {
    window.localStorage.setItem(key, value);
  }
  remove(key) {
    window.localStorage.removeItem(key);
  }
}
export const useStorage = new Storage();
