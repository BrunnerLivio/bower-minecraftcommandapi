"use strict";
/**
 * @name Position
 * @description
 * Represents one position, containing X, Y, Z coordinates
 * to identify the current position
 */
var Position = (function () {
    /**
     * @param {Number} x The coordinate on the X-Axis
     * @param {Number} y The coordinate on the Y-Axis
     * @param {Number} z The coordinate on the Z-Axis
     * @param {PositionType} type  The type of the position, which can be either absolute or relative
     */
    function Position(x, y, z, type) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.type = type;
    }
    Object.defineProperty(Position.prototype, "X", {
        /**
         * @returns The X-Coordinate of the position.
         */
        get: function () {
            return this.x;
        },
        /**
         * @param {Number} value The x coordinate which get set
         */
        set: function (value) {
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Position.prototype, "Y", {
        /**
         * @returns The Y-Coordinate of the position.
         */
        get: function () {
            return this.y;
        },
        /**
         * @param {Number} value The y coordinate which get set
         */
        set: function (value) {
            this.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Position.prototype, "Z", {
        /**
         * @returns The Z-Coordinate of the position.
         */
        get: function () {
            return this.z;
        },
        /**
         * @param {Number} value The z coordinate which should get set
         */
        set: function (value) {
            this.z = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Position.prototype, "Type", {
        /**
         * @returns The type of the position, which can be either relative or absolute.
         */
        get: function () {
            return this.type;
        },
        /**
         * @param {PositionType} value The type of the position, which can be either relative or absolute.
         */
        set: function (value) {
            this.type = value;
        },
        enumerable: true,
        configurable: true
    });
    return Position;
}());
exports.Position = Position;
//# sourceMappingURL=Position.js.map