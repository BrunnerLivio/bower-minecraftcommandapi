"use strict";
var _1 = require("./");
/**
 * @name EntityTag
 * @description
 * The wrapper around EntityTagData, which provides an easier
 * way to write data to it.
 */
var EntityTag = (function () {
    function EntityTag() {
        this.data = new _1.EntityTagData();
    }
    Object.defineProperty(EntityTag.prototype, "UUIDLeast", {
        /**
         * @name UUIDLeast
         * @description
         * Sets the UUIDLeast of the Entity
         * @returns {String} The UUIDLeast of the entity
         */
        get: function () {
            return this.data.UUIDLeast;
        },
        /**
         * @name UUIDLeast
         * @description
         * Sets the UUIDLeast of the Entity
         * @param {String} value The UUIDLeast which should get set
         */
        set: function (value) {
            this.data.UUIDLeast = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityTag.prototype, "UUIDMost", {
        /**
         * @name UUIDMost
         * @description
         * Returns the UUIDMost of the Entity
         * @returns {String} The UUIDMost of the entity
         */
        get: function () {
            return this.data.UUIDMost;
        },
        /**
         * @name UUIDMost
         * @description
         * Sets the UUIDMost of the Entity
         * @param {String} value The UUIDMost which should get set
         */
        set: function (value) {
            this.data.UUIDMost = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityTag.prototype, "Invulnerable", {
        /**
         * @name Invulnerable
         * @description
         * Makes entities invulnerable
         * @returns {Boolean} If the entity is invulnerable or not.
         */
        get: function () {
            return this.data.Invulnerable;
        },
        /**
         * @name Invulnerable
         * @description
         * Makes entities invulnerable
         * @param {Boolean} value If the entity is invulnerable or not.
         */
        set: function (value) {
            this.data.Invulnerable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityTag.prototype, "NoAI", {
        /**
         * @name NoAI
         * @description
         * Makes entity have no AI.
         * @returns {Boolean} If the entity has or hasn't AI
         */
        get: function () {
            return this.data.NoAI;
        },
        /**
         * @name NoAI
         * @description
         * Makes entity have no AI.
         * @param {Boolean} value If the entity has or hasn't AI
         */
        set: function (value) {
            this.data.NoAI = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name AddPassenger
     * @description
     * Adds the given entity as passenger to this entity.
     * @param {Entity} entity The entity, which should get added as passaenger, on top of this entity.
     */
    EntityTag.prototype.AddPassenger = function (entity) {
        if (this.data.Passengers == undefined) {
            this.data.Passengers = new Array();
        }
        var data = entity.Tag.Data;
        data.id = entity.Id;
        this.data.Passengers.push(data);
    };
    Object.defineProperty(EntityTag.prototype, "Fire", {
        /**
         * @name Fire
         * @description
         * Determines how many ticks a mob is on fire.
         * @returns {Number} THe amount of time, in Ticks, the mob is on fire. -1, when not on fire.
         */
        get: function () {
            return this.data.Fire;
        },
        /**
         * @name Fire
         * @description
         * Determines how many ticks a mob is on fire.
         * @param {Number} value The amount of ticks the mob is on fire. Must be between -1
         * and 32767. Default -1, when not on fire.
         */
        set: function (value) {
            if (value >= -1 && value <= 32767) {
                this.data.Fire = value;
            }
            else {
                throw new RangeError('Value must be between -1 and 32767');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityTag.prototype, "NoGravity", {
        /**
         * @name NoGravity
         * @description
         * Makes entity unaffected by gravity.
         * @returns {Boolean} Whether the entity is affected by gravity or not.
         */
        get: function () {
            return this.data.NoGravity;
        },
        /**
         * @name NoGravity
         * @description
         * Makes entity unaffected by gravity.
         * @param {Boolean} value If the entity should be affacted by gravity or not.
         */
        set: function (value) {
            this.data.NoGravity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityTag.prototype, "Data", {
        /**
         * @name Data
         * @description
         * The data of the entity, which can be converted to the JSON string,
         * which can be processed by Minecraft.
         */
        get: function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    return EntityTag;
}());
exports.EntityTag = EntityTag;
//# sourceMappingURL=EntityTag.js.map