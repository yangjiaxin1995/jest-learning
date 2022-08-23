const { getData } = require('../fetch');

const axios = require('axios');

jest.mock('axios');

it('测试fetch', async () => {
  axios.get.mockResolvedValueOnce('123');
  axios.get.mockResolvedValueOnce('456');
  const data1 = await getData();
  const data2 = await getData();
  expect(data1).toBe('123');
  expect(data2).toBe('456');
});
