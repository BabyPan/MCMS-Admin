<template>
  <el-dialog
    ref="elDialog"
    custom-class="vab-form-modal"
    :title="title"
    :visible.sync="show"
    :append-to-body="true"
    :lock-scroll="false"
    :close-on-click-modal="false"
    :width="width"
    top="0px"
    @close="handleClose"
  >
    <slot name="form"></slot>
  </el-dialog>
</template>

<script>
  export default {
    name: 'VabFormModal',
    props: {
      value: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: '提示',
      },
      width: {
        type: String,
        default: '70%',
      },
      height: {
        type: String,
        default: '80%',
      },
    },
    data() {
      return {
        show: this.value,
      }
    },
    watch: {
      value(newVal) {
        this.show = newVal
      },
    },
    mounted() {
      this.$refs.elDialog.$el.firstChild.style.height = this.height
    },
    methods: {
      // 模态框关闭
      handleClose() {
        this.$emit('input')
      },
    },
  }
</script>

<style lang="scss" scoped>
  ::v-deep {
    .vab-form-modal {
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;

      .el-dialog__body {
        padding: 0 !important;
        flex: 1;
        overflow: hidden;
      }

      .el-tabs__content {
        overflow-y: scroll;
        height: calc(100% - 15px * 2);
      }

      .el-tabs--border-card {
        border: none;
      }

      .el-select {
        display: block;
      }

      // .el-tabs__item {
      //   padding: 0 26px;
      //   font-size: 16px;
      // }
    }
  }
</style>
