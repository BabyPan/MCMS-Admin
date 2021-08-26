<template>
  <span class="site-msg-container">
    <el-badge :value="12" class="item">
      <vab-icon
        title="站内信"
        :icon="['fas', 'bell']"
        @click="handleOpenSiteMsgList"
      />
    </el-badge>
  </span>
</template>

<script>
  export default {
    name: 'VabSiteMsg',
    methods: {
      handleOpenSiteMsgList() {},
    },
  }
</script>

<style lang="scss" scoped>
  .site-msg-container {
    ::v-deep {
      .el-badge {
        margin-right: 0 !important;
      }

      .el-badge__content {
        transform: translateY(-50%) translateX(50%) !important;
        height: 16px !important;
        line-height: 17px !important;
        padding: 0 4px !important;
      }
    }
  }
</style>
