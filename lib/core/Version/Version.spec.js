"use strict";
var Version_1 = require("./Version");
describe('Version', function () {
    it('should return the name of the version', function () {
        expect(new Version_1.Version('name', '1.1').Name).to.be('name');
    });
    it('should return the supported mc version', function () {
        expect(new Version_1.Version('name', '1.1').MCVersion).to.be('1.1');
    });
});
//# sourceMappingURL=Version.spec.js.map