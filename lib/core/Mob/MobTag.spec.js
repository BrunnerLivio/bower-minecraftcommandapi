"use strict";
var _1 = require("./");
describe('MobTag', function () {
    it('should set AttackTime', function () {
        var mobTag = new _1.MobTag();
        mobTag.AttackTime = 1;
        expect(mobTag.AttackTime).to.be(1);
        var data = mobTag.Data;
        expect(data.AttackTime).to.be(1);
    });
});
//# sourceMappingURL=MobTag.spec.js.map