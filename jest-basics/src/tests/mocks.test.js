import { map } from '../mocks';

describe('Mocks.js', () => {
  it('should call a callback fn n times', () => {
    const mockCallback = jest.fn();
    const arr = [5, 10, 15];
    map(arr, mockCallback);

    expect(mockCallback.mock.calls.length).toBe(arr.length);
  });

  it('should  return mapped array', () => {
    const mockCallback = jest.fn();
    const arr = [5, 10, 15];

    mockCallback
      .mockReturnValueOnce(10)
      .mockReturnValueOnce(20)
      .mockReturnValueOnce(30);

    const result = map(arr, mockCallback);

    expect(result).toEqual([10, 20, 30]);
  });
});

//   it('should return new mapped array', () => {
//     const mockCallback = jest.fn();
//     const arr = [1, 2, 3];
//     mockCallback
//       .mockReturnValueOnce(1)
//       .mockReturnValueOnce(2)
//       .mockReturnValueOnce(3);

//     const result = map(arr, mockCallback);

//     expect(result).toEqual([1, 2, 3]);
//   });
// });
