"use strict";
var core_1 = require("../../core");
/**
 * @name SummonCommand
 * @description
 * Summons an entity (mobs, projectiles, items, vehicles, etc.).
 */
var SummonCommand = (function () {
    /**
     * @description
     * Summons an entity (mobs, projectiles, items, vehicles, etc.).
     * @param {IEntity} entity The entity which should get summo2ned
     */
    function SummonCommand(entity, position) {
        this.entity = entity;
        this.position = position;
    }
    Object.defineProperty(SummonCommand.prototype, "Command", {
        /**
         * @name Command
         * @description
         * Generates the summon command and returns it as a string.
         * @returns {String} The summon command, which is ready to import into Minecraft.
         */
        get: function () {
            var command = '/summon ' + this.entity.Id;
            if (this.position != undefined) {
                if (this.position.Type == core_1.PositionType.Absolute) {
                    command += ' ' + this.position.X +
                        ' ' + this.position.Y +
                        ' ' + this.position.Z;
                }
                else {
                    command += ' ~' + this.position.X +
                        ' ~' + this.position.Y +
                        ' ~' + this.position.Z;
                }
            }
            else {
                command += ' ~ ~ ~';
            }
            if (this.entity.Command != '') {
                command += ' ' + this.entity.Command;
            }
            return command;
        },
        enumerable: true,
        configurable: true
    });
    return SummonCommand;
}());
exports.SummonCommand = SummonCommand;
//# sourceMappingURL=SummonCommand.js.map