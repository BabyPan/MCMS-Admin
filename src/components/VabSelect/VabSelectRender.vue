<script>
  export default {
    name: 'VabSelectRender',
    functional: true,
    props: {
      data: {
        type: Object,
        default: () => {},
      },
      rangeKey: {
        type: String,
        default: 'label',
      },
      render: {
        type: Function,
        default: null,
      },
    },
    render: (h, ctx) => {
      return ctx.props.render
        ? ctx.props.render(h, ctx.props.data, ctx.props.rangeKey)
        : ''
    },
  }
</script>
