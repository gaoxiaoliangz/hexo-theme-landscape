const kit = require('./kit')
const mobilemenu = require('./mobile-menu')
const contentplus = require('./content-plus')
require('./funcs')

hljs.initHighlightingOnLoad()

kit.excAndExcOnResizing(function () {
  contentplus.layoutContent(".content-plus")
  mobilemenu.init()
})
