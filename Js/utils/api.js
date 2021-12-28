const api = {
  get: function (url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
};
export default api;
