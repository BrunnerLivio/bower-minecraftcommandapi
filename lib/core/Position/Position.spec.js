"use strict";
var _1 = require("./");
describe('Position', function () {
    var position;
    beforeEach(function () {
        position = new _1.Position(1, 2, 3, _1.PositionType.Absolute);
    });
    it('should set and get the X coordinate', function () {
        position.X = 5;
        expect(position.X).to.be(5);
    });
    it('should set and get the Y coordinate', function () {
        position.Y = 5;
        expect(position.Y).to.be(5);
    });
    it('should set and get the Z coordinate', function () {
        position.Z = 5;
        expect(position.Z).to.be(5);
    });
    it('should set and get the Position Type', function () {
        position.Type = _1.PositionType.Relative;
        expect(position.Type).to.be(_1.PositionType.Relative);
    });
});
//# sourceMappingURL=Position.spec.js.map