<template>
  <vab-form-modal v-model="show" :title="title">
    <el-tabs
      slot="form"
      :tab-position="'left'"
      type="border-card"
      style="height: 100%"
    >
      <el-tab-pane label="订单信息">
        <vab-form :column="formData" :model="data" size="medium"></vab-form>
      </el-tab-pane>
    </el-tabs>
  </vab-form-modal>
</template>

<script>
  import VabFormModal from '@/components/VabFormModal/VabFormModal'
  import VabForm from '@/components/VabForm/VabForm'

  export default {
    name: 'StaffCareLogDetail',
    components: { VabFormModal, VabForm },
    data() {
      return {
        show: false,
        title: '员工成长记录详情',
        data: null,
        formData: [
          {
            field: 'ConversationTitle',
            label: '标题',
            span: 8,
          },
          {
            field: 'StaffcareTypeText',
            label: '类型',
            span: 8,
          },
          {
            field: 'StaffStatus',
            label: '员工状态',
            span: 8,
            elTag: 'el-rate',
            elAttrs: {
              disabled: true,
              showScore: true,
              textColor: '#ff9900',
              scoreTemplate: '{value}',
              style: 'display: inline-block',
            },
          },
          {
            field: 'ConversationName',
            label: '被谈话人',
            span: 8,
          },
          {
            field: 'DepName',
            label: '所属部门',
            span: 8,
          },
          {
            field: 'StaffcareContent',
            label: '内容',
            span: 8,
          },
          {
            field: 'StaffStatus',
            label: '评分',
            span: 8,
          },
          {
            field: 'Remark',
            label: '评语',
            span: 8,
          },
          {
            field: 'ConversationName',
            label: '谈话人',
            span: 8,
          },
          {
            field: 'ConversationDate',
            label: '谈话日期',
            span: 8,
          },
          {
            field: 'StaffStatus',
            label: '领导评分',
            span: 8,
            elTag: 'el-rate',
            elAttrs: {
              disabled: true,
              showScore: true,
              textColor: '#ff9900',
              scoreTemplate: '{value}',
              style: 'display: inline-block',
            },
          },
          {
            field: 'LeaderUserName',
            label: '领导姓名',
            span: 8,
          },
          {
            field: 'ConversationTitle',
            label: '评价时间',
            span: 8,
          },
          {
            field: 'ConversationName',
            label: '录入人员',
            span: 8,
          },
          {
            field: 'CreateTime',
            label: '录入日期',
            span: 8,
          },
        ],
      }
    },
    methods: {
      open({ title, data }) {
        this.show = true
        this.title = title
        this.data = data
      },
      handleClose(e) {
        this.$emit('input', false)
      },
    },
  }
</script>

<style lang="scss" scoped></style>
