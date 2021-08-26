<template>
  <el-row>
    <el-form
      ref="form"
      :model="searchForm"
      :inline="true"
      @submit.native.prevent
    >
      <el-form-item
        v-for="(item, index) in data"
        v-show="isShow || closeShow > index"
        :key="index"
        :label="item.label"
      >
        <!-- 搜索组件 -->
        <vab-table-query-item
          v-model="searchForm[item.key]"
          :type="item.type"
          :options="item.options"
        ></vab-table-query-item>
      </el-form-item>

      <el-form-item>
        <el-button
          icon="el-icon-search"
          type="primary"
          native-type="submit"
          @click="handleQuery"
        >
          查询
        </el-button>
      </el-form-item>

      <el-form-item>
        <slot name="queryBtn"></slot>
      </el-form-item>

      <el-button
        v-if="showClose && closeShow < data.length"
        type="text"
        @click="isShow = !isShow"
      >
        高级筛选
        <vab-icon
          :icon="['fas', isShow ? 'angle-up' : 'angle-down']"
        ></vab-icon>
      </el-button>
    </el-form>
  </el-row>
</template>

<script>
  import VabTableQueryItem from './VabTableQueryItem'

  export default {
    name: 'VabTableQuery',
    components: { VabTableQueryItem },
    props: {
      // 搜索条件数据
      data: {
        type: Array,
        default: () => [],
      },
      // 关闭后显示数量
      closeShow: {
        type: Number,
        default: 1,
      },
      // 是否显示关闭按钮
      showClose: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        searchForm: {},
        isShow: false,
      }
    },
    created() {
      this.initQueryForm()
    },
    methods: {
      // 初始化搜索参数
      initQueryForm() {
        const formData = {}

        this.data.forEach((item) => {
          if (item.key) formData[item.key] = ''
        })

        this.searchForm = formData
      },
      // 点击搜索
      handleQuery() {
        this.$emit('search', this.searchForm)
      },
    },
  }
</script>

<style></style>
