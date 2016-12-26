"use strict";
var entities_1 = require("../../entities");
var _1 = require("./");
var core_1 = require("../../core");
describe('SummonCommand', function () {
    it('should generate a simple summon command', function () {
        var zombie = new entities_1.Zombie();
        var summonCommand = new _1.SummonCommand(zombie);
        expect(summonCommand.Command).to.be('/summon Zombie ~ ~ ~');
    });
    it('should use relative coordinates', function () {
        var zombie = new entities_1.Zombie();
        var summonCommand = new _1.SummonCommand(zombie, new core_1.Position(1, 2, 3, core_1.PositionType.Relative));
        expect(summonCommand.Command).to.be('/summon Zombie ~1 ~2 ~3');
    });
    it('should use absolute coordinates', function () {
        var zombie = new entities_1.Zombie();
        var summonCommand = new _1.SummonCommand(zombie, new core_1.Position(1, 2, 3, core_1.PositionType.Absolute));
        expect(summonCommand.Command).to.be('/summon Zombie 1 2 3');
    });
    it('should use default value when no position is given', function () {
        var zombie = new entities_1.Zombie();
        var summonCommand = new _1.SummonCommand(zombie);
        expect(summonCommand.Command).to.be('/summon Zombie ~ ~ ~');
    });
    it('should send data tags', function () {
        var zombie = new entities_1.Zombie();
        zombie.Tag.AttackTime = 2;
        var summonCommand = new _1.SummonCommand(zombie, new core_1.Position(1, 2, 3, core_1.PositionType.Absolute));
        expect(summonCommand.Command).to.be('/summon Zombie 1 2 3 {AttackTime:2}');
    });
});
//# sourceMappingURL=SummonCommand.spec.js.map