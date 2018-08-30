"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Grafana = /** @class */ (function (_super) {
    __extends(Grafana, _super);
    function Grafana() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Grafana.prototype.render = function () {
        return react_1.default.createElement("h1", null, "Graphana");
    };
    return Grafana;
}(react_1.PureComponent));
exports.default = Grafana;
//# sourceMappingURL=grafana.js.map