<template>
  <el-row class="table-container">
    <!-- 搜索组件 -->
    <vab-table-query
      v-if="searchList.length > 0"
      :data="searchList"
      @search="handleSearch"
    >
      <slot slot="queryBtn" name="queryBtn"></slot>
    </vab-table-query>

    <!-- 头部工具栏 -->
    <vab-table-toolbar
      v-if="toolbar"
      :column="columnShowList"
      :border="border"
      :bg-color="toolbarBgColor"
      :default-toolbar="defaultToolbar"
      @filterChange="handleFilterChange"
    >
      <div slot="toolbar">
        <slot name="toolbar"></slot>
      </div>
    </vab-table-toolbar>

    <!-- el表格 -->
    <el-table
      ref="tableSort"
      v-loading="dataMethod ? loading : tableLoading"
      :data="dataMethod ? tableData : data"
      :height="height || defaultHeight"
      :border="border"
    >
      <vab-table-column
        v-for="(item, index) in column"
        :key="index"
        :column="item"
        :align="align"
        :show="columnShowList[index].show"
      ></vab-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      :background="true"
      :current-page="currentPage"
      :layout="paginationLayout"
      :page-size="pageSize"
      :total="dataMethod ? dataTotal : total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    ></el-pagination>
  </el-row>
</template>

<script>
  import VabTableColumn from './VabTableColumn'
  import VabTableQuery from './VabTableQuery'
  import VabTableToolbar from './VabTableToolbar'

  export default {
    name: 'VabTable',
    components: { VabTableColumn, VabTableQuery, VabTableToolbar },
    props: {
      // 列内容
      column: {
        type: Array,
        default: () => [],
      },
      searchList: {
        type: Array,
        default: () => [],
      },
      // 表数据
      data: {
        type: Array,
        default: () => [],
      },
      // table高度
      height: {
        type: [Number, String],
        default: 0,
      },
      border: {
        type: Boolean,
        default: false,
      },
      // 对齐方式
      align: {
        type: String,
        default: '',
      },
      tableLoading: {
        type: Boolean,
        default: false,
      },
      // 是否显示分页
      pagination: {
        type: Boolean,
        default: true,
      },
      // 分页组件布局，子组件名用逗号分隔
      paginationLayout: {
        type: String,
        default: 'total, sizes, prev, pager, next, jumper',
      },
      // 分页 每页显示条目个数
      pageSize: {
        type: Number,
        default: 20,
      },
      // 分页 当前页数
      currentPage: {
        type: Number,
        default: 1,
      },
      // 分页 总条目数
      total: {
        type: Number,
        default: 0,
      },
      // 表格数据方法，优先于外部传入data
      dataMethod: {
        type: Function,
        default: null,
      },
      // 是否启用头部工具栏
      toolbar: {
        type: Boolean,
        default: true,
      },
      // 头部工具栏背景颜色
      toolbarBgColor: {
        type: String,
        default: '#f5f7fa',
      },
      // 头部工具栏右侧工具： filter: 显示筛选图标；exports: 显示导出图标；print: 显示打印图标
      defaultToolbar: {
        type: Array,
        default: () => ['filter', 'print', 'exports'],
      },
    },
    data() {
      return {
        columnShowList: [], // 列显示集
        tablePage: this.currentPage,
        tableSize: this.pageSize,
        tableData: [], // 表格数据
        loading: true, // 表格加载中
        dataTotal: 0, // 表格数据总数
      }
    },
    computed: {
      defaultHeight() {
        return this.$baseTableHeight()
      },
    },
    watch: {
      column: {
        deep: true,
        immediate: true,
        handler(newVal) {
          const list = []

          if (newVal.length > 0) {
            newVal.forEach((item) => {
              list.push({
                label: item.label,
                show: item.show == undefined ? true : item.show,
              })
            })
          }

          this.columnShowList = list
        },
      },
    },
    created() {
      this.getTableData()
    },
    methods: {
      // 获取表格数据
      async getTableData(search) {
        // 如有传入dataMethod方法则由组件处理表格数据
        if (this.dataMethod) {
          this.loading = true // 加载中

          let param = {
            size: this.tableSize,
            page: this.tablePage,
          }

          if (search) param = Object.assign(param, search)

          const { data, totalCount } = await this.dataMethod(param)

          this.tableData = data
          this.dataTotal = totalCount
          this.$nextTick(() => {
            this.loading = false // 加载结束
          })
        }
      },
      // 分页翻页
      handleCurrentChange(val) {
        this.tablePage = val

        // 判断是否由组件内处理翻页
        if (this.dataMethod) {
          this.getTableData()
        } else {
          this.$emit('currentChange', val)
        }
      },
      // 每页大小切换
      handleSizeChange(val) {
        this.tableSize = val

        // 判断是否由组件内处理每页大小切换
        if (this.dataMethod) {
          this.getTableData()
        } else {
          this.$emit('sizeChange', val)
        }
      },
      // 列隐藏/显示
      handleFilterChange(i) {
        this.columnShowList[i].show = !this.columnShowList[i].show
        this.$nextTick(() => {
          this.$refs.tableSort.doLayout() // 重新计算table布局
        })
      },
      // 触发搜索
      handleSearch(data) {
        console.log('搜索结果：', data)

        // 判断是否由组件内处理搜索
        if (this.dataMethod) {
          this.getTableData(data)
        } else {
          this.$emit('search', data)
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .table-container {
    ::v-deep {
      // .table-op-wrap {
      //   button {
      //     padding: 5px 7px;
      //   }
      // }

      .el-table__fixed-right-patch {
        background: #f5f7fa;
      }
    }
  }
</style>
