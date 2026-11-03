const assert = require('assert');

describe('Math Unit Tests', () => {
    it('should add numbers correctly', () => {
        assert.strictEqual(1 + 1, 2);
    });
    it('should multiply numbers correctly', () => {
        assert.strictEqual(2 * 3, 6);
    });
    it('should subtract number correctly', () => {
        assert.strictEqual(5-3, 2);
    });
    it('should divide numbers correctly', () => {
        assert.strictEqual(6/3, 2);
    });
});
