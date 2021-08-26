<template>
  <div
    class="vabTable-toolbar"
    :style="{ borderBottom: border ? 'none' : 'auto', background: bgColor }"
  >
    <el-row type="flex" justify="space-between">
      <el-col :span="32" class="u-flex">
        <slot name="toolbar"></slot>
      </el-col>
      <el-col :span="6" style="text-align: right">
        <span v-for="(type, typeIndex) in defaultToolbar" :key="typeIndex">
          <!-- 筛选 -->
          <el-popover
            v-if="type === 'filter'"
            class="toolbar-right-item"
            placement="right"
            width="260"
            trigger="click"
          >
            <div class="checkbox-container">
              <div
                v-for="(item, index) in column"
                :key="index"
                class="checkbox-item"
              >
                <el-checkbox
                  :label="item.label"
                  :checked="item.show"
                  size="medium"
                  @change="handleFilterChange(index, $event)"
                ></el-checkbox>
              </div>
            </div>

            <el-tooltip
              slot="reference"
              effect="dark"
              content="筛选列"
              placement="top"
              :hide-after="10000"
              :enterable="true"
            >
              <el-button icon="el-icon-s-operation" circle></el-button>
            </el-tooltip>
          </el-popover>

          <!-- 导出 -->
          <el-tooltip
            v-if="type === 'exports'"
            class="toolbar-right-item"
            effect="dark"
            content="导出"
            placement="top"
            :enterable="false"
          >
            <el-button
              icon="el-icon-download"
              circle
              @click="handleExports"
            ></el-button>
          </el-tooltip>

          <!-- 打印 -->
          <el-tooltip
            v-if="type === 'print'"
            class="toolbar-right-item"
            effect="dark"
            content="打印"
            placement="top"
            :enterable="false"
          >
            <el-button
              icon="el-icon-printer"
              circle
              @click="handlePrint"
            ></el-button>
          </el-tooltip>
        </span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'VabTableToolbar',
    props: {
      // 列内容
      column: {
        type: Array,
        default: () => [],
      },
      // 表格边框模式
      border: {
        type: Boolean,
        default: false,
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: '#f5f7fa',
      },
      // 头部工具栏右侧工具： filter: 显示筛选图标；exports: 显示导出图标；print: 显示打印图标
      defaultToolbar: {
        type: Array,
        default: () => ['filter', 'print', 'exports'],
      },
    },
    methods: {
      // 列隐藏/显示
      handleFilterChange(i, checked) {
        this.$emit('filterChange', i)
      },
      // 导出
      handleExports() {
        // todo: 导出文件
        this.$message({
          message: '该功能维护中',
          type: 'warning',
        })
      },
      // 打印
      handlePrint() {
        // todo: 打印文件
        this.$message({
          message: '该功能维护中',
          type: 'warning',
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .vabTable-toolbar {
    padding: 12px;
    border: 1px solid #ebeef5;
    // border-bottom: none;
    // background: #f5f7fa;
  }

  .checkbox-container {
    display: flex;
    flex-wrap: wrap;

    .checkbox-item {
      width: 50%;

      ::v-deep {
        .el-checkbox {
          width: 100%;
        }
      }
    }
  }

  .toolbar-right-item {
    margin-left: 10px;
  }
</style>
