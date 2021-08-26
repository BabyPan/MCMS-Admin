import request from '@/utils/request'

export function quickSearchAccountList(data) {
  return request({
    url: '/home/quickSearchAccountList',
    method: 'get',
    data,
  })
}

// 站内信接口
export function getNewSiteMessage(data) {
  return request({
    url: '/home/getNewSiteMessage',
    method: 'get',
    data,
  })
}
