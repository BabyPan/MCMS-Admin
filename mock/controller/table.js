const list1 = []
const count = 999
for (let i = 0; i < count; i++) {
  list1.push({
    ApprovalId: 0,
    ApprovalName: '',
    ApprovalNote: '',
    ApprovalTime: '1900/01/01 00:00:00+0800',
    DailyReuseClueMax: 0,
    DailyReuseCustomerMax: 0,
    DepartmentId: 42,
    DepartmentName: '国台一部巅峰队',
    DoubtTurnover: 0,
    Id: 169,
    IsNewSale: 0,
    IsNewSaleText: '否',
    JoinDate: '2019/03/04 00:00:00+0800',
    JoinDays: 801,
    LeaderId: 268,
    LeaderName: '郭志杰(WN10267)',
    LeaderNote: '',
    Month: '2020-08',
    Point: 0,
    RealTurnoverTotal: 0,
    Status: 0,
    StatusText: '未提交',
    TurnoverTotal: 200000,
    UsedPoint: 0,
    UserId: 268,
    UserName: '郭志杰(WN10267)',
    ValidTurnover: 0,
  })
}

module.exports = [
  {
    url: '/table/getMySaleTurnoverPlanList',
    type: 'get',
    response(config) {
      if (config.method == 'GET') config.body = config.query

      const { page = 1, size = 20 } = config.body
      const pageList = list1.filter(
        (item, index) => index < size * page && index >= size * (page - 1)
      )

      return {
        code: 200,
        msg: 'success',
        totalCount: count,
        data: pageList,
      }
    },
  },
]
