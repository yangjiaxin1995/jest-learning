const delay = require('../delay');

it('异步测试', (done) => {
  jest.useFakeTimers();
  delay(() => {
    done();
  });
  jest.runAllTimers();
  expect(true).toBe(true);
});

it('异步测试', (done) => {
  let mockFn = jest.fn();
  jest.useFakeTimers();
  delay(() => {
    mockFn(1);
    mockFn(2);
    done();
  });
  jest.runAllTimers();
  expect(true).toBe(true);
  expect(mockFn).toBeCalled();
  expect(mockFn).toBeCalledTimes(2);
  expect(mockFn).toHaveBeenCalledWith(1);
});
