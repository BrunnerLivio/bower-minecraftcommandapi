"use strict";
var _1 = require("../");
/**
 * @name Entity
 * @description
 * Entities encompass all dynamic, moving objects throughout the Minecraft world.
 */
var Entity = (function () {
    /**
     * @description
     * Initializes the Entity
     * @param {String} name Identification of the entity, set by Minecraft
     * @param {IEntity} entityTag The tags which should be writeable
     */
    function Entity(name, entityTag) {
        this.id = name;
        this.entityTag = entityTag || new _1.EntityTag();
    }
    Object.defineProperty(Entity.prototype, "Id", {
        /**
         * @name Id
         * @description
         * The name of the entity
         * @returns {String} The id of the entity, set by Minecraft
         */
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "Tag", {
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
    Object.defineProperty(Entity.prototype, "Command", {
        /**
         * @name Command
         * @description
         * The command of the entity.
         * Is a JSON object, but provided as string
         * @returns {String} The command as string.
         */
        get: function () {
            // Replace e.g. {"CustomName": "MyName"} to {CustomName: "MyName"}
            var command = JSON.stringify(this.entityTag.Data)
                .replace(/\"([^(\")"]+)\":/g, '$1:');
            return command != '{}' ? command : '';
        },
        enumerable: true,
        configurable: true
    });
    return Entity;
}());
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map