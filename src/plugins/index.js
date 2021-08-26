/* 公共引入,勿随意修改,修改时需经过确认 */
import Vue from 'vue'
import './element'
import './support'
import '@/styles/vab.scss'
import '@/remixIcon'
import '@/colorfulIcon'
import '@/config/permission'
import '@/utils/errorLog'
import './vabIcon'

import Vab from '@/utils/vab'
import VabPermissions from 'zx-layouts/Permissions'
import VabCount from 'zx-count'
import VabMixins from '@/mixins'
import VabLayer from '@/components/VabLayer'

Vue.prototype.$vabLayer = new VabLayer(Vue)

Vue.use(Vab)
Vue.use(VabPermissions)
Vue.use(VabCount)
Vue.mixin(VabMixins) // 注入全局混入
