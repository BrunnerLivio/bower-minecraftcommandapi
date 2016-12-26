"use strict";
var _1 = require("./");
describe('AchievementCommand', function () {
    it('should generate a simple achievement command', function () {
        var command = new _1.AchievementCommand()
            .Give(_1.Achievement.openInventory)
            .To('@a')
            .Command;
        expect(command).to.be('/achievement give achievement.openInventory @a');
    });
    it('should generate a take achievement command', function () {
        var command = new _1.AchievementCommand()
            .Take(_1.Achievement.overkill)
            .From('SutrangSucher')
            .Command;
        expect(command).to.be('/achievement take achievement.overkill SutrangSucher');
    });
    it('should generate an achievement command which deletes all', function () {
        var command = new _1.AchievementCommand()
            .Take(_1.Achievement.all)
            .From('@p')
            .Command;
        expect(command).to.be('/achievement take * @p');
    });
});
//# sourceMappingURL=AchievementCommand.spec.js.map