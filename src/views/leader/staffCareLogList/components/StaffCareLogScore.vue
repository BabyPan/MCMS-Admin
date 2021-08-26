<template>
  <vab-form-modal v-model="show" :title="title">
    <el-tabs
      slot="form"
      :tab-position="'left'"
      type="border-card"
      style="height: 100%"
    >
      <el-tab-pane label="基础信息">
        <vab-form :column="info" :model="data"></vab-form>
      </el-tab-pane>
      <el-tab-pane label="管理操作">
        <vab-form ref="vabForm" :column="formColumn" :model="formData">
          <el-form-item>
            <el-button type="primary" @click="submit">提交</el-button>
            <el-button type="warning" style="margin-left: 10px">重置</el-button>
          </el-form-item>
        </vab-form>
      </el-tab-pane>
    </el-tabs>
  </vab-form-modal>
</template>

<script>
  import VabForm from '@/components/VabForm/VabForm'
  import VabFormModal from '@/components/VabFormModal/VabFormModal'

  export default {
    name: 'StaffCareLogDetail',
    components: { VabForm, VabFormModal },
    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        show: this.value,
        title: '员工成长记录详情',
        data: null,
        formColumn: [
          {
            field: 'test',
            elTag: 'el-input',
            label: '测试',
            elAttrs: {
              suffixIcon: 'el-icon-date',
              placeholder: '请输入用户名',
              clearable: true,
            },
            rules: [{ required: true, trigger: 'blur' }],
          },
          {
            field: 'kk',
            elTag: 'vab-select',
            label: '测试2',
            span: 12,
            elAttrs: {
              placeholder: '不限',
              clearable: true,
              range: [
                { label: '男', value: 1 },
                { label: '女', value: 2 },
              ],
            },
          },
          {
            field: 'bb',
            elTag: 'vab-select',
            label: '测试3',
            span: 12,
            elAttrs: {
              placeholder: '不限',
              multiple: true,
              range: [
                { label: '冰可乐', value: 1 },
                { label: '柠檬茶', value: 2 },
                { label: '冰雪碧', value: 3 },
                { label: '苹果醋', value: 4 },
              ],
            },
          },
          {
            field: 'cc',
            elTag: 'el-switch',
            label: '测试4',
          },
          {
            field: 'dd',
            elTag: 'el-input',
            label: '评价',
            elAttrs: {
              type: 'textarea',
              autosize: { minRows: 6 },
              placeholder: '请输入用户名',
              clearable: true,
            },
          },
          {
            field: 'ff',
            elTag: 'vab-select',
            label: '测试3',
            elAttrs: {
              placeholder: '不限',
              multiple: true,
              range: [
                { label: '冰可乐', value: 1 },
                { label: '柠檬茶', value: 2 },
                { label: '冰雪碧', value: 3 },
                { label: '苹果醋', value: 4 },
              ],
            },
          },
          {
            field: 'ee',
            elTag: 'el-radio',
            label: '测试3',
            options: [
              { label: '男', value: 1 },
              { label: '女', value: 2 },
            ],
          },
          {
            field: 'gg',
            elTag: 'el-checkbox',
            label: '测试3',
            options: [
              { label: '男', value: 1 },
              { label: '女', value: 2 },
            ],
          },
        ],
        formData: {
          test: '',
          kk: '',
          bb: '',
          cc: false,
          dd: '',
          ee: '',
          ff: '',
          gg: [],
        },
        info: [
          {
            field: 'ConversationTitle',
            label: '标题',
          },
          {
            field: 'StaffcareTypeText',
            label: '类型',
          },
          {
            field: 'StaffcareTypeText',
            label: '类型',
          },
          {
            field: 'StaffStatus',
            label: '员工状态',
          },
          {
            field: 'ConversationName',
            label: '被谈话人',
          },
          {
            field: 'DepName',
            label: '所属部门',
          },
          {
            field: 'StaffcareContent',
            label: '内容',
          },
          {
            field: 'Remark',
            label: '评语',
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
      submit() {
        this.$refs.vabForm
          .validate()
          .then((data) => {
            console.log(data)
          })
          .catch((err) => {
            console.log('err:', err)
          })
      },
    },
  }
</script>
