"use strict";
var _1 = require("./");
/**
 * @name AchievementCommandTo
 * @description
 * Builder part of the AchievementCommand.
 * Adds a playername to a command.
 * Is used when calling 'Give' on IAchievementCommand
 */
var AchievementCommandTo = (function () {
    /**
     * @description
     * Initializes the Object.
     * @param {Achievement} achievement The achievement to give to a player
     */
    function AchievementCommandTo(achievement) {
        this.achievement = achievement;
    }
    /**
     * @name To
     * @description
     * Registers the playername to the command
     * @param {String} player The player you want to give the achievement.
     * @returns {AchievementCommandCommand} The final command, which can generate it as a string.
     */
    AchievementCommandTo.prototype.To = function (player) {
        return new _1.AchievementCommandCommand(true, this.achievement, player);
    };
    return AchievementCommandTo;
}());
exports.AchievementCommandTo = AchievementCommandTo;
//# sourceMappingURL=AchievementCommandTo.js.map