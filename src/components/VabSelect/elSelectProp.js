export default {
  props: {
    range: {
      type: Array,
      default: () => [],
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: false,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 作为 value 唯一标识的键名，绑定值为对象类型时必填
    valueKey: {
      type: String,
      default: 'value',
    },
    // 输入框尺寸
    size: {
      type: String,
      default: '',
    },
    // 是否可以清空选项
    clearable: {
      type: Boolean,
      default: false,
    },
    // 多选时是否将选中值按文字的形式展示
    collapseTags: {
      type: Boolean,
      default: false,
    },
    // 多选时用户最多可以选择的项目数，为 0 则不限制
    multipleLimit: {
      type: Number,
      default: 0,
    },
    // select input 的 name 属性
    name: {
      type: String,
      default: '',
    },
    // select input 的 autocomplete 属性
    autocomplete: {
      type: String,
      default: 'off',
    },
    // 占位符
    placeholder: {
      type: String,
      default: '请选择',
    },
    // 是否可搜索
    filterable: {
      type: Boolean,
      default: false,
    },
    // 是否允许用户创建新条目，需配合 filterable 使用
    allowCreate: {
      type: Boolean,
      default: false,
    },
    // 自定义搜索方法
    filterMethod: {
      type: Function,
      default: () => {},
    },
    // 是否为远程搜索
    remote: {
      type: Boolean,
      default: false,
    },
    // 远程搜索方法
    remoteMethod: {
      type: Function,
      default: () => {},
    },
    // 是否正在从远程获取数据
    loading: {
      type: Boolean,
      default: false,
    },
    // 远程加载时显示的文字
    loadingText: {
      type: String,
      default: '加载中',
    },
    // 搜索条件无匹配时显示的文字，也可以使用slot="empty"设置
    noMatchText: {
      type: String,
      default: '无匹配数据',
    },
    // 选项为空时显示的文字，也可以使用slot="empty"设置
    noDataText: {
      type: String,
      default: '无数据',
    },
    // Select 下拉框的类名
    popperClass: {
      type: String,
      default: '',
    },
    // 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词
    reserveKeyword: {
      type: Boolean,
      default: false,
    },
    // 在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用
    defaultFirstOption: {
      type: Boolean,
      default: false,
    },
    // 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false
    popperAppendToBody: {
      type: Boolean,
      default: true,
    },
    // 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单
    automaticDropdown: {
      type: Boolean,
      default: false,
    },
  },
}
