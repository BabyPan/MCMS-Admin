<template>
  <div class="table-container">
    <vab-table
      align="center"
      :column="columnList"
      :search-list="searchList"
      :border="true"
      :default-toolbar="['filter']"
      :data-method="getStaffCareLogList"
    >
      <div slot="queryBtn">
        <el-button type="warning">生成报表</el-button>
      </div>
    </vab-table>

    <!-- 详情 -->
    <StaffCareLogDetail ref="detailDialog"></StaffCareLogDetail>

    <!-- 领导评分 -->
    <StaffCareLogScore ref="scoreDialog"></StaffCareLogScore>
  </div>
</template>

<script>
  import { getStaffCareLogList } from '@/api/leader'
  import VabTable from '@/components/VabTable/VabTable'
  import StaffCareLogDetail from './components/StaffCareLogDetail'
  import StaffCareLogScore from './components/StaffCareLogScore'

  export default {
    components: { VabTable, StaffCareLogDetail, StaffCareLogScore },
    data() {
      return {
        getStaffCareLogList: getStaffCareLogList,
        columnList: [
          {
            prop: 'StaffcareTypeText',
            label: '谈话类型',
          },
          {
            prop: 'DepName',
            label: '被谈话部门',
            width: 120,
          },
          {
            prop: 'StaffName',
            label: '被谈话姓名',
            width: 140,
          },
          {
            prop: 'ConversationTitle',
            label: '标题',
          },
          {
            prop: 'StaffcareContent',
            label: '内容',
            show: false,
          },
          {
            prop: 'Remark',
            label: '评语',
          },
          {
            prop: 'StaffStatusText',
            label: '员工状态',
            width: 160,
            render: (h, scope) => {
              return (
                <el-rate
                  v-model={scope.row.StaffStatus}
                  disabled
                  show-score
                  text-color="#ff9900"
                ></el-rate>
              )
            },
          },
          {
            prop: 'ConversationName',
            label: '谈话人',
          },
          {
            prop: 'ConversationDate',
            label: '谈话日期',
          },
          {
            prop: 'Score',
            label: '评分',
            width: 160,
            render: (h, scope) => {
              return (
                <el-rate
                  v-model={scope.row.Score}
                  disabled
                  show-score
                  text-color="#ff9900"
                ></el-rate>
              )
            },
          },
          {
            prop: 'LeaderScoreText',
            label: '领导评分',
          },
          {
            prop: 'StaffName',
            label: '领导姓名',
            show: false,
          },
          {
            prop: 'LeaderScoreTime',
            label: '领导评分时间',
            width: 360,
            show: false,
          },
          {
            label: '操作',
            fixed: 'right',
            minWidth: 220,
            width: 220,
            render: (h, scope) => {
              return (
                <div>
                  <el-button
                    size="mini"
                    icon="el-icon-document"
                    onClick={() => this.handleDetail(scope.row)}
                  >
                    详情
                  </el-button>
                  <el-button
                    size="mini"
                    type="primary"
                    icon="el-icon-chat-dot-round"
                    onClick={() => this.handleScore(scope.row)}
                  >
                    领导评分
                  </el-button>
                </div>
              )
            },
          },
        ],
        searchList: [
          {
            label: '谈话人',
            key: 'thr',
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
        detailShow: false,
        detailTile: '',
        detailData: null,
        scoreShow: false,
      }
    },
    mounted() {},
    methods: {
      // 打开详情
      handleDetail(detail) {
        this.$refs.detailDialog.open({
          title: `员工成长记录详情 — ${detail.ConversationName}`,
          data: detail,
        })
      },
      // 打开领导评分
      handleScore(detail) {
        this.$refs.scoreDialog.open({
          title: `领导人评价 — ${detail.ConversationName}`,
          data: detail,
        })
      },
    },
  }
</script>

<style></style>
