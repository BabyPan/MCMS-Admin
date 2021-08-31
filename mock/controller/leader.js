const staffList = [],
  staffCareLogList = []
const count = 999
for (let i = 0; i < count; i++) {
  let Status = Math.round(Math.random() * 1 + 1)
  let Score = Math.round(Math.random() * 4 + 1)

  staffList.push({
    Department: {
      RoleToOperation: 1,
      RoleToOperationText: '是',
      AdPut: 1,
      AdPutText: '是',
      RoleToWarehousing: 0,
      RoleToWarehousingText: '否',
      RoleToTech: 0,
      RoleToTechText: '否',
      RoleToFinance: 0,
      RoleToFinanceText: '否',
      RoleToPersonnel: 0,
      RoleToPersonnelText: '否',
      RoleToPoliticalCommissar: 1,
      RoleToPoliticalCommissarText: '是',
      RoleToTraining: 1,
      RoleToTrainingText: '是',
      ShowRole: '销售;运营;政委;培训',
      CustomerFollowTimeOutOP: 0,
      CustomerFollowTimeOutOPText: '否',
      Name: '国台一部巅峰队',
      ShowName: '[销售]国台一部巅峰队',
      Type: 0,
      TypeText: '企业部门',
      ParentId: 12,
      ParentName: '[销售]国台一部郭膨树分部',
      FirstName: '销售部',
      OrderBy: 61010,
      LeaderName: '郭志杰(WN10267)',
      Status: 0,
      ChildCount: 0,
      IncomeExpenses: 0,
      IncomeExpensesText: '',
      RoleToSale: 1,
      RoleToSaleText: '是',
      Clue: 1,
      ClueText: '是',
      SaleCreateCustomerSwitch: 1,
      OrderLeaderApproval: 0,
      ClueOnlineTime: '09-23',
      StatusDis: '正常',
      Id: 42,
    },
    Job: '销售组长',
    Picture: 'StaffPicture/201907/4540d08c-84dc-4c65-bf9d-bb0531c3ec2b.jpg',
    JoinDate: '2019/03/04 00:00:00+0800',
    PositiveDate: '2019-06-05',
    Status: Status,
    StatusText: Status == 1 ? '试用期' : '正式员工',
    IDCardPositive: '',
    IDCardNegative: '',
    ResignationDate: '0001/01/01 00:00:00+0800',
    BankName: null,
    BankNumber: null,
    EmergencyContact: '郭彭树',
    EmergencyPhone: '18818406115',
    Nationality: '汉',
    Marriage: 0,
    MarriageText: '未婚',
    Education: 2,
    EducationText: '高中',
    SocialSecurity: 4,
    SocialSecurityText: '犟姥爷',
    Birthday: '1994/10/01 00:00:00+0800',
    Contract: 4,
    ContractText: '犟姥爷',
    MasterUserId: null,
    MasterUserName: null,
    OpenId: null,
    BaseWage: 2300.0,
    Wage: 8261.0,
    SkillWage: 0.0,
    ManageWage: 0.0,
    SpecialWage: 0.0,
    SpecialWageNote: null,
    UserType: 0,
    Number: 'WN10267',
    RealName: '郭志杰',
    ICON: 'f0e575d6-d0f3-4871-96f8-090e8d05e226.jpg',
    Sex: 0,
    IDCard: '441224199410014452',
    Phone: '17707581138',
    AddTime: '2019-03-04',
    AddUserId: 1,
    AddUser: 'Admin(WN10000)',
    AccountStatus: 0,
    ShowName: '郭志杰(WN10267)',
    SexText: '男',
    UserTypeText: '员工',
    AccountStatusText: '正常',
    Id: 268,
  })

  staffCareLogList.push({
    ConversationDate: '2021-06-15T00:00:00',
    ConversationId: 268,
    ConversationName: '郭志杰(WN10267)',
    ConversationTitle: '测试一下1',
    CreateTime: '2021-06-15T14:04:40',
    DepId: 42,
    DepName: '国台一部巅峰队',
    Id: 51,
    InUserip: '::1',
    InuserDepid: 268,
    InuserDepname: '郭志杰(WN10267)',
    InuserId: 268,
    InuserName: '郭志杰(WN10267)',
    LeaderNote: '',
    LeaderScore: Score,
    LeaderScoreText: '未打分',
    LeaderScoreTime: '1900-01-01T00:00:00',
    LeaderUserId: null,
    LeaderUserName: '',
    Remark: '价值观好',
    Score: Score,
    ScoreText: '未打分',
    StaffId: 677,
    StaffName: '吴聪(WN10569)',
    StaffStatus: Score,
    StaffStatusText: '1分',
    StaffcareContent:
      '价值观好i撒娇的刺激ASJCIJSDICJ i是第几次设计的CIJSI基底层SADJIFI收到v雌激素IDVJISJ第v九四JDVIJSvISDJVIJ四季度vi就是DIVJI十九点v',
    StaffcareType: 3,
    StaffcareTypeText: '直属领导',
    SuperviseNote: null,
    SuperviseScore: Score,
    SuperviseScoreText: '1分',
    SuperviseTime: '2021-07-03T18:26:05',
    SuperviseUserId: 1,
    SuperviseUserName: 'Admin(WN10000)',
  })
}

module.exports = [
  {
    url: '/leader/getStaffList',
    type: 'post',
    response(config) {
      // config.body = config.query

      const { page = 1, size = 20 } = config.body
      const pageList = staffList.filter(
        (item, index) => index < size * page && index >= size * (page - 1)
      )

      return {
        code: 200,
        msg: 'success',
        totalCount: count,
        data: pageList,
      }
    },
  },
  {
    url: '/leader/getStaffCareLogList',
    type: 'post',
    response(config) {
      // config.body = config.query

      const { page = 1, size = 20 } = config.body
      const pageList = staffCareLogList.filter(
        (item, index) => index < size * page && index >= size * (page - 1)
      )

      return {
        code: 200,
        msg: 'success',
        totalCount: count,
        data: pageList,
      }
    },
  },
]
