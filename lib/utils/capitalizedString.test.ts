import { capitalizedString } from './capitalizedString';

    describe('capitalizedString', () => {
        test('should return an empty string if input is empty', () => {
            expect(capitalizedString('')).toBe('');
        });

        test('should return null if input is null', () => {
            expect(capitalizedString(null)).toBeNull();
        });

        test('should return undefined if input is undefined', () => {
            expect(capitalizedString(undefined)).toBeUndefined();
        });

        test('should return the same string if first letter is already capitalized', () => {
            expect(capitalizedString('Capitalized')).toBe('Capitalized');
        });

        test('should capitalize only the first letter of a string with multiple words', () => {
            expect(capitalizedString('multiple words string')).toBe('Multiple words string');
        });

        test('should capitalize the first letter of a string', () => {
            expect(capitalizedString('string')).toBe('String');
        });
    });
