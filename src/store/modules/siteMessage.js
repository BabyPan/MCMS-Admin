import Vue from 'vue'
import { getNewSiteMessage } from '@/api/home'

const state = {
  siteMsgTimer: null, // 站内信全局定时器
}

const getters = {
  siteMsgTimer: (state) => state.siteMsgTimer,
}

const mutations = {
  setSiteMsgTimer: (state, timer) => {
    state.siteMsgTimer = timer
  },
}

const actions = {
  // 初始化站内信轮询
  async initSiteMsg({ commit, state }) {
    if (state.siteMsgTimer != null) return false

    const timer = setInterval(async () => {
      const { code, data } = await getNewSiteMessage()

      if (code === 200) {
        Vue.prototype.$vabLayer.open({
          title: data.Title,
          content: data.Content,
          confirmButtonText: '查看',
          showShade: false,
          titleSize: 14,
          width: '350px',
          offset: 'rb',
        })
      }
    }, 1000 * 60 * 5)

    commit('setSiteMsgTimer', timer)
    return true
  },
  // 清除站内信轮询
  removeSiteMsg({ commit, state }) {
    clearInterval(state.siteMsgTimer)
    commit('setSiteMsgTimer', null)
  },
}

export default { state, mutations, actions, getters }
