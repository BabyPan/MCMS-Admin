<script>
  export default {
    name: 'VabTableRender',
    functional: true,
    props: {
      scope: {
        type: Object,
        default: () => {},
      },
      render: {
        type: Function,
        default: null,
      },
    },
    render: (h, ctx) => {
      return ctx.props.render ? ctx.props.render(h, ctx.props.scope) : ''
    },
  }
</script>
