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
        return new AchievementCommandCommand(true, this.achievement, player);
    };
    return AchievementCommandTo;
}());
exports.AchievementCommandTo = AchievementCommandTo;
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
        return new AchievementCommandCommand(false, this.achievement, player);
    };
    return AchievementCommandFrom;
}());
exports.AchievementCommandFrom = AchievementCommandFrom;
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
        return new AchievementCommandTo(name);
    };
    /**
     * @name Take
     * @description
     * Takes from the player the given Achievement
     * @param {Achievement} name The achievement the player should loose
     */
    AchievementCommand.prototype.Take = function (name) {
        return new AchievementCommandFrom(name);
    };
    return AchievementCommand;
}());
exports.AchievementCommand = AchievementCommand;
//# sourceMappingURL=AchievementCommand.js.map