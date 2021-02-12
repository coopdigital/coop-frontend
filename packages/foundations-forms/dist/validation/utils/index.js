"use strict";

exports.__esModule = true;

var _aria = require("./aria");

Object.keys(_aria).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _aria[key]) return;
  exports[key] = _aria[key];
});

var _focus = require("./focus");

Object.keys(_focus).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _focus[key]) return;
  exports[key] = _focus[key];
});
//# sourceMappingURL=index.js.map