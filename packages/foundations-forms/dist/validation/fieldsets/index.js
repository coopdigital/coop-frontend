"use strict";

exports.__esModule = true;

var _validation = require("./validation");

Object.keys(_validation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _validation[key]) return;
  exports[key] = _validation[key];
});
//# sourceMappingURL=index.js.map