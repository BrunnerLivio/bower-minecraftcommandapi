"use strict";
var _1 = require("./");
describe('Zombie', function () {
    it('should set UUIDLeast', function () {
        var zombie = new _1.Zombie();
        zombie.Tag.UUIDLeast = 'Test';
        expect(zombie.Command).to.be('{UUIDLeast:"Test"}');
    });
    it('should set AttackTime', function () {
        var zombie = new _1.Zombie();
        zombie.Tag.AttackTime = 50;
        zombie.Tag.UUIDLeast = 'Test';
        expect(zombie.Command).to.be('{AttackTime:50,UUIDLeast:"Test"}');
    });
    it('should set CanBreakDoors', function () {
        var zombie = new _1.Zombie();
        zombie.Tag.CanBreakDoors = true;
        expect(zombie.Command).to.be('{CanBreakDoors:true}');
    });
    it('should add a Passenger', function () {
        var zombie1 = new _1.Zombie();
        zombie1.Tag.AttackTime = 5;
        zombie1.Tag.UUIDMost = '25';
        var zombie2 = new _1.Zombie();
        zombie2.Tag.AddPassenger(zombie1);
        expect(zombie2.Command).to.be('{Passengers:[{AttackTime:5,UUIDMost:"25",id:"Zombie"}]}');
    });
});
//# sourceMappingURL=Zombie.spec.js.map