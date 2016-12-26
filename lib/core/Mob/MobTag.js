"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require("../");
/**
 * @name MobTag
 * @description
 * The wrapper around MobTagData, which provides an easier
 * way to write data to it.
 */
var MobTag = (function (_super) {
    __extends(MobTag, _super);
    function MobTag() {
        var _this = _super.apply(this, arguments) || this;
        _this.data = new _1.MobTagData();
        return _this;
    }
    Object.defineProperty(MobTag.prototype, "AttackTime", {
        /**
         * @name AttackTime
         * @description
         * Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
         * @returns {Number} Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
         */
        get: function () {
            return this.data.AttackTime;
        },
        /**
         * @name AttackTime
         * @description
         * Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
         * @param {Number} value Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
         */
        set: function (value) {
            this.data.AttackTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobTag.prototype, "Data", {
        /**
        * @name Data
        * @description
        * The data of the mob, which can be converted to the JSON string,
        * which can be processed by Minecraft.
        */
        get: function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    return MobTag;
}(_1.EntityTag));
exports.MobTag = MobTag;
//# sourceMappingURL=MobTag.js.map