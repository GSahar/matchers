import sortObjectInArray from '../basic';

test('sort 1', () => {
  const result = sortObjectInArray([
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]);

  expect(result).toEqual([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},    
  ]);
});
