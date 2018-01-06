import './style/style.scss'
import './share-post'
import utils from './utils'
import mobileMenu from './mobile-menu'
import contentPlus from './content-plus'

if (utils.isIE()) {
  $("body").addClass("_ie");
}

hljs.initHighlightingOnLoad()

utils.excAndExcOnResizing(function () {
  contentPlus.layoutContent(".content-plus")
  mobileMenu.init()
})
