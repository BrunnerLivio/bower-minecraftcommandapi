"use strict";
/**
 * @name PositionType
 * @description
 * A positiontype, which can be either Relative or Absolute
 */
var PositionType;
(function (PositionType) {
    /**
     * @name Relative
     * @description
     * A position, which is relative to another object
     */
    PositionType[PositionType["Relative"] = 0] = "Relative";
    /**
     * @name Absolute
     * @description
     * A position, which is absolute
     */
    PositionType[PositionType["Absolute"] = 1] = "Absolute";
})(PositionType = exports.PositionType || (exports.PositionType = {}));
//# sourceMappingURL=PositionType.js.map