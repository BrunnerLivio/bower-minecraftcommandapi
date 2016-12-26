import { ICommand } from '../../core';
import { Achievement, IAchievementCommandTo, IAchievementCommandFrom, AchievementCommandTo, AchievementCommandFrom } from './';

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
 * @name AchievementCommand
 * @description
 * Builder part of the AchievementCommand.
 * Gives or takes the given achievement from the user
 */
export class AchievementCommand implements IAchievementCommand {
    /**
     * @name Give
     * @description
     * Gives the player the given Achievement
     * @param {Achievement} name The achievement the player should get
     */
    public Give(name: Achievement): IAchievementCommandTo {
        return new AchievementCommandTo(name);
    }

    /**
     * @name Take
     * @description
     * Takes from the player the given Achievement
     * @param {Achievement} name The achievement the player should loose
     */
    public Take(name: Achievement): IAchievementCommandFrom {
        return new AchievementCommandFrom(name);
    }

}
