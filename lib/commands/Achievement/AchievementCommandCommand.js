"use strict";
var _1 = require("./");
/**
 * @name AchievementCommandCommand
 * @description
 * Generates the final Achievment Command.
 */
var AchievementCommandCommand = (function () {
    /**
     * @description
     * Initializes the class
     * @param {Boolean} isGiven If the command should 'take' or 'give' the achievement
     * @param {Achievement} achievement The achievement to give or take
     * @param {String} playername The playername which have or delete the given achievement.
     */
    function AchievementCommandCommand(isGiven, achievement, playerName) {
        this.isGiven = isGiven;
        this.achievement = achievement;
        this.playerName = playerName;
    }
    /**
     * @name GetAchievementName
     * @description
     * Gets the name of achievement, by its value
     * @param {Achievement} achievement The achievement you want to have the name of.
     * @returns {String} The name of the achievement, of the given value
     */
    AchievementCommandCommand.prototype.GetAchievementName = function (achievement) {
        return _1.Achievement[achievement];
    };
    ;
    Object.defineProperty(AchievementCommandCommand.prototype, "Command", {
        /**
         * @name Command
         * @description
         * Generates the achievement command and returns it as string
         * @returns {String} The achievement command as string
         */
        get: function () {
            var command = '/achievement ';
            if (this.isGiven) {
                command += 'give ';
            }
            else {
                command += 'take ';
            }
            if (this.achievement == _1.Achievement.all) {
                command += '* ';
            }
            else {
                command += 'achievement.' + this.GetAchievementName(this.achievement) + ' ';
            }
            command += this.playerName;
            return command;
        },
        enumerable: true,
        configurable: true
    });
    return AchievementCommandCommand;
}());
exports.AchievementCommandCommand = AchievementCommandCommand;
//# sourceMappingURL=AchievementCommandCommand.js.map