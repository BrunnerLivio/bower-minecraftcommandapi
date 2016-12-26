"use strict";
var _1 = require("./");
describe('EntityTag', function () {
    var entityTag;
    var data;
    beforeEach(function () {
        entityTag = new _1.EntityTag();
        data = entityTag.Data;
    });
    it('should set UUIDLeast', function () {
        entityTag.UUIDLeast = 'asdf';
        expect(entityTag.UUIDLeast).to.be('asdf');
        expect(data.UUIDLeast).to.be('asdf');
    });
    it('should set UUIDMost', function () {
        entityTag.UUIDMost = 'asdf';
        expect(entityTag.UUIDMost).to.be('asdf');
        expect(data.UUIDMost).to.be('asdf');
    });
    it('should set Invulnerable', function () {
        entityTag.Invulnerable = true;
        expect(entityTag.Invulnerable).to.be(true);
        expect(data.Invulnerable).to.be(true);
    });
    it('should set NoAI', function () {
        entityTag.NoAI = true;
        expect(entityTag.NoAI).to.be(true);
        expect(data.NoAI).to.be(true);
    });
    it('should add a passenger', function () {
        var entity = new _1.Entity('my_entity');
        entityTag.AddPassenger(entity);
        expect(data.Passengers[0].id).to.be('my_entity');
        expect(data.Passengers.length).to.be(1);
    });
    it('should set Fire', function () {
        entityTag.Fire = 1;
        expect(entityTag.Fire).to.be(1);
        expect(data.Fire).to.be(1);
    });
    it('should throw an error when Fire value is out of range', function () {
        expect(function () {
            entityTag.Fire = -2;
        })
            .to
            .throwException(function () {
            return new RangeError('Value must be between -1 and 32767');
        });
    });
    it('should set NoGravity', function () {
        entityTag.NoGravity = true;
        expect(entityTag.NoGravity).to.be(true);
        expect(data.NoGravity).to.be(true);
    });
});
//# sourceMappingURL=EntityTag.spec.js.map