import request from '@/utils/request'

export function getMySaleTurnoverPlanList(data) {
  return request({
    url: '/table/getMySaleTurnoverPlanList',
    method: 'get',
    data,
  })
}
