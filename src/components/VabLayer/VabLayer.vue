<template lang="html">
  <div :id="id" class="vab-layer-container" :class="[`animation--${offset}`]">
    <el-dialog
      ref="elDialog"
      :width="width"
      :custom-class="`vab-layer vab-layer--${offset}`"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      :modal-append-to-body="false"
      :modal="showShade"
      :close-on-click-modal="shadeClose"
      :show-close="showClose"
    >
      <div slot="title" :style="{ fontSize: addUnit(titleSize) }">
        {{ title }}
      </div>

      <div class="vab-layer-content">
        <template v-if="type === 1">
          <div v-html="content"></div>
        </template>
        <template v-else-if="type === 2">
          <iframe class="vab-layer-iframe" :src="content"></iframe>
        </template>
      </div>

      <span
        v-if="showCancel || showConfirm"
        slot="footer"
        class="dialog-footer"
      >
        <el-button v-if="showCancel" @click="handleCancel">
          {{ cancelButtonText }}
        </el-button>
        <el-button v-if="showConfirm" type="primary" @click="handleConfirm">
          {{ confirmButtonText }}
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        id: 'vab-layer', // 元素Id
        type: 1, // 基本层类型
        dialogVisible: this.value, // 控制弹框弹出
        title: '信息', // 标题
        titleSize: 15, // 标题字体大小
        content: '', // 内容（支持html string）
        showClose: true, // 是否显示关闭按钮
        showCancel: false, // 是否显示取消按钮
        showConfirm: true, // 是否显示确认按钮
        confirmButtonText: '确认', // 确认按钮文本
        cancelButtonText: '取消', // 取消按钮文本
        shadeClose: false, // 是否可以点击遮罩层关闭弹窗
        showShade: true, // 是否显示遮罩层
        offset: 'auto', // 弹窗显示位置（auto：垂直水平居中，t：顶部居中，r：右边居中，b：底部居中，l：左边居中，lt：左上角，lb：左下角，rt：右上角，rb：右下角）
        width: '50%', // 弹窗宽度
        height: 'auto', // 弹窗内容高度
        confirm: null, // 确认按钮回调函数
        cancel: null, // 取消按钮回调函数
      }
    },
    watch: {
      value(newVal) {
        this.dialogVisible = newVal
      },
      height(newVal) {
        console.log('高度', newVal)
        document.getElementById(this.id).firstChild.style.height = newVal
      },
    },
    mounted() {
      this.$refs.elDialog.$el.firstChild.style.height = this.height
    },
    methods: {
      handleClose(done) {
        done()
        setTimeout(() => {
          document.getElementById(this.id).remove()
        }, 500)
      },
      open() {
        this.dialogVisible = true
      },
      // 添加单位
      addUnit(value = 'auto', unit = 'px') {
        value = String(value)
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
          ? `${value}${unit}`
          : value
      },
      handleCancel() {
        this.dialogVisible = false
      },
      handleConfirm() {
        typeof this.confirm === 'function' && this.confirm()

        this.dialogVisible = false
      },
    },
  }
</script>

<style lang="scss" scoped>
  .vab-layer-container {
    ::v-deep {
      .el-dialog__wrapper {
        // position: relative !important;
        pointer-events: none;
      }

      .el-dialog__footer {
        padding: 12px 20px;
      }

      .el-dialog__body {
        padding: 20px;
        flex: 1;
      }

      .vab-layer {
        display: flex;
        flex-direction: column;
        position: fixed !important;
        margin: 0 !important;
        box-shadow: 1px 1px 20px rgb(0 0 0 / 30%);
        pointer-events: fill;

        &--auto {
          top: 50% !important;
          left: 0 !important;
          right: 0 !important;
          margin: auto !important;
          transform: translateY(-50%) !important;
        }

        &--t {
          left: 0 !important;
          right: 0 !important;
          margin: auto !important;
        }

        &--r {
          top: 50% !important;
          right: 0 !important;
          transform: translateY(-50%) !important;
        }

        &--b {
          left: 0 !important;
          right: 0 !important;
          margin: auto !important;
          bottom: 0 !important;
        }

        &--l {
          top: 50% !important;
          left: 0 !important;
          transform: translateY(-50%) !important;
        }

        &--lt {
          left: 0 !important;
        }

        &--lb {
          left: 0 !important;
          bottom: 0 !important;
        }

        &--rt {
          right: 0 !important;
        }

        &--rb {
          bottom: 0 !important;
          right: 0 !important;
        }
      }

      .vab-layer-content {
        height: 100%;
        line-height: 1.4em;
        font-size: 15px;
      }

      .vab-layer-iframe {
        width: 100%;
        height: 100%;
      }
    }
  }

  // 右下角通知弹出动画
  .animation--rb {
    ::v-deep {
      .el-dialog__wrapper {
        transition-duration: 0.3s;
      }

      .dialog-fade-enter-active {
        animation: none !important;
      }

      .dialog-fade-leave-active {
        transition-duration: 0.2s !important;

        animation: none !important;
      }

      .dialog-fade-enter-active .el-dialog.vab-layer--rb {
        animation: anim-open 0.3s;
      }

      .dialog-fade-leave-active .el-dialog.vab-layer--rb {
        animation: anim-close 0.3s;
      }

      @keyframes anim-open {
        0% {
          transform: translate3d(0, 100%, 0);

          opacity: 0;
        }

        80% {
          transform: translate3d(0, -7%, 0);

          opacity: 1;
        }

        100% {
          transform: translate3d(0, 0, 0);

          opacity: 1;
        }
      }

      @keyframes anim-close {
        0% {
          transform: translate3d(0, 0, 0);

          opacity: 1;
        }

        100% {
          transform: translate3d(0, 100%, 0);

          opacity: 0;
        }
      }
    }
  }
</style>
