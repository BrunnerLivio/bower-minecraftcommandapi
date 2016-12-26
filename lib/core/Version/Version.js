"use strict";
/**
 * @name Version
 * @description
 * The version of this API
 */
var Version = (function () {
    /**
     * @description
     * Initializes the Version
     * @param {String} name The name of the Version
     * @param {String} mcVersion The Minecraft Version which is support in this version.
     */
    function Version(name, mcVersion) {
        this.name = name;
        this.mcVersion = mcVersion;
    }
    Object.defineProperty(Version.prototype, "Name", {
        /**
         * @name Name
         * @description
         * The name of the current version
         */
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "MCVersion", {
        /**
         * @name MCVersion
         * @description
         * The Minecraft Version which is support in this version.
         */
        get: function () {
            return this.mcVersion;
        },
        enumerable: true,
        configurable: true
    });
    return Version;
}());
exports.Version = Version;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Version('0.0.4', '1.11');
//# sourceMappingURL=Version.js.map