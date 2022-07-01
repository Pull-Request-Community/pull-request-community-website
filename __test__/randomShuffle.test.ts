import { randomShuffle } from '../utils/randomShuffle';

describe('#unit-test randomShuffle', () => {
  test('should shuffle the array', () => {
    // Arrange
    const orderedRange = Array.from({ length: 52 }, (_, i) => i);

    // Act
    const shuffledRange = randomShuffle(orderedRange);

    // Assert
    expect(shuffledRange).not.toStrictEqual(orderedRange);
  });
});
