const parser = require('../parser_new');
const assert = require('assert');

describe('Parsing ARRAY like arguments', () => {
    it('should return true when parsing a simple flag', () => {
        const args = parser(['--foo']);
        assert.deepEqual(args, {foo: true});
    });

    it('should return key-value pair when parsing composite flags', () => {
        const args = parser(['--foo', 'bar']);
        assert.deepEqual(args, {foo: 'bar'});
    });

    it('should return key-value pair when parsing composite flags with int values', () => {
        const args = parser(['--number', '1']);
        assert.deepEqual(args, {number: 1});
    });

    it('should parse multiple flags at once', () => {
        const args = parser(['--foo', '--bar', 'baz', '--number', '1']);
        assert.deepEqual(args, {foo: true, bar:'baz', number:1});
    });

    it('should handle multiple values for the same flag', () => {
        const args = parser(['--foo', '--bar', 'baz', '--bar', 'zab','--number', '1']);
        assert.deepEqual(args, {foo: true, bar:['baz', 'zab'], number:1});
    });
});

describe('Parsing STRING like arguments', () => {
    it('should return true when parsing a simple flag', () => {
        const args = parser('--foo');
        assert.deepEqual(args, {foo: true});
    });

    it('should return key-value pair when parsing composite flags', () => {
        const args = parser('--foo bar');
        assert.deepEqual(args, {foo: 'bar'});
    });

    it('should return key-value pair when parsing composite flags with int values', () => {
        const args = parser('--number 1');
        assert.deepEqual(args, {number: 1});
    });

    it('should parse multiple flags at once',() => {
        const args = parser('--foo --bar baz --number 1');
        assert.deepEqual(args, {foo: true, bar:'baz', number:1});
    });

    it('should handle multiple values for the same flag', () => {
        const args = parser('--foo --bar baz --bar zab --number 1');
        assert.deepEqual(args, {foo: true, bar:['baz', 'zab'], number:1});
    });
});

