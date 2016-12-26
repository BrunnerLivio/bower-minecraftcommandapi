"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require("../");
var MockCustomTag = (function (_super) {
    __extends(MockCustomTag, _super);
    function MockCustomTag() {
        return _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MockCustomTag.prototype, "AttackTime", {
        get: function () {
            return 123;
        },
        enumerable: true,
        configurable: true
    });
    return MockCustomTag;
}(_1.EntityTag));
describe('Mob', function () {
    it('should use a custom Tag', function () {
        var mob = new _1.Mob('my_entity', new MockCustomTag());
        expect(mob.Tag.AttackTime).to.be(123);
    });
    it('should use the default Tag', function () {
        var mob = new _1.Mob('my_entity');
        mob.Tag.AttackTime = 1;
        expect(mob.Tag.AttackTime).to.be(1);
    });
});
//# sourceMappingURL=Mob.spec.js.map