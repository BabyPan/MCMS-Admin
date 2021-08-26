const salesList = [
  { Id: 1, Title: '【员工】Admin(WN10000)', SubTitle: '正常' },
  { Id: 2, Title: '【员工】黄敏(WN10001)', SubTitle: '正常' },
  { Id: 3, Title: '【员工】林鑫(WN10002)', SubTitle: '正常' },
  { Id: 4, Title: '【员工】邓佳鑫(WN10003)', SubTitle: '正常' },
  { Id: 5, Title: '【员工】周旭敏(WN10004)', SubTitle: '禁用' },
  { Id: 6, Title: '【员工】梁桂源(WN10005)', SubTitle: '禁用' },
  { Id: 7, Title: '【员工】余炽刚(WN10006)', SubTitle: '正常' },
  { Id: 8, Title: '【员工】聂玉婷(WN10007)', SubTitle: '禁用' },
  { Id: 9, Title: '【员工】崔敏丽(WN10008)', SubTitle: '禁用' },
]

const siteMes = {
  Content:
    '吴斯宇您好：<br />&nbsp;&nbsp;&nbsp;&nbsp;您的订单【<a href="javascript:;" onclick="openOrderDetail(15174,\'201812121056411644\')">201812121056411644</a>】已取消，取消原因:业务员已离职，订单先行取消。',
  Id: '41120',
  Title: '订单【201812121056411644】取消通知',
}

module.exports = [
  {
    url: '/home/quickSearchAccountList',
    type: 'get',
    response(config) {
      if (config.method == 'GET') config.body = config.query

      const { keyword = '' } = config.body
      const pageList = salesList.filter(
        (item) => item.Title.indexOf(keyword) > -1
      )

      return {
        code: 200,
        msg: 'success',
        Data: pageList.slice(0, 5),
      }
    },
  },
  {
    url: '/home/getNewSiteMessage',
    type: 'get',
    response(config) {
      return {
        code: 200,
        msg: 'success',
        data: siteMes,
      }
    },
  },
]
