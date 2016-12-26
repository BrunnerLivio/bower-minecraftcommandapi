"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require("../../core");
var _1 = require("./");
/**
 * @name Zombie
 * @description
 * Zombies are common, undead hostile mobs that come in many variants.
 */
var Zombie = (function (_super) {
    __extends(Zombie, _super);
    /**
     * @description
     * Initializes the Zombie
     */
    function Zombie() {
        return _super.call(this, 'Zombie', new _1.ZombieTag()) || this;
    }
    Object.defineProperty(Zombie.prototype, "Tag", {
        /**
         * Tags which modify the entity with your given values.
         */
        get: function () {
            return this.entityTag;
        },
        enumerable: true,
        configurable: true
    });
    return Zombie;
}(core_1.Mob));
exports.Zombie = Zombie;
//# sourceMappingURL=Zombie.js.map