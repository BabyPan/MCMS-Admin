import VabLayer from './VabLayer.vue'
import guid from '@/utils/guid'

/**
 * @description ElementUi 弹出框封装
 * @author XBVex
 */
class layer {
  constructor(Vue) {
    this.Vue = Vue
    this.LayerConstructor = Vue.extend(VabLayer)
  }

  /**
   * @method function
   * @param {*} options
   * @returns Layer Id
   */
  open(options = {}) {
    const layerConstructor = this.LayerConstructor
    const id = `VabLayer_${guid()}`
    options.id = id
    const el = new layerConstructor({
      data: options,
    }).$mount()

    document.body.appendChild(el.$el)

    el.open()

    return id
  }
}

export default layer
