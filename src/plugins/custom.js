import Vue from 'vue'
import VabMixins from '@/mixins'
import VabLayer from '@/components/VabLayer'

Vue.prototype.$vabLayer = new VabLayer(Vue)

Vue.mixin(VabMixins) // 注入全局混入
