export default [{
  path: '/zhyw',
  name: 'zhyw',
  component: () =>
    import('@/views/zhyw/yjzb/index.vue'),
  children: [
    {
      path: '',
      component: () =>
        import('@/views/zhyw/yjzb/yjfy.vue')
    },
    {
      path: '/zhyw/yjzb/yjfy',
      component: () =>
        import('@/views/zhyw/yjzb/yjfy.vue')
    },
    {
      path: '/zhyw/yjzb/yjtc',
      component: () =>
        import('@/views/zhyw/yjzb/yjtc.vue')
    },
    {
      path: '/zhyw/yjzb/ysgj',
      component: () =>
        import('@/views/zhyw/yjzb/ysgj.vue')
    },
    {
      path: '/zhyw/sjgl/yjsj',
      component: () =>
        import('@/views/zhyw/sjgl/yjsj.vue')
    },
    {
      path: '/zhyw/sjgl/yjqd',
      component: () =>
        import('@/views/zhyw/sjgl/yjqd.vue')
    },
    {
      path: '/zhyw/sjgl/xjsj',
      component: () =>
        import('@/views/zhyw/sjgl/xjsj.vue')
    },
    {
      path: '/zhyw/sjgl/xjqd',
      component: () =>
        import('@/views/zhyw/sjgl/xjqd.vue')
    },
    {
      path: '/zhyw/sjgl/tjfx',
      component: () =>
        import('@/views/zhyw/sjgl/tjfx.vue')
    },
    {
      path: '/zhyw/sjgl/sjlcpz',
      component: () =>
        import('@/views/zhyw/sjgl/sjlc.vue')
    }
  ]
}
]
