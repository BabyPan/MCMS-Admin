<template>
  <div class="more-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="7" :xl="7">
        <div class="echarts-container">
          <el-card>
            <div slot="header">本月业绩</div>
            <vab-chart
              :autoresize="true"
              theme="vab-echarts-theme"
              :options="yjPie"
            />
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="7" :xl="7">
        <div class="echarts-container">
          <el-card>
            <div slot="header">本月点数</div>
            <vab-chart
              :autoresize="true"
              theme="vab-echarts-theme"
              :options="dsPie"
            />
          </el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="5" :xl="5">
        <div class="pagination-container">
          <el-card>
            <div slot="header">
              <span>上月业绩</span>
              <el-button style="float: right; padding: 3px 0" type="text">
                单位：元
              </el-button>
            </div>
            <div class="performance">
              <i class="el-icon-coin"></i>
              <vab-count
                :start-val="config1.startVal"
                :end-val="config1.endVal"
                :duration="config1.duration"
                :separator="config1.separator"
                :prefix="config1.prefix"
                :suffix="config1.suffix"
                :decimals="config1.decimals"
              />
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="5" :xl="5">
        <div class="pagination-container">
          <el-card>
            <div slot="header">
              <span>上月业绩</span>
              <el-button style="float: right; padding: 3px 0" type="text">
                单位：元
              </el-button>
            </div>
            <div class="performance">
              <i class="el-icon-coin"></i>
              <vab-count
                :start-val="config1.startVal"
                :end-val="config1.endVal"
                :duration="config1.duration"
                :separator="config1.separator"
                :prefix="config1.prefix"
                :suffix="config1.suffix"
                :decimals="config1.decimals"
              />
            </div>
          </el-card>
        </div>
      </el-col>

      <el-col :xs="12" :sm="12" :md="12" :lg="5" :xl="5">
        <div class="pagination-container">
          <el-card>
            <div slot="header">
              <span>本月业绩</span>
              <el-button style="float: right; padding: 3px 0" type="text">
                单位：元
              </el-button>
            </div>
            <div class="performance">
              <i class="el-icon-coin"></i>
              <vab-count
                :start-val="config1.startVal"
                :end-val="config1.endVal"
                :duration="config1.duration"
                :separator="config1.separator"
                :prefix="config1.prefix"
                :suffix="config1.suffix"
                :decimals="config1.decimals"
              />
            </div>
          </el-card>
        </div>
      </el-col>

      <el-col :xs="12" :sm="12" :md="12" :lg="5" :xl="5">
        <div class="pagination-container">
          <el-card>
            <div slot="header">
              <span>本月(预计)提成</span>
              <el-button style="float: right; padding: 3px 0" type="text">
                单位：元
              </el-button>
            </div>
            <div class="performance">
              <i class="el-icon-coin"></i>
              <vab-count
                :start-val="config1.startVal"
                :end-val="config1.endVal"
                :duration="config1.duration"
                :separator="config1.separator"
                :prefix="config1.prefix"
                :suffix="config1.suffix"
                :decimals="config1.decimals"
              />
            </div>
          </el-card>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="pagination-container">
          <el-card>
            <div slot="header">每月业绩目标</div>
            <el-table ref="tableSort" v-loading="listLoading" :data="planList">
              <el-table-column
                show-overflow-tooltip
                label="月度"
                align="center"
                prop="Month"
              ></el-table-column>
              <el-table-column
                show-overflow-tooltip
                prop="DepartmentName"
                label="部门名称"
                align="center"
              ></el-table-column>
              <el-table-column
                show-overflow-tooltip
                label="销售人员"
                prop="LeaderName"
                align="center"
              ></el-table-column>
              <el-table-column
                show-overflow-tooltip
                label="线索复盘"
                prop="DailyReuseClueMax"
                align="center"
              ></el-table-column>
              <el-table-column
                show-overflow-tooltip
                label="客户复盘"
                prop="DailyReuseCustomerMax"
                align="center"
              ></el-table-column>
              <el-table-column
                show-overflow-tooltip
                label="业绩目标"
                prop="TurnoverTotal"
                align="center"
              ></el-table-column>
              <el-table-column
                show-overflow-tooltip
                label="有效业绩"
                prop="ValidTurnover"
                align="center"
              ></el-table-column>
              <el-table-column
                show-overflow-tooltip
                label="待定业绩"
                prop="DoubtTurnover"
                align="center"
              ></el-table-column>
              <el-table-column
                show-overflow-tooltip
                label="分配点数"
                prop="Point"
                align="center"
              ></el-table-column>
              <el-table-column
                show-overflow-tooltip
                label="消耗点数"
                prop="UsedPoint"
                align="center"
              ></el-table-column>
              <el-table-column
                show-overflow-tooltip
                label="新人"
                prop="IsNewSaleText"
                align="center"
              ></el-table-column>
              <el-table-column
                show-overflow-tooltip
                label="状态"
                prop="StatusText"
                align="center"
              ></el-table-column>
            </el-table>
            <el-pagination
              :background="true"
              :current-page="planForm.page"
              :layout="layout"
              :page-size="planForm.size"
              :total="planTotail"
              @current-change="handleCurrentChange"
              @size-change="handleSizeChange"
            ></el-pagination>
          </el-card>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card>
          <div slot="header">我的日程安排</div>
          <el-table ref="tableSort" v-loading="listLoading" :data="planList">
            <el-table-column
              show-overflow-tooltip
              label="月度"
              align="center"
              prop="Month"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              prop="DepartmentName"
              label="部门名称"
              align="center"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              label="销售人员"
              prop="LeaderName"
              align="center"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              label="线索复盘"
              prop="DailyReuseClueMax"
              align="center"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              label="客户复盘"
              prop="DailyReuseCustomerMax"
              align="center"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              label="业绩目标"
              prop="TurnoverTotal"
              align="center"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              label="有效业绩"
              prop="ValidTurnover"
              align="center"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              label="待定业绩"
              prop="DoubtTurnover"
              align="center"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              label="分配点数"
              prop="Point"
              align="center"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              label="消耗点数"
              prop="UsedPoint"
              align="center"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              label="新人"
              prop="IsNewSaleText"
              align="center"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              label="状态"
              prop="StatusText"
              align="center"
            ></el-table-column>
          </el-table>
          <el-pagination
            :background="true"
            :current-page="planForm.page"
            :layout="layout"
            :page-size="planForm.size"
            :total="planTotail"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          ></el-pagination>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card>
          <div slot="header">本月业绩(单位:元)</div>
          <div class="line-echarts">
            <vab-chart
              :autoresize="true"
              theme="vab-echarts-theme"
              :options="byyj"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VabChart from '@/plugins/echarts'
  import { getMySaleTurnoverPlanList } from '@/api/table'

  export default {
    name: 'Index',
    components: {
      VabChart,
    },
    data() {
      return {
        nodeEnv: process.env.NODE_ENV,
        listLoading: true,
        planList: [], // 每月业绩目标
        planTotail: 0,
        planForm: {
          size: 5,
          page: 1,
        },
        layout: 'total, sizes, prev, pager, next, jumper',
        // 饼图
        pieECharts: {
          title: {
            show: true,
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)',
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [
            {
              type: 'pie',
              center: ['50%', '50%'],
              labelLine: {
                normal: {
                  length: 5,
                },
              },
            },
          ],
        },
        yjPie: {}, // 业绩饼图
        dsPie: {}, // 点数饼图
        // 本月业绩
        byyj: {
          tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
          legend: { data: ['待发货', '已发货', '已完成', '所有业绩'] },
          grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
          xAxis: [
            {
              type: 'category',
              data: [
                '5.1',
                '5.2',
                '5.3',
                '5.4',
                '5.5',
                '5.6',
                '5.7',
                '5.8',
                '5.9',
                '5.10',
                '5.11',
                '5.12',
                '5.13',
                '5.14',
              ],
            },
          ],
          yAxis: [{ type: 'value' }],
          series: [
            {
              name: '待发货',
              smooth: true,
              type: 'line',
              data: [
                50,
                300,
                2400,
                700,
                1100.0,
                600,
                3000,
                400.0,
                1500,
                600.0,
                3000,
                1200.0,
                2000.0,
                800.0,
              ],
            },
            {
              name: '已发货',
              smooth: true,
              type: 'line',
              data: [
                0.0,
                0.0,
                1000,
                0.0,
                0.0,
                2500,
                0.0,
                0.0,
                0.0,
                0.0,
                1400,
                0.0,
                0.0,
                0.0,
              ],
            },
            {
              name: '已完成',
              smooth: true,
              type: 'line',
              data: [
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                1500,
                0.0,
                0.0,
                0.0,
                0.0,
                2500,
                0.0,
                0.0,
              ],
            },
            {
              name: '所有业绩',
              smooth: true,
              type: 'line',
              data: [
                0.0,
                200,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                500,
                0.0,
                2000.0,
                0.0,
              ],
            },
          ],
        },
        config1: {
          startVal: 0,
          endVal: 133000.01,
          decimals: 0,
          prefix: '',
          suffix: '',
          separator: ',',
          duration: 5000,
        },
      }
    },
    created() {
      this.getPlanList()
    },
    mounted() {
      setTimeout(() => {
        this.yjPie = this.initPieData([
          {
            value: 30,
            name: '已完成',
            itemStyle: {
              normal: {
                color: '#1D9FFF',
              },
            },
          },
          {
            value: 80,
            name: '未完成',
            itemStyle: {
              normal: {
                color: '#F05847',
              },
            },
          },
        ])
        this.dsPie = this.initPieData([
          {
            value: 30,
            name: '已完成',
            itemStyle: {
              normal: {
                color: '#60B878',
              },
            },
          },
          {
            value: 20,
            name: '未完成',
            itemStyle: {
              normal: {
                color: '#FFC637',
              },
            },
          },
        ])
      }, 500)
    },
    methods: {
      // 获取每月业绩目标
      async getPlanList() {
        this.listLoading = true
        const { data, totalCount } = await getMySaleTurnoverPlanList(
          this.planForm
        )
        this.planList = data
        this.planTotail = totalCount
        // console.log(this.planList)
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
      // 初始化饼图
      initPieData(data) {
        const pieECharts = this.$baseLodash.deepClone(this.pieECharts)
        pieECharts.series[0].data = data
        return pieECharts
      },
    },
  }
</script>
<style lang="scss" scoped>
  .more-container {
    padding: 0 !important;
    margin: 0 !important;
    background: #f5f7f8 !important;

    ::v-deep {
      .el-card__body {
        > div {
          // min-height: 220px;
          // padding: 20px;

          > ul {
            > li {
              line-height: 30px;
            }
          }

          > img {
            display: block;
            margin: 40px auto;
            border: 1px solid #dedede;
          }
        }
      }

      .el-card__body {
        .echarts {
          width: 100%;
          height: 178px;
        }
      }

      .line-echarts {
        .echarts {
          width: 100%;
          height: 280px;
        }
      }
    }

    .card {
      ::v-deep {
        .el-card__body {
          .echarts {
            width: 100%;
            height: 305px;
          }
        }
      }
    }

    .performance {
      font-size: 30px;
      color: $base-color-blue;
    }
  }

  .echarts-container {
    ::v-deep {
      .el-card__body {
        padding: 10px;
      }
    }
  }

  .pagination-container {
    ::v-deep {
      .el-card__body {
        padding: 15px;
      }
    }
  }
</style>
