"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require("../../core");
/**
 * @name ZombieTagData
 * @description
 * This class represents the real Tags, which get converted to JSON String, when
 * the command is getting generated.
 */
var ZombieTagData = (function (_super) {
    __extends(ZombieTagData, _super);
    function ZombieTagData() {
        return _super.apply(this, arguments) || this;
    }
    return ZombieTagData;
}(core_1.MobTagData));
exports.ZombieTagData = ZombieTagData;
//# sourceMappingURL=ZombieTagData.js.map