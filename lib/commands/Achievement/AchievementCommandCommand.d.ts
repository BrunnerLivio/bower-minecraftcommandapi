import { Achievement } from './';
import { ICommand } from '../../core';
/**
 * @name AchievementCommandCommand
 * @description
 * Generates the final Achievment Command.
 */
export declare class AchievementCommandCommand implements ICommand {
    private isGiven;
    private playerName;
    private achievement;
    /**
     * @description
     * Initializes the class
     * @param {Boolean} isGiven If the command should 'take' or 'give' the achievement
     * @param {Achievement} achievement The achievement to give or take
     * @param {String} playername The playername which have or delete the given achievement.
     */
    constructor(isGiven: Boolean, achievement: Achievement, playerName: String);
    /**
     * @name GetAchievementName
     * @description
     * Gets the name of achievement, by its value
     * @param {Achievement} achievement The achievement you want to have the name of.
     * @returns {String} The name of the achievement, of the given value
     */
    private GetAchievementName(achievement);
    /**
     * @name Command
     * @description
     * Generates the achievement command and returns it as string
     * @returns {String} The achievement command as string
     */
    readonly Command: String;
}
