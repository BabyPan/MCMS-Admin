<template>
  <div class="container">
    <!-- input -->
    <template v-if="type == 'input'">
      <el-input v-model="queryData" :placeholder="options.placeholder" />
    </template>

    <!-- select -->
    <template v-if="type === 'select'">
      <vab-select
        v-model="queryData"
        :range="options.range"
        :multiple="options.multiple"
        :disabled="options.disabled"
        :value-key="options.valueKey"
        :size="options.size"
        :clearable="options.clearable"
        :collapse-tags="options.collapseTags"
        :multiple-limit="options.multipleLimit"
        :name="options.name"
        :autocomplete="options.autocomplete"
        :auto-complete="options.autoComplete"
        :filterable="options.filterable"
        :allow-create="options.allowCreate"
        :filter-method="options.filterMethod"
        :remote="options.remote"
        :remote-method="options.remoteMethod"
        :loading="options.loading"
        :loading-text="options.loadingText"
        :no-match-text="options.noMatchText"
        :no-data-text="options.noDataText"
        :popper-class="options.popperClass"
        :reserve-keyword="options.reserveKeyword"
        :default-first-option="options.defaultFirstOption"
        :popper-append-to-body="options.popperAppendToBody"
        :automatic-dropdown="options.automaticDropdown"
        :placeholder="options.placeholder"
        :remote-url="options.remoteUrl"
        :range-key="options.rangeKey"
        :range-value="options.rangeValue"
        :render="options.render"
      >
        <el-option
          v-for="select in options.range"
          :key="select.value"
          :label="select.label"
          :value="select.value"
        ></el-option>
      </vab-select>
    </template>

    <!-- datePicker -->
    <template v-if="type === 'datePicker'">
      <el-date-picker
        v-model="queryData"
        :type="options.type"
        :align="options.align"
        :readonly="options.readonly"
        :disabled="options.disabled"
        :editable="options.editable"
        :clearable="options.clearable"
        :size="options.size"
        :format="options.format"
        :value-format="options.valueFormat"
        :placeholder="options.placeholder"
        :unlink-panels="options.unlinkPanels"
        :range-separator="options.rangeSeparator"
        :start-placeholder="options.startPlaceholder"
        :end-placeholder="options.endPlaceholder"
        :picker-options="options.type == 'daterange' ? timeRangeOptions : {}"
      ></el-date-picker>
    </template>
  </div>
</template>

<script>
  import VabSelect from '@/components/VabSelect/VabSelect'

  export default {
    name: 'VabTableQueryItem',
    components: { VabSelect },
    props: {
      value: {
        type: [String, Number, Array, Date],
        default: '',
      },
      // 搜索组件类型
      type: {
        type: String,
        default: 'input',
      },
      // 搜索组件配置
      options: {
        type: Object,
        default: () => {},
      },
    },
    data() {
      return {
        queryData: this.value,
        // 时间范围快捷设置
        timeRangeOptions: {
          shortcuts: [
            {
              text: '昨天',
              onClick(picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24)
                end.setTime(end.getTime() - 3600 * 1000 * 24)
                picker.$emit('pick', [start, end])
              },
            },
            {
              text: '今天',
              onClick(picker) {
                const end = new Date()
                const start = new Date()
                picker.$emit('pick', [start, end])
              },
            },
            {
              text: '本周',
              onClick(picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(
                  start.getTime() - 3600 * 1000 * 24 * (start.getDay() - 1)
                )
                picker.$emit('pick', [start, end])
              },
            },
            {
              text: '本月',
              onClick(picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.setMonth(start.getMonth(), 1))
                picker.$emit('pick', [start, end])
              },
            },
            {
              text: '上月',
              onClick(picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.setMonth(start.getMonth() - 1, 1))
                end.setTime(end.setMonth(end.getMonth(), 0))
                picker.$emit('pick', [start, end])
              },
            },
          ],
        },
      }
    },
    watch: {
      queryData(newVal) {
        this.$emit('input', newVal)
      },
    },
  }
</script>
