<template>
  <div class="table-container">
    <vab-table
      align="center"
      :column="columnList"
      :search-list="searchList"
      :data="planList"
      :table-loading="listLoading"
      :current-page="planForm.page"
      :page-size="planForm.size"
      :total="planTotail"
      :border="true"
      :default-toolbar="['filter']"
      @currentChange="handleCurrentChange"
      @sizeChange="handleSizeChange"
      @search="handleSearch"
    >
      <div slot="toolbar">
        <el-button type="primary" @click="handleExport">生成报表</el-button>
        <el-button type="warning">警告按钮</el-button>
      </div>
    </vab-table>
  </div>
</template>

<script>
  import { getStaffList } from '@/api/leader'
  import VabTable from '@/components/VabTable/VabTable'

  export default {
    name: 'StaffList',
    components: {
      VabTable,
    },
    data() {
      return {
        listLoading: true,
        planList: [], // 每月业绩目标
        planTotail: 0,
        planForm: {
          size: 20,
          page: 1,
        },
        columnList: [
          {
            prop: 'Number',
            label: '工号',
            width: 90,
          },
          {
            prop: 'RealName',
            label: '姓名',
            show: true,
          },
          {
            label: '所属部门',
            width: 150,
            render: (h, scope) => {
              return <span>{scope.row.Department.Name}</span>
            },
          },
          {
            prop: 'Job',
            label: '职位',
          },
          {
            prop: 'AddTime',
            width: 100,
            label: '入职日期',
          },
          {
            prop: 'PositiveDate',
            width: 100,
            label: '转正日期',
          },
          {
            prop: 'Phone',
            width: 120,
            label: '联系电话',
          },
          {
            prop: 'SocialSecurityText',
            label: '社保状态',
          },
          {
            prop: 'ContractText',
            label: '合同状态',
          },
          {
            label: '状态',
            filters: [
              { text: '试用期', value: '1' },
              { text: '正式员工', value: '2' },
            ],
            filterMethod: this.filterTag,
            render: (h, scope) => {
              return (
                <el-tag type={scope.row.Status == 1 ? 'warning' : 'success'}>
                  {scope.row.StatusText}
                </el-tag>
              )
            },
          },
          {
            label: '操作',
            fixed: 'right',
            width: 220,
            render: (h, scope) => {
              return (
                <div>
                  <el-button size="mini" icon="el-icon-document">
                    详情
                  </el-button>
                  <el-button
                    size="mini"
                    type="warning"
                    icon="el-icon-chat-dot-round"
                  >
                    谈话内容
                  </el-button>
                </div>
              )
            },
          },
        ],
        searchList: [
          {
            label: '关键词',
            key: 'keyword',
            type: 'input',
            options: {
              placeholder: '模糊搜索工号或真实姓名',
            },
          },
          {
            label: '所属部门',
            key: 'departmentid',
            type: 'select',
            options: {
              placeholder: '不限',
              range: [
                { label: '国台一部巅峰队', value: 1 },
                { label: '国台一部王者队', value: 2 },
              ],
            },
          },
          {
            label: '性别',
            key: 'sex',
            type: 'select',
            options: {
              placeholder: '不限',
              range: [
                { label: '男', value: 1 },
                { label: '女', value: 2 },
              ],
            },
          },
          {
            label: '入职日期',
            key: 'joinDate',
            type: 'datePicker',
            options: {
              type: 'daterange',
              align: 'right',
              unlinkPanels: true,
              rangeSeparator: '至',
              startPlaceholder: '开始日期',
              endPlaceholder: '结束日期',
              valueFormat: 'yyyy-MM-dd',
            },
          },
          {
            label: '测试日期',
            key: 'test',
            type: 'datePicker',
            options: {
              type: 'date',
              placeholder: '选择日期',
              valueFormat: 'yyyy-MM-dd',
            },
          },
          {
            label: '测试多选',
            key: 'hed',
            type: 'select',
            options: {
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
            label: '远程搜索',
            key: 'ycss',
            type: 'select',
            options: {
              placeholder: '不限',
              remoteUrl: '/home/quickSearchAccountList',
              rangeKey: 'Title',
              rangeValue: 'Id',
              render: (h, data) => {
                return (
                  <div style="display: flex; align-items: center;justify-content: space-between;">
                    <span>{data.Title}</span>
                    <span style="color: #8492a6; font-size: 12px">
                      {data.SubTitle}
                    </span>
                  </div>
                )
              },
            },
          },
        ],
        // getStaffList: getStaffList,
      }
    },
    computed: {
      height() {
        return this.$baseTableHeight()
      },
    },
    created() {
      this.getPlanList()
    },
    mounted() {},
    methods: {
      // 获取每月业绩目标
      async getPlanList(search) {
        this.listLoading = true

        let param = { ...this.planForm }

        if (search) param = Object.assign(param, search)
        // console.log(param)

        const { data, totalCount } = await getStaffList(param)
        this.planList = data
        this.planTotail = totalCount
        setTimeout(() => {
          this.listLoading = false
        }, 500)
      },
      handleSizeChange(val) {
        this.planForm.size = val
        this.getPlanList()
      },
      handleCurrentChange(val) {
        this.planForm.page = val
        this.getPlanList()
      },
      filterTag(value, row) {
        return row.Status == value
      },
      handleExport() {
        this.$vabLayer.open({
          title: 'form-generator',
          type: 2,
          content:
            'https://mrhj.gitee.io/form-generator/?hmsr=admin-pro&hmpl=&hmcu=&hmkw=&hmci=#/',
          showConfirm: false,
          showShade: false,
          titleSize: 14,
          width: '70%',
          height: '80%',
        })
        return
        this.$message({
          message: '该功能维护中',
          type: 'warning',
        })
      },
      handleSearch(search) {
        console.log(search)
        this.getPlanList(search)
      },
    },
  }
</script>

<style></style>
