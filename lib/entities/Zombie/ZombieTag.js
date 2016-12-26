"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require("../../core");
var _1 = require("./");
/**
 * @name ZombieTag
 * @description
 * The wrapper around ZombieTagData, which provides an easier
 * way to write data to it.
 */
var ZombieTag = (function (_super) {
    __extends(ZombieTag, _super);
    function ZombieTag() {
        var _this = _super.apply(this, arguments) || this;
        _this.data = new _1.ZombieTagData();
        return _this;
    }
    Object.defineProperty(ZombieTag.prototype, "CanBreakDoors", {
        /**
         * @name CanBreakDoors
         * @description
         * If the zombie can break doors
         * @returns {Boolean} If the zombie can break doors
         */
        get: function () {
            return this.data.CanBreakDoors;
        },
        /**
         * @name CanBreakDoors
         * @description
         * If the zombie can break doors
         * @param {Boolean} value If the zombie can break doors
         */
        set: function (value) {
            this.data.CanBreakDoors = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZombieTag.prototype, "Data", {
        /**
        * @name Data
        * @description
        * The data of the zombie, which can be converted to the JSON string,
        * which can be processed by Minecraft.
        */
        get: function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    return ZombieTag;
}(core_1.MobTag));
exports.ZombieTag = ZombieTag;
//# sourceMappingURL=ZombieTag.js.map