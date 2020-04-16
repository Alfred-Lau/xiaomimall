/* 封装 SessionStorage */

const STORAGE_KEY = 'mall';

export default {
  /* 存储 */
  setItem(key, value, module_name) {
    const s = this.getStorage();
    if (module_name) {
      const current_module = s[module_name] || {};
      current_module[key] = value;
      s[module_name] = current_module;
    } else {
      s[key] = value;
    }

    return window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  },
  /* 获取 */
  getItem(key, module_name) {
    const s = this.getStorage();
    if (module_name) {
      return s[module_name] ? s[module_name][key] : '';
    } else {
      return s[key];
    }
  },
  /* 取所有值 */
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  /* 删除值 */
  clear(key, module_name) {
    const s = this.getStorage();
    if (module_name) {
      const tmp = s[module_name];
      delete tmp[key];
    } else {
      delete s[key];
    }

    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  },
};
