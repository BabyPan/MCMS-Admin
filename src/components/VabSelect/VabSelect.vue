<template>
  <el-select
    v-model="choose"
    :placeholder="placeholder"
    :multiple="multiple"
    :disabled="disabled"
    :value-key="valueKey"
    :size="size"
    :clearable="remoteUrl ? true : clearable"
    :collapse-tags="collapseTags"
    :multiple-limit="multipleLimit"
    :name="name"
    :autocomplete="autocomplete"
    :placeholde="placeholder"
    :filter-method="filterMethod"
    :no-match-text="noMatchText"
    :no-data-text="noDataText"
    :popper-class="popperClass"
    :reserve-keyword="reserveKeyword"
    :default-first-option="defaultFirstOption"
    :popper-append-to-body="popperAppendToBody"
    :automatic-dropdown="automaticDropdown"
    :filterable="remoteUrl ? true : filterable"
    :remote="remoteUrl ? true : remote"
    :allow-create="allowCreate"
    :loading-text="loadingText"
    :remote-method="remoteUrl ? handleRemoteMethod : remoteMethod"
  >
    <el-option
      v-for="item in remoteUrl ? options : range"
      :key="item.value"
      :label="item[rangeKey]"
      :value="item[rangeValue]"
    >
      <vab-select-render
        :data="item"
        :range-key="rangeKey"
        :render="render"
      ></vab-select-render>
    </el-option>
  </el-select>
</template>

<script>
  import props from './elSelectProp'
  import request from '@/utils/request'
  import VabSelectRender from './VabSelectRender'

  export default {
    name: 'VabSelect',
    components: { VabSelectRender },
    mixins: [props],
    props: {
      value: {
        type: [String, Number, Array],
        default: () => [],
      },
      // 远程搜索的数据url(开启后关闭自定义搜索方法)
      remoteUrl: {
        type: String,
        default: '',
      },
      rangeKey: {
        type: String,
        default: 'label',
      },
      rangeValue: {
        type: String,
        default: 'value',
      },
      render: {
        type: Function,
        default: (h, data, rangeKey) => <span>{data[rangeKey]}</span>,
      },
    },
    data() {
      return {
        choose: this.value,
        options: [],
        remoteLoading: false,
      }
    },
    watch: {
      choose(newVal) {
        this.$emit('input', newVal)
      },
    },
    mounted() {
      this.handleRemoteMethod('')
    },
    methods: {
      handleRemoteMethod(val) {
        if (!this.remoteUrl) return
        request({
          url: this.remoteUrl,
          method: 'get',
          data: {
            keyword: val,
          },
        }).then((res) => {
          this.options = res.Data
        })
      },
    },
  }
</script>

<style></style>
