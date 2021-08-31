<template>
  <el-table-column
    v-if="show"
    :key="Math.random()"
    :show-overflow-tooltip="false"
    :header-align="headerAlign"
    :align="setColumn.align || align"
    :prop="setColumn.prop"
    :label="setColumn.label"
    :width="setColumn.width"
    :min-width="setColumn.minWidth"
    :resizable="setColumn.resizable || true"
    :fixed="setColumn.fixed"
    :filters="setColumn.filters"
    :filter-placement="setColumn.filterPlacement"
    :filter-multiple="setColumn.filterMultiple"
    :filter-method="setColumn.filterMethod"
    :filtered-value="setColumn.filteredValue"
  >
    <template slot-scope="scope">
      <el-popover
        placement="top-start"
        trigger="hover"
        :open-delay="300"
        :width="150"
        :disabled="!scope.column.property || !showPopover"
        :content="String(scope.row[scope.column.property])"
      >
        <div slot="reference" class="table-op-wrap">
          <div @mouseenter="isToLong(scope.column, $event)">
            <vab-table-render
              :scope="scope"
              :render="setColumn.render"
            ></vab-table-render>
          </div>
        </div>
      </el-popover>
    </template>
  </el-table-column>
</template>

<script>
  import VabTableRender from './VabTableRender'

  export default {
    name: 'VabTableColumn',
    components: { VabTableRender },
    props: {
      // 列内容
      column: {
        type: Object,
        default: () => {},
      },
      // 表头对齐方式
      headerAlign: {
        type: String,
        default: '',
      },
      // 对齐方式
      align: {
        type: String,
        default: '',
      },
      show: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        showPopover: false,
      }
    },
    computed: {
      setColumn() {
        const { column } = this

        if (!column.render) {
          column.render = (h, scope) => {
            return <span>{scope.row[scope.column.property]}</span>
          }
        }

        return column
      },
    },
    methods: {
      // 字段内容是否超出宽度
      isToLong({ realWidth, width }, node) {
        const spanWidth = node.toElement.children[0].offsetWidth

        this.showPopover =
          spanWidth + 20 > (realWidth && realWidth > -1 ? realWidth : width)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .table-op-wrap {
    width: 100%;
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */

    button {
      padding: 5px 7px;
    }
  }
</style>
