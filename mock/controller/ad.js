const data = [
  {
    title: '恭喜勇士队【黎永浩】成交复购订单23760元',
    url: '/',
  },
  {
    title: '恭喜尖峰队【梁虹】成交复购订单6768元',
    url: '/',
  },
]
module.exports = [
  {
    url: '/ad/getList',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: 'success',
        data,
      }
    },
  },
]
