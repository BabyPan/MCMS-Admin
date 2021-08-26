import request from '@/utils/request'

export function getStaffList(data) {
  return request({
    url: '/leader/getStaffList',
    method: 'post',
    data,
  })
}

export function getStaffCareLogList(data) {
  return request({
    url: '/leader/getStaffCareLogList',
    method: 'post',
    data,
  })
}
