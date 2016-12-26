"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require("../");
/**
 * @name MobTagData
 * @description
 * This class represents the real Tags, which get converted to JSON String, when
 * the command is getting generated.
 */
var MobTagData = (function (_super) {
    __extends(MobTagData, _super);
    function MobTagData() {
        return _super.apply(this, arguments) || this;
    }
    return MobTagData;
}(_1.EntityTagData));
exports.MobTagData = MobTagData;
//# sourceMappingURL=MobTagData.js.map