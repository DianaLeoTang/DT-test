/*
 * @Author: 唐王瑶
 * @Email：tangwangyao@hualala.com
 * @Date: 2021-06-25 20:57:43
 * @Description: 页面/组件/功能的
 * @FilePath: /yd-tests/tests/unit/sum.test.js
 */
const sum = require('../../src/sum');
describe('函数测试入口', function () {
  it('测试一下sum函数', function () {
    expect(sum(1, 2)).toBe(1);
    expect(sum(2, 2)).toBe(4);
  });
});