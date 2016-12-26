"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require("../");
/**
 * @name Mob
 * @description
 * Mobs are living, moving game entities. The term "mob" is short for "mobile".
 */
var Mob = (function (_super) {
    __extends(Mob, _super);
    /**
     * @param {String} id The id of the entity
     */
    function Mob(id, entityTag) {
        return _super.call(this, id, entityTag || new _1.MobTag()) || this;
    }
    Object.defineProperty(Mob.prototype, "Tag", {
        /**
         * @name Tag
         * @description
         * Tags which modify the entity with your given values.
         */
        get: function () {
            return this.entityTag;
        },
        enumerable: true,
        configurable: true
    });
    return Mob;
}(_1.Entity));
exports.Mob = Mob;
//# sourceMappingURL=Mob.js.map