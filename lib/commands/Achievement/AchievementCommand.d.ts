import { ICommand } from '../../core';
import { Achievement } from './';
/**
 * @name IAchievementCommandTo
 * @description
 * Builder part of the AchievementCommand.
 * Adds a playername to a command.
 * Is used when calling 'Give' on IAchievementCommand
 */
export interface IAchievementCommandTo {
    /**
     * @name To
     * @description
     * Registers the given name to the command
     * @param {String} player Adds the given name to the command. Can also be @a or @p
     * @returns {ICommand} The final command, which can be generated.
     */
    To(player: String): ICommand;
}
/**
 * @name IAchievementCommandFrom
 * @description
 * Builder part of the AchievementCommand.
 * Adds a playername to a command.
 * Is used when calling 'Take' on IAchievementCommand
 *
 */
export interface IAchievementCommandFrom {
    /**
     * @name To
     * @description
     * Registers the given name to the command
     * @param {String} player Adds the given name to the command. Can also be @a or @p
     * @returns {ICommand} The final command, which can be generated.
     */
    From(player: String): ICommand;
}
/**
 * @name IAchievementCommandTo
 * @description
 * Builder part of the AchievementCommand.
 * Gives or takes the given achievement from the user
 */
export interface IAchievementCommand {
    /**
     * @name Give
     * @description
     * Gives the player the given Achievement
     * @param {Achievement} name The achievement the player should get
     */
    Give(name: Achievement): IAchievementCommandTo;
    /**
     * @name Take
     * @description
     * Takes from the player the given Achievement
     * @param {Achievement} name The achievement the player should loose
     */
    Take(name: Achievement): IAchievementCommandFrom;
}
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
/**
 * @name AchievementCommandTo
 * @description
 * Builder part of the AchievementCommand.
 * Adds a playername to a command.
 * Is used when calling 'Give' on IAchievementCommand
 */
export declare class AchievementCommandTo implements IAchievementCommandTo {
    private isGiven;
    private achievement;
    /**
     * @description
     * Initializes the Object.
     * @param {Achievement} achievement The achievement to give to a player
     */
    constructor(achievement: Achievement);
    /**
     * @name To
     * @description
     * Registers the playername to the command
     * @param {String} player The player you want to give the achievement.
     * @returns {AchievementCommandCommand} The final command, which can generate it as a string.
     */
    To(player: String): ICommand;
}
/**
 * @name AchievementCommandFrom
 * @description
 * Builder part of the AchievementCommand.
 * Adds a playername to a command.
 * Is used when calling 'Take' on IAchievementCommand
 */
export declare class AchievementCommandFrom implements IAchievementCommandFrom {
    private achievement;
    /**
     * @description
     * Initializes the Object.
     * @param {Achievement} achievement The achievement to take from a player
     */
    constructor(achievement: Achievement);
    /**
     * @name To
     * @description
     * Registers the playername to the command
     * @param {String} player The player you want to take the achievement.
     * @returns {AchievementCommandCommand} The final command, which can generate it as a string.
     */
    From(player: String): ICommand;
}
/**
 * @name AchievementCommand
 * @description
 * Builder part of the AchievementCommand.
 * Gives or takes the given achievement from the user
 */
export declare class AchievementCommand implements IAchievementCommand {
    constructor();
    /**
     * @name Give
     * @description
     * Gives the player the given Achievement
     * @param {Achievement} name The achievement the player should get
     */
    Give(name: Achievement): IAchievementCommandTo;
    /**
     * @name Take
     * @description
     * Takes from the player the given Achievement
     * @param {Achievement} name The achievement the player should loose
     */
    Take(name: Achievement): IAchievementCommandFrom;
}
