"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require("./");
var MockCustomTag = (function (_super) {
    __extends(MockCustomTag, _super);
    function MockCustomTag() {
        return _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MockCustomTag.prototype, "AttackTime", {
        get: function () {
            return '123';
        },
        enumerable: true,
        configurable: true
    });
    return MockCustomTag;
}(_1.EntityTag));
describe('Entity', function () {
    it('should use a custom Tag', function () {
        var entity = new _1.Entity('my_entity', new MockCustomTag());
        var tag = entity.Tag;
        expect(tag.AttackTime).to.be('123');
    });
    it('should use the default Tag', function () {
        var entity = new _1.Entity('my_entity');
        entity.Tag.UUIDMost = '123';
        expect(entity.Tag.UUIDMost).to.be('123');
        var data = entity.Tag.Data;
        expect(data.UUIDMost).to.be('123');
    });
});
//# sourceMappingURL=Entity.spec.js.map