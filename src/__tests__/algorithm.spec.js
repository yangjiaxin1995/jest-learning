const { dfs } = require('../dfs');
const { bfs } = require('../bfs');

const tree = {
  name: '中国',
  children: [
    {
      name: '北京',
      children: [
        {
          name: '朝阳群众',
          children: [
            {
              name: '西宁市',
              code: '0521',
            },
          ],
        },
        {
          name: '海淀区',
        },
        {
          name: '昌平区',
        },
      ],
    },
    {
      name: '浙江省',
      children: [
        {
          name: '杭州市',
          code: '0571',
        },
        {
          name: '嘉兴市',
        },
        {
          name: '绍兴市',
        },
        {
          name: '宁波市',
        },
      ],
    },
  ],
};
// 输出： { name: '西宁市', code: '0521' }

it('测试算法输出', () => {
  expect(dfs(tree, '西宁市')).toStrictEqual({ name: '西宁市', code: '0521' });
  expect(dfs(tree, '杭州市')).toStrictEqual({ name: '杭州市', code: '0571' });
  expect(bfs(tree, '西宁市')).toStrictEqual({ name: '西宁市', code: '0521' });
  expect(bfs(tree, '杭州市')).toStrictEqual({ name: '杭州市', code: '0571' });
});
