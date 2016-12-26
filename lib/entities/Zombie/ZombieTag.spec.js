"use strict";
var _1 = require("./");
describe('ZombieTag', function () {
    it('should set CanBreakDoors', function () {
        var zombie = new _1.Zombie();
        zombie.Tag.CanBreakDoors = true;
        expect(zombie.Tag.CanBreakDoors).to.be(true);
        var data = zombie.Tag.Data;
        expect(data.CanBreakDoors).to.be(true);
    });
});
//# sourceMappingURL=ZombieTag.spec.js.map