<template>
  <el-table-column
    v-if="show"
    :key="Math.random()"
    :show-overflow-tooltip="true"
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
      <div class="table-op-wrap">
        <vab-table-render
          :scope="scope"
          :render="setColumn.render"
        ></vab-table-render>
      </div>
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
  }
</script>

<style lang="scss" scoped>
  .table-op-wrap {
    button {
      padding: 5px 7px;
    }
  }
</style>
