const kit = require('./kit')
const mobilemenu = require('./mobile-menu')
const contentplus = require('./content-plus')
require('./funcs')
require('./style/style.scss')

hljs.initHighlightingOnLoad()

kit.excAndExcOnResizing(function () {
  contentplus.layoutContent(".content-plus")
  mobilemenu.init()
})
