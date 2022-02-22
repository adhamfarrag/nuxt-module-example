const path = require('path')

export default function registerModules() {
  this.extendRoutes((routes) => {
    routes.unshift({
      name: 'items',
      path: '/items',
      component: path.resolve(__dirname, 'pages/items.vue'),
    })
  })
}
