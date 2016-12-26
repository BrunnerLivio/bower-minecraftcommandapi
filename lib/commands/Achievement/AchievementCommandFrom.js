"use strict";
var _1 = require("./");
/**
 * @name AchievementCommandFrom
 * @description
 * Builder part of the AchievementCommand.
 * Adds a playername to a command.
 * Is used when calling 'Take' on IAchievementCommand
 */
var AchievementCommandFrom = (function () {
    /**
     * @description
     * Initializes the Object.
     * @param {Achievement} achievement The achievement to take from a player
     */
    function AchievementCommandFrom(achievement) {
        this.achievement = achievement;
    }
    /**
     * @name To
     * @description
     * Registers the playername to the command
     * @param {String} player The player you want to take the achievement.
     * @returns {AchievementCommandCommand} The final command, which can generate it as a string.
     */
    AchievementCommandFrom.prototype.From = function (player) {
        return new _1.AchievementCommandCommand(false, this.achievement, player);
    };
    return AchievementCommandFrom;
}());
exports.AchievementCommandFrom = AchievementCommandFrom;
//# sourceMappingURL=AchievementCommandFrom.js.map