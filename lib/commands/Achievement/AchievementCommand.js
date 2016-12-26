"use strict";
var _1 = require("./");
/**
 * @name AchievementCommand
 * @description
 * Builder part of the AchievementCommand.
 * Gives or takes the given achievement from the user
 */
var AchievementCommand = (function () {
    function AchievementCommand() {
    }
    /**
     * @name Give
     * @description
     * Gives the player the given Achievement
     * @param {Achievement} name The achievement the player should get
     */
    AchievementCommand.prototype.Give = function (name) {
        return new _1.AchievementCommandTo(name);
    };
    /**
     * @name Take
     * @description
     * Takes from the player the given Achievement
     * @param {Achievement} name The achievement the player should loose
     */
    AchievementCommand.prototype.Take = function (name) {
        return new _1.AchievementCommandFrom(name);
    };
    return AchievementCommand;
}());
exports.AchievementCommand = AchievementCommand;
//# sourceMappingURL=AchievementCommand.js.map