<script>
  import VabFormItem from './VabFormItem.vue'

  export default {
    name: 'VabForm',
    components: { VabFormItem },
    props: {
      labelWidth: {
        type: String,
        default: '70px',
      },
      labelPosition: {
        type: String,
        default: 'right',
      },
      // 表单内容
      column: {
        type: Array,
        default: () => [],
      },
      // 用于控制该表单内组件的尺寸,	medium / small / mini
      size: {
        type: String,
        default: 'medium',
      },
    },
    computed: {
      formConfig() {
        return this.$attrs
      },
    },
    methods: {
      _$render(a, b, c, d) {
        return this.$createElement(a, b, c, d)
      },
      // 重写表单验证输出
      validate() {
        return new Promise((resolve, reject) => {
          this.$refs.vabForm.validate((valid, errors) => {
            valid ? resolve(this.formConfig.model) : reject(errors)
          })
        })
      },
      // 设置默认规则
      setDefaultRule(label, rules = []) {
        rules.forEach((rule) => {
          if (rule.required && !rule.message) rule.message = label + '不能为空'
        })
      },
      // 验证item绑定值是否有model对应值
      isValidField(field) {
        if (
          this.formConfig.model &&
          typeof this.formConfig.model[field] == 'undefined'
        ) {
          console.warn(`model 未声明 ${field} 属性`)
          return false
        }
        return true
      },
      renderColumn(columnIndex) {
        const { field } = this.column[columnIndex]
        const props = {
          value: this.formConfig.model[field],
          options: this.column[columnIndex],
        }

        return this._$render('vab-form-item', {
          props,
          on: {
            change: ({ field, value }) => {
              this.$attrs.model[field] = value
            },
          },
        })
      },
      // Layout布局
      drawLayout() {
        const renders = []

        this.column.forEach((item, index) => {
          const { field, label, rules, span = 24 } = item

          // 验证绑定值
          if (!this.isValidField(field)) return false

          this.setDefaultRule(label, rules)

          renders.push(
            this._$render(
              'el-col',
              { props: { span }, style: { minHeight: '51px' } },
              [
                this._$render(
                  'el-form-item',
                  {
                    props: { label, rules, prop: field },
                  },
                  [this.renderColumn(index)]
                ),
              ]
            )
          )
        })

        return this._$render('el-row', {}, renders)
      },
      renderSlots() {
        if (this.$scopedSlots.default) {
          return this.$scopedSlots.default()
        }
        return ''
      },
    },
    render(h) {
      return h(
        'el-form',
        {
          ref: 'vabForm',
          props: {
            labelWidth: this.labelWidth,
            labelPosition: this.labelPosition,
            size: this.size,
            ...this.formConfig,
          },
        },
        [this.drawLayout(), ...this.renderSlots()]
      )
    },
  }
</script>

<style lang="scss"></style>
