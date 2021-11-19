import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const a = 5;
  const b = 10;
  const expected = 15;

  // Act
  const act = Add(a,b);

  // Assert
  expect(act).toBe(expected);

})

test('Return substraction of a - b', () => {
  // Arrange
  const a = 10;
  const b = 5;
  const expected = 5;

  // Act
  const act = Substract(a,b);

  // Assert
  expect(act).toBe(expected);

})

test('Return multiplication of two arguments', () => {
  // Arrange
  const a = 10;
  const b = 5;
  const expected = 50;

  // Act
  const act = Multiplication(a, b);

  // Assert
  expect(act).toBe(expected);

})