const kit = require('./kit')
const mobilemenu = require('./mobile-menu')
const contentplus = require('./content-plus')

import './style/style.scss'
import './share-post'

hljs.initHighlightingOnLoad()

kit.excAndExcOnResizing(function () {
  contentplus.layoutContent(".content-plus")
  mobilemenu.init()
})
