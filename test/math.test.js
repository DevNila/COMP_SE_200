const assert = require('assert');
const { add, multiply, substract, divide } = require('../math');

describe('Math Unit Tests', () => {
    it('should add numbers correctly', () => {
        assert.strictEqual(add(1,1), 2);
    });
    it('should multiply numbers correctly', () => {
        assert.strictEqual(multiply(2, 3), 6);
    });
    it('should subtract number correctly', () => {
        assert.strictEqual(substract(5,3), 2);
    });
    it('should divide numbers correctly', () => {
        assert.strictEqual(divide(6, 3), 2);
    });
});
