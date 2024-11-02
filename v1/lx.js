let data = (function bibao() {
  let obj = {
    name: "bibao",
    age: 18,
    sex: "男",
  };
  let zxc = () => {
    return null;
  };
  return {
    get: function (key) {
      return obj[key];
    },
  };
})();

Object.defineProperty(Object.prototype, "abc", {
  set() {
    console.log("set");
  },
  get() {
    return this;
  },
});

let zz = data.get("abc");
console.log(zz);

console.log((zz.name = "zz"));

console.log(zz);

let obj = {
  a: 1,
  b: 2,
};

console.log(obj.abc);
