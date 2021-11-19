import { AddTodo } from '../components/helper';

test('Should add todo to the list', () => {
  // Arrange
  const defaultTodo = [{
    id: 1,
    name: 'Learn JSX',
    isComplete: false,
  },
  {
    id: 2,
    name: 'Build awasome react app',
    isComplete: false,
  },
  {
    id: 3,
    name: 'Ship it',
    isComplete: false,
  }]

  const newTodo = {
    id: 3,
    name: 'New Todo',
    isComplete: false,
  }

  const exp = [newTodo, ...defaultTodo];
  const expected = JSON.stringify(exp);

  // Act
  const act = AddTodo(defaultTodo, newTodo);
  const val = JSON.stringify(act);

  // Assert
  expect(val).toBe(expected);
})

test('should not mutate the existing todo array', () => {
  // Arrange
  const defaultTodo = [{
    id: 1,
    name: 'Learn JSX',
    isComplete: false,
  },
  {
    id: 2,
    name: 'Build awasome react app',
    isComplete: false,
  }]

  const newTodo = {
    id: 3,
    name: 'New Todo',
    isComplete: false,
  }

  const expected = [{
    id: 1,
    name: 'Learn JSX',
    isComplete: false,
  },
  {
    id: 2,
    name: 'Build awasome react app',
    isComplete: false,
  }]

  // Act
  AddTodo(defaultTodo, newTodo);
  const act = defaultTodo;
  const compare = JSON.stringify(expected) === JSON.stringify(act)

  // Assert
  expect(true).toBe(compare);

})