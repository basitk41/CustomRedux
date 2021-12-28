export const storage = {
  set: function (name, data) {
    localStorage.setItem(name, JSON.stringify(data));
  },
  get: function (name) {
    return JSON.parse(localStorage.getItem(name));
  },
  remove: function (name) {
    localStorage.removeItem(name);
  },
};
