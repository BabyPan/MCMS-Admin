<script>
  import VabSelect from '../VabSelect/VabSelect.vue'

  export default {
    name: 'VabFormItem',
    components: { VabSelect },
    props: {
      value: {
        type: [Number, String, Array, Date, Boolean],
        default: '',
      },
      options: {
        type: Object,
        default: () => {},
      },
    },
    methods: {
      getKebabCase(str) {
        let newStr = str.replace(/[A-Z]/g, (i) => {
          return '-' + i.toLowerCase()
        })

        return newStr.slice(1)
      },
      checkTag(elTag) {
        if (elTag == 'el-checkbox') {
          return 'el-checkbox-group'
        } else if (elTag == 'el-radio') {
          return 'el-radio-group'
        }
        return elTag
      },
      renderOptions(elTag) {
        const children = []

        if (['el-checkbox', 'el-radio'].indexOf(elTag) > -1) {
          const { options } = this.options

          if (options.length > 0) {
            options.forEach((option) => {
              children.push(
                this.$createElement(
                  elTag,
                  {
                    props: {
                      label: option.value,
                      value: option.value,
                      disabled: option.disabled,
                    },
                  },
                  option.label
                )
              )
            })
          }
        }

        return children
      },
      renderByTag(h) {
        const elTagType = []
        const { elTag, elAttrs, field } = this.options
        const tagName = this.checkTag(elTag)

        // 没有传入elTag时默认返回span显示
        if (!elTag) return <span>{this.value}</span>

        const component = elTagType.find(
          (name) => elTag.indexOf(this.getKebabCase(name)) != -1
        )

        if (component) {
          // 封装的组件
          // todo：使用自定义组件（待扩展）
        }

        return h(
          tagName,
          {
            props: {
              value: this.value,
            },
            attrs: {
              ...elAttrs,
            },
            on: {
              input: (value) => {
                console.log('change', tagName, value)
                this.$emit('change', { field, value })
              },
            },
          },
          [this.renderOptions(elTag)]
        )
      },
    },
    render(h) {
      return this.renderByTag(h)
    },
  }
</script>

<style lang="scss"></style>
